import React from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaCheck } from 'react-icons/fa';

const AddtoCartreal = ({ singleProduct }) => {
  const { deacresebtn, amountsingle, increasebtn, addToCart } =
    useGlobalContext();

  return (
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
        onClick={() => addToCart(singleProduct, amountsingle)}
      >
        Add to cart
      </Link>
    </CartContainer>
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
