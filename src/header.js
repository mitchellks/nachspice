import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';
import { HashRouter, Route } from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            
<div className="headerlogo"> NACHSPICE </div>
<div className="headerlinks">
        <Link to="/graduate">
            Your profile<span> </span> 
        </Link><span> </span>
        <span> </span>
        <Link to="/projects">
            See Projects<span> </span>
        </Link>
        <span> </span>
        <Link to="/client">
            Your profile<span> </span>
        </Link> 
        <span>  </span>
        <Link to="/addproject">
            Add Project 
        </Link>
        </div>
        </div>
    );
}