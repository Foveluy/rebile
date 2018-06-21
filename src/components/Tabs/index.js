import React from 'react';
import './index.css';

// const win = window;

const UnderLineBar = ({ leftDistance, tintColor, direction }) => {
  return (
    <div
      className={`rb-tab-underline ${direction}`}
      style={{
        left: `${leftDistance}%`,
        right: `${(100 / 3) * 2 - leftDistance}%`,
        borderColor: tintColor,
        top: 42.5,
      }}
    />
  );
};

class Tab extends React.Component {
  state = {
    currentPage: 0,
    contentWidth: 375,
    direction: '',
  }

  static defaultProps = {
    tabs: [],
    initialPage: 0,
    tintColor: '#FF9900',
    onTabPress: undefined,
    onChange: undefined,
  }

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
  }

  renderHeader = (currentPage, tabs) => {
    const itemWith = 33.3333;
    // controlling the header move around
    let translate = `translateX(${currentPage > 1 ? -itemWith * (currentPage - 1) : 0}%)`;
    // when reach the last one
    // do not move the header
    translate = currentPage + 1 === tabs.length ? `translateX(${-itemWith * (currentPage - 2)}%)` : translate;
    return (
      <div className="rb-tab-header-wrapper">
        <div className="rb-tab-header-container" style={{ transform: translate, transition: 'all ease-in-out .3s' }}>
          {tabs.map((tab, idx) => {
            // when is active
            // change className for change color
            const active = idx === currentPage ? 'rb-tab-active' : '';
            return (
              <div
                style={{ color: active === 'rb-tab-active' ? this.props.tintColor : '' }}
                onTouchEnd={e => this.handleHeaderTouch(e, idx)}
                className={`rb-tab-item ${active}`}
                key={idx}
              >
                {tab.title}
              </div>
            );
          })}
          <UnderLineBar
            direction={this.state.direction}
            tintColor={this.props.tintColor}
            leftDistance={itemWith * currentPage}
          />
        </div>
        <div className="rb-line" />
      </div>
    );
  }

  renderContent = (currentPage, contentWidth) => {
    const { children } = this.props;
    return (
      <div className="rb-tab-content-wrap">
        <div
          ref={node => (this.contentContainer = node)}
          className="rb-tab-content-container"
          style={{ transform: `translateX(-${contentWidth * currentPage}px)` }}
        >
          {children.map((child, idx) => {
            return (
              <div style={{ minWidth: contentWidth }} key={idx}>
                {child}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { tabs } = this.props;
    const { currentPage, contentWidth } = this.state;

    return (
      <div className="rb-tab-container">
        {this.renderHeader(currentPage, tabs)}
        {this.renderContent(currentPage, contentWidth)}
      </div>
    );
  }
}

export default Tab;
