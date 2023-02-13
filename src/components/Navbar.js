import { React, useState } from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaBars,
  FaShoppingCart,
  FaUserCheck,
  FaUserPlus,
  FaTimes,
} from 'react-icons/fa';
import links from '../links';
import { CartLogin } from './CartLogin';

const Navbar = () => {
  const { handleClick, isSidebarOpen } = useGlobalContext();
  return (
    <Nav>
      <Link to='/'>
        <Logo>
          Home<span className='logo'>Office</span>
        </Logo>
      </Link>

      <ul className={!isSidebarOpen ? '' : ''}>
        <NavLinks>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <Link to={url} key={id}>
                {text}
              </Link>
            );
          })}
        </NavLinks>
      </ul>
      <Cart>
        <CartLogin />
      </Cart>
      <MenuIcon type='button' onClick={handleClick}>
        {!isSidebarOpen ? (
          <FaBars className='icon-open' />
        ) : (
          <FaTimes className='icon-close' />
        )}
      </MenuIcon>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  max-width: 1240px;
  height:5rem;
  margin 0 auto
 
  }
`;

const MenuIcon = styled.button`
  border: none;
  background: none;
  color: #ac7a5f;
  cursor: pointer;
  .icon-open {
    height: 32px;
    width: 35px;
  }
  .icon-close {
    height: 32px;
    width: 35px;
    color: #bb2525;
    z-index: 999;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavLinks = styled.li`
   display: none;
  @media (min-width: 700px) {
    display: flex;
  justify-content: space-between;
  align items:center;
    column-gap: 2rem;
    color:#324d67;
    text-transform:capitalize;
    letter-spacing:1px;
    font-size:1rem
    
  }
`;

const Logo = styled.p`
  font-weight: bold;
  color: black;
  font-size: 2rem;
  font-family: 'Marck Script', cursive;
  text-shadow: 1px 1px 1px gray;
  .logo {
    color: #ac7a5f;
  }
`;

const Cart = styled.div`
 @media (max-width: 700px) {
      display: none;
  
    `;
