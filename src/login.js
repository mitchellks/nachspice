import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

   

    handleChange({target}) {
        // let target = e.target;
        // this[target.name] = taeget.value
        this.setState({
            [target.name]: target.value
        });
        console.log("handlechange on login works?");
        console.log("target value", target.value);
    }

   

    componentDidMount() {
        console.log("login mounted");
    }

    submit() { 
        console.log(" login submit?????");
        axios.post("/login", {
            email: this.state.email,
            password: this.state.password
        }).then (
            ({data}) => {
                console.log("testing data", data);
                if (data.success) {  
                    // console.log("Data made it through: ", data.success);
                    location.replace("/");
                } else {
                    this.setState({ 
                        
                        error: true
                    });
                    console.log("login error");
                }

            }).catch(error => {
            this.setState({ 
                        
                error: true
            });
            console.log("error on catch- login", error);
        });
    }
    
   
    // location.replace()


    render() {
        return (
           
            <div className="login">
                {this.state.error && <div className="error"><h1>Error Message if you fucked up the login!</h1></div>}
                <input name="email" placeholder="email" type="email" onChange={e => this.handleChange(e)} />
                <input name="password" placeholder="password" type="password" onChange={e => this.handleChange(e)} />
                <button onClick={() => this.submit()}>Login</button>
                
                <Link to="/">Join us guys! It's fun in here!</Link>
            </div>
        );
    }
}

