import React, { useRef, useState } from "react";
import { Button, Input, Checkbox, Form, Divider } from "antd";

interface IProps {}

interface IState {
  value: string;
}
// 受控组件
class NameForm1 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("event:", event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert("提交的名字: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字1:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

// 非受控组件
class NameForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name2:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const InputInstance1 = () => {
  const inputRef = useRef();
  const changeValue = (val) => {
    console.log("val", val.target.value);
  };
  const submit = () => {
    console.log("inputRef:", inputRef.current.input.value);
  };
  return (
    <div>
      <Input ref={inputRef} onChange={changeValue} placeholder="Basic usage" />
      <Button onClick={submit}>submit1</Button>
    </div>
  );
};

const InputInstance2 = () => {
  const [inputVal, setInputVal] = useState("");
  const changeValue = (val) => {
    console.log("val", val.target.value);
    setInputVal(val.target.value);
  };
  const submit = () => {
    console.log("submit value:", inputVal);
  };
  return (
    <div>
      <Input
        value={inputVal}
        onChange={changeValue}
        placeholder="Basic usage"
      />
      <Button onClick={submit}>submit2</Button>
    </div>
  );
};

export default () => {
  const style = {
    width: "500px",
    background: "#ccc",
    padding: "10px",
  };
  return (
    <div style={style}>
      <NameForm1 />
      <Divider />
      <NameForm2 />
      <Divider />
      <InputInstance1 />
      <Divider />
      <InputInstance2 />
      <Divider />
    </div>
  );
};
