import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveAvatar }  from './actions';
// var moment = require('moment');
// import { receiveGraduate } from './actions';
// import { receiveClient } from './actions';

// import FriendButton from "./friend-button";

export default function Avatar() {
    const dispatch = useDispatch();
    const avatar = useSelector(
        state => state && state.avatar
       
    );


    useEffect(
        () => {
            dispatch(
                receiveAvatar()
                
            );
            console.log("Avatar in avatar.js", avatar);
        },
        []
    );  


    if (!avatar) {
        return null;
    }


    return (
        <div className="Avatar">
                 <div >
                     <img src={avatar.imageurl} />  
               </div>
         </div>
    );
}

