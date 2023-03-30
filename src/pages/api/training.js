import TrainingLog from "server/mongodb/models/traininglog.js"
import {connectDB, closeDB} from "server/mongodb/index.js"

export default async function handler(req, res) {
    await connectDB()
    try {
        const newTrainingLog = new TrainingLog(data);
        await newTrainingLog.save();
    } catch(e) {
        if (e.name == "ValidationError") {
            console.log("does not work")
            return res.status(400).json({errorType: "Invalid data."});
        }
        return res.status(500).json({errorType: "Server side error"})
    }
    return res.status(200).json({errorType: "no error: successfully created"});
}
