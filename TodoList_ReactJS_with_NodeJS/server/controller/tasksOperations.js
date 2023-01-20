const { v4: uuidv4 } = require("uuid");

let taskList = [
  {
    name: "Created Task 1",
    completed: false,
    activeStatus : false,
    deActiveStatus : true,
    id: uuidv4(),
  },
  {
    name: " createdTask 2",
    completed: false,
    activeStatus : false,
    deActiveStatus : true,
    id: uuidv4(),
  },
];

exports.getTasks = (req, res) => {
  res.status(200).json({ status: "success", todoList: taskList });
};

exports.addTask = (req, res) => {
  let task = {
    name: req.body.name,
    completed: req.body.completed,
    activeStatus : req.body.activeStatus,
    deActiveStatus : req.body.deActiveStatus,
    id: uuidv4(),
  };
  taskList.push(task);
  res.status(200).json({ status: "success", task: task });
};

exports.deleteTask = (req, res) => {
  let id = req.params.id;
  taskList = taskList.filter((item) => item.id !== id);
  res.status(200).json({ status: "success", message: "Task deleted", data: taskList});
};

exports.updateTask = (req, res) => {
  let id = req.params.id;
  let task = taskList.find((item) => item.id === id);
  if (task) {
    task.completed = req.body.completed;
    res.status(200).json({ status: "success", task: task });
  } else {
    res.status(404).json({ status: "error", message: "Task not found" });
  }
};

exports.updateTaskStatus = (req, res) => {
  let id = req.params.id
  let task = taskList.find((item) => item.id === id);
  if(task){
    task.activeStatus = req.body.activeStatus;
    task.deActiveStatus = req.body.deActiveStatus;
    res.status(200).json({status : "success", task : task})
  }else{
    res.status(404).json({ status: "error", message: "Task not found" });
  }
}
