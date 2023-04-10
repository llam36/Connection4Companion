import User from "server/mongodb/models/user.js";
import { connectDB, closeDB } from "../../../server/mongodb";
import { userChecker } from "../infovalidation";

export default async function handler(req, res) {
  const requestMethod = req.method;
  const body = req.body;
  await connectDB();

  switch (requestMethod) {
    case 'POST':
      let checker = userChecker(body);
      if (!checker.success) {
        return res.status(400).json({ success: false, message: checker.message });
      }
      try {
        const newUser = new User(body);
        newUser.save();
        return res.status(200).json({ success: true, message: "Successfully added User to DB" });
      } catch (e) {
        if (e.name == "ValidationError") {
          return res.status(400).json({ success: false, message: "Invalid data." });
        }
        return res.status(500).json({ success: false, message: e.message });
      } finally {
        await closeDB();
      }
  }
}
