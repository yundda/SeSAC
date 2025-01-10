import { useState } from "react";

export default function Hidden() {
  const [isShow, setIsShow] = useState(true);
  const hidden = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={hidden}>{isShow ? "사라져라" : "보여라"}</button>
      <h3>{isShow && "안녕하세요"}</h3>
    </div>
  );
}
