import React from "react";
import axios from "./axios";
import ClientRegister from "./clientregister";
import GradRegister from "./gradregister";

import Login from "./login";
import { Link } from 'react-router-dom';
// import { Browser };
import { BrowserRouter, Route } from "react-router-dom";


export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "",
            last: "",
            imageurl: "",
            bio: "",
            id: "", 
            uploaderIsVisible: false
        };
       
    }

    componentDidMount() {
        console.log("App mounted");
       
    }	  


    render () {
        console.log(this.state);
        return ( 
            <div>
                <BrowserRouter>
                    <div>

                
                        {/* <Header 
                            imageurl = {this.state.imageurl}/> */}
                        
                   
                        <Route exact path="/" render={
                            props =>
                                <div>
                                    <div> HEY THERE SUGAR </div>
                                    
                                </div>     
                        } />

                    </div>
                </BrowserRouter>
            </div> 
                
                
        )
    }
}

