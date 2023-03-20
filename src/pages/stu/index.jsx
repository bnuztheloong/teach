import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtInput, AtButton, AtImagePicker } from "taro-ui";
import studentAvatar from "../../images/student-avatar.png";
import "./index.scss";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      avatar: [
        {
          url: studentAvatar
        }
      ],
      name: "",
      parent: "",
      phone: "",
      className: ""
    };
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value });
    return value;
  };

  onImageChange = files => {
    this.setState({ avatar: files });
  };

  render() {
    const { avatar, name, parent, phone, className } = this.state;
    return (
      <View>
        <View className="avatar-container">
          <AtImagePicker
            mode="aspectFill"
            files={avatar}
            onChange={this.onImageChange}
            showAddBtn={avatar.length === 0}
            length={1}
            count={1}
          />
        </View>
        <View>
          <AtInput
            name="name"
            title="学生姓名"
            type="text"
            placeholder="输入学生姓名"
            value={name}
            onChange={value => this.handleChange("name", value)}
          />
          <AtInput
            name="parent"
            title="学生家长"
            type="text"
            placeholder="输入学生家长姓名"
            value={parent}
            onChange={value => this.handleChange("parent", value)}
          />
          <AtInput
            name="phone"
            title="联系电话"
            type="text"
            placeholder="输入联系电话"
            value={phone}
            onChange={value => this.handleChange("phone", value)}
          />
          <AtInput
            name="className"
            title="班级"
            type="text"
            placeholder="输入班级名称"
            value={className}
            onChange={value => this.handleChange("className", value)}
          />
        </View>
        <View className="save-button">
          <AtButton type="primary">保存</AtButton>
        </View>
      </View>
    );
  }
}

export default Index;
