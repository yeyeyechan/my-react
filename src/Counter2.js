import { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>
        {" "}
        현재 카운터 값은 <b>{counter}</b>
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};
export default Counter2;
