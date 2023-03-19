// pages/editChapter/index.jsx
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtInputNumber, AtButton } from "taro-ui";
import "./index.scss";

class EditChapter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hours: 0,
      capacity: 0
    };
  }

  handleSave() {
    // 在此处编写保存章节信息的逻辑
  }

  render() {
    const { hours, capacity } = this.state;
    return (
      <View className="edit-chapter">
        <View>
          <View>
            <Text>课时</Text>
          </View>
          <View>
            <AtInputNumber
              type="number"
              min={0}
              max={999}
              step={1}
              value={hours}
              onChange={value => this.setState({ hours: value })}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>课程容量</Text>
          </View>
          <View>
            <AtInputNumber
              type="number"
              min={0}
              max={999}
              step={1}
              value={capacity}
              onChange={value => this.setState({ capacity: value })}
            />
          </View>
        </View>
        <AtButton type="primary" onClick={this.handleSave.bind(this)}>
          保存
        </AtButton>
      </View>
    );
  }
}

export default EditChapter;
