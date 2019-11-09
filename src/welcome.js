import React from "react";
import axios from "./axios";
import ClientRegister from "./clientregister";
import GradRegister from "./gradregister";
import Login from "./login";
import { HashRouter, Route } from "react-router-dom";
import App from "./app";
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
            <div className="landing">
                 <div >
            <div className="welcometext">
                NACHSPICE
                </div>
            <div className="welcome">

                <button> Submit a project</button>
                <button> Register as a graduate</button>
                <button> Login to existing account</button>
                
            
<HashRouter>
           <Route path="/" component={GradRegister} />
           {/* <Link to="./gradregister">Click here to Log in!</Link> */}
            <Route path="/" component={ClientRegister} />

            
                    <Route path="/login" component={Login} />
                    {/* <Route path="/home" component={Home} /> */}
            </HashRouter>
           
            </div>
            </div>
        </div>
    );
}
