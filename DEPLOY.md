# Deploying the farewell card to Vercel

## Layout

    index.html          <- the card (was "Farewell Card.dc.html")
    support.js
    _ds/                <- design system folder
    api/entries.js      <- GET/POST quotes and messages
    api/upload.js       <- issues Vercel Blob client-upload tokens
    package.json
    schema.sql

Everything sits at the repo root, so Vercel's zero-config setup serves
`index.html` statically and turns each file in `api/` into a Node function at
`/api/<name>`. Leave the project's Root Directory blank — pointing it at a
subfolder would stop `index.html`, `support.js` and `_ds/` being served.

## Storage

Vercel Blob for files, Neon Postgres via the Vercel Marketplace for text.
Connect each store to the project and the env vars `BLOB_READ_WRITE_TOKEN`
and `DATABASE_URL` are added automatically.

## First deploy

1. Import the repo on Vercel (no build command, no framework preset).
2. Connect Blob and Neon under Storage.
3. Run `schema.sql` against the Neon database once — via the Neon console's SQL
   editor, or `psql "$DATABASE_URL" -f schema.sql`.
4. Redeploy so the functions pick up the new env vars.

## Using it

- `/?card=<id>&view=collect` — the collect form. Share this one; anyone with it
  can add a quote or leave a written, voice or video message.
- `/?card=<id>&view=card` — the finished card. Send this one to the recipient.

`<id>` is any short string (defaults to `joanne`); it's the `card_id` column, so
one deployment can hold as many cards as you like. Nothing is deleted or
overwritten between cards.

Until the API answers — in the design-tool preview, or before the database is
connected — the card falls back to its built-in example entries rather than
showing an error.
