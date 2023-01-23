import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const styles = {
    title : {
        color : 'rgb(15 20 25)',
        fontSize : '20px',
        marginLeft : "20px"

    },
    container : {
        paddingTop : '20px',
        height : '50px',
    }
}

const TodoItems = (props) => {
    let {name, activeStatus, deActiveStatus, completed, task_id} = props.item
    const deleteItems = props.deleteItems
    const setStatus = props.setStatus
    const taskCompleted = props.taskCompleted

    const decideStatus = (value) => {
        value == true? setStatus(task_id, 'active') : setStatus(task_id, 'deactive')
    }


    return(
        <div>
            <li key={task_id} className="list-group-item" style={{display: 'flex',justifyContent: 'space-between'}}>
                <label>
                    <input type="checkbox" key={`key_${task_id}`}
                        checked={activeStatus ? 'checked' : ''}
                        onChange={(event) => decideStatus(event. target. checked)}
                    />
                    <span style={{ textDecoration: completed ? "line-through" : "", marginLeft : '10px'}}>{name}</span>
                </label>
                <span style={{display: 'flex',justifyContent: 'space-around',width: '130px'}}>
                    <CheckIcon onClick={()=>{activeStatus && taskCompleted(task_id)}} style={{color: activeStatus ? "green" : "#1d3b1d5c"}}/>
                    <DeleteIcon onClick={()=>{deleteItems(task_id,name)}} style={{color : 'red'}}/>
                </span>
            </li>
        </div>
    )
}

export default TodoItems