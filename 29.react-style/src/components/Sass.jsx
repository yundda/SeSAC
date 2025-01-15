import "../style/Sass.scss";
import img1 from "../assets/main.png";
export default function Sass() {
  return (
    <>
      <h4>SASS 사용 (.scss)</h4>
      {/* sass 기본, nesting과 & */}
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>
      {/* mixin 사용해보기 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>
      {/* image 불러오기 */}
      <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기(상대경로)</h5>
      <img
        src="../assets/main.png"
        alt="src 내부의 사진은 경로명으로 바로 접근 불가합니다"
      />
      <h5>import 후 가져오기</h5>
      <img src={img1} alt="import 후 가져오기" />

      <h5>css에서 background-image 속성으로 접근하기</h5>
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      {/* public이 root임 -> / 의미 */}
      <img
        src="/images/main.png"
        alt="public 폴더 내부에서는 경로명으로 접근 가능"
      />
      {/* React는 Node.js 기반이기 때문에 env 탑재 */}
      <img
        src={process.env.PUBLIC_URL + "/images/main.png"}
        alt="process.env.PUBLIC_URL 로 접근하면 조금 더 안전함"
      />
      <h5>css에서 background-image 속성으로 접근하기</h5>
      <div className="public-img img-test"></div>

      <h3>사진 넣기 실습 with sass(background-image 속성 사용)</h3>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
