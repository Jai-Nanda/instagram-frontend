import { useEffect, createContext } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import CreatePost from './pages/CreatePost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const userContext = createContext()
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App;