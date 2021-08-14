import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Input, Button } from '@material-ui/core'

const ActivityForm = (props) => {
    const { initialTitle, initialPost, allErrors, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [post, setPost] = useState(initialPost);
    const [pic, setPic] = useState([]);
    const datForm = new FormData();

    const onSubmitHandler = e => {
        e.preventDefault();
        datForm.append("title", title);
        datForm.append("post", post);
        datForm.append("pic", pic);
        onSubmitProp(
            datForm
        );
        setTitle("");
        setPic([]);
        setPost("");
    }

    return (
        <>
            <h2>إضافة الأخبار</h2>
            <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
            <FormControl>
                    <InputLabel htmlFor="title">العنوان الرئيسي</InputLabel>
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
                    <InputLabel htmlFor="post">المضمون</InputLabel>
                    <Input
                        id="post"
                        aria-describedby="postErr"
                        type="text"
                        onChange={(e) => setPost(e.target.value)}
                        value={post} />
                    {allErrors.post ?
                        <FormHelperText style={{ color: 'red' }} id="postErr">{allErrors.post.message}</FormHelperText> : ''}
                </FormControl><br />
                <FormControl>
                    <InputLabel htmlFor="Picture">صورة</InputLabel>
                    <Input
                        id="Picture"
                        aria-describedby="pictureErr"
                        filename="pic"
                        type="file"
                        onChange={(e) => setPic(e.target.files[0])} />
                    {allErrors.picture ?
                        <FormHelperText style={{ color: 'red' }} id="pictureErr">{allErrors.picture.message}</FormHelperText> : ''}
                </FormControl><br />
                <Button type="submit" variant="contained" color="primary"> إضافة </Button>
            </form>
        </>
    )
}

export default ActivityForm;