import React, { Component } from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import { Router } from '@reach/router';
import DemoMD from './components/Tabs/demo.md';

const Home = () => (
  <div>
    <DemoMD />
    <iframe width="375" height="600" src="http://localhost:3000/tabs" frameBorder="0" />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <TabsDemo path="/tabs" />
          <ButtonDemos path="buttons" />
        </Router>
      </div>
    );
  }
}

export default App;
