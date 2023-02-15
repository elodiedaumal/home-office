import React from 'react';
import ProductPageCards from '../components/ProductPageCards';

const ProductPageGrid = (props) => {
  const { loading, products } = props;
  return loading ? (
    <div className='loading'></div>
  ) : (
    <>
      {products.map((item) => (
        <ProductPageCards key={item.id} item={item}></ProductPageCards>
      ))}
    </>
  );
};

export default ProductPageGrid;
