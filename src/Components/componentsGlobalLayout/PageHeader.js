import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ title, product }) => {
  return (
    <Header>
      <HeaderText>
        <Title>Home / </Title>
        {product ? <Title> Product /</Title> : ''} {title}
      </HeaderText>
    </Header>
  );
};

export default PageHeader;

const Header = styled.header`
  background-color: #eaded7;
  padding: 4.4rem 2rem;
  color: #453227;
  text-transform: capitalize;
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  max-width: 1240px;
`;
const Title = styled.span`
  color: #795744;
`;
