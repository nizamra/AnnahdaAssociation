import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const DeleteButton = props => {
    const { activityId, successCallback } = props;

    const deleteActivity = e => {
        axios.delete('http://localhost:8000/api/activity/' + activityId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <Button id="bu" onClick={deleteActivity} endIcon={<DeleteForeverOutlinedIcon/>} variant="contained" color="secondary"  />
    )
}
export default DeleteButton