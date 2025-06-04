//@ts-nocheck

import React from "react";

const A = ({ children, extraProp }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        // 将 extraProp 传递给子组件
        return React.cloneElement(child, { extraProp });
      })}
    </div>
  );
};

const B = ({ extraProp }) => {
  return <div>Child component received prop: {extraProp}</div>;
};

const App = () => {
  return (
    <A extraProp="extra value from parent">
      <B />
    </A>
  );
};

export default App;
