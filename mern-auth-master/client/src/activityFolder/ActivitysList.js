import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

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

const ActivitysList = (props) => {
    const classes = useStyles();
    const [activitys, setActivitys] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/activity')
            .then(res => {
                setActivitys(res.data);
            });
    }, [])
    return (
        <div>
            <h3>جميع الأخبار</h3>
            {activitys.map((activity, idx) => {
                const dateOfItem = moment(activity.createdAt).format('L')
                return <Card className={classes.root} variant="outlined" key={idx}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={"/pictures/" + activity.pic}
                            title={activity.pic}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {activity.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {activity.post}
                                <br />
                                تاريخ الإضافة: {dateOfItem}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })}
        </div>
    )
}

export default ActivitysList;