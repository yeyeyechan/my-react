import { useState, useMemo, useCallback, useRef } from "react";

const Memo = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const handleChange = useCallback((e) => setNumber(e.target.value), []);
  const ref = useRef(null);
  const id = useRef(1);

  const handleClick = useCallback(() => {
    setList([...list, parseInt(number)]);
    setNumber("");
    ref.current.focus();
    id.current += 1;
    console.log(id.current);
  }, [list, number]);
  const listMap = list.map((ele, index) => <li key={index}>{ele}</li>);
  const getAverage = (list) => {
    console.log("평균값");
    let length = list.length;
    if (length == 0) return 0;
    let sum = list.reduce((x, y) => x + y);

    return sum / length;
  };
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <div>
        <input
          type="text"
          name="value"
          value={number}
          onChange={handleChange}
          ref={ref}
        ></input>
        <button onClick={handleClick}>등록하기</button>
      </div>
      <ul>{listMap}</ul>
      <p>평균값: {avg}</p>
    </div>
  );
};

export default Memo;
