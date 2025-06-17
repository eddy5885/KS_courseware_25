import React, { useState } from "react";

function Example4() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);
  console.log("count", count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(5)}>Click me</button>
    </div>
  );
}

export default Example4;
