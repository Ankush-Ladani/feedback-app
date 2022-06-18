import React from "react";
import Navbar from "./Components/Navbar";
import MainDiv from "./Components/MainDiv";
import styled from "styled-components";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./FeedbackData/FeedbackData";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackStats from "./Components/FeedbackStats";
const Body = styled.div`
  background-color: #89abe3ff;
  height: 93.8vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  const [feedback, setFeedback] = React.useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="BodyDiv">
      <Navbar></Navbar>
      <Body>
        <MainDiv></MainDiv>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </Body>
    </div>
  );
};

export default App;
