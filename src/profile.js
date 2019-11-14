import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveProfile }  from './actions';
import AddPortfolio, { addPortfolio } from './addportfolio';
import PortfolioComponent from "./portfoliocomponent";
import AddSkills from "./addskills";
import Avatar from  "./avatar";
import GraduatePortfolios from  "./graduatesportfolios";
import Uploader from "./uploader";
import ClientsProjects from "./clientsprojects";
import AddGrad from "./addgrad";
import Graduate from "./graduate";
import GraduateSkills from "./graduateskills";
// import FriendButton from "./friend-button";

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(
        state => state.user && state.user.user
       
    );
   

    useEffect(
        () => {
            dispatch(
                receiveProfile()

                // receiveUsers ()
            );
            console.log("profile in profile.js", user);
        },
        []
    );  


    if (!user) {
        return null;
    }


    return (
<div >
     <div className="profilepage" >
                 <div className="profilecontainer">
                        <div className="profiledesc">
                                <div className="name"> Name: {user.first} {user.last} </div>
                                <div className="name"> Email: {user.email} </div>
                                <div className="name"> Cohort: {user.cohort} </div>       
                        </div>
                         <div className="profileimage">
                             <Avatar />
                             <Uploader /> 
                        </div>
                    
                 </div>
              
                 <div className="graduateandskillscontainer">
                 
                 <div className="graduateinfo">
                     <div><Graduate /> </div>
                </div>
                 <div className="graduateskills">
                     <div><GraduateSkills /></div> 
                 
                     </div>
        </div>

           
        
        
                    <div>
                        <GraduatePortfolios />
                    </div>


                    </div>
</div>
        


    );
}

