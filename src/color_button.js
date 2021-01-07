import React from "react";
import styled from "styled-components";
// TEST
// TODO: Account for when the user has manually colored everything, then we want to switch the button to back to gray

const ColorButton = (props) => {
  return <Button onClick={(e) => props.clickHandler(e)}>Color Me!</Button>;
};

export default ColorButton;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
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
  transition: none !important;
  :hover {
    top: -3px;
  }
`;
