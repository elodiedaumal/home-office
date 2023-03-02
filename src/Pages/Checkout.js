import React from 'react';
import { useGlobalContext } from '../context';
import { FaUserPlus } from 'react-icons/fa';
import PageHeader from '../Components/componentsGlobalLayout/PageHeader';
import styled from 'styled-components';
import { CreditCardIcon } from '@heroicons/react/24/outline';

const Checkout = () => {
  const { LoggedIn, login, orderTotal } = useGlobalContext();
  return (
    <>
      <PageHeader title='CheckOut' />
      {!login ? (
        <Section>
          <Hello>Login in order to proceed to the payment platform</Hello>
          <Wrapper>
            <CartWrapper onClick={LoggedIn}>
              <p>Login</p> <FaUserPlus className='cart-icon' />
            </CartWrapper>
          </Wrapper>
        </Section>
      ) : (
        <Section>
          <Hello>Hello, fake User</Hello>
          <Text>Please, proceed to payment</Text>
          <Text>Your total order is: ${orderTotal}</Text>
          <Grid>
            <OutBorder>
              <Border>
                <CardInfo>
                  <Form>
                    <Input type='number' placeholder='&#x1f4b3; Card number' />
                    <Input type='text' placeholder='MM/YY' />
                    <Input type='number' placeholder='CCV' />
                  </Form>
                </CardInfo>
              </Border>
            </OutBorder>
            <Pay>Proceed to paiment</Pay>
          </Grid>
        </Section>
      )}
    </>
  );
};

export default Checkout;

const Section = styled.section`
  margin: 2rem auto;
  max-width: 1240px;
  padding: 2rem;
  height: 100vh;
`;
const CartWrapper = styled.div`
  display: flex;
  background-color: #ab7a5f;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  .cart-icon {
    height: 1.6rem;
    margin-left: 5px;
    color: #fff;
    margin-top: 2px;
  }
`;
const Hello = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  margin-bottom: 0.5rem;
`;
const Grid = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 2rem;
`;
const Border = styled.div`
  width: 100%;

  @media (min-width: 800px) {
    width: 500px;
  }
`;
const CardInfo = styled.div`
  padding: 0.5rem;
`;
const OutBorder = styled.div`
  width: 95vw;
  padding: 1.5rem;
  border-radius: 5px 5px 0px 0px;
  box-shadow: rgb(50 50 93 / 10%) 0px 0px 0px 0.5px,
    rgb(50 50 93 / 10%) 0px 2px 5px 0px, rgb(0 0 0 / 7%) 0px 1px 1.5px 0px;
  color: #102a42;
  background-color: #a6a6a6;
  @media (min-width: 800px) {
    width: 100%;
  }
`;
const Pay = styled.button`
  background-color: rgb(84 105 212 / 60%);
  color: #fff;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 0px 0px 5px 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: 1rem;
  box-shadow: rgb(50 50 93 / 10%) 0px 0px 0px 0.5px,
    rgb(50 50 93 / 10%) 0px 2px 5px 0px, rgb(0 0 0 / 7%) 0px 1px 1.5px 0px;
`;

const Form = styled.form`
  display: grid;
`;
const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  margin-bottom: 1rem;
  font-size: 1rem;
  box-shadow: rgb(50 50 93 / 50%) 0px 0px 0px 0.5px,
    rgb(50 50 93 / 50%) 0px 2px 5px 0px, rgb(0 0 0 / 7%) 0px 1px 1.5px 0px;
`;
