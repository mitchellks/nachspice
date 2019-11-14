import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { receiveClientProjects } from "./actions";

// import FriendButton from "./friend-button";

export default function ClientProjects() {
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
  

    useEffect(
        () => {
            dispatch(
                receiveClientProjects()
            );
            console.log("receiveClientProjects in projects.js working", projects);
        },
        []
    );  

    if (!projects) {
        return null;
    }


    return (

        <div className="portfoliospage">
            <div>
                Open Projects
            
                      <ul>
                      <div className="portfoliopreview"> 
                        {projects.map(data => (
                        <div className="child">
                            <li key={data.id}>
                                <Link to="{`/project/${data.id}`}"></Link>
                            <div>Project ID: {data.id}</div>
                            <div>  Project Name: {data.projectname} </div>
                            <div> Company Name: {data.company} </div>
                            <div>  Project Description: {data.description} </div>
                            <div>  Due Date: {data.date}</div>
                            <div>  Created date: {data.date}</div>           
                            </li>
                            </div>
                        ))}
                        </div>
                    </ul> 
            </div>
        </div>
    );
}
