import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Input, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ProductForm = (props) => {
    const classes = useStyles();
    const { initialTitle, initialCode, initialStatus, allErrors, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [code, setCode] = useState(initialCode);
    const [status, setStatus] = useState(initialStatus);
    const [price, setPrice] = useState(initialPrice);
    const [pic, setPic] = useState([]);
    const [description, setDescription] = useState(initialDescription);
    const datForm = new FormData();


    const onSubmitHandler = e => {
        e.preventDefault();
        datForm.append("title", title);
        datForm.append("code", code);
        datForm.append("price", price);
        datForm.append("pic", pic);
        datForm.append("status", status);
        datForm.append("description", description);
        onSubmitProp(
            datForm
        );
        setTitle("");
        setCode("");
        setPrice("");
        setPic([""]);
        setStatus("");
    }

    return (
        <>
            <h2>إدارة المنتجات</h2>
            <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                <FormControl>
                    <InputLabel htmlFor="title">الاسم</InputLabel>
                    <Input
                        id="title"
                        aria-describedby="titleErr"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                    {allErrors.title ?
                        <FormHelperText style={{ color: 'red' }} id="titleErr">{allErrors.title.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="code">الكود</InputLabel>
                    <Input
                        id="code"
                        aria-describedby="codeErr"
                        type="text"
                        onChange={(e) => setCode(e.target.value)}
                        value={code} />
                    {allErrors.code ?
                        <FormHelperText style={{ color: 'red' }} id="codeErr">{allErrors.code.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="price">السعر</InputLabel>
                    <Input
                        id="price"
                        aria-describedby="priceErr"
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                    {allErrors.price ?
                        <FormHelperText style={{ color: 'red' }} id="priceErr">{allErrors.price.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="Picture">الصورة</InputLabel>
                    <Input
                        id="Picture"
                        aria-describedby="pictureErr"
                        filename="pic"
                        type="file"
                        onChange={(e) => setPic(e.target.files[0])} />
                    {allErrors.picture ?
                        <FormHelperText style={{ color: 'red' }} id="pictureErr">{allErrors.picture.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl required className={classes.formControl}>
                    <InputLabel id="status">الحالة</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value="متوفر">متوفر</MenuItem>
                        <MenuItem value="غير متوفر">غير متوفر</MenuItem>
                        <MenuItem value="على الطلب">على الطلب</MenuItem>
                    </Select>
                    {allErrors.status ?
                        <FormHelperText style={{ color: 'red' }} id="statusErr">{allErrors.status.message}</FormHelperText> : 'حقل إجباري'}
                </FormControl><br />
                <FormControl>
                    {/* <InputLabel htmlFor="outlined-secondary">Description</InputLabel> */}
                    <TextField
                        id="outlined-secondary"
                        label="الوصف"
                        variant="outlined"
                        // color="secondary"
                        aria-describedby="descriptionErr"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)} />
                    {allErrors.description ?
                        <FormHelperText style={{ color: 'red' }} id="descriptionErr">{allErrors.description.message}</FormHelperText> : ''}
                </FormControl><br />
                <Button type="submit" variant="contained" color="primary"> Add/updata </Button>
            </form>
        </>
    )
}

export default ProductForm;