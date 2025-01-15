import style from "../style/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";
export default function ModuleCSS() {
  // style.first style.second 대신 바로 불러오기 위함
  const setting = Names.bind(style);
  return (
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스를 여러개 지정하는 방법1 - 템플릿 리터럴
      </div>
      {/* {
      [1,2,3,4,5].join("-") >> 1-2-3-4-5
      ["first","second"](" ") >> "first second"
      } */}
      <div className={[style.first, style.second].join(" ")}>
        클래스를 여러개 지정하는 방법2 - 배열과 join 이용
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스를 여러개 지정하는 방법3 - classNames 모듈 사용
      </div>
      <div className={setting("first", "second")}>
        classnames 모듈 사용 더 해보기
      </div>
    </div>
  );
}
// 다른 컴포넌트에서도 같은 클래스 이름 사용이 가능한데...그럼 같은 css 에서 가능한가?
