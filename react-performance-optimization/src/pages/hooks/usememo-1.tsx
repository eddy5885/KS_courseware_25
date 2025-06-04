import React, { useState, useMemo, useCallback } from "react";

export interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

//正常情况，父组件渲染， 子组件都会重新渲染 Button2 会一直渲染
function Button2(props: Props) {
  console.log("Button2 render");
  return <button onClick={props.onClick}>{props.children}</button>;
}

function Example1() {
  const [num, setNum] = useState(1);

  const addOne = () => {
    setNum((num) => num + 1);
  };
  return (
    <>
      <div>{num}</div>
      <Button2 onClick={addOne}>Add</Button2>
    </>
  );
}

function Example2() {
  const [num, setNum] = useState(1);

  const addOne = () => {
    setNum((num) => num + 1);
  };
  const button3 = useMemo(() => {
    console.log("iamrending");
    return <Button2 onClick={addOne}>Add</Button2>;
  }, []);
  return (
    <>
      <div>{num}</div>
      {button3}
    </>
  );
}

function Example3() {
  const handerClick1 = useMemo(
    () => () => {
      console.log(777);
    },
    [],
  );
  const handerClick = useCallback(() => {
    console.log(666);
  }, []);
  return (
    <div>
      <div onClick={handerClick}>hello,world</div>
      <div onClick={handerClick1}>hello,world</div>
    </div>
  );
}

function TestComponent() {
  console.log(2222);
  return <div>hello,world</div>;
}
const TestComponent2 = React.memo(TestComponent);

function Example4() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>点击</button>

      {useMemo(
        () => (
          <TestComponent />
        ),
        [],
      )}
      <TestComponent2 />
    </div>
  );
}

export default () => {
  return (
    <div>
      1:
      <Example1 />
      <hr />
      2:
      <Example2 />
      <hr />
      3: useMemo和useCallback的关系
      <Example3 />
      <hr />
      4: useMemo和React.memo的关系
      <Example4 />
    </div>
  );
};
