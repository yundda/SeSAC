import { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    str: "Hello World!",
  };
  render() {
    const { str } = this.state;
    return (
      <div>
        <h3>{str}</h3>
        <button
          onClick={() => {
            this.setState({ str: "Goodbye World!" });
          }}
        >
          change
        </button>
      </div>
    );
  }
}
