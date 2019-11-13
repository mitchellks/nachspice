import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveGraduate }  from './actions';
import AddPortfolio, { addPortfolio } from './addportfolio';
import PortfolioComponent from "./portfoliocomponent";
import AddSkills from "./addskills";
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

                // receiveUsers ()
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
                    <div>
                        <div className="graduatedesc">
                        <div className="name"> Name: {graduate.first} {graduate.last} </div>
                        <div className="cohort">cohort: {graduate.cohort}  </div>
                        <div className="email" >email: {graduate.email} </div>
                        <div className="phone"> phone: {graduate.phone}</div>
                        <div className="links">Github account: {graduate.links}  </div>
                        <div className="bio" >Bio: {graduate.bio} </div>
                        <div className="available"> Available: {graduate.available} </div>
                        <div className="languages">Languages: {graduate.languages}  </div>
                        <div className="frameworks">Frameworks: {graduate.frameworks}  </div>
                        <div className="preferences">preferences: {graduate.preferences}  </div>
                        <div className="strengths" >strengths: {graduate.strengths} </div>
                        </div>
                    </div>
        
        <div>
        <Link to ="/editgrad">
Edit</Link>


        </div>
<div>
    
</div>

        <div>
            <AddPortfolio />
            
        </div>
        <div>
        <PortfolioComponent />
        </div>
        </div>
        </div>


    );
}

