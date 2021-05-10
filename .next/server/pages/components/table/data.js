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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/components/table/data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/table/data.js":
/*!****************************************!*\
  !*** ./pages/components/table/data.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_components_table_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/components/table/Data */ "./routes/components/table/Data/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const DataPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Data")), __jsx(_routes_components_table_Data__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (DataPage);

/***/ }),

/***/ "./routes/components/table/Data/CustomSelection.js":
/*!*********************************************************!*\
  !*** ./routes/components/table/Data/CustomSelection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class CustomSelection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedRowKeys: [] // Check here to configure the CRM column

    });

    _defineProperty(this, "onSelectChange", selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({
        selectedRowKeys
      });
    });
  }

  render() {
    const {
      selectedRowKeys
    } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()] // 0...45

          });
        }
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          this.setState({
            selectedRowKeys: newSelectedRowKeys
          });
        }
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          this.setState({
            selectedRowKeys: newSelectedRowKeys
          });
        }
      }],
      onSelection: this.onSelection
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Custom Selection"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      className: "gx-table-responsive",
      rowSelection: rowSelection,
      columns: columns,
      dataSource: data
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomSelection);

/***/ }),

/***/ "./routes/components/table/Data/Dynamic.js":
/*!*************************************************!*\
  !*** ./routes/components/table/Data/Dynamic.js ***!
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => __jsx("span", {
    className: "gx-link"
  }, text)
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'action',
  width: 360,
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
const data = [];

for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`
  });
}

const expandedRowRender = record => __jsx("p", null, record.description);

const title = () => 'Here is title';

const showHeader = true;

const footer = () => 'Here is footer';

const scroll = {
  y: 240
};
const pagination = {
  position: 'bottom'
};

class Dynamic extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      bordered: false,
      loading: false,
      pagination,
      size: 'default',
      expandedRowRender,
      title: undefined,
      showHeader,
      footer,
      rowSelection: {},
      scroll: undefined
    });

    _defineProperty(this, "handleToggle", prop => {
      return enable => {
        this.setState({
          [prop]: enable
        });
      };
    });

    _defineProperty(this, "handleSizeChange", e => {
      this.setState({
        size: e.target.value
      });
    });

    _defineProperty(this, "handleExpandChange", enable => {
      this.setState({
        expandedRowRender: enable ? expandedRowRender : undefined
      });
    });

    _defineProperty(this, "handleTitleChange", enable => {
      this.setState({
        title: enable ? title : undefined
      });
    });

    _defineProperty(this, "handleHeaderChange", enable => {
      this.setState({
        showHeader: enable ? showHeader : false
      });
    });

    _defineProperty(this, "handleFooterChange", enable => {
      this.setState({
        footer: enable ? footer : undefined
      });
    });

    _defineProperty(this, "handleRowSelectionChange", enable => {
      this.setState({
        rowSelection: enable ? {} : undefined
      });
    });

    _defineProperty(this, "handleScollChange", enable => {
      this.setState({
        scroll: enable ? scroll : undefined
      });
    });

    _defineProperty(this, "handlePaginationChange", e => {
      const {
        value
      } = e.target;
      this.setState({
        pagination: value === 'none' ? false : {
          position: value
        }
      });
    });
  }

  render() {
    const state = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Dynamic"
    }, __jsx("div", {
      className: "components-table-demo-control-bar"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      layout: "inline"
    }, __jsx(FormItem, {
      label: "Bordered"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: state.bordered,
      onChange: this.handleToggle('bordered')
    })), __jsx(FormItem, {
      label: "loading"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: state.loading,
      onChange: this.handleToggle('loading')
    })), __jsx(FormItem, {
      label: "Title"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.title,
      onChange: this.handleTitleChange
    })), __jsx(FormItem, {
      label: "Column Header"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.showHeader,
      onChange: this.handleHeaderChange
    })), __jsx(FormItem, {
      label: "Footer"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.footer,
      onChange: this.handleFooterChange
    })), __jsx(FormItem, {
      label: "Expandable"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.expandedRowRender,
      onChange: this.handleExpandChange
    })), __jsx(FormItem, {
      label: "Checkbox"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.rowSelection,
      onChange: this.handleRowSelectionChange
    })), __jsx(FormItem, {
      label: "Fixed Header"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: !!state.scroll,
      onChange: this.handleScollChange
    })), __jsx(FormItem, {
      label: "Size"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
      size: "default",
      value: state.size,
      onChange: this.handleSizeChange
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "default"
    }, "Default"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "middle"
    }, "Middle"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "small"
    }, "Small"))), __jsx(FormItem, {
      label: "Pagination"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
      value: state.pagination ? state.pagination.position : 'none',
      onChange: this.handlePaginationChange
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "top"
    }, "Top"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "bottom"
    }, "Bottom"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "both"
    }, "Both"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: "none"
    }, "None"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], _extends({
      className: "gx-table-responsive"
    }, this.state, {
      columns: columns,
      dataSource: data
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dynamic);

/***/ }),

/***/ "./routes/components/table/Data/ExpandableRow.js":
/*!*******************************************************!*\
  !*** ./routes/components/table/Data/ExpandableRow.js ***!
  \*******************************************************/
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
  key: 'name'
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
  dataIndex: '',
  key: 'x',
  render: () => __jsx("span", {
    className: "gx-link"
  }, "Delete")
}];
const data = [{
  key: 1,
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
}, {
  key: 2,
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
}, {
  key: 3,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
}];

const ExpandableRow = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Expandable Row"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    expandedRowRender: record => __jsx("p", {
      style: {
        margin: 0
      }
    }, record.description),
    dataSource: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExpandableRow);

/***/ }),

/***/ "./routes/components/table/Data/FixColumn.js":
/*!***************************************************!*\
  !*** ./routes/components/table/Data/FixColumn.js ***!
  \***************************************************/
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
  title: 'Full Name',
  width: 100,
  dataIndex: 'name',
  key: 'name',
  fixed: 'left'
}, {
  title: 'Age',
  width: 100,
  dataIndex: 'age',
  key: 'age',
  fixed: 'left'
}, {
  title: 'Column 1',
  dataIndex: 'address',
  key: '1'
}, {
  title: 'Column 2',
  dataIndex: 'address',
  key: '2'
}, {
  title: 'Column 3',
  dataIndex: 'address',
  key: '3'
}, {
  title: 'Column 4',
  dataIndex: 'address',
  key: '4'
}, {
  title: 'Column 5',
  dataIndex: 'address',
  key: '5'
}, {
  title: 'Column 6',
  dataIndex: 'address',
  key: '6'
}, {
  title: 'Column 7',
  dataIndex: 'address',
  key: '7'
}, {
  title: 'Column 8',
  dataIndex: 'address',
  key: '8'
}, {
  title: 'Action',
  key: 'operation',
  fixed: 'right',
  width: 100,
  render: () => __jsx("span", {
    className: "gx-link"
  }, "action")
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park'
}];

