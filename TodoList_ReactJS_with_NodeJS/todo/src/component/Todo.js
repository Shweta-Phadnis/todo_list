import React, { useEffect, useState } from "react";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';


import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

import axios from "axios";
const baseURL = "http://localhost:8000/tasks"


const Todo = () => {


    const [value, setvalue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [flag, setFlag] = useState("showAllTasks");
    const [refresh, setRefresh] = useState("")

    useEffect(()=>{
        axios.get(`${baseURL}`).then(function (response) {
          setTodoList(response.data.todoList)
        })
        .catch(function (error) {
          console.log(error);
        });
      },[])

      useEffect(()=>{
        debugger
        axios.get(`${baseURL}`).then(function (response) {
          setTodoList(response.data.todoList)
        })
        .catch(function (error) {
          console.log(error);
        });
      },[refresh])



    const addTodo = () => {
        debugger
        axios.post(`${baseURL}`, {
          name: value,
          completed: false,
          activeStatus : false,
          deActiveStatus : true,
        })
        .then(function (response) {
          console.log("Task Added Successfully");
          setRefresh(value)
        })
        .catch(function (error) {
          console.log(error);
        });
      };

    const deleteItems = (id) => {
        axios.delete(`${baseURL}/${id}`)
        .then(function (response) {
            setRefresh(id)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    const taskCompleted = (id) => {
        debugger
        axios.put(`${baseURL}/completed/${id}`, {
          name: value,
          completed: true,
          activeStatus : false,
          deActiveStatus : true,
        })
        .then(function (response) {
            setRefresh(id)
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    const setStatus = (id, value) => {
        debugger
        axios.put(`${baseURL}/status/${id}`, {
            name: value,
            completed: true,
            activeStatus : value == "active" ? true : false,
            deActiveStatus : value == "deactive" ? true : false,
          })
          .then(function (response) {
              setRefresh(id)
          })
          .catch(function (error) {
          console.log(error);
          });
    }

    return(
        <div className="container" style={{width : '70%'}}>
            <h2 style={{margin : "30px"}}>Todo List using ReactJS and NodeJS</h2>
            <div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" style={{width : '88%'}}
                    type="text" value={value} placeholder="Enter your task" aria-label="Search"
                    onChange={(e)=>setvalue(e.target.value)}
                    />
                <button class="btn btn-outline-success" type="submit" onClick={value && addTodo}>Add task</button>
            </form>
            </div>
            <div class="btn-group" style={{marginTop : "10px", display : 'flex'}}>
                        <button onClick={()=>{setFlag("showActiveTasks")}} type="button" class="btn btn-primary">Active</button>
                        <button onClick={()=>{setFlag("showCompletedTasks")}} type="button" class="btn btn-primary">Cpmpleted</button>
                        <button onClick={()=>{setFlag("showAllTasks")}} type="button" class="btn btn-primary">All</button>
            </div>
            {
                <div>
                    <List todoItems={todoList}
                        deleteItems={deleteItems}
                        setStatus={setStatus}
                        taskCompleted={taskCompleted}
                        statusFlag={flag}
                    />
                </div>
            }
            {/* Total items available : {todoList.length} */}
            {
                todoList.length > 0 && 
                    <>
                    <ul style={{textAlign : 'left', border : 'none', listStyleType: 'square'}}>
                      <li>Active Button shows the list of tasks that are marked as active</li>
                      <li>Completed Button shows the list of tasks for which the checkbox is checked</li>
                      <li>All Button shows the list of all tasks</li>
                    </ul>

                    </>
            }
        </div>
    )
}

export default Todo







            {/* <div class="form-group" style={{display : "flex"}}>
                <input type='text' class="form-control" name="todo"
                                    placeholder="Enter your task"
                                    onChange={(e)=>setvalue(e.target.value)}
                />
                <Tooltip title="Add">
                    <Button onClick={addTodo}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </div> */}

                        {/* <div>
                <input type='text' class="form-control" name="todo"
                    placeholder="Enter your task"
                    onChange={(e)=>setvalue(e.target.value)}
                />
                <Tooltip title="Add">
                    <Button onClick={addTodo}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </div> */}

            {/* <button onClick={()=>{setFlag("showActiveTasks")}} >Active</button>
                    <button onClick={()=>{setFlag("showCompletedTasks")}} >Cpmpleted</button>
                    <button onClick={()=>{setFlag("showAllTasks")}} >All</button> */}