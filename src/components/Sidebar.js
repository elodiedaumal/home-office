import React from 'react';
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

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarWrapper>
      <div className={!isSidebarOpen ? 'hidden' : 'sidebar'}>
        <ul>
          <NavLinks onClick={closeSidebar}>
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
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.aside`
  .sidebar {
    background-color: #fff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .hidden {
    display: none;
  }
  @media screen and (min-width: 700px) {
    .sidebar {
      display: none;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1rem;
  text-align: left;
`;

const Cart = styled.div`
  display: flex;
  align-self: center;
  margin: 2rem auto;
`;
