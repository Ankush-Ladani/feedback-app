import { func } from "prop-types";
import React from "react";
import styled from "styled-components";
import RatingSelect from "./RatingSelect";
const Title = styled.h3`
  margin-top: 20px;
`;
const Container = styled.form`
  margin-top: 20px;
  background: #fcedda;
  width: 35vw;
  height: 25vh;
  text-align: center;
  border-radius: 10px;
`;
const Numbers = styled.button`
  width: 20px;
  background: #ee4e34;
  color: white;
  margin: 10px;
  padding: 8px 15px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: #990011ff;
  }
`;
const NumberDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const InputContainer = styled.div`
  margin-top: 10px;
`;
const Input = styled.input`
  width: 75%;
  padding: 5px 10px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: none;
  border: 2px solid gray;
`;
const Button = styled.input`
  padding: 5px 10px;
  background: #00008b;
  color: #add8e6;
  font-weight: 600;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  &:hover {
    cursor: pointer;
  }
`;
const MainDiv = ({ handleAdd }) => {
  const [text, setText] = React.useState("");
  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const [rating, setRating] = React.useState(10);
  function handleClick(e) {
    setSelected(e.target.value);
    console.log(selected);
  }
  function addFeedback() {
    console.log(text);
  }
  function showTextInput(e) {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Title>How would you rate your service with us?</Title>
      {/* <NumberDiv>
        <Numbers value="1" onClick={handleClick}>1</Numbers>
        <Numbers  onClick={handleClick}>2</Numbers>
        <Numbers  onClick={handleClick}>3</Numbers>
        <Numbers  onClick={handleClick}>4</Numbers>
        <Numbers  onClick={handleClick}>5</Numbers>
        <Numbers  onClick={handleClick}>6</Numbers>
        <Numbers  onClick={handleClick}>7</Numbers>
        <Numbers  onClick={handleClick}>8</Numbers>
        <Numbers onClick={handleClick}>9</Numbers>
        <Numbers onClick={handleClick}>10</Numbers>
      </NumberDiv> */}
      <RatingSelect select={(rating) => setRating(rating)} />
      <InputContainer>
        <Input
          placeholder="Write a Review"
          value={text}
          onChange={showTextInput}
        ></Input>
        <Button
          type="submit"
          disabled={btnDisabled}
          onClick={addFeedback}
          value="Submit"
        ></Button>
      </InputContainer>
      <div> {message} </div>
    </Container>
  );
};

export default MainDiv;
