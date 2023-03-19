import { Component } from "react";
import { AtTextarea } from "taro-ui";
import "./textarea.scss";
class Textarea extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ""
    };
  }
  handleChange(value) {
    this.setState({
      value
    });
  }
  render() {
    return (
      <AtTextarea
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        maxLength={200}
        // placeholder="示例：《xxx》课程由XXX老师主讲..."
        placeholder={this.props.intro1}
      />
    );
  }
}

export default Textarea;
