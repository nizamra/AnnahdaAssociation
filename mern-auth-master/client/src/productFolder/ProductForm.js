import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Input, Button, TextField } from '@material-ui/core'


const ProductForm = (props) => {
    const { initialTitle, allErrors, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [pic, setPic] = useState([]);
    const [description, setDescription] = useState(initialDescription);
    const datForm = new FormData();

    const onSubmitHandler = e => {
        e.preventDefault();
        datForm.append("title", title);
        datForm.append("price", price);
        datForm.append("pic", pic);
        datForm.append("description", description);
        console.log(datForm);
        onSubmitProp(
            datForm
        );
        console.log("in form data to send");
        console.log(datForm);
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                <FormControl>
                    <InputLabel htmlFor="title">Title</InputLabel>
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
                    <InputLabel htmlFor="price">Price</InputLabel>
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
                    <InputLabel htmlFor="Picture">Picture</InputLabel>
                    <Input
                        id="Picture"
                        aria-describedby="pictureErr"
                        filename="pic"
                        type="file"
                        onChange={(e) => setPic(e.target.files[0])} />
                    {allErrors.picture ?
                        <FormHelperText style={{ color: 'red' }} id="pictureErr">{allErrors.picture.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    {/* <InputLabel htmlFor="outlined-secondary">Description</InputLabel> */}
                    <TextField
                        id="outlined-secondary"
                        label="description"
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