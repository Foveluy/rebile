import React from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';
import {Branch} from '../../utils/branch';

const Container = styled.div`
  overflow: hidden;
`;

/**
 * 下拉菜单
 */
class Dropdown extends React.Component {
  static defaultProps = {
    open: false,
    height: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      _height: props.open ? props.height : 0,
    };
  }

  componentDidMount() {
    this.setState({
      _height: this.props.height,
    });
  }

  render() {
    const {open, style} = this.props;
    const {_height} = this.state;

    const openedHeight = Branch(open, _height, 0);
    const defaultHeight = Branch(open, 0, _height);

    return (
      <div className="rb-dropdown-wrapper">
        <Motion
          defaultStyle={{h: defaultHeight}}
          style={{h: spring(openedHeight, {stiffness: 170, damping: 20})}}>
          {value => (
            <Container style={{height: value.h, ...style}}>123123</Container>
          )}
        </Motion>
      </div>
    );
  }
}

export default Dropdown;
