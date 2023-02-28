import React, { useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import { FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useGlobalContext } from '../context';

const Cart = (item) => {
  const cartRef = useRef();
  const { cartItems, deacresebtn, amountsingle, increasebtn } =
    useGlobalContext();

  return (
    <>
      <PageHeader title='Cart' />
      <CartSection ref={cartRef}>
        <Flex>
          <Titles>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p></p>
          </Titles>
          <Line></Line>
          {!cartItems ? (
            <p>No Item in you cart</p>
          ) : (
            cartItems.map((item) => (
              <CartDisplay key={item.id}>
                <ImgInfo>
                  <Img src={item.images[0].url} alt={item.name} />
                  <div>
                    <Name>{item.name}</Name>
                    <p>Color:</p>
                    <PriceMobile>${item.price / 100}</PriceMobile>
                  </div>
                </ImgInfo>
                <PriceDesktop>${item.price / 100}</PriceDesktop>
                <AddContainer>
                  <Button onClick={deacresebtn}>
                    <FaMinus />
                  </Button>
                  <AddText>{amountsingle}</AddText>
                  <Button onClick={increasebtn}>
                    <FaPlus />
                  </Button>
                </AddContainer>
                <Subtotal>$ subtotal</Subtotal>
                <TrashContainer>
                  <TrashIcon />
                </TrashContainer>
              </CartDisplay>
            ))
          )}

          <Line></Line>
          <ButtonContainer>
            <ButtonShopping className='btn'>Continue Shopping</ButtonShopping>
            <ButtonClear className='btn'>Clear The Cart</ButtonClear>
          </ButtonContainer>
        </Flex>
        <div>
          <div>
            <p>Subtotal</p>
            <p>$2555</p>
          </div>
          <div>
            <p>Shipping Fee</p>
            <p>$5</p>
          </div>
          <div>
            <p>Order Total</p>
            <p>$39510</p>
          </div>
          <button className='btn'>Proceed to checkout</button>
        </div>
      </CartSection>
    </>
  );
};

export default Cart;

const CartSection = styled.section`
  margin: 2rem auto;
  max-width: 1240px;
  padding: 1rem;
`;
const Titles = styled.header`
  display: none;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 27px;
    gap: 2rem;
    align-items: center;
    max-width: 1240px;
    justify-items: center;
  }
`;
const CartDisplay = styled.div`
  display: grid;
  grid-template-columns: 220px auto auto;
  grid-template-rows: 75px;
  align-items: center;
  justify-items: center;
  max-width: 1240px;
  width: 95vw;
  margin-bottom: 3rem;
  @media (min-width: 600px) {
    gap: 2rem;
    grid-template-columns: 1.5fr 1fr 1fr 1fr auto;
  }
`;
const ImgInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 1rem;
  justify-self: left;
  text-transform: capitalize;
  grid-template-rows: 75px;
  @media (min-width: 600px) {
    grid-template-columns: auto 1fr;
  }
`;
const Name = styled.p`
  font-weight: bold;
  // font-size: 0.8rem;
  letter-spacing: 1.2px;
  color: #102a42;
  @media (min-width: 600px) {
  }
`;
const Flex = styled.div`
  display: grid;
  gap: 2rem;
  color: #617d98;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
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

const AddContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 0.4rem;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  color: black;
  padding-top: 8px;
`;
const AddText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;
const PriceMobile = styled.p`
  color: #ab7a5f;
  font-weight: bold;
  letter-spacing: 1.5px;
  @media (min-width: 600px) {
    display: none;
  }
`;
const PriceDesktop = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    color: #ab7a5f;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
`;
const Subtotal = styled.p`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
  }
`;
const Img = styled.img`
  width: 90px;
  max-height: 75px;
  border-radius: 5px;
  @media (min-width: 600px) {
    width: 150px;
    max-height: 100px;
  }
`;
const TrashContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #bb2525;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 600px) {
    height: 2rem;
    width: 2rem;
  }
`;
