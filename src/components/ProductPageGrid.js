import React, { useState } from 'react';
import ProductPageCards from '../components/ProductPageCards';

const ProductPageGrid = (props) => {
  const { loading, products, value } = props;
  const [filterproducts, setFilterproducts] = useState([...products]);

  return loading ? (
    <div className='loading'></div>
  ) : (
    <>
      {value === 'price-lowest'
        ? filterproducts
            .sort((a, b) => a.price - b.price)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : filterproducts.map((item) => (
            <ProductPageCards key={item.id} item={item}></ProductPageCards>
          ))}
      {value === 'price-highest'
        ? filterproducts
            .sort((a, b) => b.price - a.price)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : filterproducts.map((item) => (
            <ProductPageCards key={item.id} item={item}></ProductPageCards>
          ))}
      {value === 'name-down'
        ? filterproducts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : filterproducts.map((item) => (
            <ProductPageCards key={item.id} item={item}></ProductPageCards>
          ))}
      {value === 'name-up'
        ? filterproducts
            .sort((a, b) => b.name.localeCompare(a.name))
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : filterproducts.map((item) => (
            <ProductPageCards key={item.id} item={item}></ProductPageCards>
          ))}
    </>
  );
};

export default ProductPageGrid;
