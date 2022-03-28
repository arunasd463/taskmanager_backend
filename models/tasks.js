const mongoose = require('mongoose')


const TaskSchema =new mongoose.Schema({
    task:{
        type:String,
        required:[true,'Must provide a Task name'],
        trim:true,
        maxlength:[20,'Task name should be less than 20 Characters'],
    },
    description:{
        type:String,
        default:"No description",
        trim:true,
        maxlength:[100,'Task name should be less than 100 Characters']
    },
    time:{
        type:Date,
        default:Date.now
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedtime:{
        type:Date
    }

})

module.exports = mongoose.model('Task',TaskSchema)