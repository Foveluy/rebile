import React from 'react';
import Tab from '.';

const Tabs = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }];

const TabsDemo = () => (
  <Tab tabs={Tabs}>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab1</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab2</div>
    <div style={{ height: 100, backgroundColor: 'white' }}>tab3</div>
  </Tab>
);

export default TabsDemo;
