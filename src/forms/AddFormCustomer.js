import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import {FaPlusCircle} from 'react-icons/fa'
import './form.css'
import Axios from 'axios'
const AddFormCustomer = () => {
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [fillStatus,setStatus]=useState(false)
    const postCustomer=()=>{
      if(firstname.trim() === "" && lastname.trim()==="" && email.trim()==="" && password.trim()==="" && phone.trim()==="" && address.trim()===""){
       setStatus(true)
      }else{
        Axios.post('http://localhost:5000/api/customers',{ firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        address:address,
        phone:phone}).then(()=>{
            alert("Customer successfully inserted");
        });
      }
     
    }
  return (
    <div className="main">
    <h1 className="h1form">Add Customer </h1>

    <input type="text" name="firstname" className="input" onChange={(e)=>{setFirstname(e.target.value)}} placeholder="type the firstname"></input>
    
    <input type="text" name="lastname" className="input" onChange={(e)=>{setLastname(e.target.value)}} placeholder="type the lastname"></input>
    
    <input type="text" name="email" className="input"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="type the email"></input>
   
    <input type="text" name="password" className="input"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="type the password"></input>
   
    <input type="text" name="address" className="input" onChange={(e)=>{setAddress(e.target.value)}} placeholder="type the address"></input>
   
    <input type="text" name="phone"className="input"  onChange={(e)=>{setPhone(e.target.value)}} placeholder="type the phone number"></input>
     <button className="btn" onClick={postCustomer}> Add</button>
     {fillStatus && (<h1 className="error">fill all the form</h1>)}
    
    </div>
  )
}

export default AddFormCustomer