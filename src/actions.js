import axios from './axios';

export async function receiveProfile() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getProfile");
    console.log("data for profile in actions",data);
    return {
        type: 'RECEIVE_PROFILE',
        user: data
    };
   
}


export async function receiveGraduate() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getGraduate");
    console.log("data for graduate in actions",data);
    return {
        type: 'RECEIVE_GRADUATE',
        graduate: data
    };
   
}

export async function receiveGraduateSkills() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getGraduateSkills");
    console.log("data for graduate in actions",data);
    return {
        type: 'RECEIVE_GRADUATE_SKILLS',
        skills: data
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

export async function receiveOtherProject() {
    console.log("reducer mounted");
    
    const { data } = await axios.get(`/api/user/${this.props.match.params.id}`);
    console.log(" receive other project data in reducer",data);
    return {
        type: 'RECEIVE_OTHER_PROJECT',
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

export async function receiveClientProjects() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getClientProjects");
    console.log(" receive project data in actions",data);
    return {
        type: 'RECEIVE_CLIENT_PROJECTS',
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

export async function receiveGraduatePortfolios() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getGraduatePortfolios");
    console.log(" receive portfolio data in actions",data);
    return {
        type: 'RECEIVE_GRADUATE_PORTFOLIOS',
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


export async function receiveAvatar() {
    console.log("reducer mounted");

    const { data } = await axios.get("/api/getAvatar");
    console.log(" receive avatar data in actions",data);
    return {
        type: 'RECEIVE_AVATAR',
        avatar: data
    };
   
}