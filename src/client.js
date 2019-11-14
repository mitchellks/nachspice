import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveClient }  from './actions';
// import Project from "./project";
import ClientProjects from "./clientsprojects";
// import FriendButton from "./friend-button";

export default function Client() {
    const dispatch = useDispatch();
    const client = useSelector(
        state => state && state.client
       
    );
    console.log("client in friends", client);

    useEffect(
        () => {
            dispatch(
                receiveClient()
                
            );
            console.log("receiveClient in client.js working", client);
        },
        []
    );  


    if (!client) {
        return null;
    }


    return (
<div>
        <div className="clientpage">
                    <div>
                        <div className="clientdesc">
                        <div className="phone">Name: {client.first} {client.last}</div>
                        <div className="phone">email: {client.email}  </div>
                       <div className="phone">Phone: {client.phone}  </div>
                                <div className="company">Company: {client.company}  </div>
                                <div className="first">Company: {client.first} {client.last}  </div>
                                <div className="department">Department: {client.department}  </div>
                                <div className="website">website: {client.website}  </div>
                        </div>
                    </div>
        </div>
        
        <div>
            <Link to ="/addclient">
Edit profile</Link>
        </div>
        <div>
            <Link to ="/addproject">
Add Project</Link>
        </div>
        
        <div>
            <ClientProjects />
        </div>
 </div>
    );
}

