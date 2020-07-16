import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {

    count: 0, 

  };
  //state를 사용하려면 클래스형 컴포넌트 안에서 소문자롤 이용해서 state라고 적자...
  //stae는 동적 데이터 활용시 꼭 필요 !!!!!

  add = () => {
    //this.state.count = 1; state 직접 변경하지 마라... 왜? render 다시 못불러오거든! 그럼 해결책은? -> setState 함수 ! 
    //this.setState({ count: this.state.count + 1 }); 좋은 방법은 아님,, 왜? 성능 문제가 있을 수 있다고 함 ,,!
    this.setState(currnet => ({count: currnet.count + 1, }));
  };

  minus = () => {
    //this.state.count = -1; state 직접 변경하지 마라...
    //this.setState({ count: this.state. count - 1 });
    this.setState(currnet => ({count: currnet.count - 1, }));
  }

  //리액트 반응속도 짱빠르다. 새로고침도 안일어남 bb 

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() { //화면이 업데이트 되는 경우에 실행됨
    console.log('I just updated');
  }

  componentWillUnmount() { //컴포넌트가 화면에서 떠날 때 실행 됨
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendering");
    return (
    <div>
    <h1>The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
//클래스형 컴포넌트는 render()함수가 JSX를 반환한다. -> render()함수는 우리가 직접 실행하지 않아도 됨.
}
//클래스형 컴포넌트가 되려면 'App클래스가 리액트가 제공하는 Component 클래스를 반드시 상속 :: 클래스에 다른 클래스의 기능을 추가할 수 잇게 해준다 ::받아야 한다 !!! '

export default App;