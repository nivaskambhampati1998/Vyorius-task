const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    user : { type : mongoose.Schema.Types.ObjectId , ref : 'user' },
    name : {type : String , required : true},
    info : {type : String , required : true},
    created : {type : Date , default : Date.now}
});

const Task = mongoose.model('task' , TaskSchema);
module.exports = Task;