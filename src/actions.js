import axios from './axios';

export async function receiveGraduate() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getGraduate");
    console.log("data in reducer",data);
    return {
        type: 'RECEIVE_GRADUATE',
        users: data
    };
   
}

export async function receiveClient() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getClient");
    console.log("data in reducer",data);
    return {
        type: 'RECEIVE_CLIENT',
        users: data
    };
   
}

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
