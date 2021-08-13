import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import './activity.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Activity(props) {
  const classes = useStyles();
  const dateOfItem = moment(props.activity.createdAt).format('L')

  return (
    <Card className={classes.root} style={{margin:'auto' , marginBottom:'40px'}} className='makeStylesroot'>
      <CardActionArea >

        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.activity.pic}
          title="Contemplative Reptile"
        />
                <Typography variant="body2" color="textSecondary" component="p">
          تاريخ الإضافة: {dateOfItem}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.activity.post}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}