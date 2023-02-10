import React from 'react';
import styled from 'styled-components';

const Featured = () => {
  return (
    <Section>
      <Header>
        <h2>Featured Products</h2>
        <Underline></Underline>
      </Header>
      <Products></Products>
    </Section>
  );
};

export default Featured;

const Section = styled.section`
  background-color: #f1f5f8;
  padding: 5rem 0;
`;

const Header = styled.header`
  text-align: center;
  font-size: 2rem;
  color: #102a42;
`;

const Underline = styled.div`
  background: #ab7a5f;
  height: 4px;
  width: 7rem;
  margin: 0.5rem auto;
`;
const Products = styled.div`
  display: flex;
`;
