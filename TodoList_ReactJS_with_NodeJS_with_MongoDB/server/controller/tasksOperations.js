const express = require('express')
const TaskModel = require('../model/task.model')

const { v4: uuidv4 } = require("uuid");

exports.getTasks = async(req, res) => {
  const resp = await TaskModel.find({});
  // console.log(resp)
  res.json(resp)
};

exports.addTask = async(req, res) => {
  let task = {
    name: req.body.name,
    completed: req.body.completed,
    activeStatus : req.body.activeStatus,
    deActiveStatus : req.body.deActiveStatus,
    task_id: uuidv4(),
  };
  const resp = await TaskModel.create(task);
  res.send(resp)
};

exports.deleteTask = (req, res) => {
  TaskModel.deleteOne({ task_id: req.params.id }, (err, data)=>{
    if(!err){
      res.json({
        message : 'task deleted',
        status : 200,
        task : data
      })
    }else{
      res.json({
        message : 'something is wrong',
        status : 500,
      })
    }
  });
};

exports.updateTask = (req, res) => {
  TaskModel.updateOne({ task_id: req.params.id }, { completed: true }, (err, data)=>{
    if(!err){
      res.json({
        message : 'task marked as completed',
        status : 200,
        task : data
      })
    }else{
      res.json({
        message : 'something is wrong',
        status : 500,
      })
    }
  });
};

exports.updateTaskStatus = (req, res) => {
  TaskModel.updateOne({ task_id: req.params.id },
    {
      activeStatus: req.body.activeStatus,
      deActiveStatus: req.body.deActiveStatus
    }, (err, data)=>{
    if(!err){
      res.json({
        message : 'task marked as completed',
        status : 200,
        task : data
      })
    }else{
      res.json({
        message : 'something is wrong',
        status : 500,
      })
    }
  });
}
















// let taskList = [
//   {
//     name: "Created Task 1",
//     completed: false,
//     activeStatus : false,
//     deActiveStatus : true,
//     id: uuidv4(),
//   },
//   {
//     name: " createdTask 2",
//     completed: false,
//     activeStatus : false,
//     deActiveStatus : true,
//     id: uuidv4(),
//   },
// ];

// exports.addTask = (req, res) => {
//   let task = {
//     name: req.body.name,
//     completed: req.body.completed,
//     activeStatus : req.body.activeStatus,
//     deActiveStatus : req.body.deActiveStatus,
//     id: uuidv4(),
//   };
//   taskList.push(task);
//   res.status(200).json({ status: "success", task: task });
// };

// exports.deleteTask = (req, res) => {
//   let id = req.params.id;
//   taskList = taskList.filter((item) => item.id !== id);
//   res.status(200).json({ status: "success", message: "Task deleted", data: taskList});
// };

// exports.updateTaskStatus = (req, res) => {
//   let id = req.params.id
//   let task = taskList.find((item) => item.id === id);
//   if(task){
//     task.activeStatus = req.body.activeStatus;
//     task.deActiveStatus = req.body.deActiveStatus;
//     res.status(200).json({status : "success", task : task})
//   }else{
//     res.status(404).json({ status: "error", message: "Task not found" });
//   }
// }

// exports.updateTask = (req, res) => {
//   let id = req.params.id;
//   let task = taskList.find((item) => item.id === id);
//   if (task) {
//     task.completed = req.body.completed;
//     res.status(200).json({ status: "success", task: task });
//   } else {
//     res.status(404).json({ status: "error", message: "Task not found" });
//   }
// };