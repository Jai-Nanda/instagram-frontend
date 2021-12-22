import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreatePost from './pages/CreatePost'
import {reducer,initialState} from './reduxx/Reducer'
export const UserContext = createContext()


const Routing = ()=>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    const bruh = localStorage.getItem("userId")
    const user = localStorage.getItem("userId")
    if (user) {
        dispatch({type:"USER",payload:user})
        navigate.push('/')
      }
      else {
        navigate.push('/SignIn')
      }
    }, [])  
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Routes>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;