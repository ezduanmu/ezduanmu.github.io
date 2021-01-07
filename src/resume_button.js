import React, { useState } from "react";
import styled from "styled-components";

// TODO: Have this button pass isColor state to all elements but also allow each element to change its own color state onMouseOver

const ResumeButton = (props) => {
  return <Button>Resume</Button>;
};

export default ResumeButton;

const Button = styled.button`
  top: 0px;
  left: 0px;
  margin: 1rem 1rem 1rem 1rem;
  background: white; // TODO: Background switch from grayscale (see images dir) to color gradient (make urself)
  height: 2.5rem;
  width: 9rem;
  font-size: 1.5rem;
  text-decoration: none;
  border: none;
  border-radius: 1rem;
  outline: none;
  :hover {
    top: -3px;
  }
`;
