import { sql } from './db.js'

await sql`
  create table videos (
    id text,
    title text,
    description text,
    duration integer
  );
`