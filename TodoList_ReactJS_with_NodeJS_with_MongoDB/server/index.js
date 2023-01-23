const express = require("express");
const app = express();
const mongoose = require('mongoose');

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoURL = 'mongodb://localhost:27017/todoList'
mongoose.set('strictQuery', true);
mongoose.connect(mongoURL, (err)=>{
  if(err){
    console.log("failed collection")
  }else{
    console.log("mongo is connected")
  }
})

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Welcome from NodeJs" });
});


const taskRouter = require('./router/tasks')
app.use('/tasks', taskRouter)

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "404 Not Found" });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
