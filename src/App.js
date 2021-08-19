import React from 'react'
import { Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import ListofJobs from "./components/ListofJobs";

import SignUp from './components/Signup'; 
import Login from "./components/Login";



const App = () => {
  return (
    <>
    <Navbar/>

    <Route exact path="/">
    <Home/>
    </Route>

    
    <Route  path="/about">
    <About/>
    </Route>

   
    <Route path="/ListofJobs">
    <ListofJobs/>
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/signup">
    <SignUp/>
    </Route>
    </>
    

  )
}


export default App;