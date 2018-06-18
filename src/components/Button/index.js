import React from 'react';
import './index.css';

class Button extends React.Component {
  state = {
    isClick: false,
  }
  static defaultProps = {
    type: 'default',
    disable: false,
  }

  render() {
    const { children, type, disable } = this.props;
    const { isClick } = this.state;

    const touchEvent = disable
      ? {}
      : {
          onTouchStart: () => {
            this.setState({ isClick: true });
          },
          onTouchEnd: () => {
            this.setState({ isClick: false });
          },
        };

    return (
      <button
        className={isClick ? `rb-button ${type} rb-button-active` : `rb-button ${type}`}
        style={{
          opacity: disable ? 0.5 : 1,
          width: '100%',
          border: 'none',
          fontSize: 18,
          height: 47,
          borderRadius: 5,
          outline: 'none',
        }}
        {...touchEvent}
      >
        {children}
      </button>
    );
  }
}

export default Button;
