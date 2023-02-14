import React from 'react';
import styled from 'styled-components';

const PageHeader = (title) => {
  return (
    <Header>
      <HeaderText>
        <Title>Home</Title> / Products
      </HeaderText>
    </Header>
  );
};

export default PageHeader;

const Header = styled.header`
  background-color: #eaded7;
  padding: 4.4rem 2rem;
  color: #453227;
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  max-width: 1240px;
`;
const Title = styled.span`
  color: #795744;
`;
