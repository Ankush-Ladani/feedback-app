import React from 'react'
import FeedbackData from "../FeedbackData/FeedbackData";
import styled from 'styled-components';
const Rating = styled.div`
  background: #1e2761;
  width: 20px;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: -10px;
  left: -12px;
  color: #97bc62ff;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: #f1ac88ff;
  font-weight: 500;
`;
const FeedbackItem = () => {
  return (
    <div >
        {FeedbackData.map((item) => {
            <div>
                {/* <Rating>{item.rating}</Rating>
                <Text>{item.text}</Text> */}
                {item}
            </div>
        })}
    </div>
  )
}

export default FeedbackItem