import TrainingLog from "server/mongodb/models/traininglog.js"
import { connectDB, closeDB } from "../../../server/mongodb";
import { trainingLogChecker } from "../infovalidation";


export default async function handler(req, res) {
    let data = req.body;
    await connectDB();
    
    switch(req.method) {
        case 'POST':
            let checker = await trainingLogChecker(data);
            if (!checker.success) {
                return res.status(400).json({ success: false, message: checker.message });
            }
            try {
                const newTrainingLog = new TrainingLog(data);
                await newTrainingLog.save();
                return res.status(200).json({ success: true, message: "Successfully added Training Log to DB" });
            } catch (e) {
                if (e.name == "ValidationError") {
                    return res.status(400).json({ success: false, message: "Invalid data" });
                }
                return res.status(500).json({ success: false, message: e.message })
            }
    }
}
