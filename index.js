import express from "express";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(
  cors({
    origin: "*", // ya gateway URL
  }),
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Auth Service is running 🚀");
});

app.use("/api/auth", authRoutes);

connectDB();

app.listen(PORT, () => console.log(`Auth Service Running on port ${PORT}`));
