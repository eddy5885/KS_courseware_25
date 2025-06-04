import React from "react";

interface IState {
  list: number[];
}
export default class Demo extends React.Component<{}, IState> {
  state = {
    list: [],
  };
  handerClick = () => {
    let starTime = new Date().getTime();
    this.setState(
      {
        list: new Array(40000).fill(0),
      },
      () => {
        const end = new Date().getTime();
        console.log((end - starTime) / 1000 + "秒");
      },
    );
  };
  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div>
        <button onClick={this.handerClick}>点击</button>
        {list.map((item, index) => (
          <li className="list" key={index}>
            {item + "" + index} Item
          </li>
        ))}
      </div>
    );
  }
}
