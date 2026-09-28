create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  card_id text not null,
  text text not null,
  photo_url text,
  created_at timestamptz default now()
);
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  card_id text not null,
  type text not null,          -- text | voice | video
  name text,
  text text,
  media_url text,              -- voice/video file in Blob
  photo_url text,              -- photo in Blob
  duration int,
  created_at timestamptz default now()
);
create index if not exists quotes_card on quotes (card_id, created_at);
create index if not exists messages_card on messages (card_id, created_at);
