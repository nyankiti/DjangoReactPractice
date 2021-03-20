import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { useHistory, useLocation } from 'react-router-dom';

// components

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route  path="/" exact />
        </Switch>
      </Router>
    </>
  );
};
export default App;
