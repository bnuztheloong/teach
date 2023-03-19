import { Component } from "react";
import { View, Picker, Text } from "@tarojs/components";
import { AtInput, AtList, AtListItem, AtButton } from "taro-ui";
import "./index.scss";
import CheckBox from "../../components/CheckBox/checkbox.jsx";
import Textarea from "../../components/Textarea/textarea.jsx";
import ImagePicker from "../../components/ImagePicker/imagepicker.jsx";

class EditCourse extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      courseName: "示例课程名称",
      selector: ["收费", "免费"],
      selectorChecked: "收费"
    };
  }

  handleChange(value) {
    this.setState({
      courseName: value
    });
    return value;
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  handleSave() {
    // 在此处编写保存课程信息的逻辑
  }

  render() {
    const { courseName, selectorChecked } = this.state;
    return (
      <View className="edit-course">
        <Text>课程名称</Text>
        <AtInput
          name="courseName"
          type="text"
          placeholder="在此输入课程名称"
          value={courseName}
          onChange={this.handleChange.bind(this)}
        />
        <Picker
          mode="selector"
          range={this.state.selector}
          onChange={this.onChange}
        >
          <AtList>
            <AtListItem title="是否收费" extraText={selectorChecked} />
          </AtList>
        </Picker>
        <Text>课程标签</Text>
        <CheckBox />
        <Text>课程介绍</Text>
        <Textarea intro1="示例：《xxx》课程由XXX老师主讲..." />
        <Text>课程封面</Text>
        <ImagePicker />
        <Text>课程介绍视频</Text>
        <ImagePicker />
        <AtButton type="primary" onClick={this.handleSave.bind(this)}>
          保存
        </AtButton>
      </View>
    );
  }
}

export default EditCourse;
