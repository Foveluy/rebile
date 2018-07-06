import React from 'react';
import {Collapse, Panel} from './index';

/**
 * demo: 手风琴模式
 */
const Demo1 = () => (
  <Collapse>
    <Panel key={1} header={open => <div>列表1{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={2} header={open => <div>列表2{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={3} header={open => <div>列表3{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
  </Collapse>
);

/**
 * demo: 普通模式
 */
const Demo2 = () => (
  <Collapse accordion={false}>
    <Panel key={1} header={open => <div>列表1{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={2} header={open => <div>列表2{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
    <Panel key={3} header={open => <div>列表3{open ? '打开' : '关闭'}</div>}>
      <div>苹果</div>
      <div>香蕉</div>
      <div>雪梨</div>
    </Panel>
  </Collapse>
);

const CollapseDemo = () => {
  return (
    <div>
      <Demo2 />
      <Demo1 />
    </div>
  );
};

export default CollapseDemo;
