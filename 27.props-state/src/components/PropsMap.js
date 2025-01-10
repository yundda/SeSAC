import { FunctionProps2 } from "./FunctionProps";

export default function PropsMap({ arr }) {
  const testArr = [1, 2, 3, 4, 5];
  const newTestArr = testArr.map((el) => el + 10);
  const testArr2 = [<div>안뇽하세용</div>, <div>제 이름은 dda입니다</div>];
  return (
    <div>
      <h3>Map 사용해보기</h3>
      {testArr}
      {newTestArr}
      {/* {testArr2} */}
      <ul>
        {arr.map((el, i) => {
          return (
            <li key={i}>
              {el.name}, {el.number}개에 {el.krPrice}원
            </li>
          );
        })}
      </ul>
      {/* <FunctionProps2 name="사과" krPrice={10000} number={5} /> */}
      {arr.map((el, i) => (
        <FunctionProps2
          key={i}
          name={el.name}
          number={el.number}
          krPrice={el.krPrice}
        />
      ))}
    </div>
  );
}
