import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';
import './library/fonts/Bogart-Light.ttf';
import './library/fonts/Bogart-Regular.ttf';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

const App = () => {
  return (
    <Main>
      <Content>
        <Title>
          Michael Sayer
        </Title>
        <SubTitle>Engineer <Accent>&</Accent></SubTitle>
        <SubTitle>Composer</SubTitle>
        <HeadingImageContainer>
          <HeadingImage src='/deskSmall.jpg' alt='me' />
        </HeadingImageContainer>
        <Projects />
        <Contact />
      </Content>
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

const HeadingImageContainer = styled.div`
  width: 100%;
  height: 455px;
  display: flex;
  justify-content: flex-end;
  margin: 30px 0px 200px 0px;
`;

const HeadingImage = styled.img`
  width: 80%;
  max-width: 1060px;
  height: 455px;
  border: 2px solid ${colors.textBlack};
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
