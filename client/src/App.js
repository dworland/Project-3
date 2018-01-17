import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Reservations from "./Pages/Reservations";
import Search from "./Pages/Search";
import SignIn from "./Pages/SignIn";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Reservations" component={Reservations} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  </Router>;

export default App;


// Sign In/Up Modal
// Page with cuisine, zip, map, list results
// Page for existing reservations (ability to edit through modal)

// dc0000 red
