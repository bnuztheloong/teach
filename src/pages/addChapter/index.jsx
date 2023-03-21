import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtInput, AtButton } from "taro-ui";
import VideoPicker from "../../components/VideoPicker/index.jsx";

import "./index.scss";

const AddChapter = () => {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");

  const handleSave = () => {
    // 在此处编写保存课程章节的逻辑
  };

  return (
    <View className="add-chapter">
      <Text>章节名称：</Text>
      <AtInput name="title" value={title} onChange={value => setTitle(value)} />
      <Text>课程视频：</Text>
      <VideoPicker video={video} onVideoChange={setVideo} />
      <AtButton type="primary" onClick={handleSave}>
        保存
      </AtButton>
    </View>
  );
};

export default AddChapter;
