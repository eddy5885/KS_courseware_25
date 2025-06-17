import React, { useState } from "react";

function Div2() {
  console.log("我是div2");
  return <div>Welcome: Hello, 我是Div2</div>;
}
function Example4() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);
  console.log("count", count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <Div2 />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example4;
