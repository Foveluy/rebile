import React from 'react';
import Dropdown from './';
import Button from '../Button';

class Toggle extends React.Component {
  state = {
    toggle: false,
  };
  set = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return this.props.children(this.state.toggle, this.set);
  }
}
/**
 * demo: 最简单的dropdown
 */
const Demo = () => {
  return (
    <div>
      <Toggle>
        {(toggle, set) => (
          <React.Fragment>
            <Button onClick={set} size="small">
              {toggle ? 'Show' : 'Close'}
            </Button>
            <Dropdown style={{backgroundColor: '#999'}} open={toggle} />
          </React.Fragment>
        )}
      </Toggle>
    </div>
  );
};

const Wrapper = () => {
  return <Demo />;
};

export default Wrapper;
