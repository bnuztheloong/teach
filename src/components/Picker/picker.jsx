import { Component } from "react";
import { View, Text, Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./picker.scss";
class AtPicker extends Component {
  state = {
    selector: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    selectorChecked: "1"
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };
  render() {
    return (
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
                    title="年级"
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default AtPicker;
