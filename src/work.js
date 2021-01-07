import React, { useState } from "react";
import styled from "styled-components";
import data from "./data";

// TODO: (low priority, see intro.js) import Panel from "./panel";

const WorkPanel = (props) => {
  return (
    <Panel id="work_panel" isColor={props.isColor.work_panel}>
      <TitleRow>
        <Title id="work_title" isColor={props.isColor.work_title}>
          Work Experience
        </Title>
      </TitleRow>
      <BodyRow></BodyRow>
    </Panel>
  );
};

export default WorkPanel;

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
  position: relative;
  display: block;
  margin: 0 3rem;
  text-align: right;
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
const Brief = styled.h2`
  font-family: sans-serif;
  color: white;
`;

const Description = styled.h3``;

/* END: BODY */
