
//错误案例
class classA {
  constructor(props) {
    this.state = { isToggleOn: true };
    this.handleClick3 = this.handleClick.bind(this);
    this.cache1 = {}
  }
  cache2 = {};
  handleClick() {
    console.log('this is handleClick',this);
  }
  handleClick2 = () => {
    console.log('this is handleClick2',this);

  };
  render() {
    
  }
}

const A = new classA();
const f1 = A.handleClick
const f2 = A.handleClick2
const f3 = A.handleClick3

console.log(f1())
console.log('____')
console.log(f2())
console.log('____')
console.log(f3())


