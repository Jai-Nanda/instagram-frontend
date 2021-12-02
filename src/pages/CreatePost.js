import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const addPost = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'instagram')
        data.append('cloud_name', 'jainanda')
        fetch('https://api.cloudinary.com/v1_1/jainanda/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
           <>
           <div className="card">

      <div className="card-form">
        <h4>Create a Post</h4>

          <div className="form-item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="description ">Description</label>
            <input
              type="text"
              id="description"
                            placeholder="Enter description"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
            />
                    </div>
                     <div className="form-item">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
                            id="photo"
                            value={image}
                            onChange={(e) => console.log(e.target.files[0])}
            />
          </div>

          <button type="submit" onClick={()=> addPost()} >Create Post</button>
      </div>
    </div>
        </>
    )
}

export default CreatePost
