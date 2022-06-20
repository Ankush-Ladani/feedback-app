import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  background: #e2d1f9;
  margin: 0 0;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.4rem;
  color: #317773;
`;
const Navbar = () => {
  return (
    <Container style={{display : "flex" , flexDirection : "column" , justifyContent : "center"}}>
      <Title>Feedback UI</Title>
      <div style={{display : "flex" , flexDirection : "column"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </Container>
  );
};

export default Navbar;
