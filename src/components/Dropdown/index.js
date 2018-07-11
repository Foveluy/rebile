import React from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';
import {Branch} from '../../utils/branch';

const Container = styled.div`
  background-color: black;
  overflow: hidden;
`;

class Dropdown extends React.Component {
  static defaultProps = {
    open: false,
    height: 100,
  };

  render() {
    const {height, open} = this.props;

    const openedHeight = Branch(open, height, 0);
    const defaultHeight = Branch(open, 0, height);

    return (
      <div>
        <Motion
          defaultStyle={{h: defaultHeight}}
          style={{h: spring(openedHeight)}}>
          {value => <Container style={{height: value.h}}>123123</Container>}
        </Motion>
      </div>
    );
  }
}

export default Dropdown;
