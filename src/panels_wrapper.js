import React from "react";
import styled from "styled-components";

class PanelsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        isColor: this.props.isColor,
        hoverHandler: this.props.hoverHandler,
      })
    );
    return (
      <Panels
        id="main_background"
        isColor={this.props.isColor.main_background}
        onMouseOver={(e) => this.props.hoverHandler(e)}
      >
        {childrenWithProps}
      </Panels>
    );
  }
}

export default PanelsWrapper;

const Panels = styled.div`
  background: ${(props) => (props.isColor && "pink") || "#1c1c1c"};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
