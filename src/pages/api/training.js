import TrainingLog from "server/mongodb/models/traininglog.js"
import { connectDB } from "../../../server/mongodb";

export default async function handler(req, res) {
    let data = req.body;
    connectDB();
    try {
        const newTrainingLog = new TrainingLog(data);
        await newTrainingLog.save();
    } catch(e) {
        if (e.name == "ValidationError") {
            return res.status(400).json({errorType: "Invalid data."});
        }
        return res.status(500).json({errorType: "Server side error"})
    }
    return res.status(200).json({errorType: "No Error: successfully created"});
}
