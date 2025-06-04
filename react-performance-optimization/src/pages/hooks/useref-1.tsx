import React, { useState, useRef } from "react";

function Example1() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [num, setNum] = useState<number>(1);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current?.focus();
  };

  const getInputValue = () => {
    console.log(inputEl.current?.value);
  };
  console.log("inputEl:", inputEl);
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <button onClick={getInputValue}>Get input value</button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </button>
    </>
  );
}
function Example2() {
  const count = useRef<number>(0);
  // const [, setForceUpdate] = useState({});
  (window as any).count1 = count;
  const handleClick = () => {
    count.current += 1;
    console.log("Current count:", count.current);
    // setForceUpdate({});
  };

  return (
    <div>
      <p>Count: {count.current}</p>
      <button onClick={handleClick}>Increment</button>
      <button
        onClick={() => {
          alert(count.current);
        }}
      >
        getValue
      </button>
    </div>
  );
}

export default () => {
  const style: React.CSSProperties = {
    width: "500px",
    background: "#ccc",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={style}>
      <Example1 />
      <hr />
      <Example2 />
    </div>
  );
};
