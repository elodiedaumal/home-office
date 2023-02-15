import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import FeaturedGrid from './FeaturedGrid';

const Featured = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return <div className='loading'></div>;
  }
  return (
    <Section>
      <Header>
        <h2>Featured Products</h2>
        <Underline></Underline>
      </Header>
      <Products>
        {products
          .filter((filteredProduct) => filteredProduct.featured)
          .slice(0, 3)
          .map((filteredProduct) => (
            <FeaturedGrid
              key={filteredProduct.id}
              product={filteredProduct}
            ></FeaturedGrid>
          ))}
      </Products>
      <Link to='products'>
        <Button className='btn'>ALL PRODUCTS</Button>
      </Link>
    </Section>
  );
};

export default Featured;

const Section = styled.section`
  background-color: #f1f5f8;
  padding: 5rem 0;
  text-align: center;
`;

const Header = styled.header`
  text-align: center;
  font-size: 1.4rem;
  color: #102a42;
  @media (min-width: 1000px) {
    font-size: 2.3rem;
  }
`;

const Underline = styled.div`
  background: #ab7a5f;
  height: 5px;
  width: 7rem;
  margin: 0.5rem auto;
  z-index: 99;
`;
const Products = styled.div`
  display: grid;
  gap: 2.5rem;

  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
  width: 90vw;
  max-width: 1240px;
  margin: 4rem auto;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Grid = styled.article`
  display: block;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.2rem 0.2rem 0.2rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 20px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 225px;
`;

const Price = styled.p`
  color: #ab7a5f;
`;

const Button = styled.button`
  font-size: 1.2rem;
  width: 15rem;
`;
