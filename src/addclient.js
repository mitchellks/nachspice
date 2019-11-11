import React from "react";
import axios from "./axios";
import { Link } from 'react-router-dom';


export default class AddClient extends React.Component {
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
        axios.post("/api/addclient", {
            
            
            phone : this.state.phone,
            company : this.state.company,
            department:  this.state.department,
            logo:  this.state.logo,
            profileimageurl:  this.state.profileimageurl,
            website: this.state.website
           


        }).then (
            ({data}) => {
                
                console.log("graduate profile update", data);
                if (data.success) {  
                   
                    location.replace("/client");
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
                <input name="phone" placeholder="phone" type="number" onChange={e => this.handleChange(e)} />
                <input name="company" placeholder="company" type="text" onChange={e => this.handleChange(e)} />
                <input name="department" placeholder="department" type="text" onChange={e => this.handleChange(e)} /><input name="links" placeholder="links" type="text" onChange={e => this.handleChange(e)} />
                <input name="website" placeholder="website" type="text" onChange={e => this.handleChange(e)} />
                
                <button onClick={() => this.submit()}>Update Profile</button>
                
            </div>
        );
    }
}

