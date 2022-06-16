import React from "react";
import styled from "styled-components";
const Container = styled.div`
    width : 100%;
    background :  #E2D1F9;
    margin : 0 0;
    padding : 10px;
    display : flex;
    justify-content : center;
`;
const Title = styled.h1`
    font-size : 1.4rem;
    color : #317773;
`;
const Navbar = () => {
  return <Container>
    <Title>Feedback UI</Title>
  </Container>;
};

export default Navbar;
