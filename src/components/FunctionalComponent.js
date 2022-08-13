import React from "react";

function FunctionalComponent({ name }) {
    function showMessage() {
        alert('Button is Clicked! 😁');
    }
  return (
    <div>
      {/* <h2>Name: {name}</h2> */}
      <br></br>
      <button onClick={showMessage}>Click Me 🙄</button>
    </div>
  );
}

export default FunctionalComponent;
