import React from "react";
import Tab from ".";
import WhiteSpace from "../Blank";

/**
 * demo: 一般性使用
 */
const Tabs = [{ title: "First" }, { title: "Second" }, { title: "Third" }];
const Normal = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

/**
 * demo: 改变点亮时颜色
 */
const TintColor = () => (
  <Tab tabs={Tabs} tintColor="green">
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
  </Tab>
);

/**
 * demo: 超过 3 个 tabs
 */
const Tabs5 = [
  { title: "First" },
  { title: "Second" },
  { title: "Third" },
  { title: "Forth" },
  { title: "Fifth" },
];

const Over3Tabs = () => (
  <Tab tabs={Tabs5}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

/**
 * demo: 关闭动画
 */
const NoAnimation = () => (
  <Tab tabs={Tabs5} animation={false}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
  </Tab>
);

/**
 * demo: 可手动滑动
 */
const Swipeable = () => (
  <Tab tabs={Tabs5} swipeable={true}>
    <div style={{ height: 100, backgroundColor: "white" }}>tab1</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab2</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab3</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab4</div>
    <div style={{ height: 100, backgroundColor: "white" }}>tab5</div>
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
  </div>
);

export default TabsDemo;
