import React, { useRef } from "react";
import useCount from "@/hooks/useCount";

function App() {
  return (
    <div>
      <h1>自定义hooks</h1>
      <App1 />
      <hr />
      <App2 />
    </div>
  );
}

function App1() {
  const { count, increment, decrement } = useCount(0);

  return (
    <div>
      <h2>自定义hooks1</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

function App2() {
  const { count, increment, decrement } = useCount(0);

  return (
    <div>
      <h2>自定义hooks2</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
export default App;
