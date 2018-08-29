import React from 'react';
import Slider from '.';

/**
 * 一般使用
 */
const SliderNormal = () => (
  <Slider
    style={{width: '400px', margin: '0 20px'}}
    max={100}
    min={0}
    step={10}
    interval={true}
    defaultValue={[10, 20]}
  />
);

const RangeDemo = () => (
  <div>
    <SliderNormal />
  </div>
);

export default RangeDemo;
