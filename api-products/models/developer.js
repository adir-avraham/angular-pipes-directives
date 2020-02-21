const mongoose = require('mongoose');


const DeveloperSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
    },

})


module.exports = mongoose.model('Developer', DeveloperSchema);