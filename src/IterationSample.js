import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, name: "눈사람1" },
    { id: 2, name: "눈사람2" },
    { id: 3, name: "눈사람3" },
    { id: 4, name: "눈사람4" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onDoubleClick = (id) => {
    const newNames = names.filter((ele) => ele.id !== id);
    setNames(newNames);
  };
  const newList = names.map((ele) => (
    <li
      key={ele.id}
      onDoubleClick={() => {
        onDoubleClick(ele.id);
      }}
    >
      {ele.name}
    </li>
  ));
  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    setNames([...names, { id: nextId, name: inputText }]);
    setNextId(nextId + 1);
    setInputText("");
  };
  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{newList}</ul>
    </>
  );
};

export default IterationSample;
