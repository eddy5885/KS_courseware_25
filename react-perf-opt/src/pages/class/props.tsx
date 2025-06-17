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
