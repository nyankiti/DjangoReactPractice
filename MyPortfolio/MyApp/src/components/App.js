import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

// components
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";


const App = () => {
  return (
    <div className='big_container'>
      <Router>
        <Navbar />
        <Switch>
          <Route  path="/myapp" exact component={Home} />
          <Route  path="/myapp/services" exact component={Services} />
          <Route  path="/myapp/products" exact component={Products} />
          <Route  path="/myapp/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
