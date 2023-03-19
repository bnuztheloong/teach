(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/newclass/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/newclass/index.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/newclass/index.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/newclass/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CheckBox_checkbox_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CheckBox/checkbox.jsx */ "./src/components/CheckBox/checkbox.jsx");
/* harmony import */ var _components_Picker_picker_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Picker/picker.jsx */ "./src/components/Picker/picker.jsx");
/* harmony import */ var _components_Textarea_textarea_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Textarea/textarea.jsx */ "./src/components/Textarea/textarea.jsx");
/* harmony import */ var _components_InputNumber_inputnumber_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/InputNumber/inputnumber.jsx */ "./src/components/InputNumber/inputnumber.jsx");
/* harmony import */ var _components_ImagePicker_imagepicker_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ImagePicker/imagepicker.jsx */ "./src/components/ImagePicker/imagepicker.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);





 //import Taro, { Component } from '@tarojs/taro'














var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    _this = _super.apply(this, arguments);

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChange", function (e) {
      _this.setState({
        selectorChecked: _this.state.selector[e.detail.value]
      });
    });

    _this.state = {
      value: "",
      selector: ["收费", "免费"],
      selectorChecked: "收费"
    };
    return _this;
  }

  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      }); // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtNoticebar */ "k"], {
          icon: "volume-plus",
          marquee: true,
          children: "\u6740\u9A6C\u7279\u56E2\u957F\u55F7!\uFF0C\u4F60\u6765\u6C88\u9633\uFF0C\u6307\u5B9A\u6CA1\u4F60\u597D\u679C\u5B50\u5403\uFF01\u5C0F\u4EAE\uFF0C\u7ED9\u4ED6\u6574\u4E2A\u6D3B\uFF01\u8349\uFF0C\u8D70\uFF0C\u5FFD\u7565\uFF01\u133F \u1288 \u127C \u12FD \u133F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtInput */ "f"], {
            name: "value",
            title: "\u8BFE\u7A0B\u540D\u79F0",
            type: "text",
            placeholder: "\u5728\u8FD9\u91CC\u8F93\u5165\u8BFE\u7A0B\u7684\u540D\u79F0",
            value: this.state.value,
            onChange: this.handleChange.bind(this)
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            className: "page-body",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
              className: "page-section",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Picker */ "i"], {
                  mode: "selector",
                  range: this.state.selector,
                  onChange: this.onChange,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtList */ "h"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtListItem */ "i"], {
                      title: "\u662F\u5426\u6536\u8D39",
                      extraText: this.state.selectorChecked
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "o"], {
              children: "\u8BFE\u7A0B\u6807\u7B7E"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_CheckBox_checkbox_jsx__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {})
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_Picker_picker_jsx__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "o"], {
              children: "\u8BFE\u7A0B\u4ECB\u7ECD"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_Textarea_textarea_jsx__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
            intro1: "\u793A\u4F8B\uFF1A\u300Axxx\u300B\u8BFE\u7A0B\u7531XXX\u8001\u5E08\u4E3B\u8BB2..."
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "o"], {
              children: "\u8BFE\u65F6"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_InputNumber_inputnumber_jsx__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "o"], {
              children: "\u8BFE\u7A0B\u5BB9\u91CF"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_InputNumber_inputnumber_jsx__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: ["\u8BFE\u7A0B\u5C01\u9762", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_ImagePicker_imagepicker_jsx__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
          children: ["\u8BFE\u7A0B\u4ECB\u7ECD\u89C6\u9891", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_ImagePicker_imagepicker_jsx__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtButton */ "b"], {
          type: "primary",
          children: "\u4FDD\u5B58"
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/newclass/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/newclass/index.jsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/newclass/index.jsx");


var config = {"navigationBarTitleText":"新建课程"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/newclass/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/newclass/index.scss":
/*!***************************************!*\
  !*** ./src/pages/newclass/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/newclass/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map