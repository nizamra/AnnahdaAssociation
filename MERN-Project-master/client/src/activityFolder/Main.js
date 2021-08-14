import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormingAnActivity from './ActivityForm';
import EnhancedTable from '../AdminPages/News';

// import ActivitysList from './ActivitysList';

const MainAct = () => {
    const [activitys, setActivitys] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({ title:"", post: "", pic: "" });
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
            .then(res => {
                setActivitys(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = activityId => {
        setActivitys(activitys.filter(activity => activity._id !== activityId));
    }
    const createActivity = activity => {
        console.log(activity)
        axios.post('http://localhost:8000/api/activity', activity)
            .then(res => {
                setActivitys([...activitys, res.data]);
                setErrors("");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <FormingAnActivity onSubmitProp={createActivity} allErrors={errors} initialTitle="" initialPost="" />
            <hr />
            {loaded && <EnhancedTable activity={activitys} />}
        </div>
    )
}

export default MainAct;