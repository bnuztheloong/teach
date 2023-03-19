import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

class GenerateActivationCode extends Component {
  constructor() {
    super(...arguments);
    const storedCode = Taro.getStorageSync("activationCode");
    this.state = {
      activationCode: storedCode ? storedCode : this.generateRandomCode()
    };
  }

  generateRandomCode() {
    return Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
  }

  saveCode() {
    const { activationCode } = this.state;
    Taro.setStorageSync("activationCode", activationCode);
  }

  handleCopy() {
    const { activationCode } = this.state;
    Taro.setClipboardData({
      data: activationCode,
      success: () => {
        Taro.showToast({ title: "复制成功", icon: "success" });
      }
    });
  }

  render() {
    const { activationCode } = this.state;
    return (
      <View className="generate-activation-code">
        <Text style={{ textAlign: "center", display: "block" }}>激活码</Text>
        <View className="activation-code-container">
          <Text>{activationCode}</Text>
        </View>
        <AtButton type="secondary" onClick={() => this.handleCopy()}>
          复制
        </AtButton>
        <AtButton
          type="primary"
          onClick={() =>
            this.setState({ activationCode: this.generateRandomCode() })
          }
        >
          生成新的激活码
        </AtButton>
        <View className="bottom">
          <AtButton type="secondary" onClick={() => this.saveCode()}>
            保存
          </AtButton>
        </View>
      </View>
    );
  }
}

export default GenerateActivationCode;
