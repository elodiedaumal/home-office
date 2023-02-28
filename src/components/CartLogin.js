import React from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CartLogin = () => {
  return (
    <Wrapper>
      <Link to='cart'>
        <CartWrapper>
          <p>Cart</p>
          <Cart>
            <FaShoppingCart className='cart-icon' /> <CartNumber>12</CartNumber>
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
  font-size: 1.5rem;

  .cart-icon {
    height: 1.6rem;
    margin-left: 5px;
    color: #102a42;

    margin-top: 4px;
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
  height: 16px;
  width: 16px;
  align-items: center;
  justify-content: center;
  top: -10px;
  right: -16px;
  font-size: 0.75rem;
  color: #fff;
  padding: 12px;
`;

const Cart = styled.div`
  position: relative;
`;
