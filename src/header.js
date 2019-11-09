import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            
<div className="headerlogo"> NACHSPICE </div>
        <Link to="/graduates">
            Graduates
        </Link>
        <Link to="/projects">
            Projects
        </Link>

        </div>
    );
}