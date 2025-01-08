import { Component } from "react";

export default class PracticeClassState extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    const increase = () => {
      this.setState({ number: number + 2 });
    };
    return (
      <div>
        <h4>클래스형</h4>
        <p>{number}</p>
        <button onClick={increase}>+2</button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
