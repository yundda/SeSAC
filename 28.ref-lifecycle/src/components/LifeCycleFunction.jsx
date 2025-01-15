import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /*
    useEffect(effect[,dependency_array])
    - effect : 콜백 함수
    - dependency_array(의존성 배열) : 의존성 배열에 있는 데이터가 변하면 effect(콜백함수) 실행
    - [](빈배열) : Mount 되었을 때만 동작
    - 생략 : Mount, Update시 언제나 동작
    - [data1,data2, ...] : Mount, data1,data2가 update되었을 때 동작
    */

  // Mount 시점에 실행
  useEffect(() => {
    console.log("함수형 컴포넌트 mount🐛");
  }, []);

  // Unmount 시점에 실행
  useEffect(() => {
    return () => {
      console.log("함수형 컴포넌트 unmount🦋");
    };
  }, []);

  // Update 시점에 실행 + mount 시점
  useEffect(() => {
    // text, number 스테이트가 바뀔 때 모두 실행 됨
    console.log("함수형 컴포넌트 update🐞");
  });

  // 특정 state 업데이트 + mount 시점
  useEffect(() => {
    console.log("text update🦊");
  }, [text]);

  return (
    <>
      <p>MyComponent : {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

export default function LifeCycleFunction() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };
  const changeVisibleState = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>On/Off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
