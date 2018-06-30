import React from 'react';
import './index.css';
import propTypes from 'prop-types';

/**
 * Spiner 组件
 */
class Spiner extends React.Component {
  static defaultProps = {
    color: '#108ee9',
  };

  render() {
    return <div className="loader" style={{color: this.props.color}} />;
  }
}

Spiner.propTypes = {
  /**
   * Spiner 颜色
   */
  color: propTypes.string,
};

export default Spiner;
