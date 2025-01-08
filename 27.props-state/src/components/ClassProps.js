import { Component } from "react";
class ClassProps extends Component {
  render() {
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi,{this.props.name}</h4>
        <ul>
          <li>별명 : {this.props.nickname}</li>
          <li>좋아하는 색 : {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps2 extends Component {
  render() {
    const { color, name, nickname, fontColor } = this.props;
    const divStyle = {
      color: fontColor,
      backgroundColor: color,
    };
    return (
      <div style={divStyle}>
        <h4>hi,{name}</h4>
        <ul>
          <li>별명 : {nickname}</li>
          <li>좋아하는 색 : {color}</li>
        </ul>
      </div>
    );
  }
}

ClassProps2.defaultProps = {
  fontColor: "beige",
};

export { ClassProps, ClassProps2 }; // 객체 형태로 내보내기 또는 위에서 맨 앞에 export 적기
