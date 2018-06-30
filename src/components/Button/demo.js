import React from 'react';
import Button from '.';
import WhiteSpace from '../Blank';

/**
 * demo: Button 组件 demo 总览
 */
const ButtonDemos = () => {
  return (
    <div style={{margin: 10}}>
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
      <WhiteSpace />
      <Button inline>default</Button>
      <Button type="primary" inline>
        primary
      </Button>
      <Button type="warning" inline>
        warning
      </Button>
      <WhiteSpace />
      <Button size="small">default</Button>
      <Button type="primary" size="small">
        primary
      </Button>
      <Button type="warning" size="small">
        warning
      </Button>
    </div>
  );
};

export default ButtonDemos;
