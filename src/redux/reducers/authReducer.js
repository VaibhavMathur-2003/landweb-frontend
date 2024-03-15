import { Auth_TYPES } from "../actions/authActions";

const {
    LOGIN_REQUEST,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
  
    LOGOUT_REQUEST,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
} = Auth_TYPES;


const initialState = {
    authLoading: false,
    authError: "",
    user: null,
    logoutError: "",
    logoutLoading: false,
  };


  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, authLoading: true, authError: "" };
      case LOGIN_ERROR:
        return { ...state, authLoading: false, authError: action.error };
      case LOGIN_SUCCESS:
        return {
          ...state,
          authLoading: false,
          logoutError: "",
          user: action.data,
        };
  
      case LOGOUT_REQUEST:
        return { ...state, logoutError: "", logoutLoading: true };
      case LOGOUT_ERROR:
        return {
          ...state,
          logoutError: action.data,
          logoutLoading: false,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          logoutError: "",
          logoutLoading: false,
          user: [...state.user, action.data],
        };
  
   
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  