import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Featured = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Section>
      <Header>
        <h2>Featured Products</h2>
        <Underline></Underline>
      </Header>
      <Products>
        {products
          .filter((product) => product.featured)
          .map((filteredProduct) => (
            <Grid>
              <Img src={filteredProduct.image} alt={filteredProduct.name} />

              <ProductInfo>
                <p>{filteredProduct.name}</p>
                <p>${filteredProduct.price / 100}</p>
              </ProductInfo>
            </Grid>
          ))}
      </Products>
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
  font-size: 1.5rem;
  color: #102a42;
   @ media(max-width:1000px){
    font-size: 2rem;
  }
`;

const Underline = styled.div`
  background: #ab7a5f;
  height: 4px;
  width: 7rem;
  margin: 0.5rem auto;
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
`;
const Grid = styled.article`
  display: block;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  max-width: 100vw;
`;
