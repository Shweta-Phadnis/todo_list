import React, { useEffect, useState } from "react";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';


import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';



const Todo = () => {


    const [value, setValue] = useState("")
    const [todoList, setTodoList] = useState([])
    const [flag, setFlag] = useState("showAllTasks")
    const [refresh, setRefresh] = useState("")

    useEffect(()=>{
        debugger
        setTodoList(todoList)
      },[refresh])

    const addTodo = (e) => {
        debugger
        e.preventDefault();
        if(value){
            let todoObj = {
                name: value,
                id: uuidv4(),
                activeStatus : false,
                deActiveStatus : true,
                completed : false,
            }
            setTodoList([...todoList, todoObj ]);
            setValue("")
            setRefresh(value)
            console.log(todoList)
        }
      }

    const deleteItems = (id) => {
        debugger
        const newTodos = todoList.filter((item)=>{
            return item.id !== id
        })
        setTodoList(newTodos);
        setRefresh(id)
    }

    const taskCompleted = (id) => {
        debugger
        let todoObj = todoList.find((item) => item.id === id);
        todoObj.completed = true;
        setTodoList(todoList);
        setRefresh(id)
    }

    const setStatus = (id, value) => {
        debugger
        let todoObj = todoList.find((item) => item.id === id);
        todoObj.activeStatus = value == "active" ? true : false;
        todoObj.deActiveStatus = value == "deactive" ? true : false;
        setTodoList(todoList);
        setRefresh(id)
    }
    return(
        <div className="container" style={{width : '70%'}}>
            <h2 style={{margin : "30px"}}>Todo List using ReactJS and JS</h2>
            <div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" style={{width : '88%'}}
                        type="text" value={value} placeholder="Enter your task" aria-label="Search"
                        onChange={(e)=>setValue(e.target.value)}
                        />
                    <button className="btn btn-outline-success"
                        onClick={(e)=>addTodo(e)}>Add task</button>
                </form>
            </div>
            <div className="btn-group" style={{marginTop : "10px", display : 'flex'}}>
                        <button onClick={()=>{setFlag("showActiveTasks")}} type="button" className="btn btn-primary">Active</button>
                        <button onClick={()=>{setFlag("showCompletedTasks")}} type="button" className="btn btn-primary">Cpmpleted</button>
                        <button onClick={()=>{setFlag("showAllTasks")}} type="button" className="btn btn-primary">All</button>
            </div>
            <div>
                <List todoItems={todoList}
                    deleteItems={deleteItems}
                    setStatus={setStatus}
                    taskCompleted={taskCompleted}
                    statusFlag={flag}
                />
            </div>
            {
                todoList.length > 0 && 
                    <div>
                        <ul style={{textAlign : 'left'}}>
                        <li>Active Button shows the list of tasks that are marked as active</li>
                        <li>Completed Button shows the list of tasks for which the checkbox is checked</li>
                        <li>All Button shows the list of all tasks</li>
                        </ul>
                    </div>
            }
        </div>
    )
}

export default Todo