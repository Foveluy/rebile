import React, { Component } from 'react';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import InputItemDemo from './components/InputItem/demo';
import { Router } from '@reach/router';
import TabsDemoMD from './components/Tabs/demo.md';
import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live';
import Tab from './components/Tabs/index';

const Code = ({ children }) => {
  console.log(children);
  return (
    <LiveProvider scope={{ Tab }} code={children}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

const Home = () => (
  <div>
    <TabsDemoMD
      components={{
        code: Code,
      }}
    />
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
          <ButtonDemos path="/buttons" />
          <InputItemDemo path="/input" />
        </Router>
      </div>
    );
  }
}

export default App;