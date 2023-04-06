import mongoose from "mongoose"


const animalSchema = new mongoose.Schema({
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
        required: true,
        ref: 'User'
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

export default  mongoose.models?.Animal || mongoose.model("Animal", animalSchema)