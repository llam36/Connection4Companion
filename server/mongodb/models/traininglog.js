import mongoose from "mongoose"


const trainingLogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Animal'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    trainingLogVideo: {
        type: String,
        required: false
    }
})

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema)