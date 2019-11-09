import React from "react";
import axios from "./axios";
import ClientRegister from "./clientregister";
import GradRegister from "./gradregister";

import Login from "./login";
import { Link } from 'react-router-dom';
// import { Browser };
import { BrowserRouter, Route } from "react-router-dom";
import Client from "./client";
import Header from "./header";

// import {ClientEdit} from "./clientedit";
import Graduate from "./graduate";


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

                
                        <Header 
                            />
                        
                   
                        <Route exact path="/" render={
                            props =>
                                <div>
                                    <div> HEY THERE SUGAR </div>
                                    
                                </div>     
                        } />

                        <Route path ="/client"
                            render = {props => 
                                // <div> TEST </div> }
                                (
                                <Client 
                                key={props.match.url}
                                    match={props.match}
                                    history={props.history}/>
                            )}
                            
                        />

                        <Route path ="/graduate"
                            render = {props => 
                                // <div> TEST </div> }
                                (
                                <Graduate 
                                key={props.match.url}
                                    match={props.match}
                                    history={props.history}/>
                            )}
                            
                        />

                        {/* <Route path ="/chat"
                            render = {props => (
                                <Chat 
                                key={props.match.url}
                                    match={props.match}
                                    history={props.history}/>
                            )}
                        /> */}




                    </div>
                </BrowserRouter>
            </div> 
                
                
        )
    }
}

