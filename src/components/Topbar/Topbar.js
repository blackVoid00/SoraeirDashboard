import React from 'react'

import './Topbar.css'
import { IoIosLogOut,IoIosSettings } from "react-icons/io";
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className="mainbar">
     <div className="topbar">
         <div className="space">
       
         
         </div>
         <div className="settings">
         <IconContext.Provider
      value={{ color: 'white', size: '30px' }}
    >
        <IoIosSettings/> &nbsp;&nbsp; 
        
        <IoIosLogOut>
        </IoIosLogOut>
          </IconContext.Provider>
         </div>
     </div>
    </div>
  )
}

export default Topbar