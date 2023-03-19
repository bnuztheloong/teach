import { Component } from "react";
import { AtImagePicker } from 'taro-ui'
import "./imagepicker.scss";

class ImagePicker extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      files: [{
        url: 'https://i0.hdslb.com/bfs/new_dyn/7216f144fc1c218b467f0234a3beeed0300486.png@1036w.webp',
      },
      {
        url: 'https://i0.hdslb.com/bfs/new_dyn/82ef40712bf1bcf8a40b676c4532988f300486.png@1036w.webp',
      },
      {
        url: 'https://i0.hdslb.com/bfs/new_dyn/05c02f3e55b1f218329e2473d4496a9f300486.png@1036w.webp',
      }]
    }
  }
  onChange (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  render () {
    return (
      <AtImagePicker
        files={this.state.files}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
export default ImagePicker;