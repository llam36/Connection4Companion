import bcrypt from "bcrypt";
import { connectDB } from "../../../../server/mongodb";
import User from "server/mongodb/models/user.js";

export default async function handler(req, res) {
    const { email, password } = req.body;
    const result = await login(email, password);
    if (!result.success) {
        return res.status(403).json(result);
    }
    return res.status(200).json(result);
}

export async function login(email, password) {
    connectDB();
    const user = await User.findOne({ email });
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
        return { success: false, message: "Incorrect email or password" };
    }
    return { success: true, message: "Successfully log in" };
}