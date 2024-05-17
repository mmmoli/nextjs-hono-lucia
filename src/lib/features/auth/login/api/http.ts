import { factory } from "~shared/services/http";

export const app = factory.createApp();

app.post("/", async () => {});
