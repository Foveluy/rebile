import React from 'react';
import {Motion, spring} from 'react-motion';
import propTypes from 'prop-types';

/**
 * Drawer 组件，使用与侧边栏导航，选择
 * 底层由 `react-motion` 提供
 */
class Drawer extends React.Component {
  static defaultProps = {
    width: 400,
  };

  render() {
    return (
      <div className="rb-drawer">
        <Motion
          defaultStyle={{x: 0}}
          style={{x: spring(this.props.width, {stiffness: 120, damping: 22})}}>
          {value => (
            <div
              style={{
                position: 'fixed',
                left: -this.props.width,
                width: this.props.width,
                height: '100%',
                transform: `translate3d(${value.x}px, 0, 0)`,
                backgroundColor: '#999',
                zIndex: 1000000,
              }}>
              {value.x}
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

Drawer.propTypes = {
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

export default Drawer;
