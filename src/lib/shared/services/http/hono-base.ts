import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { createFactory } from "hono/factory";
import { csrf } from "hono/csrf";
import { secureHeaders } from "hono/secure-headers";
import type { User, Session } from "~shared/services/auth";
import type { Db } from "~shared/services/db";

type Env = {
  Bindings: {};
  Variables: {
    db: Db;
    user: User | null;
    session: Session | null;
  };
};

export const factory = createFactory<Env>({
  initApp: (app) => {
    app.use(secureHeaders()).use(cors()).use(csrf()).use(logger());
  },
});
