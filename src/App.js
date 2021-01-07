import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import PanelsWrapper from "./panels_wrapper";

import IntroPanel from "./intro";
import WorkPanel from "./work";
import ProjectsPanel from "./projects";
import AboutPanel from "./about";
import Footer from "./footer";

import ColorButton from "./color_button";
import ResumeButton from "./resume_button";

// TODO: Make color appear via scroll
// TODO: ^^ or make child components color their respective panels (i.e. if they hover over title but not the panel)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorToggled: false,
      isColor: {
        // TODO: Nest by page, will require adjusting functions
        // TODO: Allow each one to be created dynamically instead of all listed here
        main_background: false,
        intro_panel: false,
        intro_pic: false,
        intro_name: false,
        intro_caption: false,
        intro_sub_caption: false,
        intro_linkedin: false,
        intro_resume: false,
        intro_github: false,
        about_panel: false,
        about_title: false,
        about_body: false,
        about_body_highlight: false,
        work_panel: false,
        work_title: false,
        work_logo_1: false,
        work_logo_2: false,
        footer: false,
      },
    };
  }

  hoverColorHandler = (e) => {
    e.preventDefault();
    let obj = this.state.isColor;
    obj[e.target.id] = true;
    if (e.target.class) {
      console.log("hi");
    }
    obj[e.target.class] = true;
    this.setState({ isColor: obj });
  };

  toggleColor = (e) => {
    e.preventDefault();
    let obj = this.state.isColor;
    Object.keys(obj).forEach((k) => (obj[k] = !this.state.isColorToggled));
    this.setState({ isColor: obj });

    this.setState((prevState) => ({
      isColorToggled: !this.state.isColorToggled,
    }));
  };

  render() {
    return (
      <Main
        isColor={this.state.isColor.main_background}
        onMouseOver={(e) => this.hoverColorHandler(e)}
      >
        <GlobalStyle isColor={this.state.isColor.main_background} />
        <ColorButton
          isColor={this.state.isColor}
          clickHandler={this.toggleColor}
        />
        <PanelsWrapper
          isColor={this.state.isColor}
          hoverHandler={this.hoverColorHandler}
        >
          <IntroPanel />
          <AboutPanel />
          <WorkPanel />
          <ProjectsPanel />
          <Footer />
        </PanelsWrapper>
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${(props) => (props.isColor && "pink") || "#000000"};
  transition: all 0.8s ease-in;
  * {
    transition: all 0.8s ease-in;
  }
`;

const GlobalStyle = createGlobalStyle`body {
  background: ${(props) => (props.isColor && "red") || "#000000"}
}`;
