
export default function Reducer(state = {}, action) {
   
    if (action.type == "RECEIVE_GRADUATE") {
        console.log(" receive graduate in reducer", action);
        state = {
            ...state,
            graduate: action.graduate

        
        };
    }
    if (action.type == "RECEIVE_CLIENT") {
        console.log("receive client in actions", action);
        state = {
            ...state,
            client: action.client

        
        };
    }

    if (action.type == "EDIT_CLIENT") {
        console.log("actions", action);
        state = {
            ...state,
            client: action.client

        
        };
    }

    if (action.type == "RECEIVE_PROJECT") {
        console.log("receive Project in reducer", action);
        state = {
            ...state,
            project: action.project

        
        };
    }

    // if (action.type == "RECEIVE_USERS") {
    //     console.log("actions", action);
    //     state = {
    //         ...state,
    //         users: action.users

        
    //     };
    // }

    // if (action.type == "RECEIVE_MESSAGES") {
    //     console.log("REDUCER RECEIVE MESSAGES", action);
    //     state = {
    //         ...state,
    //         messages: action.messages
    //     };      
    // }

    // if (action.type == 'ADD_MESSAGES') {
    //     console.log("REDUCER ADD MESSAGES", action);
    //     state = {
    //         ...state,
    //         messages: action.messages
    //     };
    // }

    console.log("reducer state", state);

    return state;
}