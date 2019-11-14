import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveGraduate }  from './actions';
import AddPortfolio, { addPortfolio } from './addportfolio';
import PortfolioComponent from "./portfoliocomponent";
import AddSkills from "./addskills";
import Avatar from  "./avatar";
import GraduatePortfolios from  "./graduatesportfolios";
// import
// import FriendButton from "./friend-button";

export default function Graduate() {
    const dispatch = useDispatch();
    const graduate = useSelector(
        state => state && state.graduate
       
    );
   

    useEffect(
        () => {
            dispatch(
                receiveGraduate()
            );
            console.log("graduate in graduate.js", graduate);
        },
        []
    );  


    if (!graduate) {
        return null;
    }


    return (
<div>
        <div className="graduatepage">
                 <div className="graduatecontainer">
                        <div className="graduatedesc">
                        <div className="phone"> phone: {graduate.phone}</div>
                        <div className="links">Github account: {graduate.links}  </div>
                        <div className="bio" >Bio: {graduate.bio} </div>
                        <div className="available"> Available: {graduate.available} </div>
                 </div>        
                 </div>
        </div>
        <Link to= "/addgrad" > Click to Edit account </Link>  
        </div>


    );
}

