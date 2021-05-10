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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/components/table/basic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/table/basic.js":
/*!*****************************************!*\
  !*** ./pages/components/table/basic.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_components_table_Basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/components/table/Basic */ "./routes/components/table/Basic/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const BasicPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Basic")), __jsx(_routes_components_table_Basic__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicPage);

/***/ }),

/***/ "./routes/components/table/Basic/ColRowSpan.js":
/*!*****************************************************!*\
  !*** ./routes/components/table/Basic/ColRowSpan.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };

  if (index === 4) {
    obj.props.colSpan = 0;
  }

  return obj;
};

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: (text, row, index) => {
    if (index < 4) {
      return __jsx("span", {
        className: "gx-link"
      }, text);
    }

    return {
      children: __jsx("span", {
        className: "gx-link"
      }, text),
      props: {
        colSpan: 5
      }
    };
  }
}, {
  title: 'Age',
  dataIndex: 'age',
  render: renderContent
}, {
  title: 'Home phone',
  colSpan: 2,
  dataIndex: 'tel',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {}
    };

    if (index === 2) {
      obj.props.rowSpan = 2;
    } // These two are merged into above cell


    if (index === 3) {
      obj.props.rowSpan = 0;
    }

    if (index === 4) {
      obj.props.colSpan = 0;
    }

    return obj;
  }
}, {
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent
}, {
  title: 'Address',
  dataIndex: 'address',
  render: renderContent
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park'
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park'
}];

const ColRowSpan = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "ColSpan and RowSpan Table"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data,
    bordered: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColRowSpan);

/***/ }),

/***/ "./routes/components/table/Basic/Selection.js":
/*!****************************************************!*\
  !*** ./routes/components/table/Basic/Selection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => __jsx("span", {
    className: "gx-link"
  }, text)
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park'
}]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name
  })
};

const Selection = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Selection Table"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    rowSelection: rowSelection,
    columns: columns,
    dataSource: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./routes/components/table/Basic/Simple.js":
/*!*************************************************!*\
  !*** ./routes/components/table/Basic/Simple.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => __jsx("span", {
    className: "gx-link"
  }, text)
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __jsx("span", null, __jsx("span", {
    className: "gx-link"
  }, "Action \u4E00 ", record.name), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    type: "vertical"
  }), __jsx("span", {
    className: "gx-link"
  }, "Delete"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    type: "vertical"
  }), __jsx("span", {
    className: "gx-link ant-dropdown-link"
  }, "More actions ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "down"
  })))
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}];

const Simple = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Simple Table"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Simple);

/***/ }),

/***/ "./routes/components/table/Basic/Size.js":
/*!***********************************************!*\
  !*** ./routes/components/table/Basic/Size.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}];

const Size = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Size Table"
  }, __jsx("h4", null, "Middle size table"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data,
    size: "middle"
  }), __jsx("h4", null, "Small size table"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data,
    size: "small"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Size);

/***/ }),

/***/ "./routes/components/table/Basic/Title.js":
/*!************************************************!*\
  !*** ./routes/components/table/Basic/Title.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => __jsx("span", {
    className: "gx-link"
  }, text)
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park'
}];

const Title = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Title Table"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data,
    bordered: true,
    title: () => 'Header',
    footer: () => 'Footer'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./routes/components/table/Basic/index.js":
/*!************************************************!*\
  !*** ./routes/components/table/Basic/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Simple */ "./routes/components/table/Basic/Simple.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selection */ "./routes/components/table/Basic/Selection.js");
