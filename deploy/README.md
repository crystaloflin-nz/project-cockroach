# Deploying the farewell card to Vercel

Folder layout for the GitHub repo:

    index.html          <- renamed copy of "Farewell Card.dc.html"
    support.js
    _ds/                <- design system folder
    api/entries.js
    api/upload.js
    package.json
    schema.sql

Storage: Vercel Blob (files) + Neon Postgres via the Vercel Marketplace (text data).
Env vars BLOB_READ_WRITE_TOKEN and DATABASE_URL are added automatically when you connect each store.
