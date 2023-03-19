//import Taro, { Component } from '@tarojs/taro'
import { Component } from "react";
import { View, Picker, Text } from "@tarojs/components";
import { AtNoticebar, AtInput, AtList, AtListItem, AtCheckbox,AtButton } from "taro-ui";
import "./index.scss";
import CheckBox from "../../components/CheckBox/checkbox.jsx";
import AtPicker from "../../components/Picker/picker.jsx";
import Textarea from "../../components/Textarea/textarea.jsx";
import InputNumber from "../../components/InputNumber/inputnumber.jsx";
import ImagePicker from "../../components/ImagePicker/imagepicker.jsx";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      selector: ["收费", "免费"],
      selectorChecked: "收费"
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  render() {
    return (
      <>
        <AtNoticebar icon="volume-plus" marquee>
          杀马特团长嗷!，你来沈阳，指定没你好果子吃！小亮，给他整个活！草，走，忽略！ጿ
          ኈ ቼ ዽ ጿ
        </AtNoticebar>
        <View>
          <AtInput
            name="value"
            title="课程名称"
            type="text"
            placeholder="在这里输入课程的名称"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </View>
        <View className="container">
          <View className="page-body">
            <View className="page-section">
              <View>
                <Picker
                  mode="selector"
                  range={this.state.selector}
                  onChange={this.onChange}
                >
                  <AtList>
                    <AtListItem
                      title="是否收费"
                      extraText={this.state.selectorChecked}
                    />
                  </AtList>
                </Picker>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text>课程标签</Text>
          </View>
          <View>
            <CheckBox />
          </View>
        </View>
        <View>
          <AtPicker />
        </View>
        <View>
          <View>
            <Text>课程介绍</Text>
          </View>
          <Textarea intro1="示例：《xxx》课程由XXX老师主讲..." />
        </View>
        <View>
          <View>
            <Text>课时</Text>
          </View>
          <InputNumber />
        </View>
        <View>
          <View>
            <Text>课程容量</Text>
          </View>
          <InputNumber />
        </View>
        <View>
          课程封面<ImagePicker/>
        </View>
        <View>
          课程介绍视频<ImagePicker/>
        </View>
        <AtButton type='primary'>保存</AtButton>
      </>
    );
  }
}

export default Index;
