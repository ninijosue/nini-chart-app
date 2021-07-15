import { createStore } from "redux";
import initialState from "../initialState";
import userActionReducer from "../actions/user";


const reduce = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATEUSER":
            const user = userActionReducer();
           return {
               ...state,
               user
           };
        case "CURRENTVIEWINGMESSAGEPERSONALID":
            const currentViewingPasonalId = action.id;
            return {
                ...state,
                currentViewingPasonalId
            }
        default:
            return state
    }
}

const store = createStore(reduce);

export default store;