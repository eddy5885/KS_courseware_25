import React, { useState, useEffect } from "react";

function Example1() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count); //异步的
        }}
      >
        Click me
      </button>
    </div>
  );
}

function getInit() {
  const _Example3_ = localStorage.getItem("_Example3_") || "0";
  return parseInt(_Example3_);
}

function Example2() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(getInit); //参数可以是函数

  useEffect(() => {
    // const _Example3_ = localStorage.getItem("_Example3_") || "0";
    // const _Example3_int = parseInt(_Example3_);
    // setCount(_Example3_int);
  }, []);

  useEffect(() => {
    localStorage.setItem("_Example3_", count + "");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          // console.log('setCount', count)
          // setCount(count + 1)
          // console.log('setCount', count)
          // setCount(count + 1)
          // console.log('setCount', count)
          // setCount(count + 1)
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1); // 如何拿到上一次的值
        }}
      >
        Click me 3
      </button>
    </div>
  );
}

export default () => {
  const style = {
    width: "500px",
    background: "#ccc",
    padding: "10px",
  };

  return (
    <div style={style}>
      1:
      <Example1 />
      <hr />
      2:
      <Example2 />
    </div>
  );
};
