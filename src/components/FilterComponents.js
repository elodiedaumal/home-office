import React, { useState } from 'react';

import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import Colors from '../components/Colors';
import Slider from './Slider';

const FilterComponents = (props) => {
  const { products } = useGlobalContext();
  const allCategories = [
    'all',
    ...new Set(products.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const allCompanies = [
    'all',
    ...new Set(products.map((item) => item.company)),
  ];
  const [companies, setCompanies] = useState(allCompanies);

  const allColors = [...new Set(products.flatMap((item) => item.colors))];

  const [colors, setColors] = useState(allColors);

  return (
    <Filter>
      <form>
        <Input
          type='text'
          placeholder='Search'
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
          autoFocus
        />
      </form>
      <div>
        <Category>Category</Category>
        <Categories categories={categories} />
      </div>
      <div>
        <Category>Company</Category>
        <Companies companies={companies} />
      </div>
      <div>
        <Category>Colors</Category>
        <Colors colors={colors} />
      </div>
      <div>
        <Category>Price</Category>
        <p>$22200</p>
        <Slider />
      </div>
      <Shipping>
        <p>Free Shipping</p>
        <input type='checkbox' />
      </Shipping>
      <Button>Clear Filter</Button>
    </Filter>
  );
};

export default FilterComponents;

const Filter = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 1rem;
  letter-spacing: 1px;
`;
const Input = styled.input`
  background: #f1f5f8;
  border: none;
  height: 2rem;
  padding: 0.5rem;
  letter-spacing: 1px;
`;

const Category = styled.h5`
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
const Shipping = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 1rem;
  align-items: center;
`;

const Button = styled.button`
  background-color: #bb2525;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  width: 70%;
  padding: 0.3rem;
`;
