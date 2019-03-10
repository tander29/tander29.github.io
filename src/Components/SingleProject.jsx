import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import avatar from "../images/headshot.jpg";

const cardStyle = {
  height: "550px",
  width: "400px",
  minHeight: "400px",
  minWidth: "200px",
  margin: "auto"
};

export default class SingleProject extends Component {
  render() {
    const { title, repo, live, about, img } = this.props.projectDetails;
    return (
      <Card style={cardStyle}>
        <CardTitle
          style={{
            background: `url(${img}) center / cover no-repeat`,
            height: "60%",
            color: "white"
          }}
        >
          {title}
        </CardTitle>
        <CardText>{about}</CardText>
        <CardActions border />
        <Button href={repo} target="_blank" colored>
          The Code (Github)
        </Button>
        <Button href={live} target="_blank" colored>
          See it live
        </Button>
      </Card>
    );
  }
}
