(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/generateActivationCode/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/generateActivationCode/index.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/generateActivationCode/index.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/pages/generateActivationCode/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var GenerateActivationCode = /*#__PURE__*/function (_Component) {
  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(GenerateActivationCode, _Component);

  var _super = Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GenerateActivationCode);

  function GenerateActivationCode() {
    var _this;

    Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GenerateActivationCode);

    _this = _super.apply(this, arguments);
    var storedCode = _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getStorageSync("activationCode");
    _this.state = {
      activationCode: storedCode ? storedCode : _this.generateRandomCode()
    };
    return _this;
  }

  Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GenerateActivationCode, [{
    key: "generateRandomCode",
    value: function generateRandomCode() {
      return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
  }, {
    key: "saveCode",
    value: function saveCode() {
      var activationCode = this.state.activationCode;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setStorageSync("activationCode", activationCode);
    }
  }, {
    key: "handleCopy",
    value: function handleCopy() {
      var activationCode = this.state.activationCode;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setClipboardData({
        data: activationCode,
        success: function success() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
            title: "复制成功",
            icon: "success"
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activationCode = this.state.activationCode;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "generate-activation-code",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "o"], {
          style: {
            textAlign: "center",
            display: "block"
          },
          children: "\u6FC0\u6D3B\u7801"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "activation-code-container",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "o"], {
            children: activationCode
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], {
          type: "secondary",
          onClick: function onClick() {
            return _this2.handleCopy();
          },
          children: "\u590D\u5236"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], {
          type: "primary",
          onClick: function onClick() {
            return _this2.setState({
              activationCode: _this2.generateRandomCode()
            });
          },
          children: "\u751F\u6210\u65B0\u7684\u6FC0\u6D3B\u7801"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
          className: "bottom",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], {
            type: "secondary",
            onClick: function onClick() {
              return _this2.saveCode();
            },
            children: "\u4FDD\u5B58"
          })
        })]
      });
    }
  }]);

  return GenerateActivationCode;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (GenerateActivationCode);

/***/ }),

/***/ "./src/pages/generateActivationCode/index.jsx":
/*!****************************************************!*\
  !*** ./src/pages/generateActivationCode/index.jsx ***!
  \****************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/generateActivationCode/index.jsx");


var config = {"navigationBarTitleText":"生成激活码"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/generateActivationCode/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/generateActivationCode/index.scss":
/*!*****************************************************!*\
  !*** ./src/pages/generateActivationCode/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/generateActivationCode/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map