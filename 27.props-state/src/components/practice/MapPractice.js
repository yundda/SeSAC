import { useRef, useState } from "react";

export default function MapPractice() {
  const inputUserRef = useRef();
  const inputTitleRef = useRef();
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [select, setSelect] = useState("user");
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);
  const addList = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      title: title,
      user: user,
    });
    console.log(inputUserRef.current.value);
    if (!inputUserRef.current.value) {
      inputUserRef.current.focus();
      return;
    } else if (!inputTitleRef.current.value) {
      inputTitleRef.current.focus();
      return;
    }
    setList(newList);
    setUser("");
    setTitle("");
  };
  //   const activeSearch = () => {
  //     if (select === "user") {
  //       setSearchList(
  //         list.filter((el) => {
  //           return el.user.includes(searchKey);
  //         })
  //       );
  //     } else if (select === "title") {
  //       setSearchList(
  //         list.filter((el) => {
  //           return el.title.includes(searchKey);
  //         })
  //       );
  //     }
  // setSearchResult("검색 결과");
  // };
  const activeSearch = () => {
    setSearchList(
      list.filter((el) => {
        return el[select].includes(searchKey);
      })
    );
  };

  return (
    <div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <span>작성자 :</span>{" "}
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="작성자"
          value={user}
          ref={inputUserRef}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <span>제목 :</span>{" "}
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="제목"
          value={title}
          ref={inputTitleRef}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={addList}>작성</button>
      </div>
      <div style={{ margin: "20px" }}>
        <select
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="user">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button onClick={activeSearch}>검색</button>
      </div>
      <div>
        <table width={"500px"} border={"1px"}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
      {searchList.length == 0 ? (
        <h3>검색 결과가 없습니다</h3>
      ) : (
        <div>
          <h4>검색 결과</h4>
          <table width={"500px"} border={"1px"}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {searchList?.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.user}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
        </div>
      )}
    </div>
  );
}
