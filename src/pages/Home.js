import React, { useState, useEffect } from 'react'
import './Home.css'
const Home = () => {
	const[allposts, setAllposts] = useState([])
	useEffect(() => {
		fetch('http://localhost:5000/allposts', {
			method: 'get',
			headers: {
				"Authorization": "Bearer " + localStorage.getItem('jwt'),
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(allpost => {
				console.log(allposts)
				setAllposts(allposts.posts)
			})
			.catch(err => {
				console.log(err)
			}
				
				)
			})
    return (
        <>
			<div id="card">
				{
					allposts.map(post => {
						return (
							<div className="card-body">
								<h5 className="card-title">{post.title}</h5>
								<p className="card-text">{post.body}</p>
							</div>
						)
					})
				}


	<h1>John Doe</h1>
	<div className="image-crop">
		<img id="avatar" src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"></img>
	</div>
	<div id="bio">
		<p>Hello, my name is John! Bacon ipsum dolor amet short ribs prosciutto strip steak, pig ham tongue buffalo beef ribs hamburger pork venison. </p>
	</div>
	<div id="stats">
		<div className="col">
			<p className="stat">108</p>
			<p className="label">Posts</p>
		</div>
				<div className="col">
			<p className="stat">457</p>
			<p className="label">Followers</p>
		</div>
				<div className="col">
			<p className="stat">229</p>
			<p className="label">Following</p>
		</div>
	</div>
	<div id="buttons">
		<button>Follow</button>
		<button id="msg">Message</button>
	</div>
</div>
        </>
    )
}

export default Home
