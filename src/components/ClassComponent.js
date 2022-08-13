import React, { Component } from "react";

class ClassComponent extends Component {
  showMsg() {
    alert('Class Button Clicked! 🤩');
  }
  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.showMsg}>Click Me! 🙂</button>
        {/* <h3>Designation: {this.props.designation}</h3> */}
      </div>
    );
  }
}

export default ClassComponent;
