import React from "react";
import styled from "styled-components";

const footer_style = {
  margin: "0",
  padding: "10px",
  backgroundColor: "#F8F8F8", // TODO
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "15px",
  width: "100%",
};

const footer_wrap_style = {
  margin: "0",
  padding: "10px",
  display: "block",
  height: "15px",
  width: "100%",
};

const Footer = (props) => {
  return (
    <FooterWrapper id="footer" isColor={props.isColor.main_background}>
      <FooterText>Website designed and created by Eric Duanmu 2021</FooterText>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  bottom: 0;
  margin: 0;
  padding: 0;
  background: ${(props) => (props.isColor && "lightgreen") || "#1c1c1c"};
  width: 100%;
  height: 2rem;
`;

const FooterText = styled.div`
  margin: auto 0;
  padding: 0;
  width: 100%;
  text-align: center;
`;
