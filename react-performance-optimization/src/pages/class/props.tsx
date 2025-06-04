import React, { useState } from "react";

interface IProps {
  name: string;
}
function Welcome1(props:IProps) {
  return <div>Welcome: Hello, {props.name}</div>;
}

class Welcome2 extends React.Component<IProps,{}> {
  constructor(props:IProps) {
    super(props);
  }
  render() {
    return <div>Welcome2: Hello, {this.props.name}</div>;
  }
}
class Example1 extends React.Component {
  render() {
    return (
      <>
        <Welcome1 name="Sara" />
        <Welcome2 name="Cahal" />
        <Welcome1 name="Edite" />
      </>
    );
  }
}

interface IProps2 {
  num: number;
}
class Div1 extends React.Component<IProps2> {
  render() {
    console.log("Div1", this.props.num);
    return <p>{this.props.num}</p>;
  }
}
class Div2 extends React.PureComponent<IProps2> {
  render() {
    console.log("Div2", this.props.num);
    return <p>{this.props.num}</p>;
  }
}

class Div3 extends React.Component<IProps2> {
  shouldComponentUpdate(nextProps:IProps2, nextState:{}) {
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextProps.num === this.props.num) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Div3", this.props.num);
    return <p>{this.props.num}</p>;
  }
}

class Example2 extends React.Component<{},{ num: number }> {
  constructor(props:{}) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  click = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    return (
      <>
        <Div1 num={this.state.num}></Div1>
        <Div2 num={this.state.num}></Div2>
        <Div3 num={this.state.num}></Div3>
        <button onClick={this.click}>Click</button>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Example1 />
        <hr />
        <Example2 />
      </>
    );
  }
}

export default App;
