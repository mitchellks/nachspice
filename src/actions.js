import axios from './axios';

export async function receiveGraduate() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getGraduate");
    console.log("data for graduate in actions",data);
    return {
        type: 'RECEIVE_GRADUATE',
        graduate: data
    };
   
}

export async function receiveClient() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getClient");
    console.log(" receive client data in reducer",data);
    return {
        type: 'RECEIVE_CLIENT',
        client: data
    };
   
}

// export async function editClient() {
//     console.log("reducer mounted");

//     const { data } = await axios.post("/api/editClient");
//     console.log(" edit client data in reducer",data);
//     return {
//         type: 'EDIT_CLIENT',
//         client: data
//     };
   
// }



// export async function receiveUsers() {
//     console.log("reducer mounted");

//     const { data } = await axios.get("/api/getClient");
//     console.log("receive users data in reducer",data);
//     return {
//         type: 'RECEIVE_USERS',
//         users: data
//     };
   
// }

// export async function chatMessages(msgs) {
//     console.log("chatMessages in action.js", msgs);
//     return {
//         type: 'RECEIVE_MESSAGES',
//         messages: msgs
//     };
   
// }

// export async function postMessages(msg) {
//     console.log("postMessage in action.js",msg);
//     return {
//         type: 'ADD_MESSAGES',
//         messages: msg
//     };
   
// }
