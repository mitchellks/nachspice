import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveOtherProject }  from './actions';


// import FriendButton from "./friend-button";

export default function OtherProject() {
    const dispatch = useDispatch();
    const project = useSelector(
        state => state && state.project
       
    );


    useEffect(
        () => {
            dispatch(
                receiveOtherProject()
                
            );
            console.log("Other Project in otherproject.js", project);
        },
        []
    );  

    if (!project) {
        return null;
    }


    return (

        <div className="projectpage">
OTHER PROJECT
            
                    <div>
                        <div className="projectdesc">
                        <div className="name"> Project Name: {project.projectname}  </div>
                        <div className="project-desc">project: {project.description}  </div>
                        <div className="email" >contact name : {project.contact} </div>
                        <div className="phone" >contact phone : {project.phone} </div>
                        <div className="due date" >due date : {project.date}  </div>
                        <div className="due date" >department : {project.department} </div>


                        </div>
                    </div>

                       
        
        <div>
Edit

        </div>
        
        
        
        </div>



    );
}

