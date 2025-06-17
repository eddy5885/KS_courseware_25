import React, { useState } from "react";

const App = () => (
  <A>
    <B>
      <C />
    </B>
  </A>
);
/* 
const App2 = () => (
  <A
    children={
      <B>
        <C />
      </B>
    }
  ></A>
);
*/
function A(props: any) {
  debugger;
  const [num, setNum] = useState(1);
  console.log("AAA");
  return (
    <div style={{ border: "1px solid red" }}>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        btn
      </button>
      {num}
      {true ? props.children : "无权限访问"}
    </div>
  );
}
function B(props: any) {
  const [num, setNum] = useState(10);
  console.log("BBB");

  return (
    <div style={{ border: "1px solid green",margin: "10px" }}>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        btn
      </button>
      {num}
      {props.children}
    </div>
  );
}
function C(props: any) {
  const [num, setNum] = useState(100);
  console.log("CCC");

  return (
    <div style={{ border: "1px solid blue",margin: "10px" }}>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        btn
      </button>
      {num}
      {props.children}
    </div>
  );
}

export default App;
