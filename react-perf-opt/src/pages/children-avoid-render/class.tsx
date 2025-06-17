import React from "react";

class Toggle3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    console.log("Toggle3 this", this);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <Div1 onClick={this.handleClick}></Div1>
      </>
    );
  }
}

class Div1 extends React.PureComponent<any> {
  render() {
    console.log("Div1");
    return <div onClick={this.props.onClick}>我是div1</div>;
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
      <Toggle3 />
    </div>
  );
};
