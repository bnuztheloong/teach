import React from "react";
import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const VideoPicker = ({ video, onVideoChange }) => {
  const handleChooseVideo = async () => {
    try {
      const res = await Taro.chooseVideo();
      onVideoChange(res.tempFilePath);
    } catch (error) {
      console.error("选择视频失败:", error);
    }
  };

  return (
    <View className="video-picker" onClick={handleChooseVideo}>
      {video ? (
        <video src={video} className="preview-video" controls />
      ) : (
        <AtIcon value="add" size="30" />
      )}
    </View>
  );
};

export default VideoPicker;
