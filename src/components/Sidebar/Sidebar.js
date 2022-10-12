import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SSidebar,
    SLogo,
    SSidebarButton,
} from "./styles";

import { logoSVG } from "../../assets";

import {
 
    AiOutlineLeft,
   
} from "react-icons/ai";

import { IoMdAirplane ,IoIosSettings} from "react-icons/io";

import { MdLogout,MdOutlineCategory,MdOutlineAddLocation ,MdMedication,MdShoppingCart} from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";
import {IconContext} from 'react-icons'
const Sidebar = () => {
    const searchRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
          
            <SDivider />
            <IconContext.Provider
      value={{ color: 'black', size: '20px' }}
    >
            {linksArray.map(({ icon, label, path }) => (
                <SLinkContainer key={label} isActive={pathname === path}>
                    <SLink to={path} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                              
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            </IconContext.Provider>
    
            
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Customers",
        icon: <BsPeople />,
        path: "/customers",
       
    },
    {
        label: "Orders",
        icon: <MdShoppingCart />,
        path: "/orders",
      
    },
    {
        label: "Products",
        icon: <MdMedication/>,
        path: "/products",
       
    },
    {
        label: "Categories",
        icon: <MdOutlineCategory/>,
        path: "/categories",
       
    },
    {
        label: "Stations",
        icon: <MdOutlineAddLocation/>,
        path: "/stations",
       
    },
    {
        label: "Drones",
        icon: <IoMdAirplane/>,
        path: "/drones",
       
    },
  
];



export default Sidebar;