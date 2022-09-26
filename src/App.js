import React from 'react';
import styled from 'styled-components';
import { neveColors } from './library/colors';

const App = () => {
  return (
    <Main>
      <Content>
        <Title>
          Michael Sayer
        </Title>
        <SubTitle>Composer based in Salt Lake City</SubTitle>
        <SubTitle>I have multiple projects under way</SubTitle>
        <SubTitle>including music for film and television.</SubTitle>
        <ColorsVertical>
          <div style={{ width: '25px', height: '25px', background: '#E8EEF2' }}></div>
          <div style={{ width: '25px', height: '25px', background: '#D6C9C9' }}></div>
          <div style={{ width: '25px', height: '25px', background: '#C7D3DD' }}></div>
          <div style={{ width: '25px', height: '25px', background: '#77B6EA' }}></div>
          <div style={{ width: '25px', height: '25px', background: '#37393A' }}></div>
        </ColorsVertical>
        <Projects>
          <Project>
            <Details>
              <div>
                <SubTitle>music for film</SubTitle>
                <Text>Proud Taxi Member - Not placed yet but my music has been signed to multiple libraries.</Text>
                <Link href="https://www.taxi.com/members/michael-sayer" target="_blank" rel="noopener noreferrer">
                  Taxi Member Profile
                </Link>
              </div>
              <Spacer>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: '#E8EEF2' }}></div>
                  <div style={{ width: '20%', height: '25px', background: '#D6C9C9' }}></div>
                  <div style={{ width: '20%', height: '25px', background: '#C7D3DD' }}></div>
                  <div style={{ width: '20%', height: '25px', background: '#77B6EA' }}></div>
                  <div style={{ width: '20%', height: '25px', background: '#37393A' }}></div>
                </ColorsHorizontal>
              </Spacer>
            </Details>
          </Project>

          <Project>
            <SubTitle>Ghost of Young Michael:</SubTitle>
            <Link href="https://youngmichael.bandcamp.com/" target="_blank" rel="noopener noreferrer">
              bandcamp
            </Link>
            <Link href="youtube.com/user/michaeljsay" target="_blank" rel="noopener noreferrer">
              youtube
            </Link>
          </Project>

          <Project>
            <SubTitle>The Great Turtle:</SubTitle>
            <Link href="https://greatturtle.bandcamp.com/" target="_blank" rel="noopener noreferrer">
              bandcamp
            </Link>
          </Project>
        </Projects>
      </Content>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${neveColors.darkBlue};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${neveColors.darkBlue};
  padding: 64px 44px;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const Title = styled.h1`
  font-size: calc(42px + (20 * (100vw - 1024px)) / 416);
  margin: 0px 0px 20px 0px;
  color: ${neveColors.white};
`;

const SubTitle = styled.h1`
  font-size: calc(30px + (20 * (100vw - 1024px)) / 416);
  margin: 0px;
  color: ${neveColors.white};
`;

const ColorsVertical = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ColorsHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  margin-left: 10px;
`;

const Spacer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-size: calc(20px + (20 * (100vw - 1024px)) / 416);
  margin: 0px;
  color: ${neveColors.white};
`;

const Link = styled.a`
  width: fit-content;
  box-shadow: -2px -2px 6px 0px #2f3a52, 2px 2px 2px 0px #00000017;
  margin: 10px 0px;
  color: ${neveColors.lightBlue};
  transition: all 0.2s ease;
  transition-property: background, box-shadow;
  padding: 13px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  underline: none;
  margin-left: 10px;
  background: ${neveColors.darkBlue};
  font-weight: 600;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  &:hover {
      text-shadow: 0px 0px 1px ${neveColors.lightBlue};
      box-shadow: -6px -6px 10px 0px #2f3a52, 6px 6px 10px 0px #00000017;
  }
`;

export default App;
