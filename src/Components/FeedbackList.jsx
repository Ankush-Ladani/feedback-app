import React from "react";
import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback , handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedback.map((item) => (    // ! Most IMP that whenevr we want return component we have to use simple brackets
        <FeedbackItem item={item} handleDelete = {handleDelete} key={item.id} />
      ))}
    </div>
  );
};


export default FeedbackList;
