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

class Div2 extends React.Component<{}> {
  render() {
    console.log("我是子组件div2");
    return <p>我是子组件div2</p>;
  }
}

interface IExample4State {
  num: number;
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
      num: 1 + this.state.num,
    });
  };
  render() {
    return (
      <>
        <Div1 num={this.state.num}></Div1>
        <Div2 />
        <button onClick={this.click}>Click</button>
      </>
    );
  }
}

export default Example4;
