import express from "express";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth Service is running 🚀");
});

app.use("/api/auth", authRoutes);

connectDB();

export default app;
