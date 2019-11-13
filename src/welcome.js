import React from "react";
import axios from "./axios";
import ClientRegister from "./clientregister";
import GradRegister from "./gradregister";
import Login from "./login";
import { HashRouter, Route } from "react-router-dom";
import App from "./app";
import { Link } from 'react-router-dom';
import { Grommet } from 'grommet';

export default function Welcome() {


    
    return (
            <div className="landing">
                 <div >
            <div className="welcometext">
                NACHSPICE
                </div>
            <div className="welcome">



           

            
            <HashRouter>    
            {/* <Link to ="/gradregister">Hi  </Link> */}
                {/* </button>
                </button> */}

            
<Link to ="/gradregister">
                <button> REGISTER AS A GRADUATE  </button> </Link>
                    <Route path="/gradregister" component={GradRegister} />
                   
           {/* <Link to="./gradregister">Click here to Log in!</Link> */}
           <Link to ="/clientregister">
           <button> BOOK A JOB </button>  </Link>  

               <Route path="/clientregister" component={ClientRegister} /> 
               

               <Link to ="/login">   
           <button> Login to existing account </button>  </Link>   
               <Route path="/login" component={Login} /> 
              
                    {/* <Route path="/home" component={Home} /> */}
            </HashRouter>
           
            </div>
            </div>
        </div>
    );
}
