import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

const Picturesingle = () => {
  const { singleProduct, loading } = useGlobalContext();

  const [mainPicture, setMainPicture] = useState(singleProduct.images[0].url);

  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <ImgContainer>
      <MainPicture src={mainPicture} />
      <ThumbnailContainer>
        {singleProduct.images.map((picture) => {
          const { id, url } = picture;

          return (
            <Imgthumb
              key={id}
              // width={width}
              // height={height}
              src={url}
              alt={singleProduct.name}
              onClick={() => setMainPicture(url)}
              className={mainPicture === url ? 'active' : ''}
            />
          );
        })}
      </ThumbnailContainer>
    </ImgContainer>
  );
};

export default Picturesingle;

const ImgContainer = styled.div`
  grid-column: 1;
  height: 100%;
  width: 100%;
`;

const Imgthumb = styled.img`
  border-radius: 5px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  &.active {
    border: 2px solid #795744;
  }
  @media (min-width: 600px) {
    height: 100px;
  }
  @media (min-width: 1000px) {
    height: 75px;
  }
`;
const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  // width: 90vw;
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const MainPicture = styled.img`
  object-fit: cover;
  border-radius: 5px;
  max-height: 600px;
  width: 90vw;
  margin-bottom: 0.3rem;

  @media (min-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;
