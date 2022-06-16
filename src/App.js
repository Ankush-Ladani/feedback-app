import React from "react";
import Navbar from "./Components/Navbar";
import MainDiv from "./Components/MainDiv";
import styled from "styled-components";
const Body = styled.div`
  background-color: #89ABE3FF;
  height: 100vh;
  display : flex;
  justify-content : center;
`;
const App = () => {
  return (
    <div className="BodyDiv">
      <Navbar></Navbar>
      <Body>
        <MainDiv></MainDiv>
      </Body>
    </div>
  );
};

export default App;
