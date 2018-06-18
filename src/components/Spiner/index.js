import React from 'react';
import './index.css';

class Spiner extends React.Component {
  static defaultProps = {
    color: '#108ee9',
  }

  render() {
    return <div className="loader" style={{ color: this.props.color }} />;
  }
}

export default Spiner;