const FixColumn = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Fix Column"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    scroll: {
      x: 1300
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FixColumn);

/***/ }),

/***/ "./routes/components/table/Data/FixHeader.js":
/*!***************************************************!*\
  !*** ./routes/components/table/Data/FixHeader.js ***!
  \***************************************************/
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
  width: 150
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150
}, {
  title: 'Address',
  dataIndex: 'address'
}];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const FixHeader = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Fix Header"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    dataSource: data,
    pagination: {
      pageSize: 50
    },
    scroll: {
      y: 240
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FixHeader);

/***/ }),

/***/ "./routes/components/table/Data/GroupTable.js":
/*!****************************************************!*\
  !*** ./routes/components/table/Data/GroupTable.js ***!
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
  key: 'name',
  width: 100,
  fixed: 'left',
  filters: [{
    text: 'Joe',
    value: 'Joe'
  }, {
    text: 'John',
    value: 'John'
  }],
  onFilter: (value, record) => record.name.indexOf(value) === 0
}, {
  title: 'Other',
  children: [{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: (a, b) => a.age - b.age
  }, {
    title: 'Address',
    children: [{
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 200
    }, {
      title: 'Block',
      children: [{
        title: 'Building',
        dataIndex: 'building',
        key: 'building',
        width: 100
      }, {
        title: 'Door No.',
        dataIndex: 'number',
        key: 'number',
        width: 100
      }]
    }]
  }]
}, {
  title: 'Company',
  children: [{
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress'
  }, {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName'
  }]
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  width: 60,
  fixed: 'right'
}];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M'
  });
}

const GroupTable = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Group Table"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    columns: columns,
    dataSource: data,
    bordered: true,
    size: "middle",
    scroll: {
      x: '130%',
      y: 240
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GroupTable);

/***/ }),

/***/ "./routes/components/table/Data/Operation.js":
/*!***************************************************!*\
  !*** ./routes/components/table/Data/Operation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class Operation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedRowKeys: [],
      // Check here to configure the CRM column
      loading: false
    });

    _defineProperty(this, "start", () => {
      this.setState({
        loading: true
      }); // ajax request after empty completing

      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: false
        });
      }, 1000);
    });

    _defineProperty(this, "onSelectChange", selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({
        selectedRowKeys
      });
    });
  }

  render() {
    const {
      loading,
      selectedRowKeys
    } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Operation"
    }, __jsx("div", {
      className: "gx-mb-3"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      onClick: this.start,
      disabled: !hasSelected,
      loading: loading
    }, "Reload"), __jsx("span", {
      style: {
        marginLeft: 8
      }
    }, hasSelected ? `Selected ${selectedRowKeys.length} items` : '')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      className: "gx-table-responsive",
      rowSelection: rowSelection,
      columns: columns,
      dataSource: data
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Operation);

/***/ }),

/***/ "./routes/components/table/Data/ResetFilter.js":
/*!*****************************************************!*\
  !*** ./routes/components/table/Data/ResetFilter.js ***!
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park'
}];

class ResetFilter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      filteredInfo: null,
      sortedInfo: null
    });

    _defineProperty(this, "handleChange", (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter
      });
    });

    _defineProperty(this, "clearFilters", () => {
      this.setState({
        filteredInfo: null
      });
    });

    _defineProperty(this, "clearAll", () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null
      });
    });

    _defineProperty(this, "setAgeSort", () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'age'
        }
      });
    });
  }

  render() {
    let {
      sortedInfo,
      filteredInfo
    } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [{
        text: 'Joe',
        value: 'Joe'
      }, {
        text: 'Jim',
        value: 'Jim'
      }],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [{
        text: 'London',
        value: 'London'
      }, {
        text: 'New York',
        value: 'New York'
      }],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order
    }];
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Reset Filter"
    }, __jsx("div", {
      className: "table-operations"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.setAgeSort
    }, "Sort age"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearFilters
    }, "Clear filters"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clearAll
    }, "Clear filters and sorters")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      className: "gx-table-responsive",
      columns: columns,
      dataSource: data,
      onChange: this.handleChange
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResetFilter);

/***/ }),

/***/ "./routes/components/table/Data/TreeData.js":
/*!**************************************************!*\
  !*** ./routes/components/table/Data/TreeData.js ***!
  \**************************************************/
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
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '12%'
}, {
  title: 'Address',
  dataIndex: 'address',
  width: '30%',
  key: 'address'
}];
const data = [{
  key: 1,
  name: 'John Brown sr.',
  age: 60,
  address: 'New York No. 1 Lake Park',
  children: [{
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park'
  }, {
    key: 12,
    name: 'John Brown jr.',
    age: 30,
    address: 'New York No. 3 Lake Park',
    children: [{
      key: 121,
      name: 'Jimmy Brown',
      age: 16,
      address: 'New York No. 3 Lake Park'
    }]
  }, {
    key: 13,
    name: 'Jim Green sr.',
    age: 72,
    address: 'London No. 1 Lake Park',
    children: [{
      key: 131,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park',
      children: [{
        key: 1311,
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park'
      }, {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park'
      }]
    }]
  }]
}, {
  key: 2,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}]; // rowSelection objects indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

const TreeData = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Tree Data"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-responsive",
    columns: columns,
    rowSelection: rowSelection,
    dataSource: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TreeData);

/***/ }),

/***/ "./routes/components/table/Data/index.js":
/*!***********************************************!*\
  !*** ./routes/components/table/Data/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FixHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixHeader */ "./routes/components/table/Data/FixHeader.js");
