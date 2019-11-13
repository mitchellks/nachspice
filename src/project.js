import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveProject }  from './actions';
// import { receiveGraduate } from './actions';
// import { receiveClient } from './actions';

// import FriendButton from "./friend-button";

export default function Project() {
    const dispatch = useDispatch();
    const project = useSelector(
        state => state && state.project
       
    );


    useEffect(
        () => {
            dispatch(
                receiveProject()
                
                
            );
            console.log("Project in graduate.js", project);
        },
        []
    );  

    // const dispatch = useDispatch();
    // const client = useSelector(
    //     state => state && state.client
       
    // );

    // useEffect(
    //     () => {
    //         dispatch(
    //             receiveClient(),
    //             // receiveGraduate(),
                
    //         );
    //         console.log("Project in graduate.js", project);
    //     },
    //     []
    // );  


    if (!project) {
        return null;
    }


    return (

        <div className="projectpage">
YOUR LATEST PROJECT
            
                    <div>
                        <div className="projectdesc">
                        <div className="name"> Project Name: {project.projectname}  </div>
                        <div className="project-desc">project: {project.description}  </div>
                        <div className="email" >contact name : {project.contact} </div>
                        <div className="phone" >contact phone : {project.phone} </div>
                        <div className="due date" >due date : {project.date} </div>
                        <div className="due date" >department : {project.department} </div>

                        {/* <div className="company" > : {client.company} </div> */}




                        </div>
                    </div>

                       
        
        <div>
Edit

        </div>
        
        
        
        </div>



    );
}

