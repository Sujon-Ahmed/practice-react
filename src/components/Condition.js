import React from "react";

class Condition extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  render() {
    return this.state.login ? <button>Logout</button> : <button>Login</button>;
  }
}

export default Condition;
