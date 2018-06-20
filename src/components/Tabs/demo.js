import React from 'react';
import Tab from '.';

const Tabs = [{ title: 'first' }, { title: 'second' }, { title: 'third' }, { title: 'forth' }];

const TabsDemo = () => (
  <Tab tabs={Tabs}>
    <div>tab1</div>
    <div>tab2</div>
    <div>tab3</div>
  </Tab>
);

export default TabsDemo;
