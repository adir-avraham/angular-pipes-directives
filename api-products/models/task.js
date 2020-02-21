const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    developer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Developer',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task', TaskSchema);