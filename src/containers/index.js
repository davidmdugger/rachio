import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "./LandingPage/LandingPage";
import NotFound from "./NotFound/NotFound";

export default function Layout() {
  return (
    <Router>
      <div>
        <h1>Nav</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
