module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/custom-views/list-type/simple-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/ContainerHeader/index.js":
/*!*************************************************!*\
  !*** ./app/components/ContainerHeader/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ContainerHeader = ({
  title,
  match
}) => {
  return __jsx("div", {
    className: "gx-page-heading"
  }, __jsx("h2", {
    className: "gx-page-title"
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerHeader);

/***/ }),

/***/ "./pages/custom-views/list-type/simple-list.js":
/*!*****************************************************!*\
  !*** ./pages/custom-views/list-type/simple-list.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_customViews_listType_Sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/customViews/listType/Sample */ "./routes/customViews/listType/Sample/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const SamplePage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Sample List")), __jsx(_routes_customViews_listType_Sample__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (SamplePage);

/***/ }),

/***/ "./routes/customViews/listType/Component/PlainListItem.js":
/*!****************************************************************!*\
  !*** ./routes/customViews/listType/Component/PlainListItem.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PlainListItem({
  styleName,
  data
}) {
  const {
    image,
    name,
    work,
    like,
    comments,
    description
  } = data;
  return __jsx("div", {
    className: "gx-user-list"
  }, __jsx("img", {
    alt: "avatar",
    src: image,
    className: "gx-avatar-img gx-avatar-img-lg gx-border-0"
  }), __jsx("div", {
    className: "gx-description"
  }, __jsx("h3", null, name), __jsx("h5", null, "in ", __jsx("span", {
    className: "gx-link"
  }, work)), __jsx("p", {
    className: "gx-mb-1"
  }, description), __jsx("ul", {
    className: "gx-list-inline gx-btn-list"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-link gx-meta-like"
  }, __jsx("i", {
    className: "icon icon-like-o gx-text-red"
  }), like)), __jsx("li", null, __jsx("span", {
    className: "gx-link gx-meta-comment"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), comments)))));
}

/* harmony default export */ __webpack_exports__["default"] = (PlainListItem);

/***/ }),

/***/ "./routes/customViews/listType/Sample/index.js":
/*!*****************************************************!*\
  !*** ./routes/customViews/listType/Sample/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./routes/customViews/listType/data.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_ContainerHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/components/ContainerHeader */ "./app/components/ContainerHeader/index.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _Component_PlainListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Component/PlainListItem */ "./routes/customViews/listType/Component/PlainListItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function SimpleList({
  match
}) {
  return __jsx("div", {
    className: "gx-main-content gx-pb-sm-4"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24
  }, __jsx(_app_components_ContainerHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.listType.plainListView"
    }),
    match: match
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24
  }, _data__WEBPACK_IMPORTED_MODULE_1__["PlainListData"].map((data, index) => __jsx(_Component_PlainListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: index,
    data: data
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleList);

/***/ }),

/***/ "./routes/customViews/listType/data.js":
/*!*********************************************!*\
  !*** ./routes/customViews/listType/data.js ***!
  \*********************************************/
