import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from '../activityFolder/DeleteButton';
import { Button, Paper, Card, CardContent } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import moment from 'moment'
import Activity from '../components/Activity';
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
        <div>
            {loaded && <Activitys activitys={activitys}/> }
        </div>
    )
}

export default ActivitysList;