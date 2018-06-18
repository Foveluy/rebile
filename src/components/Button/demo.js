import React from 'react';
import Button from '.';
import WhiteSpace from '../Blank';

const ButtonDemos = () => {
  return (
    <div style={{ margin: 10 }}>
      <Button>default</Button>
      <WhiteSpace />
      <Button disable={true}>default</Button>
      <WhiteSpace />
      <Button type="primary">primary</Button>
      <WhiteSpace />
      <Button type="primary" disable>
        primary
      </Button>
      <WhiteSpace />
      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disable>
        warning
      </Button>
      <WhiteSpace />
      <Button loading>Loading</Button>
    </div>
  );
};

export default ButtonDemos;
