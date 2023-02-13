import React from 'react';
import Img from '../images/hero-bcg.jpeg';
import styled from 'styled-components';

const About = () => {
  return (
    <>
      <Header>
        <HeaderText>
          <Title>Home</Title> / About
        </HeaderText>
      </Header>
      <Container>
        <Image />
        <div>
          <Story>Our Story</Story>
          <Underline></Underline>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </Text>
        </div>
      </Container>
    </>
  );
};

export default About;

const Header = styled.header`
  background-color: #eaded7;
  padding: 4.4rem 2rem;
  color: #453227;
`;
const Title = styled.span`
  color: #795744;
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  max-width: 1240px;
`;

const Image = styled.div`
  background-image: url(${Img});
  height: 500px;
  background-position: center;
  grid-row: 1;
  background-size: cover;
`;
const Container = styled.div`
  margin: 5rem auto;
  padding: 0 2rem;
  display: grid;
  gap: 4rem ;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
      max-width: 1240px;
       padding: 0;
`;

const Underline = styled.div`
  background: #ab7a5f;
  height: 4px;
  width: 6rem;
  margin: 0.5rem 0;
`;
const Story = styled.h2`
  font-size: 2rem;
  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
`;
const Text = styled.p`
padding:2rem;
line-height: 2;
font-size: .875rem;
color:#617d98
  }
`;
