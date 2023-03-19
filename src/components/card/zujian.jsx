import { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtMessage, AtFloatLayout } from "taro-ui";
import Taro from "@tarojs/taro";

import "./zujian.scss";

function Zujian({ huan, title, onDelete }) {
  const [state, setState] = useState(false);
  const [num, setNum] = useState(1);
  let dates = [
    { id: 1, ccc: "编辑信息编辑信息编辑信息" },
    { id: 2, ccc: "生成激活码生成激活码生成激活码生成激活码" }
  ];

  const handleEditInfo = () => {
    Taro.navigateTo({
      url: "../../pages/editCourse/index"
    });
  };

  return (
    <>
      <AtMessage />
      <View className="index">
        <View className="at-row">
          <View className="at-row at-row__align--start">
            <View className="at-col" style="margin: 10px;">
              <Image
                style="borderRadius: 8px; width: 180px;height: 100px;background: #fff;"
                src={huan}
              />
            </View>
            <View className="at-col" style="marginTop: 10px;">
              <Text>{title}</Text>
            </View>
          </View>
        </View>
        <View className="at-row" style="marginBottom: 10px;">
          <AtButton
            type="primary"
            size="small"
            className="at-col at-col-3 at-col__offset-1"
            onClick={handleEditInfo}
          >
            编辑信息
          </AtButton>
          <AtButton
            type="primary"
            size="small"
            className="at-col at-col-3"
            onClick={() =>
              Taro.navigateTo({ url: "../../pages/editChapter/index" })
            }
          >
            编辑章节
          </AtButton>
          <AtButton
            type="primary"
            size="small"
            className="at-col at-col-3"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/generateActivationCode/index"
              });
            }}
          >
            生成激活码
          </AtButton>
          <AtButton
            type="secondary"
            size="small"
            className="at-col at-col-1"
            onClick={onDelete}
          >
            删除
          </AtButton>
        </View>
      </View>
      <View>
        <AtFloatLayout
          isOpened={state}
          onClose={() => {
            setState(!state);
            setNum(1);
          }}
          title="这是个标题"
        >
          {dates.find(item => item.id === num).ccc}
        </AtFloatLayout>
      </View>
    </>
  );
}
export default Zujian;
