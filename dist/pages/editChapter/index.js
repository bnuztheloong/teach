(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/editChapter/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/editChapter/index.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/editChapter/index.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/pages/editChapter/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










var EditChapter = function EditChapter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    title: "章节1",
    video: "https://stem-src.oss-cn-shenzhen.aliyuncs.com/feelAir/kexue1.mp4"
  }, {
    title: "章节2",
    video: "video2.mp4"
  }]),
      _useState2 = Object(_Users_loong_Downloads_teach_teach_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      chapters = _useState2[0],
      setChapters = _useState2[1];

  var handleAddChapter = function handleAddChapter() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: "/pages/addChapter/index"
    });
  };

  var handleDeleteChapter = function handleDeleteChapter(index) {
    setChapters(function (prevState) {
      return prevState.filter(function (_, i) {
        return i !== index;
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "r"], {
      className: "edit-chapter",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "r"], {
        className: "add-button-container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "b"], {
          type: "primary",
          onClick: handleAddChapter,
          children: "\u6DFB\u52A0\u8BFE\u7A0B\u7AE0\u8282"
        })
      }), chapters.map(function (chapter, index) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "r"], {
          className: "chapter-container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtCard */ "c"], {
            className: "chapter-card",
            title: "".concat(index + 1, ". ").concat(chapter.title),
            isFull: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Video */ "q"], {
              src: chapter.video,
              className: "chapter-video",
              controls: true,
              autoplay: false,
              fullscreen: true
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "b"], {
            type: "secondary",
            className: "delete-button",
            onClick: function onClick() {
              return handleDeleteChapter(index);
            },
            children: "\u5220\u9664"
          })]
        }, chapter.title);
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (EditChapter);

/***/ }),

/***/ "./src/pages/editChapter/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/editChapter/index.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/editChapter/index.jsx");


var config = {"navigationBarTitleText":"编辑章节"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/editChapter/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/editChapter/index.scss":
/*!******************************************!*\
  !*** ./src/pages/editChapter/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/editChapter/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map