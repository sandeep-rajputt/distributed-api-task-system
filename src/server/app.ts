import express from "express";
import errorHandler from "../middlewares/errorHandler.js";

function createApp() {
  const app = express();

  app.set("trust proxy", true);

  app.use(express.json());

  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
    });
  });

  app.use(errorHandler);

  return app;
}

export default createApp;
