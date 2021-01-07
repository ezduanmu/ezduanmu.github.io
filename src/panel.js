import React, { useState } from "react";
import styled from "styled-components";

// const Panel = (props) => {
//   return <StyledPanel isColor={props.isColor}>{props.children}</StyledPanel>;
// };

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isColor: props.isColor };
  }

  render() {
    console.log(this.state.isColor);
    return (
      <StyledPanel isColor={this.props.isColor}>
        {this.props.children}
      </StyledPanel>
    );
  }
}

export default Panel;

const StyledPanel = styled.div`
  margin: 3rem 1rem 3rem 1rem;
  padding: 3rem 1rem;
  background: ${(props) => (props.isColor && "green") || "gray"};
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 100%;
  border-radius: 50px;
  transition: all 2s ease-in;
`;
