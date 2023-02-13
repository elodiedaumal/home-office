import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Section>
      <p>
        © {new Date().getFullYear()} <Logo>HomeOffice</Logo> All rights reserved
      </p>
    </Section>
  );
};

export default Footer;

const Section = styled.section`
  background-color: #222222;
  height: 5rem;
  padding: 0 2rem;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
`;
const Logo = styled.span`
  color: #ab7a5f;
`;
