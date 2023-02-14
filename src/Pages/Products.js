import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown, FaSearch } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import PageHeader from '../components/PageHeader';

const Products = () => {
  const { products, loading } = useGlobalContext();
  const [theme, setTheme] = useState('grid');
  const toggleGrid = () => {
    setTheme('grid');
  };
  const toggleList = () => {
    setTheme('list');
  };

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <PageHeader title='Products' />

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
        <Section className={theme}>
          <TopSort>
            <div>
              <Button
                className={theme === 'grid' ? 'active' : ''}
                onClick={toggleGrid}
              >
                <BsFillGridFill />
              </Button>
              <Button
                className={theme === 'list' ? 'active' : ''}
                onClick={toggleList}
              >
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
              <Link
                to={theme === 'grid' ? `/products/${filteredProduct.id}` : ''}
              >
                <Grid className={theme} key={filteredProduct.id}>
                  <ImgContainer>
                    <Img
                      className={theme}
                      src={filteredProduct.image}
                      alt={filteredProduct.name}
                    />
                    {/* <LoupeContainer>
                      <FaSearch  />
                    </LoupeContainer> */}
                  </ImgContainer>

                  <ProductInfo className={theme}>
                    <ProductName className={theme}>
                      {filteredProduct.name}
                    </ProductName>
                    <Price className={theme}>
                      ${filteredProduct.price / 100}
                    </Price>

                    {theme !== 'grid' ? (
                      <p>{filteredProduct.description.substring(0, 150)}...</p>
                    ) : (
                      ''
                    )}
                    {theme !== 'grid' ? (
                      <Link to={`/products/${filteredProduct.name}`}>
                        <ButtonList className='btn '>DETAILS</ButtonList>
                      </Link>
                    ) : (
                      ''
                    )}
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

    &.list {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.2rem 0.2rem 0.2rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 20px;
  &.list {
    flex-direction: column;
    padding: 0;
    font-size: 1rem;
    letter-spacing: 0px;
    line-height: 1.5;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 175px;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }

  &.list {
    width: 300px;
    height: 200px;
  }
`;

const ImgContainer = styled.div`
  &:hover {
    background-color: #222;
    border-radius: 5px;
    height: 175px;
    position: relative;
  }
`;

const LoupeContainer = styled.div`
  border-radius: 50%;
  background: #ab7a5f;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 1.25rem;
  z-index: 999;
`;

const Price = styled.h5`
  color: #ab7a5f;
  &.list {
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
`;

const ProductName = styled.h5`
  &.list {
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: #102a42;
  }
`;

const Grid = styled.article`
  display: block;

  &.list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 2rem;
  }
  @media (min-width: 1000px) {
    &.list {
      row-gap: 3rem;
      grid-template-columns: repeat(2, auto);
    }
  }
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
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  padding: 2px;
  border-radius: 5px;
  margin-right: 0.5rem;
  cursor: pointer;
  &.active {
    background-color: black;
    color: #fff;
  }
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

const ButtonList = styled.button`
  width: 25%;
  margin-top: 15px;
`;
