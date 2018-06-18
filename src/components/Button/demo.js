import React from 'react';
import Button from '.';
import WhiteSpace from '../Blank';

const ButtonDemos = () => {
  return (
    <div style={{ margin: 10 }}>
      <Button>first</Button>
      <WhiteSpace />
      <Button disable={true}>first</Button>
      <WhiteSpace />
      <Button type="primary">primary</Button>
      <WhiteSpace />
      <Button type="primary" disable={true}>
        primary
      </Button>
      <WhiteSpace />
      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disable={true}>
        warning
      </Button>
    </div>
  );
};

export default ButtonDemos;
