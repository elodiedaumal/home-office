import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const Colors = ({ colors }) => {
  return (
    <CategoryContainer>
      <Link type='button'>All</Link>
      {colors.map((color, index) => {
        const colors = `${color}`;

        return (
          <ColorCheckcontainer key={index}>
            <ColorRound backgroundColor={colors}>
              <FaCheck />
            </ColorRound>
          </ColorCheckcontainer>
        );
      })}
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
const ColorCheckcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0rem;

  color: #fff;
`;

const ColorRound = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.backgroundColor || 'black'};
  opacity: 0.5;
  &.active {
    font-size: 0.8rem;
    opacity: 1;
  }
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
`;
