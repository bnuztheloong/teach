import  { Component } from "react";
import { View } from "@tarojs/components";
import { AtNoticebar, AtAvatar, AtButton } from "taro-ui";
import "./index.scss";

class Index extends Component {
  render() {
    return (
      <>
        <AtNoticebar icon='volume-plus' marquee>
          杀马特团长嗷!，你来沈阳，指定没你好果子吃！小亮，给他整个活！草，走，忽略！ጿ
          ኈ ቼ ዽ ጿ
        </AtNoticebar>
        <View className='mid'>
          <AtAvatar
            circle
            size='large'
            image='https://mmbiz.qpic.cn/mmbiz_jpg/SstmToR9mTCLK1e2iae7lhZMUa4DoT3rfLNZqic4IGHFtAjLwicSLJEuIkEpNZQ95MqiaLDtpRG4En31lI6ia0ibrgIg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1'
          ></AtAvatar>
        </View>
        <View>
          <AtButton type='primary' size='small'>
            退出登录
          </AtButton>
        </View>
      </>
    );
  }
}

export default Index;
