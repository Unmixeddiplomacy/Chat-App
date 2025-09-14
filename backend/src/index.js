import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./lib/socket.js";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config()
const PORT = process.env.PORT
// Proper __dirname resolution for ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth" , authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve the built frontend from the root project's frontend/dist
  // Current file is backend/src/index.js, so go two levels up to project root
  const staticDir = path.join(__dirname, "../../frontend/dist");
  app.use(express.static(staticDir));

  // Express v5 with path-to-regexp v6+: use '/(.*)' instead of '*'
  app.get("/(.*)", (req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
  });
}
server.listen(PORT,() => {
    console.log("Server is running at port:" + PORT);
    connectDB();
})