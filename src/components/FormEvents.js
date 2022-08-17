import React, { Component } from "react";

class FormEvents extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  changeName = (event) => {
    let newName = event.target.value;
    this.setState({ name: newName });
  };
  render() {
    return (
      <div>
        <h4>I am {this.state.name}</h4>
        <input
          onChange={this.changeName}
          type="text"
          placeholder="Enter your name"
        ></input>
      </div>
    );
  }
}

export default FormEvents;
