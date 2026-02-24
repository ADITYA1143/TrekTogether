import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: ["http://localhost:5173","https://trek-together.vercel.app/"], credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
console.log("✅ userRoutes loaded");
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});