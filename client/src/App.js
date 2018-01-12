import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>;

export default App;


// Sign In/Up Modal
// Page with cuisine, zip, map, list results
// Page for existing reservations (ability to edit through modal)

// dc0000 red
