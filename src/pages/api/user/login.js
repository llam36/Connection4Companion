import bcrypt from "bcrypt";
import { connectDB } from "../../../../server/mongodb";
import User from "server/mongodb/models/user.js";

export default async function handler(req, res) {
    const { email, password } = req.body;
    connectDB();
    const user = await User.findOne({ email });
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
        return res.status(403).json({ success: false, message: "Incorrect email or password" });
    }
    return res.status(200).json({ success: true, message: "Successfully log in" });
}