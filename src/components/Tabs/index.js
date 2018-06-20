import React from 'react';
import './index.css';

class Tab extends React.Component {
  state = {
    currentPage: 0,
  }

  static defaultProps = {
    tabs: [],
    initialPage: 0,
  }
  componentDidMount() {
    this.setState({
      currentPage: this.props.initialPage,
    });
  }
  handleHeaderTouch = (e, idx) => {
    this.setState({
      currentPage: idx,
    });
  }

  render() {
    const { children, tabs } = this.props;
    const { currentPage } = this.state;

    // controlling the header move around
    let translate = `translateX(${currentPage > 1 ? -33.3333 * (currentPage - 1) : 0}%)`;
    // when reach the last one
    // do not move the header
    translate = currentPage + 1 === tabs.length ? `translateX(${-33.3333 * (currentPage - 2)}%)` : translate;

    return (
      <div className="rb-tab-container">
        <div className="rb-tab-header-wrapper">
          <div className="rb-tab-header-container" style={{ transform: translate, transition: 'all ease-in-out .3s' }}>
            {tabs.map((tab, idx) => {
              const active = idx === currentPage ? 'rb-tab-active' : '';
              return (
                <div onTouchEnd={e => this.handleHeaderTouch(e, idx)} className={`rb-tab-item ${active}`} key={idx}>
                  {tab.title}
                </div>
              );
            })}
            <div
              className="rb-tab-underline"
              style={{ left: `${33.3333 * currentPage}%`, transition: 'all ease-in-out .3s' }}
            />
          </div>
        </div>
        {children[currentPage]}
      </div>
    );
  }
}

export default Tab;
