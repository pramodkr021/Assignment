import express from "express";
import { users } from "../userList.js";
import UserSchema from "../models/userSchema.js";

const router = express.Router();

// User route
router.get("/users", async (req, res) => {
  try {
    const dbUsers = await UserSchema.find();
    if (dbUsers.length === 0) {
      return res.json(users);
    }
    const combinedUsers = [...users, ...dbUsers];
    res.json(combinedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Insert Users
router.post("/users", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const newUser = new UserSchema({ name, email, age });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: "Error inserting user" });
  }
});

// Fetch User by Email
router.get("/users/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await UserSchema.findOne({ email });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ message: "Error fetching user" });
  }
});

export default router;