/*! exports provided: PlainListData, data, cardsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainListData", function() { return PlainListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardsList", function() { return cardsList; });
const PlainListData = [{
  name: 'Domnic Harris',
  work: 'jQuery Tricks',
  like: '24 Likes',
  comments: '2 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo ris nisi ut aliquip ex ea commodo consequat."
}, {
  name: 'Garry Sobars',
  work: 'Design Freebies',
  like: '12 Likes',
  comments: '2 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live."
}, {
  name: 'Stella Johnson',
  work: 'CSS Hacks',
  like: '148 Likes',
  comments: '20 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
}, {
  name: 'John smith',
  work: 'Design Freebies',
  like: '25 Likes',
  comments: '6 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
}, {
  name: 'Alex dolgove',
  work: 'Home Improvement',
  like: '34 Likes',
  comments: '22 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
}, {
  name: 'Domnic Harris',
  work: 'React Developer',
  like: '123 Likes',
  comments: '42 comments',
  image: 'https://via.placeholder.com/150x150',
  description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
}];
const data = [{
  name: 'Domnic Harris',
  image: 'https://via.placeholder.com/150x150',
  buttonList: [{
    name: 'Interface'
  }, {
    name: 'UI'
  }, {
    name: 'UX'
  }],
  description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
}, {
  name: 'Garry Sobars',
  buttonList: [{
    name: 'Gardening'
  }, {
    name: 'Bonsai'
  }, {
    name: 'Organic'
  }],
  image: 'https://via.placeholder.com/150x150',
  description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
}, {
  name: 'Stella Johnson',
  buttonList: [{
    name: 'React'
  }, {
    name: 'Redux'
  }],
  image: 'https://via.placeholder.com/150x150',
  description: "Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety."
}, {
  name: 'John Smith',
  designation: 'BDM',
  buttonList: [{
    name: 'html'
  }, {
    name: 'css'
  }, {
    name: 'java'
  }],
  image: 'https://via.placeholder.com/150x150',
  description: "Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don't necessarily match the original, which is intended to add variety."
}, {
  name: 'Alex Dolgove',
  buttonList: [{
    name: 'html'
  }, {
    name: 'css'
  }, {
    name: 'java'
  }],
  image: 'https://via.placeholder.com/150x150',
  description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their CRM model text, and a search for 'lorem ipsum' "
}, {
  name: 'Domnic Brown',
  buttonList: [{
    name: 'html'
  }, {
    name: 'css'
  }, {
    name: 'java'
  }],
  image: 'https://via.placeholder.com/640x420',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
}];
const cardsList = [{
  name: 'Domnic Harris',
  avatar: 'https://via.placeholder.com/150x150',
  description: "All the Lorem Ipsum generators on the Internet...",
  rate: "17",
  earning: "45",
  position: "Graphic Designer/ UI & UX"
}, {
  name: 'Garry Sobars',
  avatar: 'https://via.placeholder.com/150x150',
  description: "It uses a dictionary of over 200 Latin words, combined ...",
  rate: "20",
  earning: "88",
  position: "PHP Developer"
}, {
  name: 'Stella Johnson',
  avatar: 'https://via.placeholder.com/150x150',
  description: "The generated Lorem Ipsum is therefore always...",
  rate: "24",
  earning: "102",
  position: "Java Developer"
}, {
  name: 'John Smith',
  avatar: 'https://via.placeholder.com/150x150',
  description: "It is a long established fact that a reader will...",
  rate: "18",
  earning: "67",
  position: "PHP Developer"
}, {
  name: 'Alex Dolgove',
  avatar: 'https://via.placeholder.com/150x150',
  description: "Many desktop publishing packages and web page editors... ",
  rate: "19",
  earning: "65",
  position: "Graphic Designer/ UI & UX"
}, {
  name: 'Domnic Brown',
  avatar: 'https://via.placeholder.com/640x420',
  description: "There are many variations of passages of Lorem Ipsum ...",
  rate: "13",
  earning: "43",
  position: "Graphic Designer/ UI & UX"
}];

/***/ }),

