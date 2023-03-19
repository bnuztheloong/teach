export default {
  pages: [
    "pages/index/index",
    "pages/user/index",
    "pages/detail/index",
    "pages/newclass/index",
    "pages/stu/index",
    "pages/addStudent/index",
    "pages/editCourse/index",
    "pages/editChapter/index",
    "pages/generateActivationCode/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#FF0000",
    backgroundColor: "#fafafa",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./images/home.png",
        selectedIconPath: "./images/home-select.png",
        text: "课程管理"
      },
      {
        pagePath: "pages/detail/index",
        iconPath: "./images/cate.png",
        selectedIconPath: "./images/cate-select.png",
        text: "学生管理"
      },
      {
        pagePath: "pages/user/index",
        iconPath: "./images/my.png",
        selectedIconPath: "./images/my-select.png",
        text: "我的"
      }
    ]
  }
};
