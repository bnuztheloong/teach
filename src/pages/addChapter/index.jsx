// pages/addChapter/index.jsx
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtInput, AtButton } from "taro-ui";
import "./index.scss";

class addChapter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      title: "",
      video: ""
    };
  }

  handleSave() {
    // 在此处编写保存课程章节的逻辑
  }

  render() {
    const { title, video } = this.state;
    return (
      <View className="add-chapter">
        <Text>章节名称：</Text>
        <AtInput
          name="title"
          value={title}
          onChange={value => this.setState({ title: value })}
        />
        <Text>课程视频：</Text>
        <AtInput
          name="video"
          value={video}
          onChange={value => this.setState({ video: value })}
        />
        <AtButton type="primary" onClick={this.handleSave.bind(this)}>
          保存
        </AtButton>
      </View>
    );
  }
}

export default addChapter;
