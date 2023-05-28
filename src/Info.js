import { useState, useEffect, useReducer } from "react";
import useInput from "./useInput";

const Info = () => {
  const [state, onchange] = useInput({ name: "", nick: "" });

  const { name, nick } = state;

  return (
    <>
      <div>
        <input type="text" name="name" onChange={onchange}></input>
        <input type="text" name="nick" onChange={onchange}></input>
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nick}
      </div>
    </>
  );
};

export default Info;
