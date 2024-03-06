import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import "./App.scss"
import { pageLoad } from "./redux/actions/pageAction";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/editor/:pageId" component={Editor}></Route>
        <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
