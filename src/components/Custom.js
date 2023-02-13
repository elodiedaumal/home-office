import React from 'react';
import { FaCompass, FaGlasses, FaLandmark } from 'react-icons/fa';
import styled from 'styled-components';

const Custom = () => {
  return (
    <Section>
      <Header>
        <Title>Custom Furniture Built Only For You</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </Text>
      </Header>
      <Container>
        <Article>
          <Icon>
            <FaCompass className='icon' />
            <Background></Background>
          </Icon>
          <Title2>Mission</Title2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Article>
        <Article>
          <Icon>
            <FaGlasses className='icon' />
            <Background></Background>
          </Icon>

          <Title2>Vision</Title2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Article>
        <Article>
          <Icon>
            <FaLandmark className='icon' />
            <Background></Background>
          </Icon>

          <Title2>History</Title2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </Article>
      </Container>
    </Section>
  );
};

export default Custom;

const Section = styled.section`
  background-color: #eaded7;
  padding: 5rem 2rem;
  color: #453227;
`;
const Header = styled.header`
  margin: 0 auto;
  max-width: 1240px;
`;
const Container = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  max-width: 1240px;
  font-size: 0.9rem;
  line-height: 1.5;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;

  margin-bottom: 3rem;
`;
const Article = styled.article`
  background-color: #c5a491;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  .icon {
    font-size: 2rem;
    z-index: 999;
    grid-row: 1;
    grid-column: 1;
  }
`;

const Background = styled.div`
  background-color: #eaded7;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  grid-row: 1;
  grid-column: 1;
`;

const Icon = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 1rem;
`;

const Title2 = styled.h4`
  letter-spacing: 2px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;
