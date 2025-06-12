import React, { useState, useCallback, memo } from "react";

export interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

//正常情况，父组件渲染， 子组件都会重新渲染
function Button2(props: Props) {
  console.log("Button2 render");
  return <button onClick={props.onClick}>{props.children}</button>;
}
//后续使用Button3包裹，解决父组件渲染子组件渲染问题
const Button3 = memo(Button2);

function Example1() {
  const [num, setNum] = useState(1);
  // 每次渲染addOne 都是新的，Button3的props变化
  console.time('Example1')
  const addOne = () => {
    setNum((num) => num + 1);
  };
  // debugger;
  // (window as any).addOne = addOne;
  console.timeEnd('Example1')
  return (
    <>
      <div>{num}</div>
      <Button3 onClick={addOne}>Add</Button3>
    </>
  );
}

function Example2() {
  const [num, setNum] = useState(1);
  console.time('Example2')
  // 新手经常踩得坑
  const addOne = useCallback(() => {
    setNum(num + 1);
  }, []);
  // debugger;
  // (window as any).addOne = addOne;
  console.timeEnd('Example2')
  return (
    <>
      <div>{num}</div>
      <Button3 onClick={addOne}>Add</Button3>
    </>
  );
}

function Example3() {
  const [num, setNum] = useState(1);
  // 需要把依赖加到这，但是会导致addOne每次变化
  const addOne = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  (window as any).addOne = addOne;
  return (
    <>
      <div>{num}</div>
      <Button2 onClick={addOne}>Add</Button2>
    </>
  );
}

function Example4() {
  const [num, setNum] = useState(1);
  // 利用state的函数式更新
  const addOne = useCallback(() => {
    setNum((x) => x + 1);
  }, []);
  (window as any).addOne = addOne;
  return (
    <>
      <div>{num}</div>
      <Button3 onClick={addOne}>Add</Button3>
    </>
  );
}

export default () => {
  return (
    <div>
      1：
      <Example1 />
      <hr />
      2：
      <Example2 />
      <hr />
      3：
      <Example3 />
      <hr />
      4：
      <Example4 />
    </div>
  );
};
