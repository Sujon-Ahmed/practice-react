import React from "react";

class ForceUpdateComponent extends React.Component {
  constructor() {
    super();
    this.changeNumber = this.changeNumber.bind(this);
  }
  changeNumber() {
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <h2>{Math.random()}</h2>
        <button onClick={this.changeNumber}>Change Number</button>
      </div>
    );
  }
}

export default ForceUpdateComponent;
