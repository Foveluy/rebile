import React from 'react';
import Input from '.';

/**
 * 最简单用法
 */
const Normal = () => (
  <Input
    style={{width: '20%', margin: '10px'}}
    className="test-class"
    placeholder="basic usage"
  />
);

/**
 * 三种大小
 */
const AllSize = () => (
  <div>
    <Input
      style={{width: '20%', margin: '10px'}}
      size="small"
      placeholder="small size"
    />
    <br />
    <Input
      style={{width: '20%', margin: '10px'}}
      size="middle"
      placeholder="middle size"
    />
    <br />
    <Input
      style={{width: '20%', margin: '10px'}}
      size="large"
      placeholder="large size"
    />
    <br />
  </div>
);

/**
 * 自动获取焦点
 */
const AutoFocus = () => (
  <Input
    style={{width: '20%', margin: '10px'}}
    placeholder="autoFocus"
    autoFocus
  />
);

/**
 * 禁用输入框
 */
const Disabled = () => (
  <Input
    style={{width: '20%', margin: '10px'}}
    disabled
    size="large"
    placeholder="disabled"
  />
);

const InputDemos = () => (
  <div>
    <Normal />
    <AllSize />
    <AutoFocus />
    <Disabled />
  </div>
);
export default InputDemos;
