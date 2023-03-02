import React from 'react';
import styled from 'styled-components';
import heroBig from '../../images/hero-bcg.jpeg';
import heroSmall from '../../images/hero-bcg-2.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <SectionDesign>
      <Header>
        <Title>Design Your Comfort Zone</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </Text>
        <Link className='btn' to='products'>
          Shop now
        </Link>
      </Header>

      <HeroImg>
        <BigImg src={heroBig} alt='living room' />
        <SmallImg src={heroSmall} alt='living room' />
        <Color></Color>
      </HeroImg>
    </SectionDesign>
  );
};

export default Hero;

const SectionDesign = styled.section`
  display: grid;
  max-width: 1240px;
  margin: 0rem auto;
  padding: 0 1rem;
  align-items: center;
  grid-template-columns: 1fr;
  height: 60vh;
  @media (min-width: 1000px) {
    height: 100vh;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroImg = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 2fr 1fr;
  }
`;

const Color = styled.div`
  background: #decbc0;
  grid-column: 1;
  grid-row: 1/-1;
  width: 40px;
  height: 25rem;
  justify-self: right;
  align-self: end;
  border-radius: 5px 0px 0px 0px;
  z-index: 0;
  padding-bottom: 100px;
`;

const BigImg = styled.img`
  width: 28rem;
  height: 100%;
  grid-column: 2;
  grid-row: 1 / -1;
  border-radius: 5px;
  z-index: 0;
`;
const SmallImg = styled.img`
  width: 16rem;
  grid-column: 1 / 3;
  grid-row: 2;
  z-index: 1;
  border-radius: 5px;
  align-self: end;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @media (max-width: 1000px) {
    width: 95%;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  max-width: 400px;
  color: #102a42;
`;
const Text = styled.p`
  font-size: 1.25rem;
  line-height: 2;
  max-width: 45em;
  color: #617d98;
`;
