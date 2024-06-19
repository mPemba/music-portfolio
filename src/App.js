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
    useState(true);

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
        <div>
          <button
            onClick={() =>
              setShowDelayReverbCalculator(!showDelayReverbCalculator)
            }
          >
            D&R
          </button>
        </div>
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

export default App;
