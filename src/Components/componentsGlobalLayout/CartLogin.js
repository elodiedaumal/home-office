import React from 'react';
import { useGlobalContext } from '../../context';
import styled from 'styled-components';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CartLogin = () => {
  const { totalQuantity } = useGlobalContext();

  return (
    <Wrapper>
      <Link to='cart'>
        <CartWrapper>
          <p>Cart</p>
          <Cart>
            <FaShoppingCart className='cart-icon' />{' '}
            <CartNumber>{totalQuantity}</CartNumber>
          </Cart>
        </CartWrapper>
      </Link>
      <CartWrapper>
        Login <FaUserPlus className='cart-icon' />
      </CartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  font-size: 1.2rem;
  .cart-icon {
    height: 1.6rem;
    margin-left: 5px;
    color: #102a42;
    margin-top: 2px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
`;

const CartNumber = styled.span`
  display: flex;
  background: #ab7a5f;
  border-radius: 50%;
  position: absolute;
  height: 1.3rem;
  width: 1.3rem;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -14px;
  font-size: 0.7rem;
  color: #fff;
`;

const Cart = styled.div`
  position: relative;
`;
