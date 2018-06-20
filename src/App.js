import React, { Component } from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabsDemo />
        <ButtonDemos />
      </div>
    );
  }
}

export default App;
