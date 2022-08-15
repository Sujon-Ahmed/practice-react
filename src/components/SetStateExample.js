import React from "react";

class SetStateExample extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Riman",
    };
  }
  changeName(name) {
    this.setState({name:name});
  }
  render() {
    return (
      <div>
        <h2>I am {this.state.name}</h2>
        <button onClick={this.changeName.bind(this, "Sujon Ahmed")}>
          Change Name
        </button>
      </div>
    );
  }
}

export default SetStateExample;