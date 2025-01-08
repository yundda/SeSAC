import { useState } from "react";

export default function Media() {
  const [img, setImg] = useState("apple");
  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [text, setText] = useState("");
  const chgImage = (e) => {
    setImg(e.target.value);
  };
  const chgBgColor = (e) => {
    setBgColor(e.target.value);
  };
  const chgFontColor = (e) => {
    setFontColor(e.target.value);
  };
  const chgText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <span>
        과일 :
        <select onChange={chgImage}>
          <option value={"apple"}>사과</option>
          <option value={"peach"}>복숭아</option>
          <option value={"banana"}>바나나</option>
          <option value={"grape"}>포도</option>
        </select>
      </span>
      <span>
        배경색 :
        <select onChange={chgBgColor}>
          <option value={"white"}>하양</option>
          <option value={"black"}>검정</option>
          <option value={"red"}>빨강</option>
          <option value={"orange"}>주황</option>
          <option value={"yellow"}>노랑</option>
          <option value={"green"}>초록</option>
          <option value={"blue"}>파랑</option>
          <option value={"purple"}>보라</option>
          <option value={"pink"}>분홍</option>
        </select>
      </span>

      <span>
        글자색 :
        <select onChange={chgFontColor}>
          <option value={"black"}>검정</option>
          <option value={"white"}>하양</option>
          <option value={"red"}>빨강</option>
          <option value={"orange"}>주황</option>
          <option value={"yellow"}>노랑</option>
          <option value={"green"}>초록</option>
          <option value={"blue"}>파랑</option>
          <option value={"purple"}>보라</option>
          <option value={"pink"}>분홍</option>
        </select>
      </span>

      <br />
      <label>
        내용 :
        <input onChange={chgText} type="text" placeholder="내용을 입력하세요" />
      </label>
      <br />
      <img width={"300px"} src={`/${img}.jpg`} alt={`${img}`}></img>
      <br />
      <span style={{ color: fontColor, backgroundColor: bgColor }}>{text}</span>
    </div>
  );
}
