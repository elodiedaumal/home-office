import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Colors = ({ colors }) => {
  const {
    setSelectColors,
    selectColors,
    selectAllColors,
    setBgcolor,
    bgcolor,
  } = useGlobalContext();

  return (
    <CategoryContainer>
      <Link
        type='button'
        onClick={selectAllColors}
        className={selectColors === 'all' ? 'active' : ''}
      >
        All
      </Link>
      <ColorContainer>
        {colors.map((color, index) => {
          const colors = `${color}`;

          return (
            <ColorCheckcontainer
              key={index}
              backgroundColor={colors}
              className={bgcolor === color ? 'active' : ''}
              value={colors}
              onClick={(e) => {
                setBgcolor(color);
                setSelectColors(e.target.value);
              }}
            >
              <FaCheck />
            </ColorCheckcontainer>
          );
        })}
      </ColorContainer>
    </CategoryContainer>
  );
};

export default Colors;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  align-items: center;
`;

const Link = styled.button`
  background: none;
  border: none;
  text-transform: capitalize;
  color: #617d98;
  cursor: pointer;
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  margin-right: 2px;
  &.active {
    border-bottom: 2px solid #617d98;
  }
`;

const ColorCheckcontainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0rem;
  color: #fff;
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.backgroundColor || 'black'};
  opacity: 0.5;
  cursor: pointer;
  &.active {
    font-size: 0.6rem;
    opacity: 1;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
