//import Taro, { Component } from '@tarojs/taro'
import { Component } from "react";
import { View, Picker, Text } from "@tarojs/components";
import {
  AtNoticebar,
  AtInput,
  AtList,
  AtListItem,
  AtCheckbox,
  AtButton
} from "taro-ui";
import "./index.scss";
import CheckBox from "../../components/CheckBox/checkbox.jsx";
import AtPicker from "../../components/Picker/picker.jsx";
import Textarea from "../../components/Textarea/textarea.jsx";
import InputNumber from "../../components/InputNumber/inputnumber.jsx";
import ImagePicker from "../../components/ImagePicker/imagepicker.jsx";

class Index extends Component {
  render() {
    return <>这里是学生详情</>;
  }
}

export default Index;
