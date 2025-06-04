import React, { useState } from "react";

class Div1 extends React.Component {
  render() {
    console.log("Div1", this.props.num);
    return <p>{this.props.num}</p>;
  }
}

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    this.setState({
      num: 1,
    });
  };
  render() {
    return (
      <>
        <Div1 num={this.state.num}></Div1>
        <button onClick={this.click}>Click</button>
      </>
    );
  }
}

function Example2() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(10)}>Click me</button>
    </div>
  );
}

class Example3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    this.setState({
      num: 1 + this.state.num,
    });
  };
  render() {
    return (
      <>
        <Div1 num={this.state.num}></Div1>
        <button onClick={this.click}>Click</button>
        <Div4 />
      </>
    );
  }
}

function Example4() {
  // 声明一个叫 "count" 的 state 变量。setCount是异步的
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Div4 />
    </div>
  );
}

function Div4() {
  return <div>{Math.random()}</div>;
}

class App extends React.Component {
  render() {
    return (
      <>
        <Example1 />
        <hr />
        <Example2 />
        <hr />
        <Example3 />
        <hr />
        <Example4 />
      </>
    );
  }
}

export default App;
