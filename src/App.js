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
        <SubTitle>Composer based in Salt Lake City</SubTitle>
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
                  A proud Taxi member for years. I love the process and the challenge
                  of writing music for film. I have written music for a variety of
                  projects including short films and documentaries.
                  I'm always looking for new projects to work on.
                  If you have a project you'd like to discuss, please contact me.
                </Text>
              </ProjectDetails>
              <ProjectDetails>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGrays }}></div>
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
                <Text>
                  Ghost of Young Michael is a solo ambient project. 
                  Using acoustic instruments and electric processing,
                  the project explores the relationship between the natural and
                  the artificial.
                </Text>
              </ProjectDetails>
              <ProjectDetails>
                <ColorsHorizontal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGrays }}></div>
                </ColorsHorizontal>
              </ProjectDetails>
            </Details>
              <Links>
                <Link href="https://youngmichael.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  bandcamp
                </Link>
                <Link href="youtube.com/user/michaeljsay" target="_blank" rel="noopener noreferrer">
                  youtube
                </Link>
              </Links>
          </Project>

          <Project>
          <SubTitle>The Great Turtle</SubTitle>
            <Details>

                <ColorsDiagonal>
                  <div style={{ width: '20%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '20%', height: '25px', background: colors.darkGrays }}></div>
                </ColorsDiagonal>

              <ProjectDetails>
                <Text>
                  The Great Turtle is an electro-acoustic duo formed by Michael Sayer and Casey Dorcey.
                  Sound exploration and organic development are at the heart of the music. 
                  Blending native/folk like melodies with huge atmospheric world drones. 
                  The Great Turtle seeks to take their listeners on the ecstatic journey.
                </Text>
              </ProjectDetails>
            </Details>
            <Links>
                <Link href="https://greatturtle.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  bandcamp
                </Link>
              </Links>
          </Project>

          <Project>
          <SubTitle>Crime Tiger - coming soon</SubTitle>
            <Details>
              <ProjectDetails>
                <ColorsVertical>
                  <div style={{ width: '100%', height: '25px', background: colors.white }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.lightGray }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.opal }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.green }}></div>
                  <div style={{ width: '100%', height: '25px', background: colors.darkGrays }}></div>
                </ColorsVertical>
              </ProjectDetails>
              <ProjectDetails>
                <Text>
                  Crime Tiger is a rock n roll band. We are currently recording our first album.
                  We are looking forward to sharing it with you soon.
                </Text>
              </ProjectDetails>
            </Details>
              <Links>
                <Link href="https://youngmichael.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  bandcamp
                </Link>
                <Link href="youtube.com/user/michaeljsay" target="_blank" rel="noopener noreferrer">
                  youtube
                </Link>
              </Links>
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
  background: ${colors.platinum};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.platinum};
  padding: 64px 44px;

  @media (max-width: 480px) {
    padding: 22px;
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

const ColorsDiagonal = styled.div`
  width: 265px;
  display: flex;
  flex-direction: row;
  margin: 44px 20px 50px 100px;
  transform: rotate(-45deg);

  @media (max-width: 768px) {
    display: none;
    height: 0px;
    width: 0px;
    padding: 0px;
  }
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
  margin-bottom: 80px;
  padding-top: 44px;
  border: 2px solid ${colors.opal};
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;

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
`;

const Link = styled.a`
  width: fit-content;
  margin: 10px 0px;
  color: ${colors.darkGray};
  padding: 13px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  &:hover {
      color: ${colors.opal};
  }
`;

export default App;
