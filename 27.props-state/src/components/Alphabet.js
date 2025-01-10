import { useState } from "react";

export function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [input, setInput] = useState("");
  //   console.log([1, 2, 3, 4, 5].concat(10));
  //   console.log(list);
  const addAlpha = (e) => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1, // 중간에 삭제 해도 중복 id가 생기지 않기 위해 list.length +1 사용하지 않음
      alpha: input,
    });
    setList(newList);
    setInput("");
  };
  // input 태그에 enter를 눌렀을 때 등록되도록
  const activeEnter = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      addAlpha();
    }
  };
  // 더블 클릭시 삭제
  const deleteAlpha = (id) => {
    console.log(id);
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };
  // filter 함수
  const newArr = [1, 2, 3, 4, 5].filter((el) => {
    return el > 3;
  });
  //   console.log(newArr);
  return (
    <div>
      <h2>alphabet</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={activeEnter}
        />
        <button onClick={addAlpha}>추가</button>
      </div>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export function Alphabet2() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [input, setInput] = useState("");
  const addAlpha = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      alpha: input,
    });
    setList(newList);
    setInput("");
  };
  const activeEnter = (e) => {
    if (e.key == "Enter") {
      addAlpha();
    }
  };
  const deleteAlpha = (id) => {
    const newList = list.filter((el) => {
      return el.id !== id;
    });
    setList(newList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={activeEnter}
        />
        <button onClick={addAlpha}>추가</button>
      </div>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
