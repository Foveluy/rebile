import React from 'react';
import './index.css';
import Spiner from '../Spiner';
import propTypes from 'prop-types';

class Button extends React.Component {
  state = {
    isClick: false,
  };
  static defaultProps = {
    type: 'default',
    disable: false,
    loading: false,
    inline: false,
    size: 'large',
  };

  render() {
    const {children, type, disable, loading, inline, size} = this.props;
    const {isClick} = this.state;

    // for touch
    const touchEvent = disable
      ? {}
      : {
          onTouchStart: () => {
            this.setState({isClick: true});
          },
          onTouchEnd: () => {
            this.setState({isClick: false});
          },
        };

    // for button loading
    const isLoading = loading ? (
      <div style={{marginRight: 140}}>
        <Spiner color={type === 'default' ? undefined : 'white'} />
      </div>
    ) : null;

    const isInline = inline ? 'rb-button-inline' : '';
    const _size = 'rb-button-' + size;

    return (
      <button
        className={
          isClick
            ? `rb-button ${type} ${isInline} ${_size} rb-button-active`
            : `rb-button ${type} ${_size} ${isInline}`
        }
        style={{
          padding: '0 15px',
          opacity: disable ? 0.5 : 1,
          border: 'none',
          borderRadius: 5,
          outline: 'none',
        }}
        {...touchEvent}>
        {isLoading}
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: propTypes.oneOf(['defalut', 'primary', 'warning']),
  disable: propTypes.bool,
  loading: propTypes.bool,
  inline: propTypes.bool,
  size: propTypes.oneOf(['large', 'small']),
};

export default Button;
