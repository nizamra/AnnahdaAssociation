import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            طاولة <span style={{fontSize:'20px'}}>R61</span>
          </Typography>
          
          <Typography gutterBottom variant="h6" component="h5">
          99.99
          <span>NIS</span> 
 
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
                                        منتج خشبي صناعة يدوية 
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            الحالة
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="secondary">
        الشراء
    </Button>
      </CardActions>
    </Card>
  );
}