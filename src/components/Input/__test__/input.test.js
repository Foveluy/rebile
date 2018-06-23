import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Input from '../index';

configure({ adapter: new Adapter() });

describe('Input component test', () => {
  it('input `style` testing ', () => {
    const wrapper = mount(<Input />);
    const cov = wrapper.find('.rb-input');
    const style = cov.getDOMNode().style;
  });
});
