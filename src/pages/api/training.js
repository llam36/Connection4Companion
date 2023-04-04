import TrainingLog from "server/mongodb/models/traininglog.js"
import { connectDB } from "../../../server/mongodb";
import mongoose from "mongoose"
import trainingLogChecker from "../infovalidation";


export default async function handler(req, res) {
    let data = req.body;
    connectDB();
    if (trainingLogChecker(data) != 1) {
        return res.status(400).json({errorType: trainingLogChecker(data)})
    }
    try {
        let animal = await TrainingLog.findById(data.animal);
        let owner = animal.owner;
        if (owner != data.user) {
            return res.status(400).json({errorType: "Given user is not the animal owner."})
        }
    } catch (e) {
        if (e.name == "ValidationError") {
            return res.status(400).json({errorType: "Invalid data."});
        }
        return res.status(500).json({errorType: "Server side error"})
    }
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
