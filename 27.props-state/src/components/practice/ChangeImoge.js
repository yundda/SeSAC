import { useState } from "react";

export default function ChangeImoge() {
  const [number, setNumber] = useState(1);
  //   const [imoge, setImoge] = useState("😝");
  const inclease = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h2>
        {number}
        {number > 7 ? "😝" : "🥳"}
      </h2>
      <button onClick={inclease}>1증가</button>
      <button onClick={decrease}>1감소</button>
    </div>
  );
}
