import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Iframe from 'react-iframe'
import { receivePortfolios } from "./actions";
// import { receiveProject } from "./actions";
// import FriendButton from "./friend-button";

export default function Portfolios() {
    const dispatch = useDispatch();
    const portfolio = useSelector(
        state => state.portfolio && state.portfolio.portfolio
      
    );
   


    useEffect(
        () => {
            dispatch(
                receivePortfolios()
            );
            console.log("receivePortfolios in portfolio.js working", portfolio);
        },
        []
    );  


    if (!portfolio) {
        return null;
    }

    // const handleClick = (id) => {console.log("handleclick", id)};


    return (

        <div className="projectspage">
            <div>
                portfolios DUE date
            {/* {portfolio.Link} */}
            {/* {project.projectname} */}
                      
                      
                       <ul>
                        {portfolio.map(data => (
                        
                            <li key={data.id}>

                            {data.id}
                               {data.projectname} {data.date}
                               {/* <Iframe url="{data.livesite}"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
                               
                               <a href={data.livesite} />
                               <span></span>
                               
                                
                            </li>
                        ))}
                    </ul> 
                    
                

            </div>
            </div>
    );
}
