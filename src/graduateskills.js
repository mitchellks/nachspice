import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { receiveGraduateSkills } from "./actions";
import AddPortfolio, { addPortfolio } from './addportfolio';
import PortfolioComponent from "./portfoliocomponent";
import AddSkills from "./addskills";
import Avatar from  "./avatar";

// import
// import FriendButton from "./friend-button";

export default function GraduateSkills() {
    const dispatch = useDispatch();
    const skills = useSelector(
        state => state && state.skills
       
    );
   

    useEffect(
        () => {
            dispatch(
                receiveGraduateSkills()

                // receiveUsers ()
            );
            console.log("graduateskills in graduate.js", skills);
        },
        []
    );  


    if (!skills) {
        return null;
    }


    return (
<div>
        <div className="graduatepage">
                 <div className="graduatecontainer">
                        <div className="graduatedesc">
                        <div className="languages">Languages: {skills.languages}  </div>
                        <div className="frameworks">Frameworks: {skills.frameworks}  </div>
                        <div className="preferences">preferences: {skills.preferences}  </div>
                        <div className="strengths" >strengths: {skills.strengths} </div>
                     </div>                       
                 </div>
                 </div>
                 <Link to= "/addskills" > Click to Edit Skills </Link> 
        </div>
    


    );
}