/* harmony import */ var _GroupTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupTable */ "./routes/components/table/Data/GroupTable.js");
/* harmony import */ var _Operation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Operation */ "./routes/components/table/Data/Operation.js");
/* harmony import */ var _Dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dynamic */ "./routes/components/table/Data/Dynamic.js");
/* harmony import */ var _CustomSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomSelection */ "./routes/components/table/Data/CustomSelection.js");
/* harmony import */ var _ResetFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ResetFilter */ "./routes/components/table/Data/ResetFilter.js");
/* harmony import */ var _ExpandableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExpandableRow */ "./routes/components/table/Data/ExpandableRow.js");
/* harmony import */ var _TreeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TreeData */ "./routes/components/table/Data/TreeData.js");
/* harmony import */ var _FixColumn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FixColumn */ "./routes/components/table/Data/FixColumn.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const DataTable = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_FixHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_GroupTable__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Operation__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Dynamic__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_CustomSelection__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_ResetFilter__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_ExpandableRow__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_TreeData__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_FixColumn__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DataTable);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy90YWJsZS9kYXRhLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0RhdGEvQ3VzdG9tU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0RhdGEvRHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9EYXRhL0V4cGFuZGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvRGF0YS9GaXhDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvRGF0YS9GaXhIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvRGF0YS9Hcm91cFRhYmxlLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0RhdGEvT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0RhdGEvUmVzZXRGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2NvbXBvbmVudHMvdGFibGUvRGF0YS9UcmVlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvY29tcG9uZW50cy90YWJsZS9EYXRhL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiRGF0YVBhZ2UiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJkYXRhIiwiaSIsInB1c2giLCJrZXkiLCJuYW1lIiwiYWdlIiwiYWRkcmVzcyIsIkN1c3RvbVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic2VsZWN0ZWRSb3dLZXlzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhdGUiLCJyb3dTZWxlY3Rpb24iLCJvbkNoYW5nZSIsIm9uU2VsZWN0Q2hhbmdlIiwiaGlkZURlZmF1bHRTZWxlY3Rpb25zIiwic2VsZWN0aW9ucyIsInRleHQiLCJvblNlbGVjdCIsIkFycmF5Iiwia2V5cyIsImNoYW5nYWJsZVJvd0tleXMiLCJuZXdTZWxlY3RlZFJvd0tleXMiLCJmaWx0ZXIiLCJpbmRleCIsIm9uU2VsZWN0aW9uIiwiRm9ybUl0ZW0iLCJGb3JtIiwiSXRlbSIsIndpZHRoIiwicmVjb3JkIiwiZGVzY3JpcHRpb24iLCJleHBhbmRlZFJvd1JlbmRlciIsInNob3dIZWFkZXIiLCJmb290ZXIiLCJzY3JvbGwiLCJ5IiwicGFnaW5hdGlvbiIsInBvc2l0aW9uIiwiRHluYW1pYyIsImJvcmRlcmVkIiwibG9hZGluZyIsInNpemUiLCJ1bmRlZmluZWQiLCJwcm9wIiwiZW5hYmxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJoYW5kbGVIZWFkZXJDaGFuZ2UiLCJoYW5kbGVGb290ZXJDaGFuZ2UiLCJoYW5kbGVFeHBhbmRDaGFuZ2UiLCJoYW5kbGVSb3dTZWxlY3Rpb25DaGFuZ2UiLCJoYW5kbGVTY29sbENoYW5nZSIsImhhbmRsZVNpemVDaGFuZ2UiLCJoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlIiwiRXhwYW5kYWJsZVJvdyIsIm1hcmdpbiIsImZpeGVkIiwiRml4Q29sdW1uIiwieCIsIkZpeEhlYWRlciIsInBhZ2VTaXplIiwiZmlsdGVycyIsIm9uRmlsdGVyIiwiaW5kZXhPZiIsImNoaWxkcmVuIiwic29ydGVyIiwiYSIsImIiLCJzdHJlZXQiLCJidWlsZGluZyIsIm51bWJlciIsImNvbXBhbnlBZGRyZXNzIiwiY29tcGFueU5hbWUiLCJnZW5kZXIiLCJHcm91cFRhYmxlIiwiT3BlcmF0aW9uIiwic2V0VGltZW91dCIsImhhc1NlbGVjdGVkIiwibGVuZ3RoIiwic3RhcnQiLCJtYXJnaW5MZWZ0IiwiUmVzZXRGaWx0ZXIiLCJmaWx0ZXJlZEluZm8iLCJzb3J0ZWRJbmZvIiwib3JkZXIiLCJjb2x1bW5LZXkiLCJmaWx0ZXJlZFZhbHVlIiwiaW5jbHVkZXMiLCJzb3J0T3JkZXIiLCJzZXRBZ2VTb3J0IiwiY2xlYXJGaWx0ZXJzIiwiY2xlYXJBbGwiLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3RlZFJvd3MiLCJzZWxlY3RlZCIsIm9uU2VsZWN0QWxsIiwiY2hhbmdlUm93cyIsIlRyZWVEYXRhIiwiRGF0YVRhYmxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEs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TUFBQyx3Q0FBRCxRQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNFLE1BQUMsa0RBQUQsT0FERixDQURGLEVBSUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyxtREFBRCxPQURGLENBSkYsRUFPRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFO0FBQVgsS0FDRSxNQUFDLGtEQUFELE9BREYsQ0FQRixFQVVFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNFLE1BQUMsZ0RBQUQsT0FERixDQVZGLEVBYUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyx3REFBRCxPQURGLENBYkYsRUFnQkUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyxvREFBRCxPQURGLENBaEJGLEVBbUJFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNFLE1BQUMsc0RBQUQsT0FERixDQW5CRixFQXNCRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFO0FBQVgsS0FDRSxNQUFDLGlEQUFELE9BREYsQ0F0QkYsRUF5QkUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRTtBQUFYLEtBQ0UsTUFBQyxtREFBRCxPQURGLENBekJGLENBREY7QUErQkQsQ0FoQ0Q7O0FBa0NlQSx3RUFBZixFOzs7Ozs7Ozs7OztBQ2hEQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jb21wb25lbnRzL3RhYmxlL2RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvbXBvbmVudHMvdGFibGUvZGF0YS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9jb21wb25lbnRzL3RhYmxlL0RhdGEnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGF0YVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRhdGE8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxEYXRhLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbe1xyXG4gIHRpdGxlOiAnTmFtZScsXHJcbiAgZGF0YUluZGV4OiAnbmFtZScsXHJcbn0sIHtcclxuICB0aXRsZTogJ0FnZScsXHJcbiAgZGF0YUluZGV4OiAnYWdlJyxcclxufSwge1xyXG4gIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcbn1dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDQ2OyBpKyspIHtcclxuICBkYXRhLnB1c2goe1xyXG4gICAga2V5OiBpLFxyXG4gICAgbmFtZTogYEVkd2FyZCBLaW5nICR7aX1gLFxyXG4gICAgYWdlOiAzMixcclxuICAgIGFkZHJlc3M6IGBMb25kb24sIFBhcmsgTGFuZSBuby4gJHtpfWAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNsYXNzIEN1c3RvbVNlbGVjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZWxlY3RlZFJvd0tleXM6IFtdLCAvLyBDaGVjayBoZXJlIHRvIGNvbmZpZ3VyZSB0aGUgQ1JNIGNvbHVtblxyXG4gIH07XHJcbiAgb25TZWxlY3RDaGFuZ2UgPSAoc2VsZWN0ZWRSb3dLZXlzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRSb3dLZXlzIGNoYW5nZWQ6ICcsIHNlbGVjdGVkUm93S2V5cyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFJvd0tleXN9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7c2VsZWN0ZWRSb3dLZXlzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcclxuICAgICAgb25DaGFuZ2U6IHRoaXMub25TZWxlY3RDaGFuZ2UsXHJcbiAgICAgIGhpZGVEZWZhdWx0U2VsZWN0aW9uczogdHJ1ZSxcclxuICAgICAgc2VsZWN0aW9uczogW3tcclxuICAgICAgICBrZXk6ICdhbGwtZGF0YScsXHJcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBBbGwgRGF0YScsXHJcbiAgICAgICAgb25TZWxlY3Q6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM6IFsuLi5BcnJheSg0Nikua2V5cygpXSwgLy8gMC4uLjQ1XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnb2RkJyxcclxuICAgICAgICB0ZXh0OiAnU2VsZWN0IE9kZCBSb3cnLFxyXG4gICAgICAgIG9uU2VsZWN0OiAoY2hhbmdhYmxlUm93S2V5cykgPT4ge1xyXG4gICAgICAgICAgbGV0IG5ld1NlbGVjdGVkUm93S2V5cyA9IFtdO1xyXG4gICAgICAgICAgbmV3U2VsZWN0ZWRSb3dLZXlzID0gY2hhbmdhYmxlUm93S2V5cy5maWx0ZXIoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICUgMiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRSb3dLZXlzOiBuZXdTZWxlY3RlZFJvd0tleXN9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnZXZlbicsXHJcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBFdmVuIFJvdycsXHJcbiAgICAgICAgb25TZWxlY3Q6IChjaGFuZ2FibGVSb3dLZXlzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbmV3U2VsZWN0ZWRSb3dLZXlzID0gW107XHJcbiAgICAgICAgICBuZXdTZWxlY3RlZFJvd0tleXMgPSBjaGFuZ2FibGVSb3dLZXlzLmZpbHRlcigoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFJvd0tleXM6IG5ld1NlbGVjdGVkUm93S2V5c30pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH1dLFxyXG4gICAgICBvblNlbGVjdGlvbjogdGhpcy5vblNlbGVjdGlvbixcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZCB0aXRsZT1cIkN1c3RvbSBTZWxlY3Rpb25cIj5cclxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIHJvd1NlbGVjdGlvbj17cm93U2VsZWN0aW9ufSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfS8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TZWxlY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBEaXZpZGVyLCBGb3JtLCBSYWRpbywgU3dpdGNoLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW3tcclxuICB0aXRsZTogJ05hbWUnLFxyXG4gIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gIGtleTogJ25hbWUnLFxyXG4gIHdpZHRoOiAxNTAsXHJcbiAgcmVuZGVyOiB0ZXh0ID0+IDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj57dGV4dH08L3NwYW4+LFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZ2UnLFxyXG4gIGRhdGFJbmRleDogJ2FnZScsXHJcbiAga2V5OiAnYWdlJyxcclxuICB3aWR0aDogNzAsXHJcbn0sIHtcclxuICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG4gIGtleTogJ2FkZHJlc3MnLFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBY3Rpb24nLFxyXG4gIGtleTogJ2FjdGlvbicsXHJcbiAgd2lkdGg6IDM2MCxcclxuICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgIDxzcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJneC1saW5rXCI+QWN0aW9uIOS4gCB7cmVjb3JkLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIi8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj5EZWxldGU8L3NwYW4+XHJcbiAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGluayBhbnQtZHJvcGRvd24tbGlua1wiPlxyXG4gICAgICAgIE1vcmUgYWN0aW9ucyA8SWNvbiB0eXBlPVwiZG93blwiLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICksXHJcbn1dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHJcbiAgZGF0YS5wdXNoKHtcclxuICAgIGtleTogaSxcclxuICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgIGFnZTogYCR7aX0yYCxcclxuICAgIGFkZHJlc3M6IGBOZXcgWW9yayBOby4gJHtpfSBMYWtlIFBhcmtgLFxyXG4gICAgZGVzY3JpcHRpb246IGBNeSBuYW1lIGlzIEpvaG4gQnJvd24sIEkgYW0gJHtpfTIgeWVhcnMgb2xkLCBsaXZpbmcgaW4gTmV3IFlvcmsgTm8uICR7aX0gTGFrZSBQYXJrLmAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGV4cGFuZGVkUm93UmVuZGVyID0gcmVjb3JkID0+IDxwPntyZWNvcmQuZGVzY3JpcHRpb259PC9wPjtcclxuY29uc3QgdGl0bGUgPSAoKSA9PiAnSGVyZSBpcyB0aXRsZSc7XHJcbmNvbnN0IHNob3dIZWFkZXIgPSB0cnVlO1xyXG5jb25zdCBmb290ZXIgPSAoKSA9PiAnSGVyZSBpcyBmb290ZXInO1xyXG5jb25zdCBzY3JvbGwgPSB7eTogMjQwfTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHtwb3NpdGlvbjogJ2JvdHRvbSd9O1xyXG5cclxuY2xhc3MgRHluYW1pYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBib3JkZXJlZDogZmFsc2UsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHBhZ2luYXRpb24sXHJcbiAgICBzaXplOiAnZGVmYXVsdCcsXHJcbiAgICBleHBhbmRlZFJvd1JlbmRlcixcclxuICAgIHRpdGxlOiB1bmRlZmluZWQsXHJcbiAgICBzaG93SGVhZGVyLFxyXG4gICAgZm9vdGVyLFxyXG4gICAgcm93U2VsZWN0aW9uOiB7fSxcclxuICAgIHNjcm9sbDogdW5kZWZpbmVkLFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVRvZ2dsZSA9IChwcm9wKSA9PiB7XHJcbiAgICByZXR1cm4gKGVuYWJsZSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtbcHJvcF06IGVuYWJsZX0pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaXplQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3NpemU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRXhwYW5kQ2hhbmdlID0gKGVuYWJsZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRSb3dSZW5kZXI6IGVuYWJsZSA/IGV4cGFuZGVkUm93UmVuZGVyIDogdW5kZWZpbmVkfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVGl0bGVDaGFuZ2UgPSAoZW5hYmxlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogZW5hYmxlID8gdGl0bGUgOiB1bmRlZmluZWR9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVIZWFkZXJDaGFuZ2UgPSAoZW5hYmxlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93SGVhZGVyOiBlbmFibGUgPyBzaG93SGVhZGVyIDogZmFsc2V9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGb290ZXJDaGFuZ2UgPSAoZW5hYmxlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtmb290ZXI6IGVuYWJsZSA/IGZvb3RlciA6IHVuZGVmaW5lZH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJvd1NlbGVjdGlvbkNoYW5nZSA9IChlbmFibGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Jvd1NlbGVjdGlvbjogZW5hYmxlID8ge30gOiB1bmRlZmluZWR9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTY29sbENoYW5nZSA9IChlbmFibGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Njcm9sbDogZW5hYmxlID8gc2Nyb2xsIDogdW5kZWZpbmVkfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdmFsdWUgPT09ICdub25lJyA/IGZhbHNlIDoge3Bvc2l0aW9uOiB2YWx1ZX0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZCB0aXRsZT1cIkR5bmFtaWNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdGFibGUtZGVtby1jb250cm9sLWJhclwiPlxyXG4gICAgICAgICAgPEZvcm0gbGF5b3V0PVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIkJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtzdGF0ZS5ib3JkZXJlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVG9nZ2xlKCdib3JkZXJlZCcpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3N0YXRlLmxvYWRpbmd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRvZ2dsZSgnbG9hZGluZycpfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIlRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIXN0YXRlLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCJDb2x1bW4gSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIXN0YXRlLnNob3dIZWFkZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUhlYWRlckNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCJGb290ZXJcIj5cclxuICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9eyEhc3RhdGUuZm9vdGVyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb290ZXJDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgPEZvcm1JdGVtIGxhYmVsPVwiRXhwYW5kYWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17ISFzdGF0ZS5leHBhbmRlZFJvd1JlbmRlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRXhwYW5kQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIkNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIXN0YXRlLnJvd1NlbGVjdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUm93U2VsZWN0aW9uQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIkZpeGVkIEhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17ISFzdGF0ZS5zY3JvbGx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjb2xsQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIlNpemVcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgc2l6ZT1cImRlZmF1bHRcIiB2YWx1ZT17c3RhdGUuc2l6ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2l6ZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJtaWRkbGVcIj5NaWRkbGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJzbWFsbFwiPlNtYWxsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgPEZvcm1JdGVtIGxhYmVsPVwiUGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBhZ2luYXRpb24gPyBzdGF0ZS5wYWdpbmF0aW9uLnBvc2l0aW9uIDogJ25vbmUnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFnaW5hdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwidG9wXCI+VG9wPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiYm90dG9tXCI+Qm90dG9tPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiYm90aFwiPkJvdGg8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJub25lXCI+Tm9uZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImd4LXRhYmxlLXJlc3BvbnNpdmVcIiB7Li4udGhpcy5zdGF0ZX0gY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YX0vPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pYztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsIFRhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7dGl0bGU6ICdOYW1lJywgZGF0YUluZGV4OiAnbmFtZScsIGtleTogJ25hbWUnfSxcclxuICB7dGl0bGU6ICdBZ2UnLCBkYXRhSW5kZXg6ICdhZ2UnLCBrZXk6ICdhZ2UnfSxcclxuICB7dGl0bGU6ICdBZGRyZXNzJywgZGF0YUluZGV4OiAnYWRkcmVzcycsIGtleTogJ2FkZHJlc3MnfSxcclxuICB7dGl0bGU6ICdBY3Rpb24nLCBkYXRhSW5kZXg6ICcnLCBrZXk6ICd4JywgcmVuZGVyOiAoKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJneC1saW5rXCI+RGVsZXRlPC9zcGFuPn0sXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGtleTogMSxcclxuICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgIGFnZTogMzIsXHJcbiAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnTXkgbmFtZSBpcyBKb2huIEJyb3duLCBJIGFtIDMyIHllYXJzIG9sZCwgbGl2aW5nIGluIE5ldyBZb3JrIE5vLiAxIExha2UgUGFyay4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDIsXHJcbiAgICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICAgIGFnZTogNDIsXHJcbiAgICBhZGRyZXNzOiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ015IG5hbWUgaXMgSmltIEdyZWVuLCBJIGFtIDQyIHllYXJzIG9sZCwgbGl2aW5nIGluIExvbmRvbiBOby4gMSBMYWtlIFBhcmsuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAzLFxyXG4gICAgbmFtZTogJ0pvZSBCbGFjaycsXHJcbiAgICBhZ2U6IDMyLFxyXG4gICAgYWRkcmVzczogJ1NpZG5leSBOby4gMSBMYWtlIFBhcmsnLFxyXG4gICAgZGVzY3JpcHRpb246ICdNeSBuYW1lIGlzIEpvZSBCbGFjaywgSSBhbSAzMiB5ZWFycyBvbGQsIGxpdmluZyBpbiBTaWRuZXkgTm8uIDEgTGFrZSBQYXJrLidcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgRXhwYW5kYWJsZVJvdyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgdGl0bGU9XCJFeHBhbmRhYmxlIFJvd1wiPlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgZXhwYW5kZWRSb3dSZW5kZXI9e3JlY29yZCA9PiA8cCBzdHlsZT17e21hcmdpbjogMH19PntyZWNvcmQuZGVzY3JpcHRpb259PC9wPn1cclxuICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVSb3c7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAge3RpdGxlOiAnRnVsbCBOYW1lJywgd2lkdGg6IDEwMCwgZGF0YUluZGV4OiAnbmFtZScsIGtleTogJ25hbWUnLCBmaXhlZDogJ2xlZnQnfSxcclxuICB7dGl0bGU6ICdBZ2UnLCB3aWR0aDogMTAwLCBkYXRhSW5kZXg6ICdhZ2UnLCBrZXk6ICdhZ2UnLCBmaXhlZDogJ2xlZnQnfSxcclxuICB7dGl0bGU6ICdDb2x1bW4gMScsIGRhdGFJbmRleDogJ2FkZHJlc3MnLCBrZXk6ICcxJ30sXHJcbiAge3RpdGxlOiAnQ29sdW1uIDInLCBkYXRhSW5kZXg6ICdhZGRyZXNzJywga2V5OiAnMid9LFxyXG4gIHt0aXRsZTogJ0NvbHVtbiAzJywgZGF0YUluZGV4OiAnYWRkcmVzcycsIGtleTogJzMnfSxcclxuICB7dGl0bGU6ICdDb2x1bW4gNCcsIGRhdGFJbmRleDogJ2FkZHJlc3MnLCBrZXk6ICc0J30sXHJcbiAge3RpdGxlOiAnQ29sdW1uIDUnLCBkYXRhSW5kZXg6ICdhZGRyZXNzJywga2V5OiAnNSd9LFxyXG4gIHt0aXRsZTogJ0NvbHVtbiA2JywgZGF0YUluZGV4OiAnYWRkcmVzcycsIGtleTogJzYnfSxcclxuICB7dGl0bGU6ICdDb2x1bW4gNycsIGRhdGFJbmRleDogJ2FkZHJlc3MnLCBrZXk6ICc3J30sXHJcbiAge3RpdGxlOiAnQ29sdW1uIDgnLCBkYXRhSW5kZXg6ICdhZGRyZXNzJywga2V5OiAnOCd9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQWN0aW9uJyxcclxuICAgIGtleTogJ29wZXJhdGlvbicsXHJcbiAgICBmaXhlZDogJ3JpZ2h0JyxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICByZW5kZXI6ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cImd4LWxpbmtcIj5hY3Rpb248L3NwYW4+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW3tcclxuICBrZXk6ICcxJyxcclxuICBuYW1lOiAnSm9obiBCcm93bicsXHJcbiAgYWdlOiAzMixcclxuICBhZGRyZXNzOiAnTmV3IFlvcmsgUGFyaycsXHJcbn0sIHtcclxuICBrZXk6ICcyJyxcclxuICBuYW1lOiAnSmltIEdyZWVuJyxcclxuICBhZ2U6IDQwLFxyXG4gIGFkZHJlc3M6ICdMb25kb24gUGFyaycsXHJcbn1dO1xyXG5cclxuY29uc3QgRml4Q29sdW1uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB0aXRsZT1cIkZpeCBDb2x1bW5cIj5cclxuICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IHNjcm9sbD17e3g6IDEzMDB9fS8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpeENvbHVtbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsIFRhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFt7XHJcbiAgdGl0bGU6ICdOYW1lJyxcclxuICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICB3aWR0aDogMTUwLFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZ2UnLFxyXG4gIGRhdGFJbmRleDogJ2FnZScsXHJcbiAgd2lkdGg6IDE1MCxcclxufSwge1xyXG4gIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcbn1dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgZGF0YS5wdXNoKHtcclxuICAgIGtleTogaSxcclxuICAgIG5hbWU6IGBFZHdhcmQgS2luZyAke2l9YCxcclxuICAgIGFnZTogMzIsXHJcbiAgICBhZGRyZXNzOiBgTG9uZG9uLCBQYXJrIExhbmUgbm8uICR7aX1gLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBGaXhIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHRpdGxlPVwiRml4IEhlYWRlclwiPlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IHBhZ2luYXRpb249e3twYWdlU2l6ZTogNTB9fVxyXG4gICAgICAgICAgICAgc2Nyb2xsPXt7eTogMjQwfX0vPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXhIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbe1xyXG4gIHRpdGxlOiAnTmFtZScsXHJcbiAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAga2V5OiAnbmFtZScsXHJcbiAgd2lkdGg6IDEwMCxcclxuICBmaXhlZDogJ2xlZnQnLFxyXG4gIGZpbHRlcnM6IFt7XHJcbiAgICB0ZXh0OiAnSm9lJyxcclxuICAgIHZhbHVlOiAnSm9lJyxcclxuICB9LCB7XHJcbiAgICB0ZXh0OiAnSm9obicsXHJcbiAgICB2YWx1ZTogJ0pvaG4nLFxyXG4gIH1dLFxyXG4gIG9uRmlsdGVyOiAodmFsdWUsIHJlY29yZCkgPT4gcmVjb3JkLm5hbWUuaW5kZXhPZih2YWx1ZSkgPT09IDAsXHJcbn0sIHtcclxuICB0aXRsZTogJ090aGVyJyxcclxuXHJcbiAgY2hpbGRyZW46IFt7XHJcbiAgICB0aXRsZTogJ0FnZScsXHJcbiAgICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG4gICAga2V5OiAnYWdlJyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBzb3J0ZXI6IChhLCBiKSA9PiBhLmFnZSAtIGIuYWdlLFxyXG4gIH0sIHtcclxuICAgIHRpdGxlOiAnQWRkcmVzcycsXHJcbiAgICBjaGlsZHJlbjogW3tcclxuICAgICAgdGl0bGU6ICdTdHJlZXQnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdzdHJlZXQnLFxyXG4gICAgICBrZXk6ICdzdHJlZXQnLFxyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgfSwge1xyXG4gICAgICB0aXRsZTogJ0Jsb2NrJyxcclxuICAgICAgY2hpbGRyZW46IFt7XHJcbiAgICAgICAgdGl0bGU6ICdCdWlsZGluZycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnYnVpbGRpbmcnLFxyXG4gICAgICAgIGtleTogJ2J1aWxkaW5nJyxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICdEb29yIE5vLicsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnbnVtYmVyJyxcclxuICAgICAgICBrZXk6ICdudW1iZXInLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgfV0sXHJcbn0sIHtcclxuICB0aXRsZTogJ0NvbXBhbnknLFxyXG4gIGNoaWxkcmVuOiBbe1xyXG4gICAgdGl0bGU6ICdDb21wYW55IEFkZHJlc3MnLFxyXG4gICAgZGF0YUluZGV4OiAnY29tcGFueUFkZHJlc3MnLFxyXG4gICAga2V5OiAnY29tcGFueUFkZHJlc3MnLFxyXG4gIH0sIHtcclxuICAgIHRpdGxlOiAnQ29tcGFueSBOYW1lJyxcclxuICAgIGRhdGFJbmRleDogJ2NvbXBhbnlOYW1lJyxcclxuICAgIGtleTogJ2NvbXBhbnlOYW1lJyxcclxuICB9XSxcclxufSwge1xyXG4gIHRpdGxlOiAnR2VuZGVyJyxcclxuICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gIGtleTogJ2dlbmRlcicsXHJcbiAgd2lkdGg6IDYwLFxyXG4gIGZpeGVkOiAncmlnaHQnLFxyXG59XTtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gIGRhdGEucHVzaCh7XHJcbiAgICBrZXk6IGksXHJcbiAgICBuYW1lOiAnSm9obiBCcm93bicsXHJcbiAgICBhZ2U6IGkgKyAxLFxyXG4gICAgc3RyZWV0OiAnTGFrZSBQYXJrJyxcclxuICAgIGJ1aWxkaW5nOiAnQycsXHJcbiAgICBudW1iZXI6IDIwMzUsXHJcbiAgICBjb21wYW55QWRkcmVzczogJ0xha2UgU3RyZWV0IDQyJyxcclxuICAgIGNvbXBhbnlOYW1lOiAnU29mdExha2UgQ28nLFxyXG4gICAgZ2VuZGVyOiAnTScsXHJcbiAgfSk7XHJcbn1cclxuY29uc3QgR3JvdXBUYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgdGl0bGU9XCJHcm91cCBUYWJsZVwiPlxyXG4gICAgICA8VGFibGVcclxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICBzaXplPVwibWlkZGxlXCJcclxuICAgICAgICBzY3JvbGw9e3t4OiAnMTMwJScsIHk6IDI0MH19XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwVGFibGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsIFRhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFt7XHJcbiAgdGl0bGU6ICdOYW1lJyxcclxuICBkYXRhSW5kZXg6ICduYW1lJyxcclxufSwge1xyXG4gIHRpdGxlOiAnQWdlJyxcclxuICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZGRyZXNzJyxcclxuICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxufV07XHJcblxyXG5jb25zdCBkYXRhID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNDY7IGkrKykge1xyXG4gIGRhdGEucHVzaCh7XHJcbiAgICBrZXk6IGksXHJcbiAgICBuYW1lOiBgRWR3YXJkIEtpbmcgJHtpfWAsXHJcbiAgICBhZ2U6IDMyLFxyXG4gICAgYWRkcmVzczogYExvbmRvbiwgUGFyayBMYW5lIG5vLiAke2l9YCxcclxuICB9KTtcclxufVxyXG5cclxuY2xhc3MgT3BlcmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNlbGVjdGVkUm93S2V5czogW10sIC8vIENoZWNrIGhlcmUgdG8gY29uZmlndXJlIHRoZSBDUk0gY29sdW1uXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICB9O1xyXG4gIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgLy8gYWpheCByZXF1ZXN0IGFmdGVyIGVtcHR5IGNvbXBsZXRpbmdcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IFtdLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcbiAgb25TZWxlY3RDaGFuZ2UgPSAoc2VsZWN0ZWRSb3dLZXlzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRSb3dLZXlzIGNoYW5nZWQ6ICcsIHNlbGVjdGVkUm93S2V5cyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFJvd0tleXN9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7bG9hZGluZywgc2VsZWN0ZWRSb3dLZXlzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcclxuICAgICAgb25DaGFuZ2U6IHRoaXMub25TZWxlY3RDaGFuZ2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFzU2VsZWN0ZWQgPSBzZWxlY3RlZFJvd0tleXMubGVuZ3RoID4gMDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkIHRpdGxlPVwiT3BlcmF0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYi0zXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGFydH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVsb2FkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luTGVmdDogOH19PlxyXG4gICAgICAgICAgICB7aGFzU2VsZWN0ZWQgPyBgU2VsZWN0ZWQgJHtzZWxlY3RlZFJvd0tleXMubGVuZ3RofSBpdGVtc2AgOiAnJ31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIHJvd1NlbGVjdGlvbj17cm93U2VsZWN0aW9ufSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfS8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBUYWJsZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbe1xyXG4gIGtleTogJzEnLFxyXG4gIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICBhZ2U6IDMyLFxyXG4gIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG59LCB7XHJcbiAga2V5OiAnMicsXHJcbiAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgYWdlOiA0MixcclxuICBhZGRyZXNzOiAnTG9uZG9uIE5vLiAxIExha2UgUGFyaycsXHJcbn0sIHtcclxuICBrZXk6ICczJyxcclxuICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICBhZ2U6IDMyLFxyXG4gIGFkZHJlc3M6ICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJyxcclxufSwge1xyXG4gIGtleTogJzQnLFxyXG4gIG5hbWU6ICdKaW0gUmVkJyxcclxuICBhZ2U6IDMyLFxyXG4gIGFkZHJlc3M6ICdMb25kb24gTm8uIDIgTGFrZSBQYXJrJyxcclxufV07XHJcblxyXG5jbGFzcyBSZXNldEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaWx0ZXJlZEluZm86IG51bGwsXHJcbiAgICBzb3J0ZWRJbmZvOiBudWxsLFxyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1ZhcmlvdXMgcGFyYW1ldGVycycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlsdGVyZWRJbmZvOiBmaWx0ZXJzLFxyXG4gICAgICBzb3J0ZWRJbmZvOiBzb3J0ZXIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNsZWFyRmlsdGVycyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcmVkSW5mbzogbnVsbH0pO1xyXG4gIH07XHJcbiAgY2xlYXJBbGwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlsdGVyZWRJbmZvOiBudWxsLFxyXG4gICAgICBzb3J0ZWRJbmZvOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBzZXRBZ2VTb3J0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNvcnRlZEluZm86IHtcclxuICAgICAgICBvcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgICAgIGNvbHVtbktleTogJ2FnZScsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge3NvcnRlZEluZm8sIGZpbHRlcmVkSW5mb30gPSB0aGlzLnN0YXRlO1xyXG4gICAgc29ydGVkSW5mbyA9IHNvcnRlZEluZm8gfHwge307XHJcbiAgICBmaWx0ZXJlZEluZm8gPSBmaWx0ZXJlZEluZm8gfHwge307XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW3tcclxuICAgICAgdGl0bGU6ICdOYW1lJyxcclxuICAgICAgZGF0YUluZGV4OiAnbmFtZScsXHJcbiAgICAgIGtleTogJ25hbWUnLFxyXG4gICAgICBmaWx0ZXJzOiBbXHJcbiAgICAgICAge3RleHQ6ICdKb2UnLCB2YWx1ZTogJ0pvZSd9LFxyXG4gICAgICAgIHt0ZXh0OiAnSmltJywgdmFsdWU6ICdKaW0nfSxcclxuICAgICAgXSxcclxuICAgICAgZmlsdGVyZWRWYWx1ZTogZmlsdGVyZWRJbmZvLm5hbWUgfHwgbnVsbCxcclxuICAgICAgb25GaWx0ZXI6ICh2YWx1ZSwgcmVjb3JkKSA9PiByZWNvcmQubmFtZS5pbmNsdWRlcyh2YWx1ZSksXHJcbiAgICAgIHNvcnRlcjogKGEsIGIpID0+IGEubmFtZS5sZW5ndGggLSBiLm5hbWUubGVuZ3RoLFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlZEluZm8uY29sdW1uS2V5ID09PSAnbmFtZScgJiYgc29ydGVkSW5mby5vcmRlcixcclxuICAgIH0sIHtcclxuICAgICAgdGl0bGU6ICdBZ2UnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdhZ2UnLFxyXG4gICAgICBrZXk6ICdhZ2UnLFxyXG4gICAgICBzb3J0ZXI6IChhLCBiKSA9PiBhLmFnZSAtIGIuYWdlLFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlZEluZm8uY29sdW1uS2V5ID09PSAnYWdlJyAmJiBzb3J0ZWRJbmZvLm9yZGVyLFxyXG4gICAgfSwge1xyXG4gICAgICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcclxuICAgICAga2V5OiAnYWRkcmVzcycsXHJcbiAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICB7dGV4dDogJ0xvbmRvbicsIHZhbHVlOiAnTG9uZG9uJ30sXHJcbiAgICAgICAge3RleHQ6ICdOZXcgWW9yaycsIHZhbHVlOiAnTmV3IFlvcmsnfSxcclxuICAgICAgXSxcclxuICAgICAgZmlsdGVyZWRWYWx1ZTogZmlsdGVyZWRJbmZvLmFkZHJlc3MgfHwgbnVsbCxcclxuICAgICAgb25GaWx0ZXI6ICh2YWx1ZSwgcmVjb3JkKSA9PiByZWNvcmQuYWRkcmVzcy5pbmNsdWRlcyh2YWx1ZSksXHJcbiAgICAgIHNvcnRlcjogKGEsIGIpID0+IGEuYWRkcmVzcy5sZW5ndGggLSBiLmFkZHJlc3MubGVuZ3RoLFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlZEluZm8uY29sdW1uS2V5ID09PSAnYWRkcmVzcycgJiYgc29ydGVkSW5mby5vcmRlcixcclxuICAgIH1dO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQgdGl0bGU9XCJSZXNldCBGaWx0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLW9wZXJhdGlvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zZXRBZ2VTb3J0fT5Tb3J0IGFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyRmlsdGVyc30+Q2xlYXIgZmlsdGVyczwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyQWxsfT5DbGVhciBmaWx0ZXJzIGFuZCBzb3J0ZXJzPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cImd4LXRhYmxlLXJlc3BvbnNpdmVcIiBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2V0RmlsdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgVGFibGV9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW3tcclxuICB0aXRsZTogJ05hbWUnLFxyXG4gIGRhdGFJbmRleDogJ25hbWUnLFxyXG4gIGtleTogJ25hbWUnLFxyXG59LCB7XHJcbiAgdGl0bGU6ICdBZ2UnLFxyXG4gIGRhdGFJbmRleDogJ2FnZScsXHJcbiAga2V5OiAnYWdlJyxcclxuICB3aWR0aDogJzEyJScsXHJcbn0sIHtcclxuICB0aXRsZTogJ0FkZHJlc3MnLFxyXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxyXG4gIHdpZHRoOiAnMzAlJyxcclxuICBrZXk6ICdhZGRyZXNzJyxcclxufV07XHJcblxyXG5jb25zdCBkYXRhID0gW3tcclxuICBrZXk6IDEsXHJcbiAgbmFtZTogJ0pvaG4gQnJvd24gc3IuJyxcclxuICBhZ2U6IDYwLFxyXG4gIGFkZHJlc3M6ICdOZXcgWW9yayBOby4gMSBMYWtlIFBhcmsnLFxyXG4gIGNoaWxkcmVuOiBbe1xyXG4gICAga2V5OiAxMSxcclxuICAgIG5hbWU6ICdKb2huIEJyb3duJyxcclxuICAgIGFnZTogNDIsXHJcbiAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDIgTGFrZSBQYXJrJyxcclxuICB9LCB7XHJcbiAgICBrZXk6IDEyLFxyXG4gICAgbmFtZTogJ0pvaG4gQnJvd24ganIuJyxcclxuICAgIGFnZTogMzAsXHJcbiAgICBhZGRyZXNzOiAnTmV3IFlvcmsgTm8uIDMgTGFrZSBQYXJrJyxcclxuICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICBrZXk6IDEyMSxcclxuICAgICAgbmFtZTogJ0ppbW15IEJyb3duJyxcclxuICAgICAgYWdlOiAxNixcclxuICAgICAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAzIExha2UgUGFyaycsXHJcbiAgICB9XSxcclxuICB9LCB7XHJcbiAgICBrZXk6IDEzLFxyXG4gICAgbmFtZTogJ0ppbSBHcmVlbiBzci4nLFxyXG4gICAgYWdlOiA3MixcclxuICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDEgTGFrZSBQYXJrJyxcclxuICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICBrZXk6IDEzMSxcclxuICAgICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICAgIGFnZTogNDIsXHJcbiAgICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDIgTGFrZSBQYXJrJyxcclxuICAgICAgY2hpbGRyZW46IFt7XHJcbiAgICAgICAga2V5OiAxMzExLFxyXG4gICAgICAgIG5hbWU6ICdKaW0gR3JlZW4ganIuJyxcclxuICAgICAgICBhZ2U6IDI1LFxyXG4gICAgICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDMgTGFrZSBQYXJrJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIGtleTogMTMxMixcclxuICAgICAgICBuYW1lOiAnSmltbXkgR3JlZW4gc3IuJyxcclxuICAgICAgICBhZ2U6IDE4LFxyXG4gICAgICAgIGFkZHJlc3M6ICdMb25kb24gTm8uIDQgTGFrZSBQYXJrJyxcclxuICAgICAgfV0sXHJcbiAgICB9XSxcclxuICB9XSxcclxufSwge1xyXG4gIGtleTogMixcclxuICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICBhZ2U6IDMyLFxyXG4gIGFkZHJlc3M6ICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJyxcclxufV07XHJcblxyXG4vLyByb3dTZWxlY3Rpb24gb2JqZWN0cyBpbmRpY2F0ZXMgdGhlIG5lZWQgZm9yIHJvdyBzZWxlY3Rpb25cclxuY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgfSxcclxuICBvblNlbGVjdDogKHJlY29yZCwgc2VsZWN0ZWQsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVjb3JkLCBzZWxlY3RlZCwgc2VsZWN0ZWRSb3dzKTtcclxuICB9LFxyXG4gIG9uU2VsZWN0QWxsOiAoc2VsZWN0ZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IFRyZWVEYXRhID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQgdGl0bGU9XCJUcmVlIERhdGFcIj5cclxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiIGNvbHVtbnM9e2NvbHVtbnN9IHJvd1NlbGVjdGlvbj17cm93U2VsZWN0aW9ufSBkYXRhU291cmNlPXtkYXRhfS8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmVlRGF0YTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbCwgUm93fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IEZpeEhlYWRlciBmcm9tIFwiLi9GaXhIZWFkZXJcIjtcclxuaW1wb3J0IEdyb3VwVGFibGUgZnJvbSBcIi4vR3JvdXBUYWJsZVwiO1xyXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuL09wZXJhdGlvblwiO1xyXG5pbXBvcnQgRHluYW1pYyBmcm9tIFwiLi9EeW5hbWljXCI7XHJcbmltcG9ydCBDdXN0b21TZWxlY3Rpb24gZnJvbSBcIi4vQ3VzdG9tU2VsZWN0aW9uXCI7XHJcbmltcG9ydCBSZXNldEZpbHRlciBmcm9tIFwiLi9SZXNldEZpbHRlclwiO1xyXG5pbXBvcnQgRXhwYW5kYWJsZVJvdyBmcm9tIFwiLi9FeHBhbmRhYmxlUm93XCI7XHJcbmltcG9ydCBUcmVlRGF0YSBmcm9tIFwiLi9UcmVlRGF0YVwiO1xyXG5pbXBvcnQgRml4Q29sdW1uIGZyb20gXCIuL0ZpeENvbHVtblwiO1xyXG5cclxuXHJcbmNvbnN0IERhdGFUYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgPEZpeEhlYWRlci8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICA8R3JvdXBUYWJsZS8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICA8T3BlcmF0aW9uLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxEeW5hbWljLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxDdXN0b21TZWxlY3Rpb24vPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgPFJlc2V0RmlsdGVyLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxFeHBhbmRhYmxlUm93Lz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgIDxUcmVlRGF0YS8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICA8Rml4Q29sdW1uLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9