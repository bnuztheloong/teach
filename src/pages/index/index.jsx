import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtNoticebar, AtFloatLayout } from "taro-ui";

import Zujian from "../../components/card/zujian.jsx";
import "./index.scss";

import ganshou from "../../images/ganshou.png";
import tansuo from "../../images/WechatIMG261.png";
import diqiu from "../../images/earth-sci.png";

export default class Index extends Component {
  state = {
    courses: [
      { id: 1, image: ganshou, title: "感受空气" },
      { id: 2, image: tansuo, title: "探索太空" },
      { id: 3, image: diqiu, title: "地球科学" },
    ],
  };

  goToNewClass() {
    Taro.navigateTo({
      url: "/pages/newclass/index",
    });
  }

  handleCloseFloatLayout() {
    // 这里可以处理关闭浮动布局时的逻辑
  }

  handleDeleteCourse(id) {
    this.setState((prevState) => ({
      courses: prevState.courses.filter((course) => course.id !== id),
    }));
  }

  render() {
    const { courses } = this.state;

    return (
      <>
        <AtNoticebar icon="volume-plus" marquee>
          杀马特团长嗷，你来沈阳，指定没你好果子吃！小亮，给他整个活！草，走，忽略！ጿ
          ኈ ቼ ዽ ጿ
        </AtNoticebar>
        <View>
          <AtButton onClick={this.goToNewClass.bind(this)} type="primary">
            新建课程
          </AtButton>
          {courses.map((course) => (
            <Zujian
              key={course.id}
              huan={course.image}
              title={course.title}
              onDelete={() => this.handleDeleteCourse(course.id)}
            />
          ))}
        </View>
        <View>
          <AtFloatLayout
            title="这是个标题"
            onClose={this.handleCloseFloatLayout.bind(this)}
          >
            这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写
          </AtFloatLayout>
        </View>
      </>
    );
  }
}
