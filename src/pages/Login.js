import React from 'react'
import './Login.css'

import drone from '../assets/logo.png'
import { useState } from 'react'
import Axios from 'axios'
import { Routes, Route ,useNavigate} from "react-router-dom";
import App from "../App";
const Login = () => {
  const navigate =useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loginstatus , setLoginstatus]=useState(false);
  const Login =()=>{
    Axios.post('http://localhost:5000/api/auth/login',{ 
    email:email,
    password:password
    }).then((response)=>{
        if (response.status!=200){ 
          setLoginstatus(false);
      }else{ 
        console.log(response.data.accessToken)
        localStorage.setItem('token',"Bearer " + response.data.accessToken)
        setLoginstatus(true)}

       
    });
  }
  const NavigateToDash=()=>{
    navigate("/customers")
  }
  return (
    <div className="main-div">
      <div className="card-side">
        <img className="imgoflogin" src={drone}></img> <br></br>
        <h1 className="firsth1">Deliver your medicines in one click </h1><br></br>
        <h1 className="secondh1">Track your deliveries real time</h1>
      </div>
      <div className="card-form">
        <h1 className="header">Sign in</h1>
        <label>Email address</label> <br></br>
        <input type="text" className="login-input" onChange={(e)=>{setEmail(e.target.value)}}placeholder="Enter your email address"></input> <br></br>
        <label>Password</label> <br></br>
        <input type="password" className="login-password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password"></input> <br></br>
        <button className="btn-login" onClick={Login}>Connect</button><br></br>
       {loginstatus && (<button className="btn-dash" onClick={NavigateToDash}>Dashboard</button>)}
      </div>
    
    </div>
  )
}

export default Login