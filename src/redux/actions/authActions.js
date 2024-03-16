
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// useLogin.js

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();
  const {authStore} = useSelector((state) => state);
  const {user} = authStore;


  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}user/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      // update the Redux store
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();
  const {authStore} = useSelector((state) => state);
  const {user} = authStore;


  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}user/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      // update the Redux store
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};