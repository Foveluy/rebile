import React from 'react';
import ReactDOM from 'react-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import Button from '..';

configure({adapter: new Adapter()});

describe('Button component test', () => {
  it('button `style` testing ', () => {
    const wrapper = mount(<Button />);
    const cov = wrapper.find('.rb-button');
    const style = cov.getDOMNode().style;
  });
});
