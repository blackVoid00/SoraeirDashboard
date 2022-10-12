import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Routing from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Login from "./pages/Login"
import {Switch , Route} from "react-router-dom"
export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
     
    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Soraeirdashboard</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                   <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Nunito+Sans:wght@200&display=swap" rel="stylesheet"/>
                </Helmet>
                <>
                  <Routing></Routing>
                </>
                <>
               
                
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;