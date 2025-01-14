import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import Counter from "./components/Counter";
import ChangeColor from "./components/practice/ChangeColor";
import ChangeImoge from "./components/practice/ChangeImoge";
import HandlerEx from "./components/practice/HandlerEx";
import Hidden from "./components/practice/Hidden";
import Media from "./components/practice/Media";
import PororoObj from "./components/practice/PororoObj";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import PracticeClassState from "./components/practice/PracticeClassState";
import PracticeFuncState from "./components/practice/PracticeFuncState";
import SyntheticEvent from "./components/SyntheticEvent";
import AnswerMedia from "./components/practice/AnswerMedia";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import { Alphabet, Alphabet2 } from "./components/Alphabet";
import Email from "./components/practice/Email";
import MapPractice from "./components/practice/MapPractice";
function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h2>Props</h2>
      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />
      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="배" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스켓" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!</span>
      </FunctionProps4>
      <h2>State</h2>
      <h3>클래스형 State</h3>
      <ClassState />
      <h3>함수형 State</h3>
      <FunctionState />
      <br></br>
      <h3>Practice</h3>
      <PracticeClassState />
      <hr />
      <PracticeFuncState />
      <h3>이벤트</h3>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
      <ChangeColor />
      <br />
      <Hidden />
      <br />
      <ChangeImoge />
      <hr />
      <PororoObj /> */}
      {/* <Media />
      <AnswerMedia /> */}
      {/* <PropsMap arr={arr} />
      <PropsMap2 arr={arr} /> */}
      {/* <Alphabet />
      <Alphabet2 /> */}
      {/* <Email /> */}
      <MapPractice />
    </div>
  );
}

export default App;
