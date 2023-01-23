const mongoose = require('mongoose')

const taskSchema = new  mongoose.Schema({
    name : String,
    completed: Boolean,
    activeStatus : Boolean,
    deActiveStatus : Boolean,
    task_id : String,
})

const TaskModel = mongoose.model('Task', taskSchema)

module.exports = TaskModel