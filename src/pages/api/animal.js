import Animal from "server/mongodb/models/animal.js"
import { connectDB, closeDB } from "../../../server/mongodb";
import { animalChecker } from "../infovalidation";

export default async function handler(req, res) {
    let data = req.body;
    await connectDB();

    switch (req.method) {
        case 'POST':
            let checker = animalChecker(data);
            if (!checker.success) {
                return res.status(400).json({ success: false, message: checker.message });
            }
            try {
                const newAnimal = new Animal(data);
                await newAnimal.save();
                return res.status(200).json({ success: true, message: "Successfully added Animal to DB" });
            } catch (e) {
                if (e.name == "ValidationError") {
                    return res.status(400).json({ success: false, message: "Invalid data." });
                }
                return res.status(500).json({ success: false, message: e.message })
            }
    }
}
