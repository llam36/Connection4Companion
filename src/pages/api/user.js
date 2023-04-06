import User from "server/mongodb/models/user.js";
import { connectDB } from "../../../server/mongodb";

export default function handler(req, res) {
  const requestMethod = req.method;
  const body = req.body;
  console.log(body);
  connectDB();

  switch (requestMethod) {
    case 'POST':
      try {
        const newUser = new User(body);
        newUser.save();
        return res.status(200).send("User added to DB");
      } catch (e) {
          if (e.name == "ValidationError") {
            return res.status(400).json({errorType: "Invalid data."});
          }
          return res.status(500).json({errorType: e.message})
      }
      }
}
