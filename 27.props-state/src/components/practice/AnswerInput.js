export default function AnswerInput({ setData }) {
  const handleChg = (evt) => {
    //   {
    //     fruit: "apple",
    //     background: "white",
    //     color: "black",
    //     content: "text",
    //   }
    setData((prevState) => {
      return { ...prevState, content: evt.target.value };
    });
  };
  return (
    <div>
      {/* input 1개 */}
      내용 :<input onChange={handleChg} placeholder="내용을 입력하세요." />
    </div>
  );
}
