import Animal from "server/mongodb/models/animal.js"
import { connectDB } from "../../../server/mongodb";
import { animalChecker } from "../infovalidation";

export default async function handler(req, res) {
    let data = req.body;
    connectDB();
    let checker = animalChecker(data);
    if (!checker.success) {
        return res.status(400).json({ success: false, errorType: checker.message });
    }
    try {
        const newAnimal = new Animal(data);
        await newAnimal.save();
    } catch (e) {
        if (e.name == "ValidationError") {
            return res.status(400).json({ success: false, errorType: "Invalid data." });
        }
        return res.status(500).json({ success: false, errorType: "Server side error" })
    }
    return res.status(200).json({ success: true, errorType: "No Error: successfully created" });
}
