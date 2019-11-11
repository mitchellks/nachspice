import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveGraduate }  from './actions';
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

        <div className="graduatepage">
                    <div>
                        <div className="graduatedesc">
                        {/* <div className="name"> Name: {users.first} {users.last} </div> */}
                        <div className="cohort">cohort: {graduate.cohort}  </div>
                        {/* <div className="email" >email: {users.email} </div> */}
                        <div className="phone"> phone: {graduate.phone}</div>
                        <div className="links">links: {graduate.links}  </div>
                        <div className="bio" >bio: {graduate.bio} </div>
                        <div className="available"> available: {graduate.available} {graduate.last} </div>
                        <div className="preferences">preferences: {graduate.preferences}  </div>
                        <div className="strengths" >strengths: {graduate.strengths} </div>
                        </div>
                    </div>
        
            



        <div>
Edit

        </div>
        
        
        
        </div>



    );
}

