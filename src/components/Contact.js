import React from 'react';
import styled from 'styled-components';
import { colors } from '../library/colors';
import { links } from '../library/info';

const Contact = () => {
  return (
    <>
      <SubTitle>Work with me</SubTitle>
      <WorkImageContainer>
        <WorkImage src='/WoodMachine1.jpg' alt="new machines" />
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
    </>
  );
};

const WorkImageContainer = styled.div`
  width: 90%;
  height: 388px;
  display: flex;
  justify-content: flex-end;
  margin: 50px 0px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const SubTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 44px;
  margin: 0px;
  color: ${colors.textBlack};

  @media (max-width: 768px) {
    line-height: 20px;
  }

  @media (max-width: 480px) {
    margin: 0px 0px 25px 0px;
  }
`;

const WorkImage = styled.img`
  width: 288px;
  height: 388px;
  border: 2px solid ${colors.textBlack};
  object-fit: cover;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px 150px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin: 10px 0px 50px 30px;
  }
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


export { Contact };