import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtNoticebar, AtList, AtListItem } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: "张某能",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp201929678.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666964666&t=13c3ed03e0d284d20c253f66dd31558f"
        },
        {
          name: "陈某曦",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp162445614.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666964666&t=ebdaa4f190f0cbb3dceafaff0626813c"
        }
      ]
    };
  }

  goToStu() {
    Taro.navigateTo({
      url: "/pages/stu/index"
    });
  }
  goToAddStudent() {
    Taro.navigateTo({
      url: "/pages/addStudent/index",
      events: {
        addStudent: this.handleAddStudent
      }
    });
  }
  handleAddStudent = newStudent => {
    this.setState(prevState => ({
      students: [...prevState.students, newStudent]
    }));
  };
  handleDeleteStudent = index => {
    this.setState(prevState => ({
      students: prevState.students.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <>
        <AtNoticebar icon="volume-plus" marquee>
          杀马特团长嗷，你来沈阳，指定没你好果子吃！小亮，给他整个活！草，走，忽略！ጿ
          ኈ ቼ ዽ ጿ
        </AtNoticebar>
        <View className="button-container">
          <AtButton
            type="secondary"
            size="small"
            onClick={this.goToAddStudent.bind(this)}
          >
            添加学生
          </AtButton>
        </View>
        <View>
          <AtList>
            {this.state.students.map((student, index) => (
              <View key={index} className="student-item">
                <AtListItem
                  title={student.name}
                  onClick={this.goToStu.bind(this)}
                  thumb={student.imgUrl}
                />
                <AtButton
                  type="danger"
                  size="small"
                  className="delete-button red-button"
                  onClick={e => {
                    e.stopPropagation();
                    this.handleDeleteStudent(index);
                  }}
                >
                  删除
                </AtButton>
              </View>
            ))}
          </AtList>
        </View>
      </>
    );
  }
}
