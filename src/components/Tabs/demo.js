import React from 'react';
import Tab from '.';
import WhiteSpace from '../Blank';

/**
 * demo: 一般性使用
 */
const Tabs = [{title: 'First'}, {title: 'Second'}, {title: 'Third'}];
const Normal = () => (
  <Tab tabs={Tabs}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
  </Tab>
);

/**
 * demo: 改变点亮时颜色
 */
const TintColor = () => (
  <Tab tabs={Tabs} tintColor="green">
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
  </Tab>
);

/**
 * demo: 超过 3 个 tabs
 */
const Tabs5 = [
  {title: 'First'},
  {title: 'Second'},
  {title: 'Third'},
  {title: 'Forth'},
  {title: 'Fifth'},
];

const Over3Tabs = () => (
  <Tab tabs={Tabs5}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab4</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab5</div>
  </Tab>
);

/**
 * demo: 关闭动画
 */
const NoAnimation = () => (
  <Tab tabs={Tabs5} animation={false}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab4</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab5</div>
  </Tab>
);

/**
 * demo: 可手动滑动
 */
const Swipeable = () => (
  <Tab tabs={Tabs5} swipeable={true}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab4</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab5</div>
  </Tab>
);

/**
 * demo: 不同个数的 tabs
 */
const TabsNumber = () => (
  <Tab tabs={Tabs5} tabsNumber={5}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab4</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab5</div>
  </Tab>
);

/**
 * demo: 显示 5 个 tabs
 * 以及超过 5 个的时候
 *
 */
const Tabs8 = [
  {title: 'First'},
  {title: 'Second'},
  {title: 'Third'},
  {title: 'Forth'},
  {title: 'Fifth'},
  {title: 'Six'},
  {title: 'Seven'},
  {title: 'Eight'},
];
const TabsNumberOverFive = () => (
  <Tab tabs={Tabs8} tabsNumber={5}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab2</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab3</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab4</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab5</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab6</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab7</div>
    <div style={{height: 100, backgroundColor: 'white'}}>tab8</div>
  </Tab>
);

/**
 * demo: 只有一个孩子
 */
const TabsWithOneChild = () => (
  <Tab tabs={Tabs5}>
    <div style={{height: 100, backgroundColor: 'white'}}>tab1</div>
  </Tab>
);

const TabsDemo = () => (
  <div>
    <Normal />
    <WhiteSpace />
    <TintColor />
    <WhiteSpace />
    <Over3Tabs />
    <WhiteSpace />
    <NoAnimation />
    <WhiteSpace />
    <Swipeable />
    <WhiteSpace />
    <TabsNumber />
    <WhiteSpace />
    <TabsNumberOverFive />
    <WhiteSpace />
    <TabsWithOneChild />
  </div>
);

export default TabsDemo;
