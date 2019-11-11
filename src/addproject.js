import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class AddProject extends React.Component {
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


handleChange({target}) {
        // let target = e.target;
        // this[target.name] = taeget.value
        this.setState({
            [target.name]: target.value
        });

    }


    componentDidMount() {
        console.log("project add mounted");
    }

    submit() { 
        console.log("submit?????");
        axios.post("/addproject", {
            name: this.state.name,
            contact: this.state.contact,
            description: this.state.description,
            email: this.state.email,
            phone: this.state.phone,
            date: this.state.date
        }).then (
            ({data}) => {
                
                console.log("project submit", data);
                if (data.success) {  
                   
                    location.replace("/project");
                } else {
                    this.setState({ 
                        error: true
                    });
                    
                }
            });
    }

    render() {
        return (
            <div className="create-project">
                {this.state.error && <div className="error"><h1> error adding project</h1></div>}
                <input name="name" placeholder="project-name" type="text" onChange={e => this.handleChange(e)} />
                <input name="contact" placeholder="project-contact" type="text" onChange={e => this.handleChange(e)} />
                <input name="description" placeholder="project-description" type="text-box" onChange={e => this.handleChange(e)} />
                <input name="email" placeholder="email for contact" type="text" onChange={e => this.handleChange(e)} />
                <input name="phone" placeholder="phone number for contact" type="number" onChange={e => this.handleChange(e)} />
                <input name="date" placeholder="due-date" type="date" onChange={e => this.handleChange(e)} />
                <button onClick={() => this.submit()}>Add Project</button>
                
                
            </div>
        );
    }
}