import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';
import desk from './library/images/desk.jpg';
import WoodMachine1 from './library/images/WoodMachine1.jpg';
import linkedin from './library/images/linkedin.svg';
import twitter from './library/images/twitter.svg';
import code from './library/images/code-solid.svg';
import darkOceanWaves from './library/images/darkOceanWaves.jpg';
import './library/fonts/Bogart-Light.ttf';
import './library/fonts/Bogart-Regular.ttf';

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
          <HeadingImage src={desk}></HeadingImage>
        </HeadingImageContainer>
        
        <SubTitle>Projects</SubTitle>
        <Projects>
          <Project>
            <Details>
              <ProjectTitle href="https://www.taxi.com/members/michael-sayer" target="_blank" rel="noopener noreferrer">Music for Film</ProjectTitle>
              <Text>
                A proud Taxi member for years. I love the process and the challenge of writing music for film. 
              </Text>
              <Text>
                My music has been featured in indie films and podcasts and I&apos;m always looking for new projects.
              </Text>
            </Details>
          </Project>

          <Project>
            <Details>
              <ProjectTitle href="https://youngmichael.bandcamp.com/" target="_blank" rel="noopener noreferrer">Ghost of Young Michael</ProjectTitle>
                <Text>
                  Ghost of Young Michael is an ambient solo project. 
                  Using acoustic instruments and electric processing.
                  I&apos;m exploring the relationship between the natural and
                  the artificial.
                </Text>
            </Details>
          </Project>

          <Project>
            <Details>
              <ProjectTitle href="https://greatturtle.bandcamp.com/" target="_blank" rel="noopener noreferrer">The Great Turtle</ProjectTitle>
              <Text>
                  The Great Turtle is an electro-acoustic duo formed with Casey Dorcey.
                  Sound exploration and organic development are at the heart of the music. 
                </Text>
                <Text>
                  Blending native/folk like melodies with huge atmospheric world drones. 
                  The Great Turtle seeks to take their listeners on the ecstatic journey.
              </Text>
            </Details>
          </Project>

          <Project>
            <Details>
              <CrimeTitle>Crime Tiger</CrimeTitle>
                <Text>
                  Crime Tiger is a rock &apos;n roll band. We are currently recording our first album.
                  We are looking forward to sharing it with you soon.
                </Text>
            </Details>
          </Project>
        </Projects>

        <SubTitle>Work with me</SubTitle>
        <WorkImageContainer>
          <WorkImage src={WoodMachine1}></WorkImage>
        </WorkImageContainer>

        <Links>
          <LinkContainer>
            <LinkTitle>LINKS</LinkTitle>
            <LogoContainer>
              <LogoLink href="https://www.linkedin.com/in/mikesayer/" target="_blank" rel="noopener noreferrer">
                <Logo src={linkedin} alt='linkedin' />
              </LogoLink>
              <LogoLink href="https://www.twitter.com/michaeljsayer/" target="_blank" rel="noopener noreferrer">
                <Logo src={twitter} alt='twitter' />
              </LogoLink>
              <LogoLink href="https://www.michaelsayer.com/" target="_blank" rel="noopener noreferrer">
                <Logo src={code} alt='software engineering cv' />
              </LogoLink>
            </LogoContainer>
          </LinkContainer>

          <LinkContainer>
            <LinkTitle>EMAIL</LinkTitle>
            <LinkDetail>michael.j.say@gmail.com</LinkDetail>
          </LinkContainer>
        </Links>
      </Content>
      <Ocean src={darkOceanWaves}></Ocean>
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
    padding: 22px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 10px 0px 10px 0px;
  color: ${colors.textWhite};
`;

const SubTitle = styled.h3`
  font-size: 36px;
  line-height: 40px;
  margin: 0px;
  color: ${colors.textBlack};

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Accent = styled.span`
  font-size: 44px;
  line-height: 40px;
  color: ${colors.textWhite};
`;

const HeadingImageContainer = styled.div`
  width: 100%;
  height: 455px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;

const HeadingImage = styled.img`
  width: 646px;
  height: 455px;
  border: 2px solid ${colors.textBlack};
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WorkImageContainer = styled.div`
  width: 90%;
  height: 388px;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WorkImage = styled.img`
  width: 288px;
  height: 388px;
  border: 2px solid ${colors.textBlack};
  object-fit: cover;
`;

const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 44px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Details = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 82%;
  }
`;

const ProjectTitle = styled.a`
  width: fit-content;
  font-size: 22px;
  color: ${colors.textBlack};
  margin: 0px 0px 19px 0px;
  text-decoration: none;
  line-height: 18px;
  :hover {
    cursor: pointer;
    color: ${colors.blue}
  }
`;

const CrimeTitle = styled.div`
  width: fit-content;
  font-size: 22px;
  color: ${colors.textBlack};
  margin: 0px 0px 19px 0px;
`;

const Text = styled.p`
  font-size: 16px;
  font-family: 'Hanken Grotesk';
  margin: 0px 0px 19px 0px;
  line-height: 1.5;
  color: ${colors.textWhite};
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const LinkTitle = styled.span`
  width: fit-content;
  font-size: 22px;
  color: ${colors.textBlack};
  margin: 0px;
`;

const LinkContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  margin: 0px 200px 0px 0px;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const LinkDetail = styled.span`
  width: fit-content;
  font-size: 18px;
  color: ${colors.textWhite}
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;

  :hover {
    transform: scale(1.1);
  }
`;

const LogoContainer = styled.div`
  width: 150px;
  display: flex;
  gap: 15px;
`;

const LogoLink = styled.a`
  width: 25px;
  height: 25px;
  padding: 0px;
  margin: 0px;
`;

const Ocean = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default App;
