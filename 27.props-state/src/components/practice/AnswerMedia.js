import AnswerSelect from "./AnswerSelect";
import AnswerInput from "./AnswerInput";
import AnswerResult from "./AnswerResult";
import { useState } from "react";

export default function AnswerMedia() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "black",
    content: "text",
  });
  return (
    <div>
      <AnswerSelect setData={setData} />
      <AnswerInput setData={setData} />
      <AnswerResult data={data} />
    </div>
  );
}
