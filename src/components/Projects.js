import React from "react";
import styled from "styled-components";
import { colors } from "../library/colors";
import { info } from "../library/info";

const Projects = () => {
  return (
    <>
      <ProjectBox>
        {info.map((item, index) => (
          <Project key={index}>
            <Details>
              <ProjectTitle
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </ProjectTitle>
              <Text>{item.text1}</Text>
              {item.text2 && <Text>{item.text2}</Text>}
            </Details>
          </Project>
        ))}
      </ProjectBox>
    </>
  );
};

const ProjectBox = styled.div`
  width: 90%;
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
    color: ${colors.blue};
  }
`;

const Text = styled.p`
  max-width: 420px;
  font-size: 16px;
  font-family: "Hanken Grotesk";
  margin: 0px 0px 19px 0px;
  line-height: 1.5;
  color: ${colors.textWhite};
`;

export { Projects };
