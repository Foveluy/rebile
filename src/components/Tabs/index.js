import React from 'react';
import './index.css';
import SwipeableViews from 'react-swipeable-views'; /** https://react-swipeable-views.com/api/api/ */
import propTypes from 'prop-types';

// const win = window;
const UnderLineBar = ({
  leftDistance,
  tintColor,
  direction,
  animation,
  tabsNumber,
}) => {
  return (
    <div
      className={`rb-tab-underline ${animation ? direction : ''}`}
      style={{
        left: `${leftDistance}%`,
        right: `${(100 / tabsNumber) * (tabsNumber - 1) - leftDistance}%`,
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
    tabsNumber: 3,
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
    const {tabsNumber} = this.props;

    const itemWith = 100 / tabsNumber;
    // controlling the header move around
    let translate = `translateX(${
      currentPage > 1 ? -itemWith * (currentPage - 1) : 0
    }%)`;
    // when reach the last one
    // do not move the header

    // 因为始终要现实 tabsNumber 个，因此这里参数是 tabsNumber
    const i = tabsNumber - tabs.length + currentPage;

    translate =
      currentPage + (tabsNumber - 2) >= tabs.length
        ? `translateX(${-itemWith * (currentPage - i)}%)`
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
                  minWidth: `${100 / tabsNumber}%`,
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
            tabsNumber={tabsNumber}
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
  // tab 组件的数据源
  tabs: propTypes.array,
  // 初始页面的 index, 从 0 开始
  initialPage: propTypes.number,
  // tab 的颜色
  tintColor: propTypes.string,
  // 当 tab 被点击时触发
  onTabPress: propTypes.func,
  // 当 tab 切换时触发
  onChange: propTypes.func,
  // 切换是否有动画
  animation: propTypes.bool,
  // 能否手指滑动切换
  swipeable: propTypes.bool,
  // tabs 在屏幕中显示的个数
  tabsNumber: propTypes.number,
};

export default Tab;
