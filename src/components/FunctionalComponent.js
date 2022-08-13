import React from "react";

function FunctionalComponent({ name }) {
    function showMessage(msg) {
        alert(msg);
    }
  return (
    <div>
      {/* <h2>Name: {name}</h2> */}
      <br></br>
      <button onClick={showMessage.bind(this, 'This message exicuted from Functional Component')}>Click Me 🙄</button>
    </div>
  );
}

export default FunctionalComponent;
