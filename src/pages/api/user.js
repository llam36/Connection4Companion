import User from "server/mongodb/models/user.js";
import { connectDB } from "../../../server/mongodb";
import { userChecker } from "../infovalidation";

export default function handler(req, res) {
  const requestMethod = req.method;
  const body = req.body;
  connectDB();

  switch (requestMethod) {
    case 'POST':
      let checker = userChecker(body);
      if (!checker.success) {
        return res.status(400).json({success: false, errorType: checker.message});
      }
      try {
        const newUser = new User(body);
        newUser.save();
        return res.status(200).json({success: true, errorType: "User added to DB"});
      } catch (e) {
          if (e.name == "ValidationError") {
            return res.status(400).json({success: false, errorType: "Invalid data."});
          }
          return res.status(500).json({success: false, errorType: e.message});
      }
      }
}
