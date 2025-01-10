import { useState } from "react";

export default function Email() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addUser = () => {
    const newList = list.concat({
      name: name,
      email: email,
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
    });
    setList(newList);
    setName("");
    setEmail("");
  };
  const pressEnter = (e) => {
    if (e.key == "Enter") {
      addUser();
    }
  };
  const deleteUser = (id) => {
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
          placeholder="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={pressEnter}
        />
        <button onClick={addUser}>등록</button>
      </div>
      <ul>
        {list.map((el) => {
          return (
            <li
              key={el.id}
              onDoubleClick={() => {
                deleteUser(el.id);
              }}
            >
              {el.name}:{el.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
