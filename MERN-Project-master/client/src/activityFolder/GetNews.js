import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Acts from './ActivitysList';

const GetNews = () => {
    const [activitys, setActivitys] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
            .then(res => {
                setActivitys(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            {loaded && <Acts activitys={activitys} />}
        </div>
    )
}

export default GetNews;