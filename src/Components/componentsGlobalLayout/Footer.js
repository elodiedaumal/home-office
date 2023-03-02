import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Section>
      <footer>
        © {new Date().getFullYear()} <Logo>HomeOffice</Logo> All rights reserved
      </footer>
    </Section>
  );
};

export default Footer;

const Section = styled.footer`
  background-color: #222222;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
  padding: 2rem;
  width: 100%;
`;
const Logo = styled.span`
  color: #ab7a5f;
`;
