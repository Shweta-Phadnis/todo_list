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
    debugger
    let {name, activeStatus, deActiveStatus, completed, id} = props.item
    const deleteItems = props.deleteItems
    const setStatus = props.setStatus
    const taskCompleted = props.taskCompleted
    let isChecked = false
    const decideStatus = (value) => {
        debugger
        isChecked = value == true? true : false
        value == true? setStatus(id, 'active') : setStatus(id, 'deactive')
    }


    return(
        <div>
            <li class="list-group-item" style={{display: 'flex',justifyContent: 'space-between'}}>
            <label>
                <input type="checkbox"
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