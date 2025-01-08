import { useState } from "react";
export default function FunctionState() {
  // 1. 기존 js 사용
  /*
  let apple = "사과";
  const inEng = () => {
    console.log(apple);
    // apple = "apple";
    const content = document.querySelector(".state");
    content.innerHTML = "apple";
  };
*/
  // 2. useState 사용하기
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}>영어로 변경</button>
  //     </div>
  //   );

  // 3. vanilla JS 사과 > apple > 사과 > apple
  //   const chgLg = () => {
  //     const content = document.querySelector(".state");
  //     content.innerText === "사과"
  //       ? (content.innerText = "apple")
  //       : (content.innerText = "사과");
  //   };
  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={chgLg}>언어 변경</button>
  //     </div>
  //   );
  const [showEnglish, setShowEnglish] = useState(true);
  const chgLg2 = () => {
    setShowEnglish(!showEnglish);
    // true라면 false로, flase라면 true로
  };
  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      <button onClick={chgLg2}>언어 변경</button>
    </div>
  );
}
