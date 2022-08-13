import React from "react";

const showMsg = (msg) => {
  alert(msg);
};

const ArrowFunction = () => {
  return (
    <div>
      <br></br>
      <button onClick={showMsg.bind(this, "This text return arrow function")}>
        Click Me! 😎
      </button>
    </div>
  );
};

export default ArrowFunction;
