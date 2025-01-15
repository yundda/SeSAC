import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";
export default function PracticeReact() {
  const RootDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const logoSpin = keyframes`
    from{transform: rotate(0)}
    to{transform: rotate(360deg)}
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${logoSpin} 20s linear infinite;
  `;
  const AppLink = styled.a`
    color: #61dafb;
  `;
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </RootDiv>
  );
}