/***/ "./util/IntlMessages.js":
/*!******************************!*\
  !*** ./util/IntlMessages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ29udGFpbmVySGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvc2ltcGxlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2N1c3RvbVZpZXdzL2xpc3RUeXBlL0NvbXBvbmVudC9QbGFpbkxpc3RJdGVtLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jdXN0b21WaWV3cy9saXN0VHlwZS9TYW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2N1c3RvbVZpZXdzL2xpc3RUeXBlL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9JbnRsTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIl0sIm5hbWVzIjpbIkNvbnRhaW5lckhlYWRlciIsInRpdGxlIiwibWF0Y2giLCJTYW1wbGVQYWdlIiwiUGxhaW5MaXN0SXRlbSIsInN0eWxlTmFtZSIsImRhdGEiLCJpbWFnZSIsIm5hbWUiLCJ3b3JrIiwibGlrZSIsImNvbW1lbnRzIiwiZGVzY3JpcHRpb24iLCJTaW1wbGVMaXN0IiwiUGxhaW5MaXN0RGF0YSIsIm1hcCIsImluZGV4IiwiYnV0dG9uTGlzdCIsImRlc2lnbmF0aW9uIiwiY2FyZHNMaXN0IiwiYXZhdGFyIiwicmF0ZSIsImVhcm5pbmciLCJwb3NpdGlvbiIsIkluamVjdE1hc3NhZ2UiLCJwcm9wcyIsImluamVjdEludGwiLCJ3aXRoUmVmIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RURZLFFBQU0sRUFBRSxxQ0FGUDtBQUdEUixhQUFXLEVBQUUscURBSFo7QUFJRFMsTUFBSSxFQUFFLElBSkw7QUFLREMsU0FBTyxFQUFFLElBTFI7QUFNREMsVUFBUSxFQUFFO0FBTlQsQ0F4Qm9CLEVBZ0N2QjtBQUNFZixNQUFJLEVBQUUsY0FEUjtBQUVFWSxRQUFNLEVBQUUscUNBRlY7QUFHRVIsYUFBVyxFQUFFLDJEQUhmO0FBSUVTLE1BQUksRUFBRSxJQUpSO0FBS0VDLFNBQU8sRUFBRSxJQUxYO0FBTUVDLFVBQVEsRUFBRTtBQU5aLENBaEN1QixFQXdDdkI7QUFDRWYsTUFBSSxFQUFFLGNBRFI7QUFFRVksUUFBTSxFQUFFLHFDQUZWO0FBR0VSLGFBQVcsRUFBRSwwREFIZjtBQUlFUyxNQUFJLEVBQUUsSUFKUjtBQUtFQyxTQUFPLEVBQUUsSUFMWDtBQU1FQyxVQUFRLEVBQUU7QUFOWixDQXhDdUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdQO0FBQ0E7O0FBRUEsTUFBTUMsYUFBYSxHQUFHQyxLQUFLLElBQUksTUFBQywyREFBRCxFQUFzQkEsS0FBdEIsQ0FBL0I7O0FBQ2VDLDRIQUFVLENBQUNGLGFBQUQsRUFBZ0I7QUFDdkNHLFNBQU8sRUFBRTtBQUQ4QixDQUFoQixDQUF6QixFOzs7Ozs7Ozs7OztBQ0pBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvc2ltcGxlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2N1c3RvbS12aWV3cy9saXN0LXR5cGUvc2ltcGxlLWxpc3QuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb250YWluZXJIZWFkZXIgPSAoe3RpdGxlLCBtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1wYWdlLWhlYWRpbmdcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LXBhZ2UtdGl0bGVcIj57dGl0bGV9PC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lckhlYWRlcjtcclxuXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTYW1wbGUgZnJvbSAnLi4vLi4vLi4vcm91dGVzL2N1c3RvbVZpZXdzL2xpc3RUeXBlL1NhbXBsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTYW1wbGVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TYW1wbGUgTGlzdDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNhbXBsZS8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQbGFpbkxpc3RJdGVtKHtzdHlsZU5hbWUsIGRhdGF9KSB7XHJcbiAgY29uc3Qge2ltYWdlLCBuYW1lLCB3b3JrLCBsaWtlLCBjb21tZW50cywgZGVzY3JpcHRpb259ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLWxpc3RcIj5cclxuICAgICAgPGltZyBhbHQ9XCJhdmF0YXJcIiBzcmM9e2ltYWdlfSBjbGFzc05hbWU9XCJneC1hdmF0YXItaW1nIGd4LWF2YXRhci1pbWctbGcgZ3gtYm9yZGVyLTBcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8aDM+e25hbWV9PC9oMz5cclxuICAgICAgICA8aDU+aW4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPnt3b3JrfTwvc3Bhbj48L2g1PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTFcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1saXN0LWlubGluZSBneC1idG4tbGlzdFwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1saW5rIGd4LW1ldGEtbGlrZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1saWtlLW8gZ3gtdGV4dC1yZWRcIi8+XHJcbiAgICAgICAgICAgICAge2xpa2V9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmsgZ3gtbWV0YS1jb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoYXQtbmV3XCIvPlxyXG4gICAgICAgICAgICAgIHtjb21tZW50c31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFpbkxpc3RJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UGxhaW5MaXN0RGF0YX0gZnJvbSBcIi4uL2RhdGFcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvbnRhaW5lckhlYWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29udGFpbmVySGVhZGVyXCI7XHJcbmltcG9ydCBJbnRsTWVzc2FnZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvSW50bE1lc3NhZ2VzXCI7XHJcbmltcG9ydCBQbGFpbkxpc3RJdGVtIGZyb20gXCIuLi9Db21wb25lbnQvUGxhaW5MaXN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gU2ltcGxlTGlzdCh7bWF0Y2h9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWFpbi1jb250ZW50IGd4LXBiLXNtLTRcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgIDxDb250YWluZXJIZWFkZXIgdGl0bGU9ezxJbnRsTWVzc2FnZXMgaWQ9XCJzaWRlYmFyLmxpc3RUeXBlLnBsYWluTGlzdFZpZXdcIi8+fSBtYXRjaD17bWF0Y2h9Lz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgIHtQbGFpbkxpc3REYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFBsYWluTGlzdEl0ZW0ga2V5PXtpbmRleH0gZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTGlzdCA7XHJcbiIsImV4cG9ydCBjb25zdCBQbGFpbkxpc3REYXRhID0gW1xyXG5cclxuICB7XHJcbiAgICBuYW1lOiAnRG9tbmljIEhhcnJpcycsXHJcbiAgICB3b3JrOiAnalF1ZXJ5IFRyaWNrcycsXHJcbiAgICBsaWtlOiAnMjQgTGlrZXMnLFxyXG4gICAgY29tbWVudHM6ICcyIGNvbW1lbnRzJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm8gcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0dhcnJ5IFNvYmFycycsXHJcbiAgICB3b3JrOiAnRGVzaWduIEZyZWViaWVzJyxcclxuICAgIGxpa2U6ICcxMiBMaWtlcycsXHJcbiAgICBjb21tZW50czogJzIgY29tbWVudHMnLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJJbiBhIHByb2Zlc3Npb25hbCBjb250ZXh0IGl0IG9mdGVuIGhhcHBlbnMgdGhhdCBwcml2YXRlIG9yIGNvcnBvcmF0ZSBjbGllbnRzIGNvcmRlciBhIHB1YmxpY2F0aW9uIHRvIGJlIG1hZGUgYW5kIHByZXNlbnRlZCB3aXRoIHRoZSBhY3R1YWwgY29udGVudCBzdGlsbCBub3QgYmVpbmcgcmVhZHkuIFRoaW5rIG9mIGEgbmV3cyBibG9nIHRoYXQncyBmaWxsZWQgd2l0aCBjb250ZW50IGhvdXJseSBvbiB0aGUgZGF5IG9mIGdvaW5nIGxpdmUuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdGVsbGEgSm9obnNvbicsXHJcbiAgICB3b3JrOiAnQ1NTIEhhY2tzJyxcclxuICAgIGxpa2U6ICcxNDggTGlrZXMnLFxyXG4gICAgY29tbWVudHM6ICcyMCBjb21tZW50cycsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUgSW50ZXJuZXQgdGVuZCB0byByZXBlYXQgcHJlZGVmaW5lZCBjaHVua3MgYXMgbmVjZXNzYXJ5LCBtYWtpbmcgdGhpcyB0aGUgZmlyc3QgdHJ1ZSBnZW5lcmF0b3Igb24gdGhlIEludGVybmV0XCJcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnSm9obiBzbWl0aCcsXHJcbiAgICB3b3JrOiAnRGVzaWduIEZyZWViaWVzJyxcclxuICAgIGxpa2U6ICcyNSBMaWtlcycsXHJcbiAgICBjb21tZW50czogJzYgY29tbWVudHMnLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlIEludGVybmV0IHRlbmQgdG8gcmVwZWF0IHByZWRlZmluZWQgY2h1bmtzIGFzIG5lY2Vzc2FyeSwgbWFraW5nIHRoaXMgdGhlIGZpcnN0IHRydWUgZ2VuZXJhdG9yIG9uIHRoZSBJbnRlcm5ldFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQWxleCBkb2xnb3ZlJyxcclxuICAgIHdvcms6ICdIb21lIEltcHJvdmVtZW50JyxcclxuICAgIGxpa2U6ICczNCBMaWtlcycsXHJcbiAgICBjb21tZW50czogJzIyIGNvbW1lbnRzJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZSBJbnRlcm5ldCB0ZW5kIHRvIHJlcGVhdCBwcmVkZWZpbmVkIGNodW5rcyBhcyBuZWNlc3NhcnksIG1ha2luZyB0aGlzIHRoZSBmaXJzdCB0cnVlIGdlbmVyYXRvciBvbiB0aGUgSW50ZXJuZXRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbW5pYyBIYXJyaXMnLFxyXG4gICAgd29yazogJ1JlYWN0IERldmVsb3BlcicsXHJcbiAgICBsaWtlOiAnMTIzIExpa2VzJyxcclxuICAgIGNvbW1lbnRzOiAnNDIgY29tbWVudHMnLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgdGhlIExvcmVtIElwc3VtIGdlbmVyYXRvcnMgb24gdGhlIEludGVybmV0IHRlbmQgdG8gcmVwZWF0IHByZWRlZmluZWQgY2h1bmtzIGFzIG5lY2Vzc2FyeSwgbWFraW5nIHRoaXMgdGhlIGZpcnN0IHRydWUgZ2VuZXJhdG9yIG9uIHRoZSBJbnRlcm5ldFwiXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IGRhdGEgPSBbXHJcblxyXG4gIHtcclxuICAgIG5hbWU6ICdEb21uaWMgSGFycmlzJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgYnV0dG9uTGlzdDogW1xyXG4gICAgICB7bmFtZTogJ0ludGVyZmFjZSd9LCB7bmFtZTogJ1VJJ30sIHtuYW1lOiAnVVgnfVxyXG4gICAgXSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB0aGUgTG9yZW0gSXBzdW0gZ2VuZXJhdG9ycyBvbiB0aGUgSW50ZXJuZXQgdGVuZCB0byByZXBlYXQgcHJlZGVmaW5lZCBjaHVua3MgYXMgbmVjZXNzYXJ5LCBtYWtpbmcgdGhpcyB0aGUgZmlyc3QgdHJ1ZSBnZW5lcmF0b3Igb24gdGhlIEludGVybmV0XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdHYXJyeSBTb2JhcnMnLFxyXG4gICAgYnV0dG9uTGlzdDogW1xyXG4gICAgICB7bmFtZTogJ0dhcmRlbmluZyd9LCB7bmFtZTogJ0JvbnNhaSd9LCB7bmFtZTogJ09yZ2FuaWMnfVxyXG4gICAgXSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSXQgdXNlcyBhIGRpY3Rpb25hcnkgb2Ygb3ZlciAyMDAgTGF0aW4gd29yZHMsIGNvbWJpbmVkIHdpdGggYSBoYW5kZnVsIG9mIG1vZGVsIHNlbnRlbmNlIHN0cnVjdHVyZXMsIHRvIGdlbmVyYXRlIExvcmVtIElwc3VtIHdoaWNoIGxvb2tzIHJlYXNvbmFibGUuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTdGVsbGEgSm9obnNvbicsXHJcbiAgICBidXR0b25MaXN0OiBbXHJcbiAgICAgIHtuYW1lOiAnUmVhY3QnfSwge25hbWU6ICdSZWR1eCd9XHJcbiAgICBdLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNb3N0IHRleHQgZWRpdG9ycyBsaWtlIE1TIFdvcmQgb3IgTG90dXMgTm90ZXMgZ2VuZXJhdGUgcmFuZG9tIGxvcmVtIHRleHQgd2hlbiBuZWVkZWQsIGVpdGhlciBhcyBwcmUtaW5zdGFsbGVkIG1vZHVsZSBvciBwbHVnLWluIHRvIGJlIGFkZGVkLiBXb3JkIHNlbGVjdGlvbiBvciBzZXF1ZW5jZSBkb24ndCBuZWNlc3NhcmlseSBtYXRjaCB0aGUgb3JpZ2luYWwsIHdoaWNoIGlzIGludGVuZGVkIHRvIGFkZCB2YXJpZXR5LlwiXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ0pvaG4gU21pdGgnLFxyXG4gICAgZGVzaWduYXRpb246ICdCRE0nLFxyXG4gICAgYnV0dG9uTGlzdDogW1xyXG4gICAgICB7bmFtZTogJ2h0bWwnfSwge25hbWU6ICdjc3MnfSwge25hbWU6ICdqYXZhJ31cclxuICAgIF0sXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1vc3QgdGV4dCBlZGl0b3JzIGxpa2UgTVMgV29yZCBvciBMb3R1cyBOb3RlcyBnZW5lcmF0ZSByYW5kb20gbG9yZW0gdGV4dCB3aGVuIG5lZWRlZCwgZWl0aGVyIGFzIHByZS1pbnN0YWxsZWQgbW9kdWxlIG9yIHBsdWctaW4gdG8gYmUgYWRkZWQuIFdvcmQgc2VsZWN0aW9uIG9yIHNlcXVlbmNlIGRvbid0IG5lY2Vzc2FyaWx5IG1hdGNoIHRoZSBvcmlnaW5hbCwgd2hpY2ggaXMgaW50ZW5kZWQgdG8gYWRkIHZhcmlldHkuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbGV4IERvbGdvdmUnLFxyXG4gICAgYnV0dG9uTGlzdDogW1xyXG4gICAgICB7bmFtZTogJ2h0bWwnfSxcclxuICAgICAge25hbWU6ICdjc3MnfSxcclxuICAgICAge25hbWU6ICdqYXZhJ31cclxuICAgIF0sXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1hbnkgZGVza3RvcCBwdWJsaXNoaW5nIHBhY2thZ2VzIGFuZCB3ZWIgcGFnZSBlZGl0b3JzIG5vdyB1c2UgTG9yZW0gSXBzdW0gYXMgdGhlaXIgQ1JNIG1vZGVsIHRleHQsIGFuZCBhIHNlYXJjaCBmb3IgJ2xvcmVtIGlwc3VtJyBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbW5pYyBCcm93bicsXHJcbiAgICBidXR0b25MaXN0OiBbXHJcbiAgICAgIHtuYW1lOiAnaHRtbCd9LFxyXG4gICAgICB7bmFtZTogJ2Nzcyd9LFxyXG4gICAgICB7bmFtZTogJ2phdmEnfVxyXG4gICAgXSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHg0MjAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoIGRvbid0IGxvb2sgZXZlbiBzbGlnaHRseSBiZWxpZXZhYmxlLlwiXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkc0xpc3QgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbW5pYyBIYXJyaXMnLFxyXG4gICAgYXZhdGFyOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQWxsIHRoZSBMb3JlbSBJcHN1bSBnZW5lcmF0b3JzIG9uIHRoZSBJbnRlcm5ldC4uLlwiLFxyXG4gICAgcmF0ZTogXCIxN1wiLFxyXG4gICAgZWFybmluZzogXCI0NVwiLFxyXG4gICAgcG9zaXRpb246IFwiR3JhcGhpYyBEZXNpZ25lci8gVUkgJiBVWFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnR2FycnkgU29iYXJzJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkl0IHVzZXMgYSBkaWN0aW9uYXJ5IG9mIG92ZXIgMjAwIExhdGluIHdvcmRzLCBjb21iaW5lZCAuLi5cIixcclxuICAgIHJhdGU6IFwiMjBcIixcclxuICAgIGVhcm5pbmc6IFwiODhcIixcclxuICAgIHBvc2l0aW9uOiBcIlBIUCBEZXZlbG9wZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1N0ZWxsYSBKb2huc29uJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBnZW5lcmF0ZWQgTG9yZW0gSXBzdW0gaXMgdGhlcmVmb3JlIGFsd2F5cy4uLlwiLFxyXG4gICAgcmF0ZTogXCIyNFwiLFxyXG4gICAgZWFybmluZzogXCIxMDJcIixcclxuICAgIHBvc2l0aW9uOiBcIkphdmEgRGV2ZWxvcGVyXCJcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnSm9obiBTbWl0aCcsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwuLi5cIixcclxuICAgIHJhdGU6IFwiMThcIixcclxuICAgIGVhcm5pbmc6IFwiNjdcIixcclxuICAgIHBvc2l0aW9uOiBcIlBIUCBEZXZlbG9wZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0FsZXggRG9sZ292ZScsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNYW55IGRlc2t0b3AgcHVibGlzaGluZyBwYWNrYWdlcyBhbmQgd2ViIHBhZ2UgZWRpdG9ycy4uLiBcIixcclxuICAgIHJhdGU6IFwiMTlcIixcclxuICAgIGVhcm5pbmc6IFwiNjVcIixcclxuICAgIHBvc2l0aW9uOiBcIkdyYXBoaWMgRGVzaWduZXIvIFVJICYgVVhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0RvbW5pYyBCcm93bicsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDQyMCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIC4uLlwiLFxyXG4gICAgcmF0ZTogXCIxM1wiLFxyXG4gICAgZWFybmluZzogXCI0M1wiLFxyXG4gICAgcG9zaXRpb246IFwiR3JhcGhpYyBEZXNpZ25lci8gVUkgJiBVWFwiXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuXHJcbmNvbnN0IEluamVjdE1hc3NhZ2UgPSBwcm9wcyA9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ucHJvcHN9IC8+O1xyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEluamVjdE1hc3NhZ2UsIHtcclxuICB3aXRoUmVmOiBmYWxzZSxcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==