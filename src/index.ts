import "reflect-metadata";
import cors from "cors";
import express from "express";
import "./database/connect";
import { errorHandler } from "src/app/middlewares/errorHandler";

import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorHandler);

export { app };
