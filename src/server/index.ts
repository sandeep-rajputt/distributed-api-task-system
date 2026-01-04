import createApp from "./app.js";
import env from "../config/env.js";
import { createServer } from "http";

function startServer() {
  const app = createApp();
  const server = createServer(app);

  server.listen(env.PORT, () => {
    console.log("Server is running on PORT : " + env.PORT);
  });
}

startServer();
