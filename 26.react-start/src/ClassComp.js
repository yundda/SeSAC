import { Component } from "react";

class ClassComp extends Component {
  render() {
    const name = "class";
    return (
      <h2 style={{ color: "blue" }} onClick={() => alert("클릭하셨군요!")}>
        {name}형 컴포넌트 사용하기
      </h2>
    );
  }
}

export default ClassComp;
