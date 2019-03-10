import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Profile from "./Profile";
import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Profile} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default Main;
