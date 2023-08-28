import React, { Component } from "react";
export default class Classcompinent extends Component {
  constructor(props) {
    super();
    this.state = {
      color: "red",
    };
    //console.log(this.props.name);
  }
  clickfunc = () => {
    this.setState((prevstate) => {
      return {
        color: prevstate.color === "red" ? "blue" : "red",
      };
    });
  };
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <h1>{this.state.color}</h1>
        <button onClick={this.clickfunc}>click here</button>
      </>
    );
  }
}
