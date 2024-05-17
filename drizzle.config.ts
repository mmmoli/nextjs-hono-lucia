import type { Config } from "drizzle-kit";

import { envs } from "~shared/config/server";

export default {
  driver: "turso",
  schema: "./src/services/db/schema/*",
  out: "./src/services/db/migrations",
  dbCredentials: {
    url: envs.DATABASE_URL,
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
} satisfies Config;
