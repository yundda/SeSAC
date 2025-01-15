import { Component } from "react";

class MyComponent extends Component {
  // mount 되었을 때 동작
  componentDidMount() {
    console.log("mount🐛");
  }
  // update 되었을 때 동작
  componentDidUpdate() {
    console.log("update🐞");
  }
  // unmount 되기 직전 동작
  componentWillUnmount() {
    console.log("unmount🦋");
  }
  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}
export default class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* 
        - visible state 값에 따라서 MyComponent가 생성 및 제거
        - 생성(mount), 제거(unmount)
         */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
