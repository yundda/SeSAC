export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log("합성이벤트 클릭");
  }
  function printInput(e) {
    console.log(e.target); // 이벤트가 걸리고 있는 타겟 tag
    console.log(e.target.value); // 이벤트가 걸리고 있는 타겟 tag의 value
  }
  function callTest() {
    alert("안녕하세요");
  }
  return (
    <div>
      <button onClick={syntheticEvent}>콘솔을 보세요</button>
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}
      {/* callTest 경우는 onClick 하기도 전에 바로 실행됨
            why? 함수 실행 결과가 담겨옴
      1번도 함수 직접 실행이 아니라 함수로 이동하는 것. */}
      <br />
      <input
        onChange={(e) => {
          printInput(e);
        }}
        type="text"
        placeholder="글자를 입력하세요."
      />
      {/* 화살표 함수로 함수 불러올 경우 실행()까지 해줘야 함 */}
    </div>
  );
}
