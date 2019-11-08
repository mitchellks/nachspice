import React from "react";
import axios from "./axios";
import ClientRegister from "./clientregister";
import GradRegister from "./gradregister";
import Login from "./login";
import { HashRouter, Route } from "react-router-dom";
import App from "./app";

export default function Welcome() {
    return (
        <div >
            <div className="welcometext">NACHSPICE HERE WE GO</div>
            <div className="welcome">
            <img src="" />
            </div>
            <div className="welcome"></div>
            <span />
           
            <div className="welcome">
            
<HashRouter>
            <Route exact path="/" component={GradRegister} />
            <Route exact path="/" component={ClientRegister} />
                    <Route path="/login" component={Login} />
                    {/* <Route path="/home" component={Home} /> */}
            </HashRouter>
            </div>
        </div>
    );
}
