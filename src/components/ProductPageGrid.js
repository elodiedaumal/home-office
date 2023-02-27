import React, { useState } from 'react';
import ProductPageCards from '../components/ProductPageCards';

const ProductPageGrid = (props) => {
  const { loading, products, text, selectCatergory, value, selectCompany } =
    props;

  return loading ? (
    <div className='loading'></div>
  ) : (
    <>
      {selectCatergory === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {selectCompany === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCatergory.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category
                .toLowerCase()
                .includes(selectCatergory.toLowerCase())
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
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category
                .toLowerCase()
                .includes(selectCatergory.toLowerCase())
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
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category
                .toLowerCase()
                .includes(selectCatergory.toLowerCase())
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
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category
                .toLowerCase()
                .includes(selectCatergory.toLowerCase())
            )
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
    </>
  );
};

export default ProductPageGrid;
