import { Component } from "react";
import { View, Picker, Text } from "@tarojs/components";
import { AtNoticebar, AtInput, AtList, AtListItem, AtCheckbox } from "taro-ui";
import "./checkbox.scss";

class CheckBox extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      //   checkedList: ["list1"]
    };
    this.checkboxOption = [
      {
        value: "list1",
        label: "自然科学"
      },
      {
        value: "list2",
        label: "社会科学"
      },
      {
        value: "list3",
        label: "人文科学"
      },
      {
        value: "list4",
        label: "生命科学"
      },
      {
        value: "list5",
        label: "其他"
      }
    ];
  }
  handleChange(value) {
    this.setState({
      checkedList: value
    });
  }
  render() {
    return (
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}
export default CheckBox;
