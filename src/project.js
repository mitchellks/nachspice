import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveProject }  from './actions';
import { receiveGraduate } from './actions';
import { receiveClient } from './actions';

// import FriendButton from "./friend-button";

export default function Project() {
    const dispatch = useDispatch();
    const project = useSelector(
        state => state && state.project
       
    );
   

    useEffect(
        () => {
            dispatch(
                receiveProject(),
                receiveGraduate(),
                receiveClient()
            );
            console.log("Project in graduate.js", project);
        },
        []
    );  


    if (!project) {
        return null;
    }


    return (

        <div className="projectpage">
                    <div>
                        <div className="projectdesc">
                        <div className="name"> Name: {graduate.first} {graduate.last} </div>
                        <div className="cohort">cohort: {graduate.cohort}  </div>
                        <div className="email" >email: {graduate.email} </div>


                        </div>
                    </div>

                    <div>
                        <div className="clientdesc">
                        <div className="name"> Name: {client.first} {client.last} </div>
                        <div className="company">Company: {client.company}  </div>
                        <div className="email" >email: {client.email} </div>
                        </div>
                    </div>

                    <div>
                        <div className="clientdesc">
                        <div className="name"> Name: {client.first} {client.last} </div>
                        <div className="company">Company: {client.company}  </div>
                        <div className="email" >email: {client.email} </div>
                        </div>
                    </div>
        
        <div>
Edit

        </div>
        
        
        
        </div>



    );
}

