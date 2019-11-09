import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveGraduate }  from './actions';
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

        <div className="graduatepage">
                    <div>
                        <div className="graduatedesc">
                        <div className="name"> Name: {graduate.first} {graduate.last} </div>
                        <div className="cohort">cohort: {graduate.cohort}  </div>
                        <div className="email" >email: {graduate.email} </div>
                        </div>
                    </div>
        
        <div>
Edit

        </div>
        
        
        
        </div>



    );
}

