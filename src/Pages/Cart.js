import React, { useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Cart = (item) => {
  const cartRef = useRef();
  const {
    cartItems,
    totalPrice,
    toggleCartItemQuantity,
    totalQuantity,
    clearCart,
    deleteCartItem,
  } = useGlobalContext();
  let shippingTotal = (Math.round(5.15 * totalQuantity * 100) / 100).toFixed(2);
  let orderTotal = (
    Math.round((5.15 * totalQuantity + totalPrice / 100) * 100) / 100
  ).toFixed(2);

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
          {totalQuantity === 0 ? (
            <p>No Item in you cart</p>
          ) : (
            cartItems
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((item) => (
                <CartDisplay key={item.id}>
                  <ImgInfo>
                    <Img src={item.images[0].url} alt={item.name} />
                    <InfoCart>
                      <Name>{item.name}</Name>
                      <Colordisplay>
                        <p>Color:</p>
                        <ColorCheckcontainer
                          backgroundColor={item.color}
                        ></ColorCheckcontainer>
                      </Colordisplay>
                      <PriceMobile>${item.price / 100}</PriceMobile>
                    </InfoCart>
                  </ImgInfo>
                  <PriceDesktop>${item.price / 100}</PriceDesktop>
                  <AddContainer>
                    <Button
                      onClick={() => toggleCartItemQuantity(item.id, 'desc')}
                    >
                      <FaMinus />
                    </Button>
                    <AddText>{item.quantity}</AddText>
                    <Button
                      onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                    >
                      <FaPlus />
                    </Button>
                  </AddContainer>
                  <SubtotalCart>
                    $ {(item.quantity * item.price) / 100}
                  </SubtotalCart>
                  <TrashContainer onClick={() => deleteCartItem(item)}>
                    <TrashIcon />
                  </TrashContainer>
                </CartDisplay>
              ))
          )}

          <Line></Line>
          <ButtonContainer>
            <Link to='/products'>
              <ButtonShopping className='btn'>Continue Shopping</ButtonShopping>
            </Link>
            <ButtonClear onClick={clearCart} className='btn'>
              Clear The Cart
            </ButtonClear>
          </ButtonContainer>
        </Flex>
        <TotalSection>
          <TotalContainer>
            <TotalBorder>
              <TotalGrid>
                <Subtotal>
                  <p>Subtotal:</p>
                  <p>${totalPrice / 100}</p>
                </Subtotal>
                <ShippingFee>
                  <p>Shipping Fee:</p>
                  <p>${shippingTotal}</p>
                </ShippingFee>
                <Line></Line>
                <OrderTotal>
                  <p>Order Total:</p>
                  <p>${orderTotal}</p>
                </OrderTotal>
              </TotalGrid>
            </TotalBorder>
            <TotalButton className='btn'>Proceed to checkout</TotalButton>
          </TotalContainer>
        </TotalSection>
      </CartSection>
    </>
  );
};

export default Cart;

const CartSection = styled.section`
  margin: 2rem auto;
  max-width: 1240px;
  padding: 1rem;
  @media (min-width: 800px) {
    padding: 0rem;
  }
`;
const TotalSection = styled.section`
  width: 95vw;
  margin: 3rem auto;
  @media (min-width: 800px) {
    max-width: 1240px;
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
  }
`;
const Titles = styled.header`
  display: none;
  @media (min-width: 800px) {
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
  @media (min-width: 800px) {
    gap: 2rem;
    grid-template-columns: 1.5fr 1fr 1fr 1fr auto;
  }
`;
const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  align-items: center;
  justify-items: center;
  width: 95vw;
  gap: 1rem;
  margin-bottom: 4rem;
  @media (min-width: 800px) {
    max-width: 500px;
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
  @media (min-width: 800px) {
    grid-template-columns: auto 1fr;
  }
`;
const InfoCart = styled.div`
  display: grid;
  align-items: center;
  gap: 0.2rem;
`;
const Name = styled.p`
  font-weight: bold;
  // font-size: 0.8rem;
  letter-spacing: 1.2px;
  color: #102a42;
`;
const Flex = styled.div`
  display: grid;
  gap: 2rem;
  color: #617d98;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
  @media (min-width: 800px) {
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
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const ColorCheckcontainer = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 25%;
  border: none;
  margin-top: 0.2rem;
  background: ${(props) => props.backgroundColor || 'black'};
  @media (min-width: 800px) {
    height: 1rem;
    width: 1rem;
  }
`;
const Colordisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const PriceMobile = styled.p`
  color: #ab7a5f;
  font-weight: bold;
  letter-spacing: 1.5px;
  @media (min-width: 800px) {
    display: none;
  }
`;
const PriceDesktop = styled.p`
  display: none;
  @media (min-width: 800px) {
    display: inline-block;
    color: #ab7a5f;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
`;
const SubtotalCart = styled.p`
  display: none;
  @media (min-width: 800px) {
    display: inline-block;
  }
`;
const Img = styled.img`
  width: 90px;
  max-height: 75px;
  border-radius: 5px;
  @media (min-width: 800px) {
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
  @media (min-width: 800px) {
    height: 2rem;
    width: 2rem;
  }
`;
const TotalGrid = styled.div`
  display: grid;
  gap: 1.25rem;
`;
const Subtotal = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  font-weight: bold;
  letter-spacing: 1.5px;
  @media (min-width: 800px) {
    grid-template-columns: 250px 1fr;
  }
`;
const ShippingFee = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 250px 1fr;
  }
`;
const OrderTotal = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0 1rem 0;
  letter-spacing: 1.5px;
  @media (min-width: 800px) {
    font-size: 1.8rem;
    grid-template-columns: 250px 1fr;
  }
`;

const TotalBorder = styled.div`
  border: 1px solid #bcccdc;
  width: 100%;
  padding: 1.5rem 3rem;
  border-radius: 5px;
`;
const TotalButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 1.1rem;
  }
`;
