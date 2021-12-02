import React, { useState } from 'react'
import './SignUp.css'
import { Navigate, useNavigate } from 'react-router-dom'  
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  const PostData = () => {
    fetch('http://localhost:5000/SignIn', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
        .then(data => {
            console.log(data);
        if (data.error) {
          console.log(data.error)
        } else {
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('userId', data.userId)
          console.log(data)
          alert('Signup Successful')
          Navigate('/')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
    return (
        <>
           <div className="card">

      <div className="card-form">
        <h4>Sign In to your account</h4>

          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" onClick={() => PostData()}>Sign In</button>
      </div>
    </div>
        </>
    )
}

export default SignIn
