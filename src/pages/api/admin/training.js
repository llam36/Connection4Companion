import { connectDB } from "../../../../server/mongodb";
import TrainingLog from "../../../../server/mongodb/models/traininglog";
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
    let trainingrecords;
    try {
        trainingrecords = await TrainingLog.find().populate({ path: 'animal' }).populate({ path: 'user' }).skip((page - 1) * 10).limit(10);
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message })
    }
    return res.status(200).json(trainingrecords);
}