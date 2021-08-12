import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ActivityForm from './ActivityForm';
import DeleteButton from './DeleteButton';

const Update = props => {
    const { id } = props;
    const [activity, setActivity] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/activity/' + id)
            .then(res => {
                console.log("useEffect inside Update.js");
                setActivity(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateActivity = (layth) => {
        axios.put('http://localhost:8000/api/activity/' + id, layth)
            .then(res => console.log(res));
        navigate('/activity/' + id);
    }

    return (
        <div>
            <Link to={'/activity/' + id}>
                Cancel
            </Link>
            <h1>Update this Activity</h1>
            {loaded && (
                <>
                    <ActivityForm
                        onSubmitProp={updateActivity}
                        initialPost={activity.post}
                    />
                    <DeleteButton activityId={activity._id} successCallback={() => navigate("/activity")} />
                </>
            )}
        </div>
    )
}

export default Update