import React from 'react';
import Input from '.';

class InputDemos extends React.Component {
  state = {value: ''};
  handleChange = e => {
    this.setState({value: e.target.value});
  };
  componentDidMount() {
    console.log(this.input);
  }
  render() {
    let {value} = this.state;
    return (
      <div style={{margin: 10}}>
        <Input
          getRef={input => (this.input = input)}
          style={{width: '50%'}}
          disabled={false}
          value={value}
          size="middle"
          className="test-class"
          placeholder="this is demo"
          defaultValue="basic usage"
          onClick={() => console.log('click')}
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          onChange={this.handleChange}
        />
        <Input
          getRef={input => (this.input = input)}
          style={{width: '60%', margin: '10px 0'}}
          disabled={true}
          size="large"
          className="test-class"
          placeholder="this is demo"
          defaultValue="basic usage"
        />
      </div>
    );
  }
}

export default InputDemos;
