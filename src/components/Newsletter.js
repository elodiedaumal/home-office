import React from 'react';
import styled from 'styled-components';

const Newsletter = () => {
  return (
    <Section>
      <Title>Join our newsletter and get 20% off</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
        unde quaerat ratione soluta veniam provident adipisci cumque eveniet
        tempore?
      </Text>

      <Form>
        <Input type='email' placeholder='Enter Email' />
        <Button type='submit'>Subscibe</Button>
      </Form>
    </Section>
  );
};

export default Newsletter;

const Section = styled.section`
  display: grid;
  max-width: 1240px;
  margin: 5rem auto;
  padding: 0 2rem;
  gap: 1rem 8rem;
  align-items: center;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`;
const Title = styled.h4`
  font-size: 1.5rem;
  color: #102a42;
  @media (min-width: 1000px) {
    grid-column: 1 / 3;
    font-size: 2rem;
  }
`;
const Text = styled.p`
  line-height: 2;
  color: #617d98;
  @media (min-width: 1000px) {
    min-width: 400px;
  }
`;
const Form = styled.form`
  max-width: 500px;
  display: grid;
  height: 2.5rem;
  grid-template-columns: 1fr auto;
`;
const Input = styled.input`
  border: 2px solid black;
  border-radius: 5px 0 0 5px;
  padding: 0 1rem;
`;

const Button = styled.button`
  color: black;
  background-color: #ab7a5f;
  border-radius: 0 5px 5px 0;
  border: 2px solid black;
  border-left: none;
  padding: 0 1rem;
  letter-spacing: 2px;
  font-size: 1rem;
  @media (max-width: 400px) {
    font-size: 0.7rem;
    padding: 0 0.7rem;
  }
`;
