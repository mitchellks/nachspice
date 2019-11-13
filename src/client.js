import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveClient }  from './actions';
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

        <div className="clientpage">
                    <div>
                        <div className="clientdesc">
                        <div className="phone">Phone: {client.phone}  </div>
                        <div className="company">Company: {client.company}  </div>
                        <div className="first">Company: {client.first} {client.last}  </div>
                        <div className="department">Department: {client.department}  </div>
                        
                        <div className="website">website: {client.website}  </div>
                       


                        </div>
                    </div>
        
        <div>
            <Link to ="/addclient">
Edit</Link>

        </div>
        
        
        
        </div>



    );
}


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { receiveUsers }  from './actions';
// // import FriendButton from "./friend-button";

// export default function Client() {
//     const dispatch = useDispatch();
//     const users = useSelector(
//         state => state.users && state.users.filter
//         // (
           
//         //     user => user.accepted == false
//         // )
//     );
//     console.log("users in friends", users);
//     // console.log

//     const wannabees = useSelector(
//         state =>
//             state.users && state.users.filter(user => user.accepted == false)
//     )
//     console.log("wannabees", wannabees);



//     const friends = useSelector(
//         state =>
//             state.users && state.users.filter(user => user.accepted == true)
//     )
//     console.log("friends", friends);
   
//     // let friendsofme = [];
//     // for (let i in friends) {
//     // if (friends[i].accepted == false){
//     //     friendsofme.push(friends[i]);
//     // }
//     // } 
//     // console.log("friendsofme", friendsofme);

//     useEffect(
//         () => {
//             dispatch(
//                 receiveUsers()
//             );
//             console.log("receiveusers in friends.js working", friends);
//         },
//         []
//     );  


//     if (!users) {
//         return null;
//     }

//     const handleClick = (id) => {console.log("handleclick", id)};


//     return (

//         <div className="friendspage">
//             <div>
//                 <div>
//         PENDING
//         </div>
//                 <div className="wannabeecontainer" > 
//                     <div className="wannabee">
//                         <ul>
//                             {wannabees.map(data => (
//                                 <li key={data.id}>
//                                     {data.first}
//                                     <div className="friendsbox">
                                        
//                                         <img className="friendspageimg" src={data.imageurl} />
//                                         <FriendButton otherId={data.id} />
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
                
//                 FRIENDS
                
//                 <div className="friendcontainer"> 
//                 <div className="wannabee">
//                     <ul>
//                         {friends.map(data => (
                        
//                             <li key={data.id}>
//                                {data.first}
//                                 <div className="friendsbox">
                                   
//                                     <img className="friendspageimg" src={data.imageurl} />
//                                     <FriendButton otherId={data.id} />
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

       
