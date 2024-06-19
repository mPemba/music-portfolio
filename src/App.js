import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "./library/colors";
import "./library/fonts/Bogart-Light.ttf";
import "./library/fonts/Bogart-Regular.ttf";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import DelayCalculator from "./components/DelayCalc";

const App = () => {
  const [showDelayReverbCalculator, setShowDelayReverbCalculator] =
    useState(false);

  return (
    <Main>
      <Content>
        <Title>Michael Sayer</Title>
        <SubTitle>
          Engineer <Accent>&</Accent>
        </SubTitle>
        <SubTitle>Composer</SubTitle>
        <Projects />
        <Contact />
        <HiddenContainer>
          <DelayReverbButton
            onClick={() =>
              setShowDelayReverbCalculator(!showDelayReverbCalculator)
            }
          >
            D&R
          </DelayReverbButton>
        </HiddenContainer>
      </Content>

      {showDelayReverbCalculator && <DelayCalculator />}
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundGrey};
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundGrey};
  padding: 100px;

  @media (max-width: 768px) {
    padding: 100px 22px;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 5vw, 4rem);
  margin: 10px 0px 10px 0px;
  color: ${colors.textWhite};
`;

const SubTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 44px;
  margin: 0px;
  color: ${colors.textBlack};

  @media (max-width: 768px) {
    line-height: 20px;
  }
`;

const Accent = styled.span`
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 40px;
  color: ${colors.textWhite};
`;

const HiddenContainer = styled.div`
  opacity: 0.2;
  margin-top: 100px;
`;

const DelayReverbButton = styled.button`
  width: fit-content;
  font-size: 14px;
  color: ${colors.dimGrey};
  margin: 0px;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;

  :hover {
    color: ${colors.textBlack};
  }
`;

export default App;
