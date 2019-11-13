import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { receiveProjects } from "./actions";
import { receiveProject } from "./actions";
// import FriendButton from "./friend-button";

export default function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(
        state => state.projects && state.projects.project
      
    );
    console.log("receiveProjects in projects.js working", projects);

    const project = useSelector(
        state =>
            state && state.projects
    )
    console.log("project", project); 
    // const project = useSelector(
    //     state => state && state.project
       
    // ); 
    // console.log("receiveProjects in projects.js working", project);

    useEffect(
        () => {
            dispatch(
                receiveProjects()
            );
            console.log("receiveProjects in projects.js working", projects);
        },
        []
    );  


    if (!projects) {
        return null;
    }

    // const handleClick = (id) => {console.log("handleclick", id)};


    return (

        <div className="projectspage">
            <div>
                Projects DUE date
            
                      <ul>
                        {projects.map(data => (
                        
                            <li key={data.id}>

<Link to="{`/project/${data.id}`}">
                            
                            </Link>
                            {data.id}
                               {data.projectname} {data.date}
                               
                               <span></span>
                               
                                
                            </li>
                        ))}
                    </ul> 
                    
                

            </div>
            </div>
    );
}
