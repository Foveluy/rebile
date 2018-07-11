import React from 'react';
import classNames from 'classnames';
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
  getButtonClassNames() {
    const {inline, size, type, disable} = this.props;
    const {isClick} = this.state;
    return classNames('rb-button', type, `rb-button-${size}`, {
      'rb-button-inline': inline,
      'rb-button-active': isClick,
      'rb-button-disabled': disable,
    });
  }
  render() {
    const {children, type, disable, loading, className} = this.props;

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

    return (
      <button
        className={classNames(this.getButtonClassNames(), className)}
        {...touchEvent}>
        {isLoading}
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: propTypes.oneOf(['default', 'primary', 'warning']),
  disable: propTypes.bool,
  loading: propTypes.bool,
  inline: propTypes.bool,
  size: propTypes.oneOf(['large', 'small']),
};

export default Button;
