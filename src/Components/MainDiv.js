import React from "react";
import styled from "styled-components";
const Title = styled.h3`
  margin-top: 20px;
`;
const Container = styled.div`
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
const Button = styled.button`
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

const MainDiv = () => {
  return (
    <Container>
      <Title>How would you rate your service with us?</Title>
      <NumberDiv>
        <Numbers>1</Numbers>
        <Numbers>2</Numbers>
        <Numbers>3</Numbers>
        <Numbers>4</Numbers>
        <Numbers>5</Numbers>
        <Numbers>6</Numbers>
        <Numbers>7</Numbers>
        <Numbers>8</Numbers>
        <Numbers>9</Numbers>
        <Numbers>10</Numbers>
      </NumberDiv>
      <InputContainer>
        <Input></Input>
        <Button>Send</Button>
      </InputContainer>
    </Container>
  );
};

export default MainDiv;
