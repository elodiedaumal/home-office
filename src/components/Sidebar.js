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
                <Link to={url} key={id} className='link'>
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
  // gap: 2rem;

  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1rem;
  text-align: left;
  a {
    padding: 1rem 1.5rem;
    &:hover {
      background-color: #f1f5f8;
      padding: 1rem 0;
      padding-left: 2.5rem;
      transition: padding-left 1.5s;
    }
  }
`;

const Cart = styled.div`
  display: flex;
  align-self: center;
  margin: 2rem auto;
`;
