import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMinus,
  FaPlus,
} from 'react-icons/fa';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SingleProduct = () => {
  const { setLoading } = useGlobalContext();
  const [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();

  async function getSingleProduct() {
    setLoading(true);
    try {
      const response = await axios.get(`${single_product_url}${id}`);
      const singleProduct = response.data;

      setSingleProduct(singleProduct);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  console.log(id);

  return (
    <>
      <PageHeader />
      <Section>
        <Link to='/products' className='btn'>
          Back to products
        </Link>
        <div>Pictures</div>
        <div>
          <h1>{singleProduct.name}</h1>
          <div>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>{' '}
            ( {singleProduct.reviews} customers reviews )
          </div>
          <p>${singleProduct.price / 100}</p>
          <p>{singleProduct.description}</p>
          <div>
            <p>Availability:</p>
            {singleProduct.stock > 0 ? (
              <p>{singleProduct.stock} in Stock</p>
            ) : (
              <p>Out of Stock</p>
            )}
          </div>
          <div>
            <p>Brands:</p>

            <p>{singleProduct.company}</p>
          </div>
          <div>
            <p>Reference:</p>

            <p>{singleProduct.id}</p>
          </div>
        </div>
        <Line></Line>
        <div>
          <ColorSection>
            <p>Colors:</p>{' '}
            <ColorContainer>
              {singleProduct.colors.map((color, index) => {
                const colors = `${color}`;
                console.log(colors);
                return (
                  <ColorRound key={index} backgroundColor={colors}></ColorRound>
                );
              })}
            </ColorContainer>
          </ColorSection>
          <CartContainer>
            <AddContainer>
              <Button>
                <FaMinus />
              </Button>
              <AddText>1</AddText>
              <Button>
                <FaPlus />
              </Button>
            </AddContainer>
            <Link to='cart' className='btn'>
              Add to cart
            </Link>
          </CartContainer>
        </div>
      </Section>
    </>
  );
};

export default SingleProduct;

// const LinkBtn = styled(Link)`
//   width: 500px;
// `;

const Section = styled.section`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(50px, auto);
  width: 90vw;
  max-width: 1240px;
  margin: 5rem auto;
  @media (min-width: 800px) {
    grid-template-columns: 200px 1fr;
  }
`;

const Line = styled.div`
  background: #bcccdc;
  height: 1px;
  width: 100%;
  max-width: 35rem;
`;

const ColorSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;
const ColorRound = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor || 'palevioletred'};
`;
const ColorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const AddContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
`;
const CartContainer = styled.div`
  width: 9rem;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
`;
const AddText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
