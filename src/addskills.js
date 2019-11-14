import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';

export default class AddSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    handleChange({target}) {

        this.setState({
            [target.name]: target.value,
            
        });
         
    }

    componentDidMount() {
        console.log("register mounted");
    }

    submit() { 
        console.log("submit?????");
        axios.post("/api/addskills", {
            
            languages: this.state.languages,
            frameworks: this.state.frameworks,
            preferences: this.state.preferences,
            strengths:  this.state.strengths


        }).then (
            ({data}) => {
                
                console.log("graduate profile update", data);
                if (data.success) {  
                   
                    location.replace("/profile");
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
            
<div className="addskills">
                {this.state.error && <div className="error"><h1>There was an error with your skills upload!</h1></div>}
                
                <select value={this.state.value} multiple={true} name="languages" id="languageSelect"  onChange={e => this.handleChange(e)} >
                    LANGUAGES
                        <option value='JavaScript'>JavaScript</option>
                        <option value='HTML/CSS'>HTML/CSS</option>
                        <option value='SQL'>SQL</option>
                        <option value='Python'>Python</option>
                        <option value='Java'>Java</option>
                        <option value='Bash/Shell/PowerShell'>Bash/Shell/PowerShell</option>
                        <option value='C#'>C#</option>
                        <option value='PHP'>PHP</option>
                        <option value='C++'>C++</option>
                        <option value='TypeScript'>TypeScript</option>
                        <option value='C'>C</option>
                        <option value='Ruby'>Ruby</option>
                        <option value='Go'>Go</option>
                        <option value='Swift'>Swift</option>
                        <option value='Kotlin'>Kotlin</option>
                        <option value='R'>R</option>
                        <option value='VBA'>VBA</option>
                        <option value='Objective-C'>Objective-C</option>
                        <option value='Scala'>Scala</option>
                        <option value='Rust'>Rust</option>
                      
</select>   
<select value={this.state.value} multiple={true} name="frameworks" id="frameworkSelect"  onChange={e => this.handleChange(e)} >
    FRAMEWORKS
                        <option value='React.js'>React.js</option>
                        <option value='Vue.js'>Vue.js</option>
                        <option value='Express'>Express</option>
                        <option value='Django'>Django</option>
                        <option value='Angular/Angular.js'>Angular/Angular.js</option>
                        <option value='Ruby on Rails'>Ruby on Rails</option>
                        <option value='jQuery'>jQuery</option>
                        
</select>   
<select value={this.state.value} multiple={true} name="preferences" placeholder="Front or Back" onChange={e => this.handleChange(e)} >
    FRONT OR BACK
                        <option value='Full-Stack'>Full-Stack</option>
                        <option value='Front-End'>Front-End</option>
                        <option value='Back-End'>Back-End</option>
</select>
                <input name="strengths" placeholder="strengths and passion " type="text" onChange={e => this.handleChange(e)} />
                <button  onClick={() => this.submit()}>Update Profile</button>
                </div>
            </div>
        );
    }
}


