import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';

const Products = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Header>
        <HeaderText>
          <Title>Home</Title> / Products
        </HeaderText>
      </Header>
      <Container>
        <Filter>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
          <p>Search</p>
        </Filter>
        <Section>
          <TopSort>
            <div>
              <Button>
                <BsFillGridFill />
              </Button>
              <Button>
                <FaBars />
              </Button>
            </div>
            <p>{products.length} Product Found </p>
            <Line></Line>
            <SortBy>
              <p>Sort By</p>
              <p>
                Price (Lowest) <FaChevronDown />
              </p>
            </SortBy>
          </TopSort>
          {products.map((filteredProduct) => (
            <>
              <Link to='/'>
                <Grid>
                  <Img src={filteredProduct.image} alt={filteredProduct.name} />

                  <ProductInfo>
                    <p>{filteredProduct.name}</p>
                    <Price>${filteredProduct.price / 100}</Price>
                  </ProductInfo>
                </Grid>
              </Link>
            </>
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Products;

const Header = styled.header`
  background-color: #eaded7;
  padding: 4.4rem 2rem;
  color: #453227;
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  max-width: 1240px;
`;
const Title = styled.span`
  color: #795744;
`;
const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
  width: 90vw;
  max-width: 1240px;
  margin: 4rem auto;
  @media (min-width: 800px) {
    grid-template-columns: 200px 1fr;
  }
`;
const Filter = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 2rem;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
  height: 175px;
  border-radius: 5px;
`;

const Price = styled.p`
  color: #ab7a5f;
`;

const Grid = styled.article`
  display: block;
`;

const TopSort = styled.div`
  display: grid;
  grid-column: 1/-1;
  column-gap: 1rem;
  align-items: center;
  row-gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: auto auto 1fr auto;
  }
`;
const Button = styled.button`
  background: none;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  padding: 1px;
  border-radius: 5px;
  margin-right: 0.8rem;
  cursor: pointer;
`;

const Line = styled.div`
  background: #bcccdc;
  height: 2px;
  width: 100%;
  max-width: 35rem;
`;

const SortBy = styled.div`
  display: flex;
  column-gap: 1rem;

  width: 100%;
`;
