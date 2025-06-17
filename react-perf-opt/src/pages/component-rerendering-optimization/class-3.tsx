import React from "react";

interface IDivProps {
  num: number;
}

// props没有变化时，只要父组件重新渲染，则子组件重新渲染（hook也会这样）
class Div1 extends React.Component<IDivProps> {
  render() {
    console.log("Div1", this.props.num);
    return <p>{this.props.num}</p>;
  }
}

interface IExample4State {
  num: number;
}

class Example3 extends React.PureComponent<{}, IExample4State> {
  constructor(props: any) {
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
    console.log("Example3我在重新渲染");
    return (
      <>
        <Div1 num={this.state.num}></Div1>

        <button onClick={this.click}>Click</button>
      </>
    );
  }
}
class Example4 extends React.Component<{}, IExample4State> {
  constructor(props: any) {
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
  shouldComponentUpdate(nextProps: any, nextState: IExample4State) {
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextState.num === this.state.num) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Example4我在重新渲染");
    return (
      <>
        <Div1 num={this.state.num}></Div1>

        <button onClick={this.click}>Click</button>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Example3 />
        <hr />
        <Example4 />
      </>
    );
  }
}

export default App;
