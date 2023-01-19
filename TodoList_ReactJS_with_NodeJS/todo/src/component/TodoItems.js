import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const TodoItems = (props) => {
    let {name, activeStatus, deActiveStatus, completed, id} = props.item
    const deleteItems = props.deleteItems
    const setStatus = props.setStatus
    const taskCompleted = props.taskCompleted
    const decideStatus = (value) => {
        value == true? setStatus(id, 'active') : setStatus(id, 'deactive')
    }


    return(
        <div>
            <li key={id} className="list-group-item" style={{display: 'flex',justifyContent: 'space-between'}}>
            <label>
                <input type="checkbox" key={`key_${id}`}
                       checked={activeStatus ? 'checked' : ''}
                       onChange={(event) => decideStatus(event. target. checked)}
                />
                <span style={{ textDecoration: completed ? "line-through" : "", marginLeft : '10px'}}>{name}</span>
            </label>
            <span style={{display: 'flex',justifyContent: 'space-around',width: '130px'}}>
                <CheckIcon onClick={()=>{activeStatus && taskCompleted(id)}} style={{color: activeStatus ? "green" : "#1d3b1d5c"}}/>
                <DeleteIcon onClick={()=>{deleteItems(id)}} style={{color : 'red'}}/>
            </span>
            </li>
        </div>
    )
}

export default TodoItems
