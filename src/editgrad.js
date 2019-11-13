import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';
import Graduate from "./graduate";
import AddSkills from "./addskills";
// var TokenInput = require('../index')
// var ComboboxOption = require('../index').Option


export default class EditGrad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }



    handleChange({target}) {
        // target.getElementById("frameworksSelect").multiple = true;
        // target.getElementById("languageSelect").multiple = true;
        this.setState({
            [target.name]: target.value,
            
        });
         
    }


    componentDidMount() {
        console.log("register mounted");
    }

    submit() { 
        console.log("submit?????");
        axios.post("/api/editgrad", {
            
            
            cohort : this.state.cohort,
            phone : this.state.phone,
            links:  this.state.links,
            bio:  this.state.bio,
            imageurl:  this.state.imageurl,
            certificate: this.state.certificate,
            available:  this.state.available,
            languages: this.state.languages,
            frameworks: this.state.frameworks,
            preferences: this.state.preferences,
            strengths:  this.state.strengths


        }).then (
            ({data}) => {
                
                console.log("graduate profile update", data);
                if (data.success) {  
                   
                    location.replace("/graduate");
                } else {
                    this.setState({ 
                        error: true
                    });
                    
                }
            });
    }
    

    render() {
        return (
        <div>
            <div>
                <Graduate />
            </div>
            
            <div className="add-grad">
                    {this.state.error && <div className="error"><h1>There was a slight registration error!</h1></div>}
                
                     <select name="cohort" id="cohortSelect" onSelect={e => this.handleChange(e)} >
                            <option value='Coriander'>Coriander</option>
                             <option value='Mustard'>Mustard</option>
                     </select> 
                <input name="phone" placeholder="phone" type="text" onChange={e => this.handleChange(e)} />
                <input name="links" placeholder="Github link" type="text" onChange={e => this.handleChange(e)} />
                <input name="bio" placeholder="bio" type="text-area" onChange={e => this.handleChange(e)} />
                
                <select name="available" placeholder="Are you free to work" onSelect={e => this.handleChange(e)} > 
                        <option value='True'>Yes</option>
                        <option value='False'>No</option>
                </select>
                
                <button  onClick={() => this.submit()}>Update Profile</button>
                </div>
            
            <div>
<AddSkills />
        </div>
        </div>
        );
   
    }
}

