import mongoose from "mongoose";
import User from "../../server/mongodb/models/user.js";

export default function handler(req, res) {
  const requestMethod = req.method;
  const body = res.body;

  switch (requestMethod) {
    case 'POST':
      try {
        const newUser = new User(body.userData);
        newUser.save();
        return res.status(200).send("User added to DB");
      } catch (e) {
        console.log(e);
      }
  }
}
