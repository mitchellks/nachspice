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

export async function receiveProject() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getProject");
    console.log(" receive project data in reducer",data);
    return {
        type: 'RECEIVE_PROJECT',
        project: data
    };
   
}

export async function receiveProjects() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getProjects");
    console.log(" receive project data in actions",data);
    return {
        type: 'RECEIVE_PROJECTS',
        project: data
    };
   
}



export async function PortfolioUploader () {
    console.log("reducer mounted");

    const { data } = await axios.post("/api/uploadportfolio");
    console.log(" post portfolio data in actions",data);
    return {
        type: 'PORTFOLIO_UPLOADER',
        project: data
    };
   
}

export async function receivePortfolios() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getPortfolios");
    console.log(" receive portfolio data in actions",data);
    return {
        type: 'RECEIVE_PORTFOLIOS',
        portfolio: data
    };
   
}

export async function receivePortfolio() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getPortfolio");
    console.log(" receive portfolio data in actions",data);
    return {
        type: 'RECEIVE_PORTFOLIO',
        portfolio: data
    };
   
}


// RECEIVE_PORTFOLIO

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
