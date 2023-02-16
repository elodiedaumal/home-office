import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Stars = () => {
  const { singleProduct } = useGlobalContext();

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <StarsIcon key={index}>
        {singleProduct.stars >= index + 1 ? (
          <FaStar />
        ) : singleProduct.stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StarsIcon>
    );
  });
  return (
    <StarsContainer>
      <div>{tempStars}</div>
      <span>( {singleProduct.reviews} customers reviews )</span>
    </StarsContainer>
  );
};

export default Stars;

const StarsIcon = styled.span`
  color: rgb(255 185 0);
`;
const StarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  align-items: center;
  text-align: center;
`;
