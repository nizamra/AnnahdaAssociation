import React, { useState } from 'react'
// import { FormData } from "form-data"
// import FileBase64 from 'react-file-base64';

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
                <p>
                    <label>Title</label><br />
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                    {allErrors.title ?
                        <p style={{ color: 'red' }}>{allErrors.title.message}</p> : ''
                    }
                </p>
                <p>
                    <label>Price</label><br />
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                    {allErrors.price ?
                        <p style={{ color: 'red' }}>{allErrors.price.message}</p> : ''
                    }
                </p>
                <p>
                    <label>Picture </label>
                    <input
                        type="file"
                        filename="pic"
                        onChange={(e) => setPic(e.target.files[0])} />
                    {/* <FileBase64
                        multiple={false}
                        onDone={({base64})=>setPic(base64)} /> */}
                </p>
                <p>
                    <label>Descriptione</label><br />
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />
                    {allErrors.description ?
                        <p style={{ color: 'red' }}>{allErrors.description.message}</p> : ''
                    }
                </p>
                <input type="submit" />
            </form>
        </>
    )
}

export default ProductForm;