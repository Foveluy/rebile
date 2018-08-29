import React from 'react';
import ReactDOM from 'react-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import InputItem from '..';

configure({adapter: new Adapter()});

describe('InputItem component test', () => {
  it('input `size` testing ', () => {
    const wrapper = mount(<InputItem size="small" />);
    expect(wrapper.props().size).to.equal('small');
  });
});
