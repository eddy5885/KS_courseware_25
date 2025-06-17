import React from "react";

//错误案例
class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    console.log("Toggle1 this", this); //this丢失
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
class Toggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Toggle2 this", this);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
class Toggle3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    console.log("Toggle3 this", this); // handleClick是一个箭头函数，this指向Toggle3实例
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

class Toggle4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  render() {
    return (
      <button
        onClick={() => {
          console.log("Toggle4 this", this); // 箭头函数中的this指向Toggle4实例
          this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
          }));
        }}
      >
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default () => {
  const style = {
    width: "500px",
    background: "#ccc",
    padding: "10px",
  };
  return (
    <div style={style}>
      <Example1 />
      <hr />
      <Toggle2 />
      <hr />
      <Toggle3 />
      <hr />
      <Toggle4 />
    </div>
  );
};
