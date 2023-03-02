import React from 'react';
import ProductPageCards from './ProductPageCards';

const ProductPageGrid = (props) => {
  const {
    loading,
    products,
    text,
    selectCategory,
    value,
    selectCompany,
    selectColors,
    sliderValue,
  } = props;

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
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
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
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
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
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
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
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}

      {value === 'price-lowest' &&
      selectCategory === 'all' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' &&
      selectCategory === 'all' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' &&
      selectCategory === 'all' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' &&
      selectCategory === 'all' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' && selectCategory === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' && selectCategory === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' && selectCategory === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' && selectCategory === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' && selectCompany === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' && selectCompany === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' && selectCompany === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' && selectCompany === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' &&
      selectCategory === 'all' &&
      selectCompany === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' &&
      selectCategory === 'all' &&
      selectCompany === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' &&
      selectCategory === 'all' &&
      selectCompany === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' &&
      selectCategory === 'all' &&
      selectCompany === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) => item.colors.includes(selectColors))
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' &&
      selectCategory === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' &&
      selectCategory === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' &&
      selectCategory === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' && selectCategory === 'all' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.company.toLowerCase().includes(selectCompany.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-lowest' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.price - b.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'price-highest' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.price - a.price)
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-down' &&
      selectCompany === 'all' &&
      selectColors === 'all'
        ? [...products]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
      {value === 'name-up' && selectCompany === 'all' && selectColors === 'all'
        ? [...products]
            .sort((a, b) => b.name.localeCompare(a.name))
            .filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
            .filter((item) =>
              item.category.toLowerCase().includes(selectCategory.toLowerCase())
            )
            .filter((item) => item.price < sliderValue * 100)
            .map((item) => (
              <ProductPageCards key={item.id} item={item}></ProductPageCards>
            ))
        : ''}
    </>
  );
};

export default ProductPageGrid;
