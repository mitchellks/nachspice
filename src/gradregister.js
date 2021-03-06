import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class GradRegister extends React.Component {
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
        axios.post("/gradregister", {
            first: this.state.first,
            last: this.state.last,
            cohort: this.state.cohort,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }).then (
            ({data}) => {
                
                console.log("cohort register submit data", data);
                if (data.success) {  
                   
                    location.replace("/addgrad");
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
                <select value={this.state.value} name="cohort" id="cohortSelect" onChange={e => this.handleChange(e)} >
                
                        <option value='None'>None</option>
                        <option value='Coriander'>Coriander</option>
                        <option value='Mustard'>Mustard</option>
                </select> 
                
                <input name="email" placeholder="email" type="text" onChange={e => this.handleChange(e)} />
                <input name="password" placeholder="password" type="password" onChange={e => this.handleChange(e)} />
                <input type="hidden" name="type" value="graduate" defaultValue = {e => this.handleChange(e)}  />
                <button onClick={() => this.submit()}>Join</button>
                
                <Link to="/login">Click here to Log in!</Link>
                
            </div>
        );
    }
}

