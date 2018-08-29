import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background: #eee;
  border-radius: 3px;
  cursor: pointer;
`;

const SliderBar = styled.div`
  position: absolute;
  height: 4px;
  cursor: pointer;
  z-index: 2;
  border-radius: 3px;
  background: #108ee9;
`;

const SliderThumb = styled.div`
  position: absolute;
  top: -4px;
  height: 12px;
  width: 12px;
  background: #fff;
  border-radius: 50%;
  z-index: 99;
  cursor: pointer;
  box-sizing: border-box;
  border: ${({color}) => `2px solid ${color}`};
  transform: translateX(-50%);
  &:hover {
    transition: scale 0.2s linear;
    transform: scale(1.2) translateX(-50%);
  }
`;

const IntervalSign = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ccc;
  left: ${({left}) => left};
`;

const getBoundStyle = (el, key) => el.getBoundingClientRect()[key];

const on = (el, type, func) => el.addEventListener(type, func);

const off = (el, type, func) => el.removeEventListener(type, func);

class Slider extends React.Component {
  static defaultProps = {
    disabled: false,
    color: '#108ee9',
    interval: false,
    style: {width: '100%'},
  };

  static getDerivedStateFromProps({currValue}) {
    if (typeof currValue !== 'undefined') return {currValue};
    return null;
  }

  constructor(props) {
    super();
    this.state = {
      currValue: props.value || props.defaultValue,
      prevValue: props.value || props.defaultValue,
      startX: [0, 0],
      trackWidth: this.computeTrackWidth(props),
    };
  }

  onThumbDragStart = event => {
    const {startX, prevValue, currValue} = this.state;
    const index = event.target === this.maxThumb ? 1 : 0;
    startX[index] = this.getPageX(event);
    prevValue[index] = currValue[index];
    this.setState({startX, prevValue});

    on(window, 'touchmove', this.onThumbDrag);
    on(window, 'touchend', this.onThumbDragEnd);
    on(window, 'mousemove', this.onThumbDrag);
    on(window, 'mouseup', this.onThumbDragEnd);
  };

  onThumbDrag = event => {
    const val = this.getCurrentValue(event);
    const {onChange, disabled, value} = this.props;
    if (typeof value === 'undefined' && !disabled) {
      this.setState({currValue: val});
    }
    if (onChange && !disabled) {
      val[1] > val[0] ? onChange(val) : onChange([val[1], val[0]]);
    }
  };

  onThumbDragEnd = () => {
    off(window, 'touchmove', this.onThumbDrag);
    off(window, 'touchend', this.onThumbDragEnd);
    off(window, 'mousemove', this.onThumbDrag);
    off(window, 'mouseup', this.onThumbDragEnd);
  };

  getPageX = event => {
    return event.touches ? event.touches[0].pageX : event.pageX;
  };

  getCurrentValue = event => {
    const index = event.target === this.maxThumb ? 1 : 0;
    const {trackWidth, prevValue, startX, currValue} = this.state;
    const {max, min, step} = this.props;
    const limit = this.getPageX(event) - startX[index];
    let val =
      parseInt(limit / ((trackWidth / (max - min)) * step)) * step +
      prevValue[index];
    if (val > max) val = max;
    if (val < min) val = min;
    currValue[index] = val;
    return [...currValue];
  };

  computeTrackWidth = ({style}) => {
    const {width} = style;
    if (width.indexOf('px') !== -1) {
      return parseFloat(width.slice(0, -2));
    } else {
      return (parseFloat(width.slice(0, -1)) / 100) * window.innerWidth;
    }
  };

  handleSliderTrackClick = event => {
    const {target, currentTarget, pageX} = event;
    if (
      target === currentTarget ||
      target.className.indexOf('intervalsign') !== -1
    ) {
      const {currValue, prevValue, startX} = this.state;
      const left = getBoundStyle(this.sliderBar, 'left');
      const width = getBoundStyle(this.sliderBar, 'width');
      let target = null;
      if (pageX > left + width) {
        target = currValue[0] > currValue[1] ? this.minThumb : this.maxThumb;
        this.onThumbDrag({target, pageX});
      }
      if (pageX < left) {
        target = currValue[0] < currValue[1] ? this.minThumb : this.maxThumb;
        this.onThumbDrag({target, pageX});
      }
      if (target) {
        const index = target === this.maxThumb ? 1 : 0;
        startX[index] = this.getPageX(event);
        prevValue[index] = currValue[index];
      }
    }
  };

  componentDidMount() {
    this.setState({
      startX: [
        getBoundStyle(this.minThumb, 'left'),
        getBoundStyle(this.maxThumb, 'left'),
      ],
    });
  }

  render() {
    const {interval, ...otherProps} = this.props;
    const {currValue} = this.state;
    const valueRange = otherProps.max - otherProps.min;
    const minValue = Math.min(...currValue);

    return (
      <div
        style={{
          ...otherProps.style,
        }}>
        <SliderTrack onClick={this.handleSliderTrackClick}>
          <SliderBar
            style={{
              left: `${((minValue - otherProps.min) * 100) / valueRange}%`,
              width: `${(Math.abs(currValue[1] - currValue[0]) * 100) /
                valueRange}%`,
              background: otherProps.color,
            }}
            innerRef={ref => (this.sliderBar = ref)}
          />
          <SliderThumb
            color={otherProps.color}
            style={{
              left: `${((currValue[0] - otherProps.min) * 100) / valueRange}%`,
              zIndex: 98,
            }}
            innerRef={ref => (this.minThumb = ref)}
            onTouchStart={this.onThumbDragStart}
            onClick={this.onThumbDragStart}
          />
          <SliderThumb
            color={otherProps.color}
            style={{
              left: `${((currValue[1] - otherProps.min) * 100) / valueRange}%`,
            }}
            innerRef={ref => (this.maxThumb = ref)}
            onTouchStart={this.onThumbDragStart}
            onClick={this.onThumbDragStart}
          />
          {interval &&
            Array(9)
              .fill()
              .map((v, i) => (
                <IntervalSign
                  left={`${(i + 1) * 10}%`}
                  key={i}
                  className={'intervalsign'}
                />
              ))}
        </SliderTrack>
      </div>
    );
  }
}

Slider.propTypes = {
  // 组件的最大值
  max: propTypes.number.isRequired,
  // 组件的最小值
  min: propTypes.number.isRequired,
  // 组件值改变时的步长
  step: propTypes.number.isRequired,
  // 组件的值
  value: propTypes.array,
  // 组件slider的颜色
  color: propTypes.string,
  // 是否禁用，默认为false
  disabled: propTypes.bool,
  // 是否显示间隔标志
  interval: propTypes.bool,
  // 组件的默认值
  defaultValue: propTypes.array,
};

export default Slider;
