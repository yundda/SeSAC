import { useState } from "react";
export default function PracticeFuncState() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 2);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  //   const decrease = () => {
  //     setNumber((prevState) => { return prevState -2 });
  //   };
  return (
    <div>
      <h4>함수형</h4>
      <p>{number}</p>
      <button onClick={increase}>+2</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
