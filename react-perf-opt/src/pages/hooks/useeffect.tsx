import React, { useState, useEffect } from "react";

function Example1() {
  const [count, setCount] = useState(0);

  // 与 componentDidMount() 和 componentDidUpdate() 类似:
  useEffect(() => {
    // 使用浏览器 API 更新网页标题
    document.title = `You clicked ${count} times`;
    return ()=>{
      console.log("close me");
    }
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Example2() {
  const [count, setCount] = useState(0);

  // 与 componentDidMount() 和 componentDidUpdate() 类似:
  useEffect(() => {
    // 使用浏览器 API 更新网页标题
    document.title = `You clicked ${count} times`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Example3() {
  const [count, setCount] = useState(0);

  // 与 componentDidMount() 和 componentDidUpdate() 类似:
  useEffect(() => {
    // 使用浏览器 API 更新网页标题
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          if (Math.random() < 1 / 2) {
            setCount(count + 1);
          }
        }}
      >
        Click me
      </button>
    </div>
  );
}


function Example4() {
  const [count, setCount] = useState(0);

  // 与 componentDidMount() 和 componentDidUpdate() 类似:
  useEffect(() => {
    // 使用浏览器 API 更新网页标题
    document.title = `You clicked ${count} times`;
    return () => {
      console.log("close me");
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default () => {
  const [close, setClose] = useState(false);

  return (
    <div>
      1:
      <Example1 />
      <hr />
      2:
      <Example2 />
      <hr />
      3:
      <Example3 />
      <hr />
      4:（注意和点击1和点击4的区别）
      {!close && <Example4 />}
      <button
        onClick={() => {
          setClose(true);
        }}
      >
        close Example4
      </button>
      <hr />
    </div>
  );
};
