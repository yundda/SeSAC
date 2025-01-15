import { useRef, useState } from "react";

export default function PracitceRef() {
  const inputRef = useRef();
  const [color, setColor] = useState("white");
  const chgColor = () => {
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "100px",
          lineHeight: "100px",
          textAlign: "center",
        }}
      >
        <input type="text" ref={inputRef} />
        <button onClick={chgColor}>색 적용</button>
      </div>
    </>
  );
}
