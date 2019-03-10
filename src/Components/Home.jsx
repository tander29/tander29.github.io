import React from "react";
import headshot from "../images/headshot.jpg";
import { Header, Content, Drawer, Layout, Navigation } from "react-mdl";
import mountain from "../images/mountain2.jpg";
import Main from "./Main";
import { Link } from "react-router-dom";

const layoutStyle = {
  background: `url(${mountain}) center / cover`,
  filter: "grayscale(60%)"
};

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
          <Layout style={layoutStyle}>
            <Header
              transparent
              title="Travis Anderson"
              style={{ color: "white" }}
            >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Travis Anderson">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Main />
            <Content />
          </Layout>
        </div>
      </React.Fragment>
    );
  }
}
