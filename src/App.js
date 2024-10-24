//react imports
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from "react";
//firebase imports
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
//import css
import './css/navbar.css'; 
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear(); //clear login data on local storage
      setIsAuth(false); //set state to logged out
      window.location.pathname = "/login"; //redirect to login page on logout
    });
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        {!isAuth ? <Link to="/login">Login</Link> : (
          <>
            <Link to="createpost">Create Post</Link>
            <button onClick={logOut}>Log Out</button>
          </>
        )}
      </nav>
      <div style={{ paddingTop: '50px' }}> {/* padding to prevent overlap */} </div>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