/* harmony import */ var _Size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Size */ "./routes/components/table/Basic/Size.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ "./routes/components/table/Basic/Title.js");
/* harmony import */ var _ColRowSpan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColRowSpan */ "./routes/components/table/Basic/ColRowSpan.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const BasicTable = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Simple__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Selection__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Size__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_ColRowSpan__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicTable);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy90YWJsZS9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9CYXNpYy9Db2xSb3dTcGFuLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0Jhc2ljL1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9CYXNpYy9TaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvQmFzaWMvU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9CYXNpYy9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9CYXNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkJhc2ljUGFnZSIsInJlbmRlckNvbnRlbnQiLCJ2YWx1ZSIsInJvdyIsImluZGV4Iiwib2JqIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNvbFNwYW4iLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJyZW5kZXIiLCJ0ZXh0Iiwicm93U3BhbiIsImRhdGEiLCJrZXkiLCJuYW1lIiwiYWdlIiwidGVsIiwicGhvbmUiLCJhZGRyZXNzIiwiQ29sUm93U3BhbiIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzIiwic2VsZWN0ZWRSb3dzIiwiY29uc29sZSIsImxvZyIsImdldENoZWNrYm94UHJvcHMiLCJyZWNvcmQiLCJkaXNhYmxlZCIsIlNlbGVjdGlvbiIsIlNpbXBsZSIsIlNpemUiLCJjbGFzc05hbWUiLCJtb25leSIsIlRpdGxlIiwiQmFzaWNUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSxNQUFDLGdEQUFELFFBQ0UsNkJBREYsQ0FERixFQUlFLE1BQUMsc0VBQUQsT0FKRixDQURGO0FBUUQsQ0FURDs7QUFXZUEsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7Q0FFQTtBQUNBOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsS0FBYixLQUF1QjtBQUMzQyxRQUFNQyxHQUFHLEdBQUc7QUFDVkMs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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFNBQ0UsTUFBQyx3Q0FBRCxRQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNFLE1BQUMsK0NBQUQsT0FERixDQURGLEVBSUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyxrREFBRCxPQURGLENBSkYsRUFPRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFO0FBQVgsS0FDRSxNQUFDLDZDQUFELE9BREYsQ0FQRixFQVVFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNFLE1BQUMsOENBQUQsT0FERixDQVZGLEVBYUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyxtREFBRCxPQURGLENBYkYsQ0FERjtBQW1CRCxDQXBCRDs7QUFzQmVBLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDaENBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NvbXBvbmVudHMvdGFibGUvYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvbXBvbmVudHMvdGFibGUvYmFzaWMuanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQmFzaWMgZnJvbSAnLi4vLi4vLi4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvQmFzaWMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQmFzaWNQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CYXNpYzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEJhc2ljLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWNQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgVGFibGV9IGZyb20gXCJhbnRkXCI7XHJcbi8vIEluIHRoZSBmaWZ0aCByb3csIG90aGVyIGNvbHVtbnMgYXJlIG1lcmdlZCBpbnRvIGZpcnN0IGNvbHVtblxyXG4vLyBieSBzZXR0aW5nIGl0J3MgY29sU3BhbiB0byBiZSAwXHJcbmNvbnN0IHJlbmRlckNvbnRlbnQgPSAodmFsdWUsIHJvdywgaW5kZXgpID0+IHtcclxuICBjb25zdCBvYmogPSB7XHJcbiAgICBjaGlsZHJlbjogdmFsdWUsXHJcbiAgICBwcm9wczoge30sXHJcbiAgfTtcclxuICBpZiAoaW5kZXggPT09IDQpIHtcclxuICAgIG9iai5wcm9wcy5jb2xTcGFuID0gMDtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufTtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbe1xyXG4gIHRpdGxlOiAnTmFtZScsXHJcbiAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgcmVuZGVyOiAodGV4dCwgcm93LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4IDwgNCkge1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPnt0ZXh0fTwvc3Bhbj47XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGlsZHJlbjogPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPnt0ZXh0fTwvc3Bhbj4sXHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY29sU3BhbjogNSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxufSwge1xyXG4gIHRpdGxlOiAnQWdlJyxcclxuICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG4gIHJlbmRlcjogcmVuZGVyQ29udGVudCxcclxufSwge1xyXG4gIHRpdGxlOiAnSG9tZSBwaG9uZScsXHJcbiAgY29sU3BhbjogMixcclxuICBkYXRhSW5kZXg6ICd0ZWwnLFxyXG4gIHJlbmRlcjogKHZhbHVlLCByb3csIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgIGNoaWxkcmVuOiB2YWx1ZSxcclxuICAgICAgcHJvcHM6IHt9LFxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICBvYmoucHJvcHMucm93U3BhbiA9IDI7XHJcbiAgICB9XHJcbiAgICAvLyBUaGVzZSB0d28gYXJlIG1lcmdlZCBpbnRvIGFib3ZlIGNlbGxcclxuICAgIGlmIChpbmRleCA9PT0gMykge1xyXG4gICAgICBvYmoucHJvcHMucm93U3BhbiA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT09IDQpIHtcclxuICAgICAgb2JqLnByb3BzLmNvbFNwYW4gPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9LFxyXG59LCB7XHJcbiAgdGl0bGU6ICdQaG9uZScsXHJcbiAgY29sU3BhbjogMCxcclxuICBkYXRhSW5kZXg6ICdwaG9uZScsXHJcbiAgcmVuZGVyOiByZW5kZXJDb250ZW50LFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZGRyZXNzJyxcclxuICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuICByZW5kZXI6IHJlbmRlckNvbnRlbnQsXHJcbn1dO1xyXG5cclxuY29uc3QgZGF0YSA9IFt7XHJcbiAga2V5OiAnMScsXHJcbiAgbmFtZTogJ0pvaG4gQnJvd24nLFxyXG4gIGFnZTogMzIsXHJcbiAgdGVsOiAnMDU3MS0yMjA5ODkwOScsXHJcbiAgcGhvbmU6IDE4ODg5ODk4OTg5LFxyXG4gIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnMicsXHJcbiAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgdGVsOiAnMDU3MS0yMjA5ODMzMycsXHJcbiAgcGhvbmU6IDE4ODg5ODk4ODg4LFxyXG4gIGFnZTogNDIsXHJcbiAgYWRkcmVzczogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnMycsXHJcbiAgbmFtZTogJ0pvZSBCbGFjaycsXHJcbiAgYWdlOiAzMixcclxuICB0ZWw6ICcwNTc1LTIyMDk4OTA5JyxcclxuICBwaG9uZTogMTg5MDAwMTAwMDIsXHJcbiAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnNCcsXHJcbiAgbmFtZTogJ0ppbSBSZWQnLFxyXG4gIGFnZTogMTgsXHJcbiAgdGVsOiAnMDU3NS0yMjA5ODkwOScsXHJcbiAgcGhvbmU6IDE4OTAwMDEwMDAyLFxyXG4gIGFkZHJlc3M6ICdMb25kb24gTm8uIDIgTGFrZSBQYXJrJyxcclxufSwge1xyXG4gIGtleTogJzUnLFxyXG4gIG5hbWU6ICdKYWtlIFdoaXRlJyxcclxuICBhZ2U6IDE4LFxyXG4gIHRlbDogJzA1NzUtMjIwOTg5MDknLFxyXG4gIHBob25lOiAxODkwMDAxMDAwMixcclxuICBhZGRyZXNzOiAnRHVibGluIE5vLiAyIExha2UgUGFyaycsXHJcbn1dO1xyXG5cclxuY29uc3QgQ29sUm93U3BhbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkIHRpdGxlPVwiQ29sU3BhbiBhbmQgUm93U3BhbiBUYWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJneC10YWJsZS1yZXNwb25zaXZlXCIgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0gYm9yZGVyZWQvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH1cclxuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sUm93U3BhbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsIFRhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFt7XHJcbiAgdGl0bGU6ICdOYW1lJyxcclxuICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICByZW5kZXI6IHRleHQgPT4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPnt0ZXh0fTwvc3Bhbj4sXHJcbn0sIHtcclxuICB0aXRsZTogJ0FnZScsXHJcbiAgZGF0YUluZGV4OiAnYWdlJyxcclxufSwge1xyXG4gIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcbn1dO1xyXG5jb25zdCBkYXRhID0gW3tcclxuICBrZXk6ICcxJyxcclxuICBuYW1lOiAnSm9obiBCcm93bicsXHJcbiAgYWdlOiAzMixcclxuICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcclxufSwge1xyXG4gIGtleTogJzInLFxyXG4gIG5hbWU6ICdKaW0gR3JlZW4nLFxyXG4gIGFnZTogNDIsXHJcbiAgYWRkcmVzczogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnMycsXHJcbiAgbmFtZTogJ0pvZSBCbGFjaycsXHJcbiAgYWdlOiAzMixcclxuICBhZGRyZXNzOiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXHJcbn0sIHtcclxuICBrZXk6ICc0JyxcclxuICBuYW1lOiAnRGlzYWJsZWQgVXNlcicsXHJcbiAgYWdlOiA5OSxcclxuICBhZGRyZXNzOiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXHJcbn1dO1xyXG5cclxuLy8gcm93U2VsZWN0aW9uIG9iamVjdCBpbmRpY2F0ZXMgdGhlIG5lZWQgZm9yIHJvdyBzZWxlY3Rpb25cclxuY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgfSxcclxuICBnZXRDaGVja2JveFByb3BzOiByZWNvcmQgPT4gKHtcclxuICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLCAvLyBDb2x1bW4gY29uZmlndXJhdGlvbiBub3QgdG8gYmUgY2hlY2tlZFxyXG4gICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgfSksXHJcbn07XHJcblxyXG5jb25zdCBTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHRpdGxlPVwiU2VsZWN0aW9uIFRhYmxlXCI+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJneC10YWJsZS1yZXNwb25zaXZlXCIgcm93U2VsZWN0aW9uPXtyb3dTZWxlY3Rpb259IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9Lz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgRGl2aWRlciwgVGFibGV9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdOYW1lJyxcclxuICAgIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gICAga2V5OiAnbmFtZScsXHJcbiAgICByZW5kZXI6IHRleHQgPT4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPnt0ZXh0fTwvc3Bhbj4sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FnZScsXHJcbiAgICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG4gICAga2V5OiAnYWdlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuICAgIGtleTogJ2FkZHJlc3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBY3Rpb24nLFxyXG4gICAga2V5OiAnYWN0aW9uJyxcclxuICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGlua1wiPkFjdGlvbiDkuIAge3JlY29yZC5uYW1lfTwvc3Bhbj5cclxuICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1saW5rXCI+RGVsZXRlPC9zcGFuPlxyXG4gICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIi8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmsgYW50LWRyb3Bkb3duLWxpbmtcIj5cclxuICAgICAgICBNb3JlIGFjdGlvbnMgPEljb24gdHlwZT1cImRvd25cIi8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgICksXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBrZXk6ICcxJyxcclxuICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgIGFnZTogMzIsXHJcbiAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzInLFxyXG4gICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICBhZ2U6IDQyLFxyXG4gICAgYWRkcmVzczogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMycsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIGFnZTogMzIsXHJcbiAgICBhZGRyZXNzOiAnU2lkbmV5IE5vLiAxIExha2UgUGFyaycsXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgU2ltcGxlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB0aXRsZT1cIlNpbXBsZSBUYWJsZVwiPlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9Lz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgVGFibGV9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW3tcclxuICB0aXRsZTogJ05hbWUnLFxyXG4gIGRhdGFJbmRleDogJ25hbWUnLFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZ2UnLFxyXG4gIGRhdGFJbmRleDogJ2FnZScsXHJcbn0sIHtcclxuICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG59XTtcclxuY29uc3QgZGF0YSA9IFt7XHJcbiAga2V5OiAnMScsXHJcbiAgbmFtZTogJ0pvaG4gQnJvd24nLFxyXG4gIGFnZTogMzIsXHJcbiAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsXHJcbn0sIHtcclxuICBrZXk6ICcyJyxcclxuICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICBhZ2U6IDQyLFxyXG4gIGFkZHJlc3M6ICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJyxcclxufSwge1xyXG4gIGtleTogJzMnLFxyXG4gIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gIGFnZTogMzIsXHJcbiAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG59XTtcclxuXHJcbmNvbnN0IFNpemUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHRpdGxlPVwiU2l6ZSBUYWJsZVwiPlxyXG4gICAgICA8aDQ+TWlkZGxlIHNpemUgdGFibGU8L2g0PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IHNpemU9XCJtaWRkbGVcIi8+XHJcbiAgICAgIDxoND5TbWFsbCBzaXplIHRhYmxlPC9oND5cclxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImd4LXRhYmxlLXJlc3BvbnNpdmVcIiBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBzaXplPVwic21hbGxcIi8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbe1xyXG4gIHRpdGxlOiAnTmFtZScsXHJcbiAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgcmVuZGVyOiB0ZXh0ID0+IDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj57dGV4dH08L3NwYW4+LFxyXG59LCB7XHJcbiAgdGl0bGU6ICdDYXNoIEFzc2V0cycsXHJcbiAgY2xhc3NOYW1lOiAnY29sdW1uLW1vbmV5JyxcclxuICBkYXRhSW5kZXg6ICdtb25leScsXHJcbn0sIHtcclxuICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG59XTtcclxuXHJcbmNvbnN0IGRhdGEgPSBbe1xyXG4gIGtleTogJzEnLFxyXG4gIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICBtb25leTogJ++/pTMwMCwwMDAuMDAnLFxyXG4gIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnMicsXHJcbiAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgbW9uZXk6ICfvv6UxLDI1NiwwMDAuMDAnLFxyXG4gIGFkZHJlc3M6ICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJyxcclxufSwge1xyXG4gIGtleTogJzMnLFxyXG4gIG5hbWU6ICdKb2UgQmxhY2snLFxyXG4gIG1vbmV5OiAn77+lMTIwLDAwMC4wMCcsXHJcbiAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG59XTtcclxuXHJcbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB0aXRsZT1cIlRpdGxlIFRhYmxlXCI+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJneC10YWJsZS1yZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgIHRpdGxlPXsoKSA9PiAnSGVhZGVyJ31cclxuICAgICAgICAgICAgIGZvb3Rlcj17KCkgPT4gJ0Zvb3Rlcid9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29sLCBSb3d9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgU2ltcGxlIGZyb20gXCIuL1NpbXBsZVwiO1xyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xyXG5pbXBvcnQgU2l6ZSBmcm9tIFwiLi9TaXplXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5pbXBvcnQgQ29sUm93U3BhbiBmcm9tIFwiLi9Db2xSb3dTcGFuXCI7XHJcblxyXG5cclxuY29uc3QgQmFzaWNUYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgPFNpbXBsZS8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICA8U2VsZWN0aW9uLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxTaXplLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxUaXRsZS8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICA8Q29sUm93U3Bhbi8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljVGFibGU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=