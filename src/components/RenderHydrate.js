import React from "react";
import ReactDOM from "react-dom";

class RenderHydrate extends React.Component {
  changeName() {
    let container = document.getElementById("contain");
    let element = "I am Sujon Ahmed 😏";
    let callback = () => alert("I am Callback 🥱");
    ReactDOM.render(element,container, callback); // you can use ReactDom.hydrate()
  }
  render() {
    return (
      <div>
        <button onClick={this.changeName}>Change Name</button>
        <h1 id="contain">I am Riman 😎</h1>
      </div>
    );
  }
}

export default RenderHydrate;