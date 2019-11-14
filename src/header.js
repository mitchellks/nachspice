import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';
import { HashRouter, Route } from "react-router-dom";
// import logout from "./logout";

export default function Header() {

  


    return (
        <div className="header">
            
<div className="headerlogo"> NACHSPICE </div>
<div className="headerlinks">
        <Link to="/graduate">
           <div className="headerbutton"> Graduate Profiles</div> <span> </span> 
        </Link><span> </span>
        <span> </span>
        <Link to="/projects">
        <div className="headerbutton">  See Projects </div><span> </span>
        </Link>
        <span> </span>
        <Link to="/client">
        <div className="headerbutton"> Client profile </div><span> </span>
        </Link> 
        <span>  </span>
        <Link to="/addproject">
        <div className="headerbutton"> Add Project </div>
        </Link>
        <span> </span>
        <Link to="/project">
        <div className="headerbutton">  YOUR PROJECT </div><span> </span>
            </Link>
            <span> </span>
        <Link to="/portfolios">
        <div className="headerbutton">  SEE GRADUATE PORTFOLIOS </div><span> </span>
            </Link>
            <Link to="/logout">
        <div className="headerbutton" onClick={() => axios.get("/api/logout")}>  log out </div><span> </span>
            </Link>
        </div>
        </div>


    );
}