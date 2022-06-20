import React from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Components/Navbar";
import MainDiv from "./Components/MainDiv";
import styled from "styled-components";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./FeedbackData/FeedbackData";
import FeedbackItem from "./Components/FeedbackItem";
import Home from "./Pages/Home";
import FeedbackStats from "./Components/FeedbackStats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Post from "./Components/Post";
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
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback);
  };
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        {/* <Route path="/post/:id" element={<Post />}></Route> */}
        {/* <Route path="/post" element={<Post />}></Route> */}
        <Route path="/post/*" element={<Post />}></Route>
      </Routes>
    </>
  );
};



export default App;
