import mongoose from "mongoose";
import { connectDB } from "../../../server/mongodb";
import User from "../../server/mongodb/models/exampleModel.js";

export default function handler(req, res) {
  const requestMethod = req.method;
  const body = res.body;
  connectDB();

  switch (requestMethod) {
    case 'POST':
      try {
        const newUser = new User(body.userData);
        newUser.save();
        return res.status(200).send("User added to DB");
      } catch (e) {
          if (e.name == "ValidationError") {
            return res.status(400).json({errorType: "Invalid data."});
          }
          return res.status(500).json({errorType: "Server side error"})
      }
      }
}
