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
