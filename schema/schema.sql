CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "body" text,
  "created_at" timestamp DEFAULT (now()),
  "uid" varchar NOT NULL
);

CREATE INDEX ON "notes" ("uid");
