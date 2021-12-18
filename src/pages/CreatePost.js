import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
    const addPost = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'clone-instagram')
        data.append('cloud_name', 'jainanda')
        fetch('https://api.cloudinary.com/v1_1/jainanda/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
      fetch('http://localhost:5000/posts/createpost', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          title,
          content,
          url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
          alert("khuch toh garbar hain")
          }
          else {
            alert('bangyi post poggers')
          }
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
                            onChange={(e)=>setImage(e.target.files[0])}
            />
          </div>

          <button type="submit" onClick={()=> addPost()} >Create Post</button>
      </div>
    </div>
        </>
    )
}

export default CreatePost
