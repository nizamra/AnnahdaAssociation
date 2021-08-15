import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BuyForm from './BuyForm';


const BuyButton = (props) => {
    const { productCode } = props
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState({name:"", amount:"", mobile:"", address:""});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createNew = order => {
        axios.post('http://localhost:8000/api/order', 
            order
            )
            .then(res => {
                setErrors({ name: "", amount: "", mobile: "", address: "" });
                setOpen(false);
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                شراء
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <BuyForm productCode={productCode} allErrors={errors} orderProduct={createNew} />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        تراجع
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default BuyButton;