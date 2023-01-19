import React, { useState } from "react";
import TodoItems from "./TodoItems";

const List = (props) => {
    const {todoItems, statusFlag} = props
    var counter = 0
    return(
     <div>
        <ul className="list-group" style={{textAlign : 'left'}}>
        {statusFlag == "showActiveTasks" &&
            todoItems.map((item)=>{
                    if(item.activeStatus == true){
                        counter++;
                        return <TodoItems item={item}
                                deleteItems={props.deleteItems}
                                setStatus={props.setStatus}
                                taskCompleted={props.taskCompleted}
                                />
                    }
            })
        }
         {statusFlag == "showCompletedTasks" &&
            todoItems.map((item)=>{
                if(item.completed == true){
                    counter++;
                    return <TodoItems item={item}
                            deleteItems={props.deleteItems}
                            setStatus={props.setStatus}
                            taskCompleted={props.taskCompleted}
                            />
                }
            })
        }
        {statusFlag == "showAllTasks" &&
            todoItems.map((item)=>{
                    counter++;
                    return <TodoItems item={item}
                                    deleteItems={props.deleteItems}
                                    setStatus={props.setStatus}
                                    taskCompleted={props.taskCompleted}
                            />
            })
        }
        </ul>
        <p><em style={{fontEeight: '700',color: '#2668c8'}}>Total number of tasks : {statusFlag == "showAllTasks" ? todoItems.length : counter}</em></p>
     </div>
    )
}

export default List
