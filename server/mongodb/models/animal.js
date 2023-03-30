import mongoose from "mongoose"


const animalSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hoursTrained: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    }
})

export default mongoose.model("Animal", animalSchema)