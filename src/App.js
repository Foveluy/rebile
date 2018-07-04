import React, {Component} from 'react';
import {Router} from '@reach/router';
import './App.css';
import ButtonDemos from './components/Button/demo';
import TabsDemo from './components/Tabs/demo';
import InputItemDemo from './components/InputItem/demo';
import Docs from './components/Tabs/docs.md';
import {CodeBlock} from './doc/components/code';
import DrawerDemo from './components/Drawer/demo';

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
        src="http://localhost:3000/demos/tabs"
        frameBorder="0"
      />
    </div>
  </div>
);

const DemoWrapper = ({children}) => {
  return <React.Fragment>{children}</React.Fragment>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <DemoWrapper path="demos">
            <DrawerDemo path="drawer" />
            <TabsDemo path="/tabs" />
            <ButtonDemos path="/buttons" />
            <InputItemDemo path="/input" />
          </DemoWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
