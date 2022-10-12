import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript,Marker} from '@react-google-maps/api';
import './RealTime.css';
const containerStyle = {
  width: '680px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

 const RealTime =()=> {
  const[counter,setCounter]=useState(142124.78)
  const StartTimer = () => {
    setInterval(()=>{
        setCounter(timer => timer + 1)
    },1000)
}
useEffect(()=> {
  StartTimer()
},[])
  return (
    <LoadScript
      googleMapsApiKey="YOUR API KEY"
    >
      <div className='Mainwrapper'>
      <div className="containerofMap">
        <h1 className="HeaderMap">Real time Tracking</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
      >
        <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      <button className="btnStop">Stop Tracking</button>
      </div>
      <div className="containerofTelemetry">
            <h1 className="h1oftele">Flight Telemetry</h1>
            <div className="containerImage">
           
            </div>
            <div className="containerP">
            <p>Latitude &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 23</span></p><br></br>
            <p>Velocity : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 22</span>Km/h</p><br></br>
            <p>Longitude : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 1457.90</span></p><br></br>
            <p>Altitude : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 20</span>m</p><br></br>
            <p>Time flight : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 1</span>s</p><br></br>
            <p>Battery pourcentage : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 100</span>%</p><br></br>
            <p>Humidity : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 47</span></p><br></br>
            <p>Temperature : &nbsp;&nbsp; : &nbsp;&nbsp; &nbsp;&nbsp;<span className=""> 28</span></p><br></br>
            </div>
          
      </div>
      </div>
    </LoadScript>
  )
}

export default RealTime

