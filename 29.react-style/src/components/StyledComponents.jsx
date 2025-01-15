import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;
const H4Title = styled.h4`
  background-color: yellowgreen;
  /* 반응형 설정하기 */
  // orientation: 세로 방향 - portrait 가로 방향 - landscape
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;
const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;

// keyframes는 CSS에서 사용 가능한 문법이므로 변수로 선언 후 keyframes import 해서 사용
// 이 변수가 아래에서 사용되고 있기 때문에 윗줄에서 선언을 먼저 해주는 게 좋음
const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    50%{
        transform: rotate(180deg);
        background-color: aliceblue;

    }
    100%{
        transform: rotate(360deg);

    }
`;

//props 사용, hover, animation 사용
const Child = styled.span`
  color: red;

  &:hover {
    /* color: wheat; */
    color: ${(props) => (props.color ? props.color : "white")};
    cursor: pointer;
    background-color: ${(props) => (props.bg ? props.bg : "yellow")};
    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4Title>Styled Components 이용</H4Title>
      <ParentDiv>
        <Child bg="skyblue">element1</Child>
        <Child color="pink">element2</Child>
        <Child color="orange">element3</Child>
      </ParentDiv>
    </StyledContainer>
  );
}
