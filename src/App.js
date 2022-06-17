import React from "react";
import Navbar from "./Components/Navbar";
import MainDiv from "./Components/MainDiv";
import styled from "styled-components";
import FeedbackDiv from "./Components/FeedbackDiv";
const Body = styled.div`
  background-color: #89abe3ff;
  height: 93.8vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  return (
    <div className="BodyDiv" style={{overflowX : 'hidden'}}>
      <Navbar></Navbar>
      <Body>
        <MainDiv></MainDiv>
        <FeedbackDiv></FeedbackDiv>
      </Body>
    </div>
  );
};

export default App;
