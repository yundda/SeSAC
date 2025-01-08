import { useState } from "react";

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);
  const { name, age, nickName } = props.objArr[index];
  const changeMember = () => {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div>
      <p>이름 :{name}</p>
      <p>나이 : {age}</p>
      <p>별명 : {nickName}</p>
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}
