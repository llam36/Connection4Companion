import bcrypt from "bcrypt";
import { connectDB } from "../../../../server/mongodb";
import User from "server/mongodb/models/user.js";

export default async function handler(req, res) {
    const { email, password, admin } = req.body;
    const result = await login(email, password, admin);
    if (!result.success) {
        return res.status(403).json({ success: result.success, message: result.message });
    }
    return res.status(200).json({ success: result.success, message: result.message });
}

export async function login(email, password, admin) {
    connectDB();
    const user = await User.findOne({ email });
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
        return { success: false, message: "Incorrect email or password", user: null };
    }
    return { success: true, message: "Successfully log in", user: user.toJSON(), admin: admin };
}