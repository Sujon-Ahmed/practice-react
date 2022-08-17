import React from "react";
import ReactDOM from "react-dom";

class ReactFindDomNode extends React.Component {
  changePhoto() {
    var img = document.getElementById("photo");
    ReactDOM.findDOMNode(img).src =
      "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138_960_720.jpg";
  }
  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.changePhoto}>Change Image</button> <br></br>
        <br></br>
        <img
          id="photo"
          src="https://cdn.pixabay.com/photo/2022/08/01/06/08/irbene-7357426_960_720.jpg"
          alt="img"
          width={400}
        ></img>
      </div>
    );
  }
}

export default ReactFindDomNode;
