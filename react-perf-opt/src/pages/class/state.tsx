import React, { useState } from "react";

interface IState2{
  date: Date
}

class Example1 extends React.Component<{},IState2> {
  constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
    
  }
  timerID: NodeJS.Timeout | null = null;

  componentDidMount() {
    console.log("componentDidMount ");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <div>Hello, world!</div>
        <div>It is {this.state.date.toLocaleTimeString()}.</div>
      </div>
    );
  }
}

interface IState {
  num: number;
}
class Example2 extends React.Component<{},IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    this.setState({
      num: this.state.num + 1,
    });
    console.log("click", this.state.num); //异步的
  };
  render() {
    return (
      <>
        <div>{this.state.num}</div>
        <button onClick={this.click}>2Click</button>
      </>
    );
  }
}

class Example3 extends React.Component<{},IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    // 参数可以是函数
    this.setState((preStatue) => {
      return {
        num: preStatue.num + 1,
      };
    });
  };
  render() {
    return (
      <>
        <div>{this.state.num}</div>
        <button onClick={this.click}>3Click</button>
      </>
    );
  }
}

class Example4 extends React.Component<{},IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    this.setState(
      {
        num: this.state.num + 1,
      },
      () => {
        console.log("click", this.state.num); //回调函数
      },
    );
  };
  render() {
    return (
      <>
        <div>{this.state.num}</div>
        <button onClick={this.click}>4Click</button>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <hr />
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
