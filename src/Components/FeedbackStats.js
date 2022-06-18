import React from "react";
import styled from "styled-components";
const FeedbackStats = ({ feedback }) => {
  let avg = feedback.reduce((acc, curr) => {
    return (acc + curr.rating);
  }, 0)/(feedback.length);
  avg = avg.toFixed(1).replace(/[.,]0$/, " ")  //! (/[.,]0$/, " ") for removing leading and trailing 0.
  const Container = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top :10px; 
  `;
  return (
    <Container>
      <div style={{marginRight: "310px"}}>{feedback.length > 1 ? <h4>Reviews : <span style={{color: "white"}}>{feedback.length}</span></h4> : <h4>Review : <span style={{color: "white"}}>{feedback.length}</span></h4> }</div>
      <h4>Average Rating : <span style={{color: "white"}}>{isNaN(avg) ? 0 : avg}</span></h4>
    </Container>
  );
};

export default FeedbackStats;
