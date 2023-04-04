import Animal from "server/mongodb/models/animal.js"
import { connectDB } from "../../../server/mongodb";

export default async function handler(req, res) {
    let data = req.body;
    connectDB();
    try {
        const newAnimal = new Animal(data);
        await newAnimal.save();
    } catch (e) {
        if (e.name == "ValidationError") {
            return res.status(400).json({ errorType: "Invalid data." });
        }
        return res.status(500).json({ errorType: "Server side error" })
    }
    return res.status(200).json({ errorType: "No Error: successfully created" });
}
