import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { envs } from "~shared/config/server";

import * as schema from "./schema";

const client = createClient({
  url: envs.DATABASE_URL,
  authToken: envs.DATABASE_AUTH_TOKEN ? envs.DATABASE_AUTH_TOKEN : undefined,
});

export const db = drizzle(client, { schema });
export type Db = typeof db;
