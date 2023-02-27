import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Categories = ({ categories }) => {
  const { setSelectCategory, handleActiveClick, isActive, selectCategory } =
    useGlobalContext();

  const selectcategory = (e) => {
    setSelectCategory(e.target.value);
  };

  return (
    <CategoryContainer>
      {categories.map((category, index) => {
        return (
          <Link
            type='button'
            className={selectCategory === category ? 'active' : ''}
            key={index}
            onClick={(e) => {
              selectcategory(e);
              handleActiveClick(e);
            }}
            value={category}
          >
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
  border-bottom: 0px solid blue;
  &.active {
    border-bottom: 2px solid #617d98;
  }
`;
