import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class AddGrad extends React.Component {
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
        axios.post("/api/addgrad", {
            
            
            cohort : this.state.cohort,
            phone : this.state.phone,
            links:  this.state.links,
            bio:  this.state.bio,
            imageurl:  this.state.imageurl,
            certificate: this.state.certificate,
            available:  this.state.available,
            languages: this.state.languages,
            preferences: this.state.preferences,
            strengths:  this.state.strengths


        }).then (
            ({data}) => {
                
                console.log("graduate profile update", data);
                if (data.success) {  
                   
                    location.replace("/");
                } else {
                    this.setState({ 
                        error: true
                    });
                    
                }
            });
    }
    

    render() {
        return (
            <div className="add-grad">
                {this.state.error && <div className="error"><h1>There was a slight registration error!</h1></div>}
                <input name="cohort" placeholder="cohort" type="text" onChange={e => this.handleChange(e)} />
                <input name="phone" placeholder="phone" type="number" onChange={e => this.handleChange(e)} />
                <input name="links" placeholder="links" type="text" onChange={e => this.handleChange(e)} />
                <input name="bio" placeholder="bio" type="text-area" onChange={e => this.handleChange(e)} />
                <input name="available" placeholder="available" type="boolean" onChange={e => this.handleChange(e)} />
                <input name="languages" placeholder="languages" type="text" onChange={e => this.handleChange(e)} />
                <input name="preferences" placeholder="preferences" type="text" onChange={e => this.handleChange(e)} />
                <input name="strengths" placeholder="strengths" type="text" onChange={e => this.handleChange(e)} />
                <button onClick={() => this.submit()}>Update Profile</button>
                
            </div>
        );
    }
}

