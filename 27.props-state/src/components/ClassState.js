import { Component } from "react";

export default class ClassState extends Component {
  // render() 위에서 state 선언
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경!(class형)
        </button>
      </div>
    );
  }
}
