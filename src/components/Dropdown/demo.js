import React from 'react';
import Dropdown from './';
import Button from '../Button';

/**
 * Demo: 最简单的dropdown
 */
const Demo = () => {
  return (
    <div>
      <Dropdown open={false} />
      <Button size="small">Show</Button>
    </div>
  );
};

const Wrapper = () => {
  return <Demo />;
};

export default Wrapper;
