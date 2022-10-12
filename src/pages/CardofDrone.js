import React , {useEffect, useState} from 'react'
import axios from 'axios'
import dronepic from './drone1.jpg'; 
import './CardofDrone.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {useNavigate} from 'react-router-dom'
const CardofDrone = () => {
    const [drones,setDrones]=useState([]);
    const navigate=useNavigate();
    const getDroneData = async ()=>{
        try{
            const data = await axios.get("http://localhost:5000/api/drones")
            console.log(data.data);
            setDrones(data.data);
        }catch(e){
         console.log(e)}
    }
    const LaunchDrone=async ()=> {
      try{
       //await axios.get("http://localhost:2600/api/_getters/UbuntuTerminal")
       navigate('/tracking');
    }catch(e){
     console.log(e)}
      
    }
    useEffect(()=>{
       getDroneData()
    },[])

  return (
      <div className="drone-container">
         <h1 className="drone-h1">List of drones</h1>
        <Splide
        options={{
            perPage:3,
            pagination:false,
    
        }}>
     {drones.map((drone) => {
         return (
            <SplideSlide >
                  <div className="wrapper">
                < div className="card_body">
                <img className="imgofcard" src={dronepic}></img>
                <h1 className="h1ofcard">{drone.drone_ref}</h1>
                <button className="button" onClick={LaunchDrone}>Launch Drone</button>
              </div>
              </div>
              </SplideSlide>
          
         )})}
         </Splide>
         </div>
  )
}

export default CardofDrone