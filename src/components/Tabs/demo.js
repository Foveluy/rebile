import React from 'react';
import Tab from '.';
import WhiteSpace from '../Blank';

const Tabs = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }];

const Normal = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab1</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab2</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab3</div>
  </Tab>
);

const TintColor = () => (
  <Tab tabs={Tabs} tintColor="green">
    <div style={{ height: 100, backgroundColor: 'white' }}>tab1</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab2</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab3</div>
  </Tab>
);

const Tabs5 = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }, { title: 'Forth' }, { title: 'Fifth' }];

const Over3Tabs = () => (
  <Tab tabs={Tabs5}>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab1</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab2</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab3</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab4</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab5</div>
  </Tab>
);

const TabsDemo = () => (
  <div>
    <Normal />
    <WhiteSpace />
    <TintColor />
    <WhiteSpace />
    <Over3Tabs />
  </div>
);

export default TabsDemo;
