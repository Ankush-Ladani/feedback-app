import styled from "styled-components";
import PropTypes, { func } from "prop-types";
import { FaTimes } from "react-icons/fa";
const Container = styled.div`
  margin: 20px 500px;
  background: #783937ff;
  width: 29.5%;
  border-radius: 7px;
  padding: 40px;
  position: relative;
  color: red;
  display: flex;
`;
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
  color: red;
`;
const Text = styled.p`
  color: #f1ac88ff;
  font-weight: 500;
`;
const Icon = styled.button`
  position: absolute;
  top: 5px;
  left: 500px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Container key={item.id}>
      <Rating> {item.rating} </Rating>
      <Text> {item.text} </Text>
      <Icon onClick={() => handleDelete(item.id)}>
        <FaTimes color="red" size="20px" />
      </Icon>
    </Container>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object,
  rating: PropTypes.number,
  text: PropTypes.string,
};

export default FeedbackItem;
