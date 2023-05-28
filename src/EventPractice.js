import React, { Component, useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const { message, userName } = form;
  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    alert("hello " + userName + " : " + message);
    setForm({
      userName: "",
      message: "",
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        placeholder="사용자명"
        value={userName}
        onChange={onChangeForm}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeForm}
        onKeyUp={handleKeyPress}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
