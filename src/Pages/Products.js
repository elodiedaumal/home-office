import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

import PageHeader from '../components/PageHeader';
import ProductPageGrid from '../components/ProductPageGrid';
import FilterComponents from '../components/FilterComponents';
import Sortbybar from '../components/Sortbybar';

const Products = () => {
  const {
    filterproducts,
    loading,
    theme,
    value,
    text,
    setText,
    products,
    currentdata,
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
            filterproducts={filterproducts}
            // currentdata={currentdata}
            products={products}
            value={value}
            text={text}
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
