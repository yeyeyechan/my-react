import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("enter");
  };
  const onClickLeave = () => {
    setMessage("Leave");
  };

  const [color, setColor] = useState("red");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        red
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        blue
      </button>
      <button
        style={{ color: "grey" }}
        onClick={() => {
          setColor("grey");
        }}
      >
        grey
      </button>
    </div>
  );
};

export default Say;
