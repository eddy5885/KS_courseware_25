import React, { useState } from "react";

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    console.log("this.divRef", this.divRef);
  }
  inputRef = React.createRef();
  childrenRef = React.createRef();
  render() {
    console.log("this.inputRef", this.inputRef);
    return (
      <>
        <div ref={this.divRef}>hello,world!</div>
        <input ref={this.inputRef} type="text" />
        <div>
          <button
            onClick={() => {
              console.log("this.divRef:", this.divRef.current.innerHTML);
              console.log("this.inputRef:", this.inputRef.current.value);
              console.log(
                "this.childrenRef:",
                this.childrenRef.current.getValue(),
              );
            }}
          >
            Btn
          </button>
        </div>
        <div>
          <Div1 ref={this.childrenRef} />
        </div>
      </>
    );
  }
}

class Div1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 10,
    };
  }
  getValue = () => {
    return this.state.num;
  };
  render() {
    return (
      <>
        <div>{this.state.num}</div>
        <button
          onClick={() => {
            this.setState({
              num: this.state.num + 1,
            });
          }}
        >
          add
        </button>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Example1 />
      </>
    );
  }
}

export default App;
