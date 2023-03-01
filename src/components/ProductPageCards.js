import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const ProductPageCards = (filteredProduct) => {
  const { theme } = useGlobalContext();

  return (
    <Link to={theme === 'grid' ? `/products/${filteredProduct.item.id}` : ''}>
      <Grid className={theme} key={filteredProduct.item.id}>
        <ImgContainer className={theme}>
          <Img
            className={theme}
            src={filteredProduct.item.image}
            alt={filteredProduct.item.name}
          />
          {theme === 'grid' ? (
            <Link to={filteredProduct.item.id} className='loupe-container'>
              <FaSearch />
            </Link>
          ) : (
            ''
          )}
        </ImgContainer>

        <ProductInfo className={theme}>
          <ProductName className={theme}>
            {filteredProduct.item.name}
          </ProductName>
          <Price className={theme}>${filteredProduct.item.price / 100}</Price>

          {theme !== 'grid' ? (
            <p>{filteredProduct.item.description.substring(0, 150)}...</p>
          ) : (
            ''
          )}
          {theme !== 'grid' ? (
            <Link to={`/products/${filteredProduct.item.name}`}>
              <ButtonList className='btn '>DETAILS</ButtonList>
            </Link>
          ) : (
            ''
          )}
        </ProductInfo>
      </Grid>
    </Link>
  );
};

export default ProductPageCards;

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
    &:hover {
      opacity: 1;
    }
  }
`;

const ImgContainer = styled.div`
  height: 175px;
  .loupe-container {
    display: none;
  }
  &:hover {
    background-color: #222;
    border-radius: 5px;
    position: relative;
    .loupe-container {
      border-radius: 50%;
      background: #ab7a5f;
      display: flex;
      height: 2.5rem;
      width: 2.5rem;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 40%;
      left: 45%;
      color: #fff;
      font-size: 1.25rem;
    }
  }
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

const ButtonList = styled.button`
  width: 25%;
  margin-top: 15px;
`;
