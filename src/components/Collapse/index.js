import React from 'react';
import './index.scss';
import {Motion, spring} from 'react-motion';
import propTypes from 'prop-types';

/**
 * 用于包裹在 Collapse 组件中的组件
 */
export class Panel extends React.Component {
  state = {
    open: false,
    boxHeight: 100,
  };
  static defaultProps = {
    header: () => 'panel-header',
  };

  handleClick = e => {
    this.setState({
      boxHeight: this.box.getBoundingClientRect().height,
    });
    this.props.onClick && this.props.onClick(e);
  };
  render() {
    const {boxHeight} = this.state;

    return (
      <div>
        <div className="rb-collapse-panel-header" onClick={this.handleClick}>
          {this.props.header(this.props.open)}
        </div>
        <Motion
          defaultStyle={{x: this.props.open ? 0 : boxHeight}}
          style={{
            x: spring(this.props.open ? boxHeight : 0, {
              stiffness: 120,
              damping: 17,
            }),
          }}>
          {value => (
            <div
              className="rb-collapse-panel-content"
              style={{height: `${value.x}px`}}>
              <div
                // why we have this is that
                // we have to have a box for reading the content height
                // in order to do this
                // we just simple wrap a `div` and get his `ref`
                className="rb-collapse-panel-box"
                ref={node => (this.box = node)}>
                {this.props.children}
              </div>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

/**
 * 折叠菜单，用于多条菜单的显示
 */
export class Collapse extends React.Component {
  state = {
    current: -1,
  };

  static defaultProps = {
    style: {},
  };

  handleClick = index => {
    // when click itself
    // we set `current` to default `-1`
    let i = index === this.state.current ? -1 : index;
    this.setState({
      current: i,
    });
  };

  render() {
    const {children} = this.props;
    const Chilren = children.length > 0 ? children : [children];

    return (
      <div style={this.props.style}>
        {Chilren.map((Child, index) => {
          return React.cloneElement(Child, {
            open: this.state.current === index ? true : false,
            onClick: () => this.handleClick(index),
          });
        })}
      </div>
    );
  }
}

Collapse.propTypes = {
  // 最外层的 `div` 组件的 style
  style: propTypes.object,
};
