import {USER_LOADED,REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT  } from "../types";

// it is used to hold and manipulate the user related states in store. 
// all auth related operations / user related operations like register, lofin,  loading current user info. etc. 
const initialState = {
    token : null,
    isAuthenticated : null,
    loading : true,
    user : null
}
// it will be  part of ur global state / store where we can hold all user related data. 
export default (state = initialState, action) => {
    // action will share the data that needs to be manipulated and it will share the flag. 
    //data : payload
  const {type, payload} = action
  switch (type) {
  case LOGOUT:
    localStorage.removeItem("token");
    return {
    token : null,
    isAuthenticated : null,
    loading : true,
    user : null,
    };

  case USER_LOADED:
    //to load the user info
    return { ...state, isAuthenticated: true, loading: false, user: payload}
    case REGISTER_SUCCESS:
        // to handle the success part of user registration//it will give us the token.
        // isaAuthenticated : true 
        // loading : false
        // token: we need to use the token from dashboard onwards.
        //for create profile / add exp / add education etc. 
        localStorage.setItem("token", payload.token);
        //localStorage will help us to hold the token in persited way.

        return { ...state, ...payload, isAuthenticated: true, loading: false };
        

  default:
    return state;
  }
};