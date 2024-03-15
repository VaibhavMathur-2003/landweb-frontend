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
import { useAuthContext } from "./Context/useAuthContext";

function App() {
  const dispatch = useDispatch();
  // const user = useAuthContext();
  const { authStore } = useSelector((state) => state);
  const {user} = authStore; 


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
