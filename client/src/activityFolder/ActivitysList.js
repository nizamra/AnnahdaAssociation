import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from './DeleteButton';
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

    const { activitys, setActivitys } = props;
    const removeFromDom = activityId => {
        setActivitys(activitys.filter(activity => activity._id !== activityId))
    }

    return (
        <div>
            <Card>
            </Card>

            {activitys.map((activity, idx) => {
                const dateOfItem = moment(activity.createdAt).format('L')
                return (
                    <div key={idx}>
                        <Card className={classes.root} variant="outlined" key={idx}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={"/pictures/" + activity.pic}
                            title={activity.pic}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {activity.post}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                تاريخ الإضافة: {dateOfItem}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <DeleteButton activityId={activity._id} successCallback={() => removeFromDom(activity._id)} />
                    </CardActions>
                </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default ActivitysList;