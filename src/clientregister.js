import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class ClientRegister extends React.Component {
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

    }


    componentDidMount() {
        console.log("register mounted");
    }

    submit() { 
        console.log("submit?????");
        axios.post("/clientregister", {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            password: this.state.password,
            regtype: this.state.regtype
        }).then (
            ({data}) => {
                
                console.log("client register submit data", data);
                if (data.success) {  
                   
                    location.replace("/addclient");
                } else {
                    this.setState({ 
                        error: true
                    });
                    
                }
            });
    }
    


    render() {
        return (
            <div className="create-account">
                {this.state.error && <div className="error"><h1>There was a slight registration error!</h1></div>}
                <input name="first" placeholder="first" type="text" onChange={e => this.handleChange(e)} />
                <input name="last" placeholder="last" type="text" onChange={e => this.handleChange(e)} />
                {/* <input name="company" placeholder="company" type="text" onChange={e => this.handleChange(e)} /> */}
                <input name="email" placeholder="email" type="text" onChange={e => this.handleChange(e)} />
                <input name="password" placeholder="password" type="password" onChange={e => this.handleChange(e)} />
                <input type="hidden" name="type" value="client" defaultValue = {e => this.handleChange(e)}  />

                
                <button onClick={() => this.submit()}>Join</button>
                
                {/* <Link to="/login">Click here to Log in!</Link> */}
                
            </div>
        );
    }
}

