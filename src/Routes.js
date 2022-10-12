import React from "react";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/Customers";
import AddFormCustomer from "./forms/AddFormCustomer"
import AddFormStation from "./forms/AddFormStation"
import AddFormCategory from "./forms/AddFormCategory"
import AddFormDrone from "./forms/AddFormDrone"
import AddFormProduct from "./forms/AddFormProduct"
import CardofDrone from "./pages/CardofDrone";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import RealTime from "./pages/RealTime";
import Stations from "./pages/Stations";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";


const Routing = () => {
    return (
        <Routes>
          
            <Route exact path="/tracking" element={<Layout><RealTime /></Layout>}> 
              
            </Route>
            <Route exact path="/login" element={<Login />}> 
              
            </Route>
             <Route exact path="/products" element={<Layout><Products /></Layout>}>
           
            </Route>
            <Route exact path="/orders" element={<Layout><Orders /></Layout>}>
          
            </Route>
            <Route exact path="/stations" element={<Layout><Stations /></Layout>}>
           
            </Route>
            <Route exact path="/customers" element={<Layout><Customer /></Layout>}>
           
            </Route>
            <Route exact path="/drones" element={<Layout><CardofDrone /></Layout>}> 
               
            </Route>
            <Route exact path="/categories" element={<Layout><Categories /></Layout>}> 
              
            </Route>
            <Route exact path="/addformcustomer" element={<Layout><AddFormCustomer /></Layout>}>
              
           </Route>
           <Route exact path="/addformcategory" element={<Layout><AddFormCategory /></Layout>}>
                
           </Route>
           <Route exact path="/addformdrone" element={<Layout><AddFormDrone /></Layout>}>
                
           </Route>
           <Route exact path="/addformproduct" element={<Layout><AddFormProduct /></Layout>}>
               
           </Route>
           <Route exact path="/addformstation" element={<Layout><AddFormStation /></Layout>}>
                
           </Route>
        </Routes>
    );
};

export default Routing;