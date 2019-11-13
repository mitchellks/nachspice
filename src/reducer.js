
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

    if (action.type == "RECEIVE_PROJECTS") {
        console.log("receive PROJECTS in reducer", action);
        state = {
            ...state,
            projects: {
                ...state.projects,
                project: action.project
        }
    }
}

    // function updateProjects(state, action) {
    //     return {
    //       ...state,
    //       first: {
    //         ...state.first,
    //         second: {
    //           ...state.first.second,
    //           [action.someId]: {
    //             ...state.first.second[action.someId],
    //             fourth: action.someValue
    //           }
    //         }
    //       }
    //     }
    //   }

    if (action.type == "PORTFOLIO_UPLOADER") {
        console.log("portfolio uploader in reducer", action);
        state = {
            ...state,
            uploader: action.uploader

        
        };
    }

    if (action.type == "RECEIVE_PORTFOLIOS") {
        console.log("receive PORTFOLIOS in reducer", action);
        state = {
            ...state,
                portfolio: {
                    ...state.portfolio,
                portfolio: action.portfolio
                   
        }
        }
    }

    if (action.type == "RECEIVE_PORTFOLIO") {
        console.log("receive SINGLE PORTFOLIO in reducer", action);
        state = {
            ...state,
                portfolio: action.portfolio
                   
        }
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