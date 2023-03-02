import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const FeaturedGrid = (filteredProduct) => {
  const { image, name, id, price } = filteredProduct.product;
  return (
    <Link to={`/products/${id}`}>
      <Grid>
        <ImgContainer>
          <Img src={image} alt={name} />
          <Link to={filteredProduct.id} className='loupe-container'>
            <FaSearch />
          </Link>
        </ImgContainer>
        <ProductInfo>
          <p>{name}</p>
          <Price>${price / 100}</Price>
        </ProductInfo>
      </Grid>
    </Link>
  );
};

export default FeaturedGrid;

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
  &:hover {
    opacity: 0.5;
  }
`;

const Price = styled.p`
  color: #ab7a5f;
`;

const ImgContainer = styled.div`
  height: 225px;
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
