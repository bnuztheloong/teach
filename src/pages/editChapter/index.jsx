import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Video } from "@tarojs/components";
import { AtButton, AtCard } from "taro-ui";
import "./index.scss";

const EditChapter = () => {
  const [chapters, setChapters] = useState([
    {
      title: "章节1",
      video: "https://stem-src.oss-cn-shenzhen.aliyuncs.com/feelAir/kexue1.mp4"
    },
    { title: "章节2", video: "video2.mp4" }
  ]);

  const handleAddChapter = () => {
    Taro.navigateTo({
      url: "/pages/addChapter/index"
    });
  };

  const handleDeleteChapter = index => {
    setChapters(prevState => prevState.filter((_, i) => i !== index));
  };

  return (
    <>
      <View className="edit-chapter">
        <View className="add-button-container">
          <AtButton type="primary" onClick={handleAddChapter}>
            添加课程章节
          </AtButton>
        </View>

        {chapters.map((chapter, index) => (
          <View key={chapter.title} className="chapter-container">
            <AtCard
              className="chapter-card"
              title={`${index + 1}. ${chapter.title}`}
              isFull
            >
              <Video
                src={chapter.video}
                className="chapter-video"
                controls
                autoplay={false}
                fullscreen={true}
              />
            </AtCard>
            <AtButton
              type="secondary"
              className="delete-button"
              onClick={() => handleDeleteChapter(index)}
            >
              删除
            </AtButton>
          </View>
        ))}
      </View>
    </>
  );
};

export default EditChapter;
