import express from "express";
import cors from "cors";
import connectDB from "./dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoute.js";

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// connect to MongoDB
connectDB();

// routes
app.use("/api", userRoutes);
app.use("/api", blogRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
