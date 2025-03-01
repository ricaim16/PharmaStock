import "dotenv/config"; // Load environment variables from .env

import express from "express";
import { dbConnect } from "./config/db.js"; // Prisma connection logic

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })



  .catch((err) => {
    console.error("Application startup failed:", err);
    process.exit(1); // Exit the application if database connection fails
  });

