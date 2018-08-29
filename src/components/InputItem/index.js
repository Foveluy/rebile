import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: ${({size}) => {
    if (size === 'large') return '40px';
    if (size === 'small') return '24px';
    return '32px';
  }};
  margin: 0;
  padding: 4px 10px;
  box-sizing: border-box;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: ${({disabled}) => (disabled === true ? 'not-allowed' : '')};
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background: #fff;
  transition: all 0.3s;

  &::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  &:focus,
  &:hover {
    border-color: #108ee9;
    border-right-width: 1px !important;
  }

  &:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

class InputItem extends React.Component {
  static defaultProps = {
    size: 'middle',
    disabled: false,
  };

  fixValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

  render() {
    const {className, ...otherProps} = this.props;
    if ('value' in this.props) {
      otherProps.value = this.fixValue(otherProps.value);
      delete otherProps.defaultValue;
    }
    return (
      <label>
        <Input className={className} {...otherProps} />
      </label>
    );
  }
}

InputItem.propTypes = {
  // 自动获取焦点
  autoFocus: propTypes.bool,
  // 输入框控件大小
  size: propTypes.oneOf(['small', 'middle', 'large']),
  // 是否禁用input
  disabled: propTypes.bool,
  // input的样式
  style: propTypes.object,
  // 输入框内容
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  // 输入框默认内容
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
  // 输入框的提示内容
  placeholder: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

export default InputItem;
