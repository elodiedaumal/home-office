import React, { useState } from 'react';
import ProductPageCards from '../components/ProductPageCards';

const ProductPageGrid = (props) => {
  const { loading, products, text } = props;

  return loading ? (
    <div className='loading'></div>
  ) : (
    <>
      {text
        ? products
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : products.map((item) => (
            <ProductPageCards key={item.id} item={item}></ProductPageCards>
          ))}
    </>
  );
};

export default ProductPageGrid;
