import React, { Component } from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TabsDemo path="/" />
          <ButtonDemos path="buttons" />
        </Router>
      </div>
    );
  }
}

export default App;
