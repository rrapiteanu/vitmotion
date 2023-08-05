import styled, { css, keyframes } from "react-emotion";

const Container = styled.div`
  background: #333;
`;

const myAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const myStyle = css`
  color: rebeccapurple;
  animation: ${myAnimation} 2s linear infinite;
`;

const MyComponent = () => (
  <Container>
    <p>MyComponent</p>
    <p className={myStyle}>Hello World</p>
  </Container>
);

export default MyComponent;
