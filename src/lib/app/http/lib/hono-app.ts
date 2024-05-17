import { db } from "~shared/services/db";
import { factory } from "~shared/services/http";
import { app as loginApp } from "~features/auth/login/api";
import { app as registerApp } from "~features/auth/register/api";
import { app as verifyApp } from "~features/auth/verify/api";

export const authApp = factory
  .createApp()
  .route("/login", loginApp)
  .route("/register", registerApp)
  .route("/verify", verifyApp);

export const app = factory
  .createApp()
  .use(async (c, next) => {
    c.set("db", db);
    await next();
  })
  .route("/auth", authApp);
