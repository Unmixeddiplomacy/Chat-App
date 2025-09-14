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

  // SPA fallback without a path pattern to avoid path-to-regexp issues
  // Serve index.html for any non-API GET request that isn't handled above
  app.use((req, res, next) => {
    if (req.method !== "GET") return next();
    if (req.path && req.path.startsWith("/api")) return next();
    return res.sendFile(path.join(staticDir, "index.html"));
  });
}
server.listen(PORT,() => {
    console.log("Server is running at port:" + PORT);
    connectDB();
})