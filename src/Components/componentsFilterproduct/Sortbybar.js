import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { FaBars } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';

const Sortbybar = () => {
  const { theme, toggleGrid, toggleList, value, SortedProducts } =
    useGlobalContext();

  return (
    <TopSort>
      <div>
        <Button
          className={theme === 'grid' ? 'active' : ''}
          onClick={toggleGrid}
        >
          <BsFillGridFill />
        </Button>
        <Button
          className={theme === 'list' ? 'active' : ''}
          onClick={toggleList}
        >
          <FaBars />
        </Button>
      </div>

      <Line></Line>
      <SortBy>
        <label htmlFor='sort'>Sort By</label>
        <Select id='sort' value={value} name='sort' onChange={SortedProducts}>
          <option value='price-lowest'>Price (Lowest)</option>
          <option value='price-highest'>Price (Highest)</option>
          <option value='name-down'>Name (A-Z)</option>
          <option value='name-up'>Name (Z-A)</option>
        </Select>
      </SortBy>
    </TopSort>
  );
};

export default Sortbybar;

const TopSort = styled.div`
  display: grid;
  grid-column: 1/-1;
  column-gap: 1rem;
  align-items: center;
  row-gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: auto 1fr auto;
  }
`;
const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  padding: 2px;
  border-radius: 5px;
  margin-right: 0.5rem;
  cursor: pointer;
  &.active {
    background-color: black;
    color: #fff;
  }
`;

const Line = styled.div`
  background: #bcccdc;
  height: 2px;
  width: 100%;
  max-width: 45rem;
`;

const SortBy = styled.form`
  display: flex;
  column-gap: 1rem;
  width: 100%;
`;

const Select = styled.select`
  background: none;
  border: none;
  cusor: pointer;
  font-size: 0.9rem;
`;
