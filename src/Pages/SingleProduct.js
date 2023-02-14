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
  FaCheck,
} from 'react-icons/fa';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SingleProduct = () => {
  const { setLoading, loading } = useGlobalContext();
  const [singleProduct, setSingleProduct] = useState([]);
  const [bgcolor, setBgcolor] = useState([]);
  const [colorActive, setColorActive] = useState(false);
  let { id } = useParams();

  async function getSingleProduct() {
    setLoading(true);
    try {
      const response = await axios.get(`${single_product_url}${id}`);
      const singleProduct = response.data;
      setBgcolor(singleProduct.colors);
      setSingleProduct(singleProduct);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const colorClick = (event) => {
    setColorActive(true);
    console.log(colorActive);
    if (setColorActive(true)) {
      event.currentTarget.classList.add('active');
      return;
    }
    // setColorActive(false);
    if (setColorActive(false)) {
      event.currentTarget.classList.remove('active');
    }
  };
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
        <ImgContainer>Pictures</ImgContainer>
        <GridRight>
          <SectionInfo>
            <div>
              <Name>{singleProduct.name}</Name>
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
              <InfoText>Brands:</InfoText>
              <p>{singleProduct.company}</p>
            </Info>
            <Info>
              <InfoText>Reference:</InfoText>
              <p>{singleProduct.id}</p>
            </Info>
          </SectionInfo>
          <Line></Line>
          <div>
            <ColorSection>
              <InfoText>Colors:</InfoText>{' '}
              <ColorContainer>
                {bgcolor.map((color, index) => {
                  const colors = `${color}`;
                  const colorClick = (e) => {
                    e.currentTarget.classList.toggle('active');
                  };
                  return (
                    <ColorCheckcontainer>
                      <ColorRound
                        key={index}
                        backgroundColor={colors}
                        onClick={colorClick}
                      >
                        <FaCheck />
                      </ColorRound>
                    </ColorCheckcontainer>
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
        </GridRight>
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
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ImgContainer = styled.div`
  grid-column: 1;
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

const ColorSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const ColorCheckcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0rem;
  color: #fff;
`;

const ColorRound = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor || 'palevioletred'};
  &.active {
    font-size: 0.8rem;
  }
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

  color: black;
`;
const AddText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;
