import React, { useState } from 'react';
import ProductPageCards from '../components/ProductPageCards';

const ProductPageGrid = (props) => {
  const { loading, products, text, selectCatergory, value } = props;
  const [filterproducts, setFilterproducts] = useState([]);
  console.log(value);
  return loading ? (
    <div className='loading'></div>
  ) : (
    <>
      {value === 'price-lowest'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
    </>
  );
};

export default ProductPageGrid;
