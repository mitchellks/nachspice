import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class AddPortfolio extends React.Component {
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
        axios.post("/api/addportfolio", {
            projectname: this.state.projectname,
            description: this.state.description,
            link: this.state.link,
            livesite: this.state.livesite,
            date: this.state.date,
            languages: this.state.languages,
            frameworks: this.state.frameworks,
            comments: this.state.comments

        }).then (
            ({data}) => {
                
                console.log("project submit", data);
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
            <div className="create-portfolio">

                ADD A PORTFOLIO PIECE TO YOUR PROFILE
                {this.state.error && <div className="error"><h1> error adding portfolio</h1></div>}
                <input name="projectname" placeholder="project-name" type="text" onChange={e => this.handleChange(e)} />
                
                <input name="description" placeholder="project-description" type="text-box" onChange={e => this.handleChange(e)} />
                <input name="link" placeholder="github link" type="text" onChange={e => this.handleChange(e)} />
                <input name="livesite" placeholder="live site link" type="text" onChange={e => this.handleChange(e)} />
                <input name="date" placeholder="completion-date" type="date" onChange={e => this.handleChange(e)} />
                <select name="languages" id="languageSelect" onChange={e => this.handleChange(e)} >
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
<select name="frameworks" id="frameworkSelect" onChange={e => this.handleChange(e)} >
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
<input name="comments" placeholder="comments on project" type="textbox" onChange={e => this.handleChange(e)} />
                <button onClick={() => this.submit()}>Add to portfolio</button>
                
                
            </div>
        );
    }
}




