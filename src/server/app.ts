import express, { type Application } from "express";

function createApp() {
  const app = express();

  app.set("trust proxy", true);

  app.use(express.json());

  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
    });
  });

  return app;
}

export default createApp;
