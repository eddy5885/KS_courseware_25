
//错误案例
class classA {
  constructor(props) {
    this.state = { isToggleOn: true };
    this.handleClick3 = this.handleClick.bind(this);
    this.cache1 = {}
  }
  cache2 = {};
  handleClick() {
    
  }
  handleClick2 = () => {

  };
  render() {
    
  }
}

const A = new classA();
console.log(A)