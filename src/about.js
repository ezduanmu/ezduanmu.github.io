import React, { useState } from "react";
import styled from "styled-components";
import data from "./data";

// TODO: (low priority, see intro.js) import Panel from "./panel";

const AboutPanel = (props) => {
  return (
    <Panel
      id="about_panel"
      isColor={props.isColor.about_panel}
      onMouseOver={(e) => props.hoverHandler(e)}
    >
      <TitleRow>
        <Title id="about_title" isColor={props.isColor.about_title}>
          About Me
        </Title>
      </TitleRow>
      <BodyRow id="about_body">
        <BodyText id="about_body" isColor={props.isColor.about_body}>
          This summer, I'll be a{" "}
          <BodyTextHighlight isColor={props.isColor.about_body}>
            technology summer analyst at Morgan Stanley
          </BodyTextHighlight>{" "}
          as a member of the application development team. I am currently a
          junior at{" "}
          <BodyTextHighlight isColor={props.isColor.about_body}>
            Tufts University
          </BodyTextHighlight>{" "}
          pursuing a B.S. in computer science.
          <br />
          TODO ADD TEXT HERE TODO ADD TEXT HERE TODO ADD TEXT HERE TODO
          <br />
          Outside of computer science, I enjoy finding peace through hiking and
          bouldering or meeting my friends online through video games. But, most
          of all, I am a huge music enthusiast! I love getting to know people
          through their musical taste (I promise no judgment). I plan on
          appending a section about my musical favorites and discoveries to this
          website in the future!
        </BodyText>
      </BodyRow>
    </Panel>
  );
};

export default AboutPanel;

const Panel = styled.div`
  margin: 3rem 1rem 3rem 1rem;
  padding: 3rem 1rem;
  background: ${(props) => (props.isColor && "green") || "#1c1c1c"};
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 75vh;
  border-radius: 50px;
`;

/* START: TITLE */
const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  display: block;
  margin: 0 3rem;
  text-align: left;
  font-size: 6rem;
  color: ${(props) => (props.isColor && "yellow") || "#000000"};
  line-height: 6rem;
  font-family: sans-serif;
`;
/* END: TITLE */

/* START: BODY TEXT */
const BodyRow = styled.div`
  display: flex;
`;

const BodyText = styled.p`
  color: ${(props) => (props.isColor && "#FFFFFF") || "#000000"};
  font-family: sans-serif;
  font-size: 2rem;
  margin: 3rem;
`;

const BodyTextHighlight = styled.span`
  color: ${(props) => (props.isColor && "yellow") || "#000000"};
  /* font-weight: ${(props) => (props.isColor && "bold") || "none"};
  transition: font 0.8s ease-in; */
`;
/* END: BODY TEXT */
