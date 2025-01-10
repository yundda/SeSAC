export default function AnswerResult(props) {
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      <div>
        {/* 결과화면 : img + p */}
        <img width={"300px"} src={`/${fruit}.jpg`} alt={`${fruit}`}></img>
        <p
          style={{
            backgroundColor: background,
            color: color,
            width: "100px",
            height: "50px",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
