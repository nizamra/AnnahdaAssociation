import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [activity, setActivity] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/activity/" + props.id)
            .then(res => {
                console.log("useEffect inside Detail.js");
                setActivity(res.data);
            })
    }, [props.id])
    return (
        <div>
            <Link to={"/"}>Home</Link>

            <p>Post: {activity.post}</p>
            <p>Picture: {activity.pic}</p>
            
            <p>Date of Creation: {activity.createdAt}</p>

            <Link to={"/activity/" + activity._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;