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
    width: '100%',
    height: '100%',
    marginBottom: '2%'
  },
  media: {
    width: '100%',
    height: '50%'
  }
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <Card style={{height:'600px', width:'350px'}}>
      <CardActionArea className={classes.root} >
        <CardMedia
          component="img"
          alt={props.product.pic}
          image={props.product.pic}
          title={props.product.pic}
          className={classes.media}
        />
        <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
            {props.product.title} <span style={{ fontSize: '15px' }}>{props.product.code}</span>
          </Typography>

          <Typography gutterBottom variant="h5" component="h5">
            {props.product.price}
            <span>NIS</span>

          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <p style={{ color: 'black' }}> {props.product.description} </p>
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {props.product.status}
          </Typography>
        </CardContent>
        <CardActions style={{height:'10%'}}>
          <BuyButton productCode={props.product.code} />
        </CardActions>

      </CardActionArea>
      {/* <CardActions>
        <BuyButton productCode={props.product.code} />
      </CardActions> */}
    </Card>
  );
}