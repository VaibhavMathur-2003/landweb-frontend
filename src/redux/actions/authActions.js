import axios from "axios";
import { useState } from "react";

export const Auth_TYPES = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",

  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_ERROR: "LOGOUT_ERROR",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",

};

// export const useLogin = (user) => async(dispatch) => {
  
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(null);
  
//     const login = async (email, password) => {
//       setIsLoading(true);
//       setError(null);
//       const response = await fetch(
//         `${process.env.REACT_APP_BASE_URL}user/signin`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user.token}`,
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );
//       const json = await response.json();
//       if (!response.ok) {
//         setIsLoading(false);
//         setError(json.error);
//       }
//       if (response.ok) {
//         // save the user to local storage
//         localStorage.setItem("user", JSON.stringify(json));
//         // update the auth context
//         dispatch({ type: "LOGIN", payload: json });
//         setIsLoading(false);
//       }
//     };
//     return { login, isLoading, error };
  // };
  export const useLogin = (email, password, user) => async (dispatch) => {
  
    dispatch({ type: Auth_TYPES.LOGIN_REQUEST });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ email, password }),
        }
      );
      dispatch({ type: Auth_TYPES.LOGIN_SUCCESS, data: response.data });
    } catch (error) {
      dispatch({ type: Auth_TYPES.LOGIN_ERROR, data: error });
    }
  };
// export const useSignup = (user, isLoading, error) => async (dispatch) => {
//     // const [error, setError] = useState(null);
//     // const [isLoading, setIsLoading] = useState(null);
  
//     const signup = async (email, password) => {
//       setIsLoading(true);
//       setError(null);
//       const response = await fetch(`${process.env.REACT_APP_BASE_URL}user/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json",
//         Authorization: `Bearer ${user.token}`
//        },
//         body: JSON.stringify({ email, password }),
//       });
//       const json = await response.json();
//       if (!response.ok) {
//         setIsLoading(false);
//         setError(json.error);
//       }
//       if (response.ok) {
//         // save the user to local storage
//         localStorage.setItem("user", JSON.stringify(json));
//         // update the auth context
//         dispatch({ type: "LOGIN", payload: json });
//         setIsLoading(false);
//       }
//     };
//     return { signup, isLoading, error };
//   };


// export const useLogout = () => async (dispatch) => {

//     const logout = () => {
//         localStorage.removeItem('user')
//         dispatch({type: 'LOGOUT'})
//     }
//     return {logout}
// }