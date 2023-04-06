import TrainingLog from "server/mongodb/models/traininglog.js"
import { connectDB } from "../../../server/mongodb";
import { trainingLogChecker } from "../infovalidation";
import traininglog from "../../../server/mongodb/models/traininglog";
import mongoose from "mongoose";


export default async function handler(req, res) {
    let data = req.body;
    connectDB();
    if (!trainingLogChecker(data).success) {
        return res.status(400).json({ success: false, message: trainingLogChecker(data).message })
    }
    // try {
    //     let animal = await TrainingLog.findById(data.animal);
    //     let owner = animal.owner;
    //     if (owner != data.user) {
    //         return res.status(400).json({ success: false, message: "Given user is not the animal owner" })
    //     }
    // } catch (e) {
    //     if (e.name == "ValidationError") {
    //         return res.status(400).json({ success: false, message: "Invalid data" });
    //     }
    //     return res.status(500).json({ success: false, message: "Server side error" })
    // }
    try {
        const newTrainingLog = new TrainingLog(data);
        await newTrainingLog.save();
    } catch (e) {
        if (e.name == "ValidationError") {
            return res.status(400).json({ success: false, message: "Invalid data" });
        }
        return res.status(500).json({ success: false, message: e.message })
    }
    return res.status(200).json({ success: true, message: "Successfully created training log" });
}
