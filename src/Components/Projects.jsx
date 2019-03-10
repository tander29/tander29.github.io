import React, { Component } from "react";
import SingleProject from "./SingleProject";
import projectList from "../Constants/projectList.jsx";

const projectBoardStyle = {
  display: "flex",
  justifyContent: "space-between"
};
export default class Projects extends Component {
  renderProjects = () => {
    return projectList.projects.map((p, index) => (
      <SingleProject projectDetails={p} key={index} />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "white" }}>Projects</h1>
        <div style={projectBoardStyle}>{this.renderProjects()}</div>
      </React.Fragment>
    );
  }
}
