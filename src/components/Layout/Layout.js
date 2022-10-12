import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
    return (
        <SLayout>
          
          <Topbar></Topbar>
            <Sidebar />
            <SMain>{children}</SMain>
          
        </SLayout>
    );
};

export default Layout;