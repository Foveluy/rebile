import React from 'react';
import './index.css';
import SwipeableViews from 'react-swipeable-views'; /** https://react-swipeable-views.com/api/api/ */
import propTypes from 'prop-types';

// const win = window;

const UnderLineBar = ({leftDistance, tintColor, direction, animation}) => {
  return (
    <div
      className={`rb-tab-underline ${animation ? direction : ''}`}
      style={{
        left: `${leftDistance}%`,
        right: `${(100 / 3) * 2 - leftDistance}%`,
        borderColor: tintColor,
        top: 42.5,
      }}
    />
  );
};

/**
 * 用于页面内导航
 */
class Tab extends React.Component {
  state = {
    currentPage: 0,
    contentWidth: 375,
    direction: '',
  };

  static defaultProps = {
    tabs: [],
    initialPage: 0,
    tintColor: '#FF9900',
    onTabPress: undefined,
    onChange: undefined,
    animation: true,
    swipeable: false,
  };

  componentDidMount() {
    this.setState({
      currentPage: this.props.initialPage,
      contentWidth: this.contentContainer.getBoundingClientRect().width,
    });
  }
  handleHeaderTouch = (e, idx) => {
    // tab press callback
    this.props.onTabPress && this.props.onTabPress(e, this.props.tabs[idx]);

    this.setState(
      {
        currentPage: idx,
        direction: this.state.currentPage > idx ? 'left' : 'right',
      },
      () => {
        // tab change callback
        this.props.onChange && this.props.onChange(e, this.props.tabs[idx]);
      }
    );
  };

  renderHeader = ({currentPage, tabs}) => {
    const itemWith = 33.3333;
    // controlling the header move around
    let translate = `translateX(${
      currentPage > 1 ? -itemWith * (currentPage - 1) : 0
    }%)`;
    // when reach the last one
    // do not move the header
    translate =
      currentPage + 1 === tabs.length
        ? `translateX(${-itemWith * (currentPage - 2)}%)`
        : translate;
    return (
      <div className="rb-tab-header-wrapper">
        <div
          className="rb-tab-header-container"
          style={{
            transform: translate,
            transition: this.isAnimation(),
          }}>
          {tabs.map((tab, idx) => {
            // when is active
            // change className for change color
            const active = idx === currentPage ? 'rb-tab-active' : '';
            return (
              <div
                style={{
                  color: active === 'rb-tab-active' ? this.props.tintColor : '',
                }}
                onTouchEnd={e => this.handleHeaderTouch(e, idx)}
                onClick={e => this.handleHeaderTouch(e, idx)}
                className={`rb-tab-item ${active}`}
                key={idx}>
                {tab.title}
              </div>
            );
          })}
          <UnderLineBar
            direction={this.state.direction}
            tintColor={this.props.tintColor}
            leftDistance={itemWith * currentPage}
            animation={this.props.animation}
          />
        </div>
        <div className="rb-line" />
      </div>
    );
  };

  isAnimation = () => {
    return this.props.animation ? 'all 0.3s' : '';
  };

  handleSwipeChangeIndex = (index, indexLatest) => {
    this.setState({
      currentPage: index,
      direction: index < indexLatest ? 'left' : 'right',
    });
  };

  renderContent = ({currentPage, contentWidth, children}) => {
    const Child = () =>
      children.map((child, idx) => {
        return (
          <div style={{minWidth: contentWidth}} key={idx}>
            {child}
          </div>
        );
      });

    if (this.props.swipeable) {
      return (
        <div ref={node => (this.contentContainer = node)}>
          <SwipeableViews
            enableMouseEvents
            resistance
            onChangeIndex={this.handleSwipeChangeIndex}
            index={currentPage}>
            {Child()}
          </SwipeableViews>
        </div>
      );
    } else {
      return (
        <div className="rb-tab-content-wrap">
          <div
            ref={node => (this.contentContainer = node)}
            className="rb-tab-content-container"
            style={{
              transform: `translateX(-${contentWidth * currentPage}px)`,
              transition: this.isAnimation(),
            }}>
            <Child />
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="rb-tab-container">
        <this.renderHeader {...this.props} {...this.state} />
        <this.renderContent {...this.props} {...this.state} />
      </div>
    );
  }
}

Tab.propTypes = {
  tabs: propTypes.array,
  initialPage: propTypes.number,
  tintColor: propTypes.string,
  onTabPress: propTypes.func,
  onChange: propTypes.func,
  animation: propTypes.bool,
  swipeable: propTypes.bool,
};

export default Tab;
