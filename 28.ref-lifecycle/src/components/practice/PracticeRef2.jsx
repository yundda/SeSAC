import { useEffect, useRef, useState } from "react";

export default function PracticeRef2() {
  const inputRef = useRef();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const cal = ["+", "x", "-"];
  const [idx, setIdx] = useState();
  useEffect(() => {
    setNum1(Math.round(Math.random() * 10));
    setNum2(Math.round(Math.random() * 10));
    setIdx(Math.round(Math.random() * 2));
  }, []);
  const checkAnswer = () => {
    let answer;
    if (idx === 0) {
      answer = num1 + num2;
    } else if (idx === 1) {
      answer = num1 * num2;
    } else if (idx === 2) {
      answer = num1 - num2;
    }
    console.log(answer, inputRef.current.value);
    answer == inputRef.current.value
      ? alert("정답입니다")
      : alert("오답입니다");
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "100px",
          lineHeight: "100px",
          textAlign: "center",
        }}
      >
        <h3>
          {num1}
          {cal[idx]}
          {num2}
        </h3>
        <input type="text" ref={inputRef} />
        <button onClick={checkAnswer}>정답 제출</button>
      </div>
    </>
  );
}
