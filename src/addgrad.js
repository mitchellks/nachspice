import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';
import Graduate from "./graduate";
import Uploader from "./uploader";


export default class AddGrad extends React.Component {
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
        axios.post("/api/addgrad", {
            
            phone : this.state.phone,
            links:  this.state.links,
            bio:  this.state.bio,
            imageurl:  this.state.imageurl,

            certificate: this.state.certificate,
            available:  this.state.available,

        }).then (
            ({data}) => {
                
                console.log("graduate profile update", data);
                if (data.success) {  
                   
                    location.replace("/addskills");
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
            
<div className="add-grad">
    Tell us a little more about you.
                {this.state.error && <div className="error"><h1>There was a slight registration error!</h1></div>}
                
                <input name="phone" placeholder="phone" type="text" required onChange={e => this.handleChange(e)} />
                <input name="links" placeholder="Github link" type="text" required onChange={e => this.handleChange(e)} />
                <input name="bio" placeholder="bio" type="text-area" required onChange={e => this.handleChange(e)} />
                {/* <input name="available" placeholder="available" type="boolean" onChange={e => this.handleChange(e)} /> */}
               <label> Ary you available to work? 
                   <select value={this.state.value} name="available" onChange={e => this.handleChange(e)} > 
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                </select>
                </label>
                
                <button  onClick={() => this.submit()}>Update Profile</button>
                </div>
<div> Upload an image 
    <Uploader  />
</div>

            </div>
        );
    }
}

