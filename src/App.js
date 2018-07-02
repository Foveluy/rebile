import React, {Component} from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import {Router} from '@reach/router';
import Docs from './components/Tabs/docs.md';
import {CodeBlock} from './doc/components/code';

const Home = () => (
  <div style={{display: 'flex'}}>
    <div className="rb-content">
      <Docs
        components={{
          code: CodeBlock,
        }}
      />
    </div>
    <div
      style={{
        border: '1px solid black',
        position: 'fixed',
        backgroundColor: '#ddd',
        right: 10,
      }}>
      <iframe
        width="375"
        height="600"
        src="http://localhost:3000/tabs"
        frameBorder="0"
      />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <TabsDemo path="/tabs" />
          <ButtonDemos path="/buttons" />
          <InputItemDemo path="/input" />
        </Router>
      </div>
    );
  }
}

export default App;