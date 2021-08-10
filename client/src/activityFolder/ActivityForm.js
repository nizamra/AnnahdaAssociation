import React, { useState } from 'react'
// import { FormData } from "form-data"
// import FileBase64 from 'react-file-base64';

const ActivityForm = (props) => {
    const { initialPost, allErrors, onSubmitProp } = props;
    const [post, setPost] = useState(initialPost);
    const [pic, setPic] = useState([]);

    const datForm = new FormData();

    const onSubmitHandler = e => {
        e.preventDefault();
        datForm.append("post", post);
        datForm.append("pic", pic);
        onSubmitProp(
            datForm
        );
        setPost("");
    }

    return (
        <>
            <h2>Activity Manager</h2>
            <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                <p>
                    <label>Post</label><br />
                    <input
                        type="text"
                        onChange={(e) => setPost(e.target.value)}
                        value={post} />
                    {allErrors.post ?
                        <p style={{ color: 'red' }}>{allErrors.post.message}</p> : ''
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
                <input type="submit" />
            </form>
        </>
    )
}

export default ActivityForm;