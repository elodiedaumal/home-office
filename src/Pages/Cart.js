import React from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';

const Cart = () => {
  return (
    <>
      <PageHeader title='Cart' />
      <CartContainer>
        <Grid>
          <Titles>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </Titles>
          <Line></Line>
          <div>My cart element</div>
          <Line></Line>
          <ButtonContainer>
            <ButtonShopping className='btn'>Continue Shopping</ButtonShopping>
            <ButtonClear className='btn'>Clear The Cart</ButtonClear>
          </ButtonContainer>
        </Grid>
      </CartContainer>
    </>
  );
};

export default Cart;

const CartContainer = styled.section`
  margin: 2rem auto;
  max-width: 1240px;
  padding: 1rem;
`;
const Titles = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  color: #617d98;
  font-size: 1rem;
  letter-spacing: 1.2px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

const Line = styled.div`
  background: #bcccdc;
  height: 2px;
  width: 100%;
  max-width: 1240px;
`;
const ButtonClear = styled.button`
  background: black;
  width: 13rem;
  padding: 0.8rem;
`;
const ButtonShopping = styled.button`
  width: 13rem;
  padding: 0.8rem;
`;
