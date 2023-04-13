import { connectDB } from "../../../../server/mongodb";
import User from "../../../../server/mongodb/models/user";
import { verifyJWT } from "../user/verify";

export default async function handler(req, res) {
    try {
        const decodedJWT = verifyJWT(req);
        if (!decodedJWT.admin) {
            return res.status(400).json({ success: false, message: "User does not have admin permission" });
        }
    } catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
    let page = req.query.page;
    if (!page || isNaN(page) || page < 1) {
        page = 1;
    }
    await connectDB();
    let userrecords;
    try {
        userrecords = await User.find().skip((page - 1) * 5).limit(5);
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message })
    }
    userrecords = userrecords.map(({ _id, firstName, lastName, email, password, __v }) => ({ firstName, lastName, email }));
    return res.status(200).json(userrecords);
}

