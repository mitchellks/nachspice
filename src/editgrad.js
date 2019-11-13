import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';
import Graduate from "./graduate";


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

    multipleFunc({target}) {
        this.setState({
        [target.name] : target.getElementById("frameworksSelect").multiple = true,
        [target.name] : target.getElementById("languageSelect").multiple = true
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
            <div className="add-grad">

<Graduate />

                {this.state.error && <div className="error"><h1>There was a slight registration error!</h1></div>}
                
                <select name="cohort" id="cohortSelect" onChange={e => this.handleChange(e)} >
                        <option value='Coriander'>Coriander</option>
                        <option value='Mustard'>Mustard</option>
                </select> 
                <input name="phone" placeholder="phone" type="text" onChange={e => this.handleChange(e)} />
                <input name="links" placeholder="Github link" type="text" onChange={e => this.handleChange(e)} />
                <input name="bio" placeholder="bio" type="text-area" onChange={e => this.handleChange(e)} />
                {/* <input name="available" placeholder="available" type="boolean" onChange={e => this.handleChange(e)} /> */}
                <select name="available" label="Are you free to work?" placeholder="Are you free to work" onChange={e => this.handleChange(e)} >
                        <option value='True'>Yes</option>
                        <option value='False'>No</option>
                </select>
                <select name="languages" id="languageSelect" onClick={e => this.multipleFunc(e)} >
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
                        <option value='Assembly'>Assembly</option>
                        <option value='Swift'>Swift</option>
                        <option value='Kotlin'>Kotlin</option>
                        <option value='R'>R</option>
                        <option value='VBA'>VBA</option>
                        <option value='Objective-C'>Objective-C</option>
                        <option value='Scala'>Scala</option>
                        <option value='Rust'>Rust</option>
                        <option value='Dart'>Dart</option>
                        <option value='Elixir'>Elixir</option>
                        <option value='Clojure'>Clojure</option>
                        <option value='WebAssembly'>WebAssembly</option>
</select>   
<select name="frameworks" id="frameworkSelect" onChange={e => this.multipleFunc(e)} >
                        <option value='React.js'>React.js</option>
                        <option value='Vue.js'>Vue.js</option>
                        <option value='Express'>Express</option>
                        <option value='Spring'>Spring</option>
                        <option value='ASP.NET'>ASP.NET</option>
                        <option value='Django'>Django</option>
                        <option value='Laravel'>Laravel#</option>
                        <option value='Angular/Angular.js'>Angular/Angular.js</option>
                        <option value='Ruby on Rails'>Ruby on Rails</option>
                        <option value='jQuery'>jQuery</option>
                        
</select>   
<select name="preferences" placeholder="Front or Back" onChange={e => this.handleChange(e)} >
                        <option value='Full-Stack'>Full-Stack</option>
                        <option value='Front-End'>Front-End</option>
                        <option value='Back-End'>Back-End</option>
</select>
                <input name="strengths" placeholder="strengths" type="text" onChange={e => this.handleChange(e)} />
                <button  onClick={() => this.submit()}>Update Profile</button>
                
            </div>
        );
    }
}

