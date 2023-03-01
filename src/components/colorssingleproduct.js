import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

import { FaCheck } from 'react-icons/fa';

const Colorssingleproduct = ({ colors = [] }) => {
  const { loading } = useGlobalContext();
  const [bgcolor, setBgcolor] = useState(colors[0]);

  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <>
      <ColorSection>
        <InfoText>Colors:</InfoText>{' '}
        <ColorContainer>
          {colors.map((color, index) => {
            const colors = `${color}`;

            return (
              <ColorCheckcontainer
                key={index}
                backgroundColor={colors}
                onClick={() => setBgcolor(color)}
                className={bgcolor === color ? 'active' : ''}
              >
                <FaCheck />
              </ColorCheckcontainer>
            );
          })}
        </ColorContainer>
      </ColorSection>
    </>
  );
};

export default Colorssingleproduct;

const InfoText = styled.p`
  font-weight: bold;
  color: #324d67;
`;

const ColorSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const ColorCheckcontainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0rem;
  color: #fff;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.backgroundColor || 'black'};
  opacity: 0.5;
  cursor: pointer;
  &.active {
    font-size: 0.8rem;
    opacity: 1;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
