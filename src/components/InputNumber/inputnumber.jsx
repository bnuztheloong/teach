import { Component } from "react";
import { AtInputNumber } from "taro-ui";
import "./inputnumber.scss";
class InputNumber extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 1
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtInputNumber
        min={0}
        max={10}
        step={1}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default InputNumber;
