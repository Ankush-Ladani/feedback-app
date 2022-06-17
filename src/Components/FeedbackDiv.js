import React from "react";
import styled from "styled-components";
import FeedbackItem from "./FeedbackItem";
const Container = styled.div`
  margin: 30px;
  background: #783937ff;
  width: 29.5%;
  border-radius: 7px;
  padding: 20px 40px;
  position: relative;
`;
const FeedbackDiv = () => {
  return (
    <Container>
      <FeedbackItem></FeedbackItem>
    </Container>
  );
};

export default FeedbackDiv;
