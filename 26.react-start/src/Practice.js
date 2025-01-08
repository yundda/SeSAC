function Practice() {
  const name = "로이";
  const animal = "강아지";
  let a = 5;
  let b = 4;
  return (
    <div>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <h2>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <h2>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</h2>
      <h2>{a > b && "a가 b보다 큽니다"}</h2>
    </div>
  );
}
export default Practice;
