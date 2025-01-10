import { useState } from "react";

export default function ChangeColor() {
  const [str, setStr] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const chgRed = () => {
    setStr("빨간색 글씨");
    setColor("red");
  };
  const chgBlue = () => {
    setStr("파란색 글씨");
    setColor("blue");
  };
  return (
    <div>
      <h3 style={{ color: color }}>{str}</h3>
      <button onClick={chgRed}>빨간색</button>
      <button onClick={chgBlue}>파란색</button>
    </div>
  );
}
