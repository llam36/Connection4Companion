import { connectDB } from "../../../../server/mongodb";
import User from "../../../../server/mongodb/models/user";

export default async function handler(req, res) {
    let page = req.query.page;
    if (!page || isNaN(page) || page < 1) {
        page = 1;
    }
    await connectDB();
    let userrecords;
    try {
        userrecords = await User.find().skip((page - 1) * 10).limit(10);
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message })
    }
    userrecords = userrecords.map(({_id, firstName, lastName, email, password, __v}) => ({firstName, lastName, email}));
    return res.status(200).json(userrecords);
}

