import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BuyButton from '../productFolder/BuyButton'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{margin:'20px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.product.pic}
          height="140"
          image={props.product.pic}
          title={props.product.pic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.title} <span style={{fontSize:'20px'}}>{props.product.code}</span>
          </Typography>
          
          <Typography gutterBottom variant="h6" component="h5">
          {props.product.price}
          <span>NIS</span> 
 
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
                                        {props.product.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
          {props.product.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <BuyButton productCode={props.product.code} />
      </CardActions>
    </Card>
  );
}