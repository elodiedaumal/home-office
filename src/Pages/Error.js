import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Section>
      <Text>Sorry wrong path!!</Text>
      <Link className='btn' to='/'>
        Back to home page
      </Link>
    </Section>
  );
};

export default Error;

const Section = styled.section`
  margin: 2rem auto;
  max-width: 1240px;
  padding: 2rem;
`;
const Text = styled.p`
  font-size: 2rem;
  padding-bottom: 2rem;
`;
