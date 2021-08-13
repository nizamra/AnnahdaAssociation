import { Link } from '@reach/router';
import React from 'react'
import moment from 'moment'
import DeleteButton from '../productFolder/DeleteButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import BuyButton from '../productFolder/BuyButton'

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

const ProductsList = (props) => {
    const classes = useStyles();
    const { products, setProducts } = props;
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h3>entering the List of All Products</h3>
            {products.map((product, idx) => {
                const dateOfItem = moment(product.createdAt).format('L')
                return <Card className={classes.root} variant="outlined" key={idx}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={"/pictures/" + product.pic}
                            title={product.pic}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                السعر: {product.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.description}
                                <br />
                                تاريخ الإضافة: {dateOfItem}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <BuyButton productCode={product.code} />
                    </CardActions>
                </Card>
            })}
        </div>
    )
}

export default ProductsList;