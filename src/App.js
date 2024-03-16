import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import "./App.scss";
import { pageLoad } from "./redux/actions/pageAction";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

function App() {
  const {authStore} = useSelector((state1) => state1);
  const {user} = authStore;

  const dispatch = useDispatch();

 
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        dispatch({ type: 'LOGIN', payload: user})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    pageLoad(user)(dispatch);
  }, [dispatch, user]);

  const x = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={x ? <Home /> : <Navigate to="/signin" />}
        />
        <Route exact path="/editor/:pageId" element={<Editor />} />
        <Route
          exact
          path="/signin"
          element={!x ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/signup"
          element={!x ? <SignUp /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
