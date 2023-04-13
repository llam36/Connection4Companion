import { connectDB } from "../../../../server/mongodb";
import Animal from "../../../../server/mongodb/models/animal";
import User from "../../../../server/mongodb/models/user";

export default async function handler(req, res) {
    let page = req.query.page;
    if (!page || isNaN(page) || page < 1) {
        page = 1;
    }
    await connectDB();
    let animalrecords;
    try {
        animalrecords = await Animal.find().populate({path : 'owner'}).skip((page - 1) * 10).limit(10);
    } catch (e) {
        return res.status(500).json({ success: false, message: e.message })
    }
    console.log(animalrecords)
    animalrecords = animalrecords.map(({_id, name, hoursTrained, owner, dateOfBirth, __v}) => ({name, hoursTrained, owner, dateOfBirth}));
    let ownerName = await User.findById(animalrecords.owner);
    console.log(ownerName)
    return res.status(200).json(animalrecords);
}