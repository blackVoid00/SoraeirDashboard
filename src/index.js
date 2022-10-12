import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router  } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";

ReactDOM.render(
    <Router>
     <App/>
     </Router>,
    document.getElementById("root")
);

