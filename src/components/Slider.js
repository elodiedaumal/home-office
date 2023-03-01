import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Slider = () => {
  const { sliderValue, setSliderValue } = useGlobalContext();
  const onSliderChange = (val) => {
    setSliderValue(val);
  };

  return (
    <SliderContainer>
      <Price>${sliderValue}</Price>
      <ReactSlidercontainer
        className='customSlider'
        trackClassName='customSlider-track'
        thumbClassName='customSlider-thumb'
        valueLabelDisplay='on'
        defaultValue={3100}
        step={11.99}
        min={0}
        max={3100}
        onChange={(val) => onSliderChange(val)}

        // defaultValue={70}
      />
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  max-width: 80%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const Price = styled.p`
  margin-bottom: 8px;
`;

const ReactSlidercontainer = styled(ReactSlider)`
  .customSlider {
    max-width: 130px;
  }
  .customSlider-track {
    /* Top value to align your track to the center of your thumb */
    top: 0.25rem;
    /* thickness of the track */
    height: 0.5rem;
    /* default color of your track */
    background: #efefef;
    border-radius: 5px;
    border: 1px solid #999;
  }

  .customSlider-track.customSlider-track-0 {
    /* color of the track before the thumb */
    background: #0077ff;
  }
  .customSlider-thumb {
    cursor: pointer;

    background: #0077ff;

    width: 15px;
    height: 15px;
    border-radius: 50%;
    /* remove default outline when selected */
    outline: none;
  }

  .customSlider-thumb:hover {
    box-shadow: 0 0 0 8px var(--main-color-hover);
  }
`;
