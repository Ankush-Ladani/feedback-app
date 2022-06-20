import React from "react";
import styled from "styled-components";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  const Container = styled.div``;
  return (
    <Container>
      <AnimatePresence>
        {feedback.map(
          (
            item // ! Most IMP that whenevr we want return component we have to use simple brackets
          ) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate = {{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedbackItem
                item={item}
                handleDelete={handleDelete}
                key={item.id}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </Container>
  );
  // return (
  //   <Container>
  //     {feedback.map(
  //       (
  //         item // ! Most IMP that whenevr we want return component we have to use simple brackets
  //       ) => (
  //         <FeedbackItem item={item} handleDelete={handleDelete} key={item.id} />
  //       )
  //     )}
  //   </Container>
  // );
};

export default FeedbackList;
