import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';
import './library/fonts/Bogart-Light.ttf';
import './library/fonts/Bogart-Regular.ttf';

const info = [
  {
    title: 'Music for Film',
    link: 'https://www.taxi.com/members/michael-sayer',
    text1: 'A proud Taxi member for years. I love the process and the challenge of writing music for film.',
    text2: 'My music has been featured in indie films and podcasts and I\'m always looking for new projects.'
  },
  {
    title: 'Ghost of Young Michael',
    link: 'https://youngmichael.bandcamp.com',
    text1: 'Ghost of Young Michael is an ambient solo project. Using acoustic instruments and electric processing.',
    text2: 'I\'m exploring the relationship between the natural and the artificial.'
  },
  {
    title: 'Great Turtle',
    link: 'https://greatturtle.bandcamp.com',
    text1: 'The Great Turtle is an electro-acoustic duo formed with Casey Dorcey. Sound exploration and organic development are at the heart of the music.',
    text2: 'Blending native/folk like melodies with huge atmospheric world drones, The Great Turtle seeks to take their listeners on the ecstatic journey.',
  },
  {
    title: 'Crime Tiger',
    link: 'https://crimetiger.bandcamp.com',
    text1: 'Crime Tiger is a rock \'n roll band. We are currently recording our first album. We are looking forward to sharing it with you soon.',
    text2: '',
  }
];

const links = [
  {
    link: 'https://www.linkedin.com/in/mikesayer/',
    logo: '/linkedin.svg',
    alt: 'linkedin',
  },
  {
    link: 'https://www.twitter.com/michaeljsayer/',
    logo: '/twitter.svg',
    alt: 'twitter',
  },
  {
    link: 'https://www.michaelsayer.com/',
    logo: '/code-solid.svg',
    alt: 'software engineering cv',
  },
];

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
          <HeadingImage src='deskSmall.webp' alt='me'></HeadingImage>
        </HeadingImageContainer>
        <SubTitle>Projects</SubTitle>
        <Projects>
          {info.map((item, index) => (
            <Project key={index}>
              <Details>
                <ProjectTitle href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</ProjectTitle>
                <Text>
                  {item.text1}
                </Text>
                {item.text2 && (
                  <Text>
                    {item.text2}
                  </Text>
                )}
              </Details>
            </Project>
          ))}
        </Projects>
        <SubTitle>Work with me</SubTitle>
        <WorkImageContainer>
          <WorkImage src='WoodMachine1.webp' alt="new machines"></WorkImage>
        </WorkImageContainer>
        <Links>
          <LinkContainer>
            <LinkTitle>LINKS</LinkTitle>
            <LogoContainer>
              {links.map((item, index) => (
                <LogoLink key={index} href={item.link}  target="_blank" rel="noopener noreferrer">
                  <Logo src={item.logo} alt={item.alt} />
                </LogoLink>
              ))}
            </LogoContainer>
          </LinkContainer>
          <LinkContainer>
            <LinkTitle>EMAIL</LinkTitle>
            <LinkDetail>michael.j.say@gmail.com</LinkDetail>
          </LinkContainer>
        </Links>
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
  font-size: clamp(1rem, 5vw, 3rem);
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

const WorkImageContainer = styled.div`
  width: 90%;
  height: 388px;
  display: flex;
  justify-content: flex-end;
  margin: 50px 0px;

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
  margin-top: 30px;
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

const Text = styled.p`
  max-width: 420px;
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
  margin: 10px 0px 150px 0px;
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

export default App;
