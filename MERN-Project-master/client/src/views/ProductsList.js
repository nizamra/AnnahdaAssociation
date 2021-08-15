import { Link } from '@reach/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import DeleteButton from '../productFolder/DeleteButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Products from '../components/Products';

const useStyles = makeStyles({
    root: {
        padding: '20px 0'
    },

});

const ProductsList = () => {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div >
            {loaded && <Products products={products}/>}
        </div>
    )
}

export default ProductsList;