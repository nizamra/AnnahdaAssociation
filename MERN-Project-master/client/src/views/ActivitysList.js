import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Activitys from '../components/Activitys';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        height: 330,
        display: 'inline-block',
    },
    media: {
        height: 140,
    },
});

const ActivitysList = () => {
    const [loaded, setLoaded] = useState(false);
    const [activitys, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
            .then(res => {
                setActivities(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div style={{padding:'20px 0'}}>
            {loaded && <Activitys activitys={activitys}/> }
        </div>
    )
}

export default ActivitysList;