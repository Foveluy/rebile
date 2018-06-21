import React from 'react';
import Tab from '.';

const Tabs = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }, { title: 'Forth' }];

const TabsDemo = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab1</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab2</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab3</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab4</div>
  </Tab>
);

export default TabsDemo;
