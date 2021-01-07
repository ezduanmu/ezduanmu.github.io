import React, { useState } from "react";
import styled from "styled-components";
import data from "./data";

const ProjectsPanel = (props) => {
  return (
    <Panel id="projects_panel" isColor={props.isColor.projects_panel}>
      <TitleRow>
        <Title id="projects_title" isColor={props.isColor.projects_title}>
          Projects
        </Title>
      </TitleRow>
      <BodyRow></BodyRow>
    </Panel>
  );
};

export default ProjectsPanel;

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
  //background: white;
`;

/* END: BODY TEXT */

/* START: BODY */
const Brief = styled.h2``;

const Description = styled.h3``;

/* END: BODY */
