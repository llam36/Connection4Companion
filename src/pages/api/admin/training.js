import { connectDB } from "../../../../server/mongodb";
import TrainingLog from "../../../../server/mongodb/models/animal";

export default async function handler(req, res) {
    let page = req.query.page;
    if (!page || isNaN(page) || page < 1) {
        page = 1;
    }
    await connectDB();
    let trainingrecords;
    try {
        trainingrecords = await TrainingLog.find().skip((page - 1) * 10).limit(10);
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message })
    }
    return res.status(200).json(trainingrecords);
}