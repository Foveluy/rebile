import React from 'react';
import ReactDOM from 'react-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import Slider from '..';

configure({adapter: new Adapter()});

describe('Slider component test', () => {
  it('input `props` testing ', () => {
    const wrapper = mount(
      <Slider max={100} min={0} step={10} defaultValue={[10, 20]} />
    );
    expect(wrapper.props().max).to.equal(100);
    expect(wrapper.props().min).to.equal(0);
    expect(wrapper.props().step).to.equal(10);
  });
});
