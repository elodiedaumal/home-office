import React from 'react';
import styled from 'styled-components';

const Categories = ({ categories }) => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => {
        return (
          <Link type='button' className='filter-btn' key={index}>
            {category}
          </Link>
        );
      })}
    </CategoryContainer>
  );
};

export default Categories;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;
const Link = styled.button`
  background: none;
  border: none;
  text-transform: capitalize;
  color: #617d98;
  cursor: pointer;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
`;
