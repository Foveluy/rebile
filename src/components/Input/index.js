import React from 'react';
import classNames from 'classnames';
import './index.css';

class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    disabled: false,
  };
  fixValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }
  getInputClassName() {
    const { disabled, size } = this.props;
    return classNames('rb-input', {
      'rb-input-sm': size === 'small',
      'rb-input-lg': size === 'large',
      'rb-input-disabled': disabled,
    });
  }
  render() {
    const { className, getRef, ...otherProps } = this.props;
    if ('value' in this.props) {
      otherProps.value = this.fixValue(otherProps.value);
      delete otherProps.defaultValue;
    }
    return (
      <label>
        <input className={classNames(this.getInputClassName(), className)} ref={getRef} {...otherProps} />
      </label>
    );
  }
}

export default Input;
