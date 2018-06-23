import React, { Component } from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import InputDemo from './components/Input/demo';
import { Router, Link } from '@reach/router';

const Home = () => (
  <div>
    <iframe width="375" height="600" src="http://localhost:3000/tabs" frameBorder="0" />
    <br />
    <Link to="input">input</Link>
    <br />
    <Link to="buttons">buttons</Link>
    <br />
    <Link to="tabs">tabs</Link>
    <br />
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
          <InputDemo path="/input" />
        </Router>
      </div>
    );
  }
}

export default App;
