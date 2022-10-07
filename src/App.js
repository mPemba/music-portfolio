import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';

const App = () => {
  return (
    <Main>
      <Content>
        <Title>
          Michael Sayer
        </Title>
        <SubTitle>Composer based in Salt Lake City.</SubTitle>
        <SubTitle>I have multiple projects under way</SubTitle>
        <SubTitle>including music for film and television.</SubTitle>
        <ColorsVertical>
          <div style={{ width: '25px', height: '25px', background: colors.white }}></div>
          <div style={{ width: '25px', height: '25px', background: colors.lightGray }}></div>
          <div style={{ width: '25px', height: '25px', background: colors.opal }}></div>
          <div style={{ width: '25px', height: '25px', background: colors.green }}></div>
          <div style={{ width: '25px', height: '25px', background: colors.darkGray }}></div>
        </ColorsVertical>
        <Projects>
        <Project>
            <SubTitle>Music for Film</SubTitle>
            <Details>
              <ProjectDetails>
                <Text>
                  A proud Taxi member for years. I love the process and the challenge of writing music for film. 
                  My music has been featured in indie films and podcasts and I&apos;m always looking for new projects.
                  If you have a project you&apos;d like to discuss, please contact me at michael.j.say@gmail.com.
                </Text>
              </ProjectDetails>
              <ProjectDetails>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGray }}></div>
                </ColorsHorizontal>
              </ProjectDetails>
            </Details>
            <Links>
                <Link href="https://www.taxi.com/members/michael-sayer" target="_blank" rel="noopener noreferrer">
                  Taxi Member Profile
                </Link>
              </Links>
          </Project>

          <Project>
          <SubTitle>Ghost of Young Michael</SubTitle>
            <Details>
              <ProjectDetails>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGray }}></div>
                </ColorsHorizontal>
              </ProjectDetails>
              <ProjectDetails>
                <Text>
                  Ghost of Young Michael is a solo project. 
                  Using acoustic instruments and electric processing,
                  I&apos;m exploring the relationship between the natural and
                  the artificial.
                </Text>
              </ProjectDetails>
            </Details>
              <Links>
                <Link href="https://youngmichael.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  BandCamp
                </Link>
                <Link href="https://youtube.com/user/michaeljsay" target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              </Links>
          </Project>

          <Project>
          <SubTitle>The Great Turtle</SubTitle>
            <Details>
              <ProjectDetails>
                <Text>
                  The Great Turtle is an electro-acoustic duo formed by Michael Sayer and Casey Dorcey.
                  Sound exploration and organic development are at the heart of the music. 
                  Blending native/folk like melodies with huge atmospheric world drones. 
                  The Great Turtle seeks to take their listeners on the ecstatic journey.
                </Text>
              </ProjectDetails>
              <ProjectDetails>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGray }}></div>
                </ColorsHorizontal>
              </ProjectDetails>
            </Details>
            <Links>
                <Link href="https://greatturtle.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  BandCamp
                </Link>
              </Links>
          </Project>

          <Project>
            <SubTitle>Crime Tiger - coming soon</SubTitle>
            <Details>
              <ProjectDetails>
                <Text>
                  Crime Tiger is a folk rock band. We are currently recording our first album.
                  We are looking forward to sharing it with you soon.
                </Text>
              </ProjectDetails>
              <ProjectDetails>
                <ColorsVertical>
                  <div style={{ width: '100%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.darkGray }}></div>
                </ColorsVertical>
              </ProjectDetails>
            </Details>
          </Project>

          <Project>
            <Notes>
              <SubTitle>Notes</SubTitle>
              <Text>
                I&apos;m pretty sure social media is causing the downfall of democracy, so I stay off most of it.
                Here&apos;s my LinkedIn and Twitter just in case:
              </Text>
              <LogoContainer>
                <LogoLink href="https://www.linkedin.com/in/mikesayer/" target="_blank" rel="noopener noreferrer">
                  <Logo src="/linkedin.svg" alt="linkedin" /> 
                </LogoLink> 
                <LogoLink href="https://twitter.com/michaeljsayer" target="_blank" rel="noopener noreferrer">
                  <Logo src="/twitter.svg" alt="twitter" />  
                </LogoLink> 
              </LogoContainer>
              <Text>
                If you are looking for my software engineering CV, you can find it 
                <LogoLink style={{ color: colors.green }} href="https://www.michaelsayer.com/" target="_blank" rel="noopener noreferrer"> here</LogoLink>
              </Text>
            </Notes>
          </Project>
        </Projects>
      </Content>
      <SideBarColors>
        <SideBarColor style={{ background: colors.white }}></SideBarColor>
        <SideBarColor style={{ background: colors.lightGray }}></SideBarColor>
        <SideBarColor style={{ background: colors.opal }}></SideBarColor>
        <SideBarColor style={{ background: colors.green }}></SideBarColor>
        <SideBarColor style={{ background: colors.darkGray }}></SideBarColor>
      </SideBarColors>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background: ${colors.platinum};
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: ${colors.platinum};
  padding: 64px 44px;

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const SideBarColors = styled.div`
  width: 2%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: width 0.5s ease;

  @media (min-width: 1078px) {
    width: 5%;
  }

  @media (min-width: 1290px) {
    width: 15%;
  }

  @media (min-width: 1550px) {
    width: 25%;
  }

  @media (min-width: 1800px) {
    width: 45%;
  }
`;

const SideBarColor = styled.div`
  width: 100%;
  height: 20%;
  min-height: 560px;

  @media (max-width: 768px) {
    min-height: 480px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0px 0px 20px 0px;
  color: ${colors.darkGray};

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const SubTitle = styled.h1`
  font-size: 2em;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0px;
  color: ${colors.darkGray};

  @media (max-width: 768px) {
    font-size: 1em;
    font-weight: 600;
  }
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
  max-width: 1078px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  padding-top: 44px;
  border: 2px solid ${colors.opal};

  @media (max-width: 768px) {
    padding-top: 22px;
    margin-bottom: 40px;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectDetails = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 44px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 22px;
  }
`;

const Text = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1em;
  margin: 0px;
  line-height: 1.5;
  color: ${colors.darkGray};
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  padding-left: 44px;
  border-top: 2px solid ${colors.opal};

  @media (max-width: 768px) {
    padding-left: 22px;
  }
`;

const Link = styled.a`
  width: fit-content;
  margin: 10px 0px;
  color: ${colors.darkGray};
  padding-right: 13px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  &:hover {
      color: ${colors.opal};
  }
`;

const Notes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 44px 44px 44px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 22px 22px 22px;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;

  :hover {
    transform: scale(1.1);
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 10px 0px;
`;

const LogoLink = styled(Link)`
  padding: 0px;
`;

export default App;
