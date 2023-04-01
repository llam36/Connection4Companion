import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        default: "temppassword"
    },
    profilePicture: {
        type: String,
        required: false
    }
})

export default mongoose.models?.User || mongoose.model("User", userSchema)