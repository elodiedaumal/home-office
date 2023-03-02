import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaCheck } from 'react-icons/fa';

const AddtoCartreal = ({ singleProduct, colors = [] }) => {
  const { deacresebtn, amountsingle, increasebtn, addToCart } =
    useGlobalContext();
  const [bgcolor, setBgcolor] = useState(colors[0]);

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
      {singleProduct.stock === 0 ? (
        <OutOfOrder>Product out of Order</OutOfOrder>
      ) : (
        <CartContainer>
          <AddContainer>
            <Button onClick={deacresebtn}>
              <FaMinus />
            </Button>
            <AddText>{amountsingle}</AddText>
            <Button onClick={increasebtn}>
              <FaPlus />
            </Button>
          </AddContainer>
          <Link
            to='/cart'
            className='btn'
            onClick={() => addToCart(singleProduct, amountsingle, bgcolor)}
          >
            Add to cart
          </Link>
        </CartContainer>
      )}
    </>
  );
};

export default AddtoCartreal;

const AddContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
`;
const CartContainer = styled.div`
  width: 9rem;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1rem;

  color: black;
`;
const AddText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

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
const OutOfOrder = styled.p`
  color: red;
  font-weight: bold;
`;
