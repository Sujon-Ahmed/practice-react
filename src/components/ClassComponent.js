import React, { Component } from "react";

class ClassComponent extends Component {
  showMsg(msg) {
    alert(msg);
  }
  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.showMsg.bind(this, 'This Message will return Class Component!')}>Click Me! 🙂</button>
        {/* <h3>Designation: {this.props.designation}</h3> */}
      </div>
    );
  }
}

export default ClassComponent;
