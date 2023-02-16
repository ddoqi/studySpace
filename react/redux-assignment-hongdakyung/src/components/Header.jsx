import React from "react";
import styled, { keyframes } from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <Neon> 🎄 나의 TodoList 🎄 </Neon>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  height: 100px;
  font-size: 35px;
  text-align: center;
  background-color: #161853;
  color: white;
  line-height: 100px;
`;

const neon = keyframes`
  0%,
  50% {
    text-shadow: 0 0 1vw white, 0 0 3vw #e67e87, 0 0 10vw #cf6f87, 0 0 10vw #cc3884, 0 0 .4vw #e260bb, .5vw .5vw .1vw #1c128c;
    color: #30f14a;
  }

`;

const Neon = styled.h2`
  animation: ${neon} 3s ease infinite;
  -moz-animation: ${neon} 2s ease infinite;
  -webkit-animation: ${neon} 2s ease infinite;
  font-size: 40px;
  color: white;
`;
