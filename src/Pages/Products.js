import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
// import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import PageHeader from '../components/PageHeader';
import ProductPageGrid from '../components/ProductPageGrid';
import FilterComponents from '../components/FilterComponents';

const Products = () => {
  const { products, loading, theme, toggleGrid, toggleList } =
    useGlobalContext();

  if (loading) {
    return <div className='loading'></div>;
  }
  return (
    <>
      <PageHeader title='Products' />

      <Container>
        <FilterComponents />

        <Section className={theme}>
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
            <p>{products.length} Product Found </p>
            <Line></Line>
            <SortBy>
              <p>Sort By</p>
              <Select
                name='companies'
                id='companies'
                // value={companies}
                // onChange={handleChange}
                className='form-input'
              >
                <option>Price (Lowest)</option>;<option>Price (Highest)</option>
                ;<option>Name (A-Z)</option>;<option>Name (Z-A)</option>;
              </Select>
            </SortBy>
          </TopSort>
          <ProductPageGrid products={products} />
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

const TopSort = styled.div`
  display: grid;
  grid-column: 1/-1;
  column-gap: 1rem;
  align-items: center;
  row-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 500px) {
    grid-template-columns: auto auto 1fr auto;
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
  max-width: 35rem;
`;

const SortBy = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 100%;
`;

const Select = styled.select`
  background: none;
  border: none;

  cusor: pointer;
  font-size: 1rem;
`;
