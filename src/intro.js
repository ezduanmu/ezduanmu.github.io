import React, { useState } from "react";
import styled from "styled-components";

// TODO: (low priority) import Panel from "./panel";
import ResumeButton from "./resume_button";

import data from "./data";

import profile_pic from "./resources/profile.jpg";
import linkedin_logo from "./resources/linkedin_darkblue.png";
import github_logo from "./resources/github_black.png";

// TODO: When hovering over button, if only the logo is technically hovered, button won't color
// TODO: therefore I think we should activateColor from id to class/tag

const IntroPanel = (props) => {
  return (
    <Panel id="intro_panel" isColor={props.isColor.intro_panel}>
      <NameRow>
        <ProfilePic
          id="intro_pic"
          src={profile_pic}
          isColor={props.isColor.intro_pic}
        />
        <NameWrapper>
          <Name id="intro_name" isColor={props.isColor.intro_name}>
            {data.first_name.toUpperCase()}
            DID IT WORK??
            <br />
            {data.last_name.toUpperCase()}
          </Name>
        </NameWrapper>
      </NameRow>
      <CaptionRow>
        <Caption id="intro_caption" isColor={props.isColor.intro_caption}>
          Software developer
        </Caption>
        <SubCaption
          id="intro_sub_caption"
          isColor={props.isColor.intro_sub_caption}
        >
          Full-time student at Tufts University
        </SubCaption>
      </CaptionRow>
      <Links>
        <Button id="intro_linkedin" isColor={props.isColor.intro_linkedin}>
          <Logo
            src={linkedin_logo}
            isColor={props.isColor.intro_linkedin}
            onClick={() =>
              window.open("https://www.linkedin.com/in/eric-duanmu/")
            }
          />
        </Button>
        <Button id="intro_resume" isColor={props.isColor.intro_resume}>
          <Resume>Resume</Resume>
        </Button>
        <Button id="intro_github" isColor={props.isColor.intro_github}>
          <Logo
            src={github_logo}
            onClick={() => window.open("https://github.com/ezduanmu")}
          />
        </Button>
      </Links>
    </Panel>
  );
};

export default IntroPanel;

// TODO: (low priority) Make Panel into its own component (for some reason this shit doesn't work when I give different props, it treats all Panels as one or smth)
const Panel = styled.div`
  user-select: none;
  cursor: default;
  margin: 3.5rem 1rem 3rem 1rem;
  padding: 3rem 1rem 1rem 1rem;
  background: ${(props) => (props.isColor && "green") || "#1c1c1c"};
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 75vh;
  border-radius: 50px;
`;

/* START: NAME */
const NameRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background: white;
`;

const NameWrapper = styled.div`
  margin-left: 2rem;
  text-align: left;
  //background: black;
  padding: -10rem;
`;

const Name = styled.h1`
  margin: 0;
  //background: lightgreen;
  font-size: 10rem;
  color: ${(props) => (props.isColor && "yellow") || "#000000"};
  line-height: 10rem;
  font-family: sans-serif;
`;
/* END: NAME */

/* START: PROFILE PICTURE */
const ProfilePic = styled.img`
  //margin-top: 2rem;
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  border: 0.5rem solid;
  border-color: ${(props) => (props.isColor && "lightgreen") || "#1c1c1c"};
  filter: ${(props) =>
    (props.isColor && "none") || "grayscale(100%) brightness(10%)"};
`;
/* END: PROFILE PICTURE */

/* START: CAPTION */
const CaptionRow = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Caption = styled.h2`
  display: float;
  color: ${(props) => (props.isColor && "yellow") || "#121212"};
  margin: 0.5rem auto;
  font-size: 3rem;
`;

const SubCaption = styled.h2`
  display: float;
  color: ${(props) => (props.isColor && "yellow") || "#121212"};
  margin: 0.5rem auto;
  font-size: 2rem;
`;
/* END: CAPTION */

/* START: LINKS */
const Links = styled.div`
  margin: 1rem 0;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0rem 5rem 0rem 5rem;
  // background: ${(props) => (props.isColor && "yellow") || "white"};
  background: ${(props) =>
    (props.isColor && "lightgreen") || "#1c1c1c"}; // #1c1c1c
  position: relative;
  border-radius: 50px;
  width: 12rem;
  height: 4rem;
  line-height: 4rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  :hover {
    transition: transform 0.2s linear;
    transition: background-color 0.2s linear;
    transition: filter 0.8s ease-in;
    transform: scale(1.1);
    background: yellow;
  }
`;

const Logo = styled.img`
  position: absolute;
  max-width: 70%;
  max-height: 80%;
  width: auto;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  filter: ${(props) =>
    (props.isColor && "none") || "grayscale(100%) brightness(10%)"};
`;

const Resume = styled.span`
  font-family: sans-serif;
  color: black;
  font-size: 2rem;
  font-weight: bold;
`;
/* END: LINKS */
