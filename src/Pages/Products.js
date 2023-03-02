import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

import PageHeader from '../Components/componentsGlobalLayout/PageHeader';
import ProductPageGrid from '../Components/componentsProductPage/ProductPageGrid';
import FilterComponents from '../Components/componentsFilterproduct/FilterComponents';
import Sortbybar from '../Components/componentsFilterproduct/Sortbybar';

const Products = () => {
  const {
    loading,
    theme,
    value,
    text,
    setText,
    products,
    selectCategory,
    selectCompany,
    selectColors,
    sliderValue,
  } = useGlobalContext();

  if (loading) {
    return <div className='loading'></div>;
  }
  return (
    <>
      <PageHeader title='Products' />

      <Container>
        <FilterComponents text={text} setText={setText} />

        <Section className={theme}>
          <Sortbybar />

          <ProductPageGrid
            products={products}
            value={value}
            text={text}
            selectCategory={selectCategory}
            selectCompany={selectCompany}
            selectColors={selectColors}
            sliderValue={sliderValue}
          />
        </Section>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
  width: 90vw;
  max-width: 1240px;
  margin: 4rem auto;

  @media (min-width: 800px) {
    grid-template-columns: 200px 1fr;
  }
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 2rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);

    &.list {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
