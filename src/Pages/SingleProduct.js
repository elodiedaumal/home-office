import React, { useEffect } from 'react';
import { single_product_url } from '../context.js';

import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Picturesingle from '../components/Picturesingle';
import Addtocart from '../components/Addtocart.js';
import Stars from '../components/Stars.js';

const SingleProduct = () => {
  const { loading, getSingleProduct, singleProduct } = useGlobalContext();

  let { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${single_product_url}${id}`);
  }, []);

  // const increase = () => {
  //   let tempCart = state.cart.map((cartItem) => {
  //     if (cartItem.id === action.payload) {
  //       return { ...cartItem, amount: cartItem.amount + 1 };
  //     }
  //     return cartItem;
  //   });
  //   return { ...state, cart: tempCart };
  // };
  if (loading) {
    return <div className='loading'></div>;
  }
  return (
    <>
      <PageHeader title={singleProduct.name} />
      <Section>
        <Link to='/products'>
          <ButtonTop className='btn'>Back to products</ButtonTop>
        </Link>

        <Picturesingle />

        <GridRight>
          <SectionInfo>
            <div>
              <Name>{singleProduct.name}</Name>
              <Stars />

              <Price>${singleProduct.price / 100}</Price>
            </div>
            <p>{singleProduct.description}</p>
            <Info>
              <InfoText>Availability:</InfoText>
              {singleProduct.stock > 0 ? (
                <p>{singleProduct.stock} in Stock</p>
              ) : (
                <p>Out of Stock</p>
              )}
            </Info>
            <Info>
              <InfoText>Brand:</InfoText>
              <p>{singleProduct.company}</p>
            </Info>
            <Info>
              <InfoText>Reference:</InfoText>
              <p>{singleProduct.id}</p>
            </Info>
          </SectionInfo>
          <Line></Line>
          <Addtocart />
        </GridRight>
      </Section>
    </>
  );
};

export default SingleProduct;

const Section = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  width: 90vw;
  max-width: 1240px;
  margin: 5rem auto;
  color: #324d67;
  line-height: 2;
  font-size: 1rem;
  &.btn {
    width: 9rem !important;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridRight = styled.div``;
const SectionInfo = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const ButtonTop = styled.button`
  font-size: 1rem;
  width: 13.5rem;
`;
const Name = styled.h1`
 
    color: #102a42;
font-size: 2rem;
text-transform:capitalize;
letter-spacing:1px
  }
`;
const Price = styled.h5`
 color: #ab7a5f;
  font-size: 1rem;
  }
`;

const Info = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 3fr;
`;
const InfoText = styled.p`
  font-weight: bold;
  color: #324d67;
`;

const Line = styled.div`
  background: #bcccdc;
  height: 1px;
  width: 100%;
  max-width: 35rem;
  margin: 2rem 0;
`;
