const express = require("express");
const app = express();
const cors = require("cors");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(cors());
// app.use(morgan("combined"));

app.use(bodyParser.json());

const routes = require('./controller/tasksOperations');

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














































// const express = require('express');

// const userRouter = require('./controller/router')

// app.use('/tasks', userRouter)

// const app = express()
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/todolist",{
//     useNewUrlParser:true, useUnifiedTopology:true
// }, (err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("success")
//         }
//     }
// );


// app.listen(8000, ()=>{
//     console.log("Your server is running on 8000")
// })



// app.get("/tasks", routes.getTasks);
// app.post("/tasks", routes.addTask);
// app.put("/tasks/completed/:id", routes.updateTask);
// app.put("/tasks/status/:id", routes.updateTaskStatus);
// app.delete("/tasks/:id", routes.deleteTask);