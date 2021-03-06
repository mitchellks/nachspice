import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Iframe from 'react-iframe'
import { receiveGraduatePortfolios } from "./actions";
// import { receiveProject } from "./actions";
// import FriendButton from "./friend-button";

export default function GraduatePortfolios() {
    const dispatch = useDispatch();
    const portfolio = useSelector(
        state => state.portfolio && state.portfolio.portfolio
      
    );
   


    useEffect(
        () => {
            dispatch(
                receiveGraduatePortfolios()
            );
            console.log("receiveGraduatePortfolios in portfolio.js working", portfolio);
        },
        []
    );  


    if (!portfolio) {
        return null;
    }

    // const handleClick = (id) => {console.log("handleclick", id)};


    return (

        <div className="portfoliospage">
           <Link to ="/addportfolio">Add Portfolio Piece</Link>
                       <ul>
                       <div className="portfoliopreview">  
                        {portfolio.map(data => (
                        <div className="child">
                            <li key={data.id}>
                            {data.id}
                           <div > Project Name: {data.projectname} </div> 
                           <div > Project Description: {data.description} </div> 
                           <div >Completed Date: {data.date}</div> 
                           <div> Language: {data.language} </div>
                           <div> Framework: {data.frameworks} </div>
                           <div> Comments: {data.comments} </div>
                           <div> Available to work: {data.available} </div>
                           
                          <Link to ={data.livesite}> Link </Link>
                          <div> Live site : {data.livesite} </div>
                            
                            </li>
                            </div>
                        ))}
                        </div>
                    </ul> 
                   
            </div>
    );
}
