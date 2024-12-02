import express from "express";
import morgan from "morgan";

import analiticRoutes from "./routes/analitic.routes.js"

const app = express()

app.use(morgan("dev"));
app.use(express.json());

app.use("api/graphic/",analiticRoutes);

export default app;
