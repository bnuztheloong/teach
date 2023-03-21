(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/detail/index.jsx":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/detail/index.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/pages/detail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
















var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index(props) {
    var _this;

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    _this = _super.call(this, props);

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleAddStudent", function (newStudent) {
      _this.setState(function (prevState) {
        return {
          students: [].concat(Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prevState.students), [newStudent])
        };
      });
    });

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "handleDeleteStudent", function (index) {
      _this.setState(function (prevState) {
        return {
          students: prevState.students.filter(function (_, i) {
            return i !== index;
          })
        };
      });
    });

    _this.state = {
      students: [{
        name: "张某能",
        imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp201929678.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666964666&t=13c3ed03e0d284d20c253f66dd31558f"
      }, {
        name: "陈某曦",
        imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp162445614.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666964666&t=ebdaa4f190f0cbb3dceafaff0626813c"
      }]
    };
    return _this;
  }

  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "goToStu",
    value: function goToStu() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: "/pages/stu/index"
      });
    }
  }, {
    key: "goToAddStudent",
    value: function goToAddStudent() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
        url: "/pages/addStudent/index",
        events: {
          addStudent: this.handleAddStudent
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtNoticebar */ "m"], {
          icon: "volume-plus",
          marquee: true,
          children: "\u6740\u9A6C\u7279\u56E2\u957F\u55F7\uFF0C\u4F60\u6765\u6C88\u9633\uFF0C\u6307\u5B9A\u6CA1\u4F60\u597D\u679C\u5B50\u5403\uFF01\u5C0F\u4EAE\uFF0C\u7ED9\u4ED6\u6574\u4E2A\u6D3B\uFF01\u8349\uFF0C\u8D70\uFF0C\u5FFD\u7565\uFF01\u133F \u1288 \u127C \u12FD \u133F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "r"], {
          className: "button-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtButton */ "b"], {
            type: "secondary",
            size: "small",
            onClick: this.goToAddStudent.bind(this),
            children: "\u6DFB\u52A0\u5B66\u751F"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "r"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtList */ "j"], {
            children: this.state.students.map(function (student, index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "r"], {
                className: "student-item",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtListItem */ "k"], {
                  title: student.name,
                  onClick: _this2.goToStu.bind(_this2),
                  thumb: student.imgUrl
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtButton */ "b"], {
                  type: "danger",
                  size: "small",
                  className: "delete-button red-button",
                  onClick: function onClick(e) {
                    e.stopPropagation();

                    _this2.handleDeleteStudent(index);
                  },
                  children: "\u5220\u9664"
                })]
              }, index);
            })
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/pages/detail/index.jsx":
/*!************************************!*\
  !*** ./src/pages/detail/index.jsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/detail/index.jsx");


var config = {"navigationBarTitleText":"学生管理"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/detail/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/detail/index.scss":
/*!*************************************!*\
  !*** ./src/pages/detail/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/detail/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map