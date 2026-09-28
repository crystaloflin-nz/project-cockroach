import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// GET  /api/entries?card=joanne            -> { quotes, messages }
// POST /api/entries?card=joanne  {kind:'quote', text, photo_url}
//                                {kind:'message', type, name, text, media_url, photo_url, duration}
export default async function handler(req, res) {
  const card = String(req.query.card || 'joanne').slice(0, 64);
  try {
    if (req.method === 'GET') {
      const quotes = await sql`select id, text, photo_url from quotes where card_id = ${card} order by created_at`;
      const messages = await sql`select id, type, name, text, media_url, photo_url, duration from messages where card_id = ${card} order by created_at`;
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ quotes, messages });
    }
    if (req.method === 'POST') {
      const b = req.body || {};
      if (b.kind === 'quote') {
        if (!b.text) return res.status(400).json({ error: 'text required' });
        await sql`insert into quotes (card_id, text, photo_url) values (${card}, ${String(b.text).slice(0, 500)}, ${b.photo_url || null})`;
      } else {
        const type = ['text', 'voice', 'video'].includes(b.type) ? b.type : 'text';
        await sql`insert into messages (card_id, type, name, text, media_url, photo_url, duration)
          values (${card}, ${type}, ${b.name ? String(b.name).slice(0, 80) : null}, ${String(b.text || '').slice(0, 4000)},
                  ${b.media_url || null}, ${b.photo_url || null}, ${Number(b.duration) || null})`;
      }
      return res.status(201).json({ ok: true });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
