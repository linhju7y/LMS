exports.ids = [2];
exports.modules = {

/***/ "./app/components/Widget/index.js":
/*!****************************************!*\
  !*** ./app/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Widget = ({
  title,
  children,
  styleName,
  cover,
  extra,
  actions
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: title,
    actions: actions,
    cover: cover,
    className: `gx-card-widget ${styleName}`,
    extra: extra
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Widget);
Widget.defaultProps = {
  styleName: ''
};
Widget.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  extra: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  cover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ }),

/***/ "./app/components/dashboard/Crypto/BalanceHistory.js":
/*!***********************************************************!*\
  !*** ./app/components/dashboard/Crypto/BalanceHistory.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const data = [{
  name: '',
  balance: 200
}, {
  name: 'JAN',
  balance: 400
}, {
  name: 'FEB',
  balance: 150
}, {
  name: 'MAR',
  balance: 400
}, {
  name: 'APR',
  balance: 1000
}, {
  name: 'MAY',
  balance: 400
}, {
  name: 'JUN',
  balance: 1200
}, {
  name: 'JUL',
  balance: 1000
}, {
  name: 'AUG',
  balance: 800
}, {
  name: 'SEP',
  balance: 750
}, {
  name: 'OCT',
  balance: 1500
}, {
  name: 'NOV',
  balance: 1000
}, {
  name: 'DEC',
  balance: 1500
}, {
  name: '',
  balance: 500
}];
const Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;

const BalanceHistory = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleName: "gx-card-full"
  }, __jsx("div", {
    className: "ant-row-flex gx-px-4 gx-pt-4"
  }, __jsx("h2", {
    className: "h4 gx-mb-3"
  }, "Balance History"), __jsx("div", {
    className: "gx-ml-auto"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    className: "gx-mb-2 gx-select-sm",
    defaultValue: "10",
    onChange: handleChange
  }, __jsx(Option, {
    value: "10"
  }, "Last 10 days"), __jsx(Option, {
    value: "20"
  }, "Last 20 days"), __jsx(Option, {
    value: "30"
  }, "Last 30 days")))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 180
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
    data: data,
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "name"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "color15",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#38AAE5",
    stopOpacity: 0.8
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#F5FCFD",
    stopOpacity: 0.8
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
    dataKey: "balance",
    strokeWidth: 2,
    stackId: "2",
    stroke: "#10316B",
    fill: "url(#color15)",
    fillOpacity: 1
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BalanceHistory);

/***/ }),

/***/ "./app/components/dashboard/Crypto/ChartCard.js":
/*!******************************************************!*\
  !*** ./app/components/dashboard/Crypto/ChartCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ChartCard = ({
  prize,
  title,
  children,
  styleName,
  desc,
  icon
}) => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-card-full"
  }, __jsx("div", {
    className: "gx-actchart gx-px-3 gx-pt-3"
  }, __jsx("div", {
    className: "ant-row-flex"
  }, __jsx("h2", {
    className: "gx-mb-0 gx-fs-xxl gx-font-weight-medium"
  }, prize, __jsx("span", {
    className: `gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`
  }, title, "% ", __jsx("i", {
    className: "icon icon-menu-up gx-fs-sm"
  }))), __jsx("i", {
    className: `icon icon-${icon} gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl`
  })), __jsx("p", {
    className: "gx-mb-0 gx-fs-sm gx-text-grey"
  }, desc)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (ChartCard);

/***/ }),

/***/ "./app/components/dashboard/Crypto/CryptoNews.js":
/*!*******************************************************!*\
  !*** ./app/components/dashboard/Crypto/CryptoNews.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
/* harmony import */ var _routes_main_Dashboard_Crypto_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../routes/main/Dashboard/Crypto/data */ "./routes/main/Dashboard/Crypto/data.js");
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var _CryptoNewsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CryptoNewsItem */ "./app/components/dashboard/Crypto/CryptoNewsItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const newsData = [_routes_main_Dashboard_Crypto_data__WEBPACK_IMPORTED_MODULE_3__["allNews"], _routes_main_Dashboard_Crypto_data__WEBPACK_IMPORTED_MODULE_3__["bitCoinNews"], _routes_main_Dashboard_Crypto_data__WEBPACK_IMPORTED_MODULE_3__["lightCoinNews"], _routes_main_Dashboard_Crypto_data__WEBPACK_IMPORTED_MODULE_3__["rippleNews"]];

class CryptoNews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      news: newsData[0],
      loader: false
    });

    _defineProperty(this, "handleChange", e => {
      const value = e.target.value;
      this.setState({
        news: newsData[value],
        loader: true
      });
      setTimeout(() => {
        this.setState({
          loader: false
        });
      }, 1500);
    });
  }

  render() {
    const {
      loader,
      news
    } = this.state;
    return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "ant-row-flex gx-justify-content-between gx-mb-3 gx-dash-search"
    }, __jsx("h2", {
      className: "h4 gx-mb-3 gx-mb-sm-1 gx-mr-2"
    }, "Crypto News"), __jsx("div", {
      className: "gx-mx-sm-2"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
      className: "gx-radio-group-link gx-radio-group-link-news",
      defaultValue: 0,
      onChange: this.handleChange
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: 0,
      className: "gx-mb-1"
    }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: 1,
      className: "gx-mb-1"
    }, "Bitcoin"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: 2,
      className: "gx-mb-1"
    }, "Ripple"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: 3,
      className: "gx-mb-1"
    }, "Litecoin"))), __jsx("span", {
      className: "gx-ml-2 gx-search-icon"
    }, __jsx("i", {
      className: "icon icon-search-new gx-text-primary gx-fs-xxl gx-pointer"
    }))), loader ? __jsx(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "gx-loader-400"
    }) : news.map((data, index) => __jsx(_CryptoNewsItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      data: data
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CryptoNews);

/***/ }),

/***/ "./app/components/dashboard/Crypto/CryptoNewsItem.js":
/*!***********************************************************!*\
  !*** ./app/components/dashboard/Crypto/CryptoNewsItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CryptoNewsItem({
  data
}) {
  const {
    image,
    title,
    subTitle,
    desc
  } = data;
  return __jsx("div", {
    className: "gx-news-item"
  }, __jsx("div", {
    className: "gx-news-thumb"
  }, __jsx("img", {
    className: "gx-width-175 gx-rounded-lg",
    src: image,
    alt: "..."
  })), __jsx("div", {
    className: "gx-news-content"
  }, __jsx("h4", {
    className: "gx-mt-0"
  }, title), __jsx("p", {
    className: "gx-mb-2"
  }, subTitle), __jsx("div", {
    className: "gx-news-tags-row"
  }, __jsx("div", {
    className: "gx-news-tags-left"
  }, __jsx("p", {
    className: "gx-text-grey gx-mb-0 gx-text-truncate"
  }, __jsx("i", {
    className: `icon icon-tag-new gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle gx-text-light-grey`
  }), desc)), __jsx("div", {
    className: "gx-news-tags-right"
  }, __jsx("p", {
    className: "gx-text-primary gx-pointer gx-mb-0"
  }, "Ready Full Story", __jsx("i", {
    className: `icon icon-long-arrow-right gx-fs-xl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle`
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CryptoNewsItem);

/***/ }),

/***/ "./app/components/dashboard/Crypto/CurrencyCalculator.js":
/*!***************************************************************!*\
  !*** ./app/components/dashboard/Crypto/CurrencyCalculator.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;

const CurrencyCalculator = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: __jsx("h2", {
      className: "h4 gx-mb-0 gx-text-capitalize"
    }, "Currency Calculator")
  }, __jsx("p", {
    className: "gx-mb-2"
  }, "1.87 BTC equals"), __jsx("h1", {
    className: "gx-mb-2 gx-text-primary gx-font-weight-medium gx-fs-xxl"
  }, "11466.78 USD"), __jsx("p", {
    className: "gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4"
  }, "@ 1 BTC = 6718.72 USD"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "inline",
    className: "gx-form-inline-label-up gx-form-inline-currency"
  }, __jsx(FormItem, {
    label: "From",
    className: "gx-form-item-one-fourth"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "BTC",
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "BTC"), __jsx(Option, {
    value: "lucy"
  }, "USD"))), __jsx(FormItem, {
    label: "To",
    className: "gx-form-item-one-fourth"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "BTC",
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "BTC"), __jsx(Option, {
    value: "lucy"
  }, "USD"))), __jsx(FormItem, {
    label: "Amount (BTC)",
    className: "gx-form-item-two-fourth"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "0.0"
  })), __jsx(FormItem, {
    className: "gx-d-block gx-mb-1"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0",
    type: "primary"
  }, "Transfer Now"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyCalculator);

/***/ }),

/***/ "./app/components/dashboard/Crypto/DownloadMobileApps.js":
/*!***************************************************************!*\
  !*** ./app/components/dashboard/Crypto/DownloadMobileApps.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DownloadMobileApps = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-pink-purple-gradient-reverse gx-text-white"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 16,
    lg: 14,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx("p", null, "Download Mobile Apps"), __jsx("h4", {
    className: "gx-font-weight-semi-bold gx-text-white gx-mb-0"
  }, "Now, your account is on your fingers")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 8,
    lg: 10,
    md: 12,
    sm: 12,
    xs: 12,
    className: "gx-text-right"
  }, __jsx("div", {
    className: "gx-flex-column gx-justify-content-center gx-h-100"
  }, __jsx("span", {
    className: "gx-mb-2 gx-app-thumb"
  }, __jsx("img", {
    src: 'https://via.placeholder.com/100x30',
    alt: "..."
  })), __jsx("span", {
    className: "gx-app-thumb"
  }, __jsx("img", {
    src: 'https://via.placeholder.com/100x30',
    alt: "..."
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadMobileApps);

/***/ }),

/***/ "./app/components/dashboard/Crypto/LineIndicator.js":
/*!**********************************************************!*\
  !*** ./app/components/dashboard/Crypto/LineIndicator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LineIndicator = ({
  title,
  title2,
  width,
  value,
  color
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "ant-row-flex"
  }, __jsx("p", {
    className: "gx-mr-1"
  }, title), __jsx("p", {
    className: "gx-text-grey"
  }, "| ", title2)), __jsx("div", {
    className: "gx-line-indi-info"
  }, __jsx("div", {
    className: `gx-line-indi gx-bg-${color}`,
    style: {
      width: Number.parseInt(width, 10) * 4
    }
  }), __jsx("span", {
    className: "gx-line-indi-count gx-ml-2"
  }, value)));
};

/* harmony default export */ __webpack_exports__["default"] = (LineIndicator);
LineIndicator.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./app/components/dashboard/Crypto/OrderHistory.js":
/*!*********************************************************!*\
  !*** ./app/components/dashboard/Crypto/OrderHistory.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const columns = [{
  title: 'Currency',
  dataIndex: 'currency'
}, {
  title: 'Rate (USD)',
  dataIndex: 'rate'
}, {
  title: 'DATE',
  dataIndex: 'date'
}, {
  title: 'FEE',
  dataIndex: 'fee',
  render: text => {
    return __jsx("span", {
      className: "gx-text-red"
    }, text);
  }
}];
const data = [{
  key: '1',
  currency: '0.24 BTC',
  rate: '1 BTC = $740',
  date: '08.10.17',
  fee: '-$2.33'
}, {
  key: '2',
  currency: '0.34 RPL',
  rate: '1 RPL = $80.2',
  date: '08.03.17',
  fee: '-$1.23'
}, {
  key: '3',
  currency: '0.24 BTC',
  rate: '1 BTC = $740',
  date: '07.29.17',
  fee: '-$3.22'
}, {
  key: '4',
  currency: '0.22 BTC',
  rate: '1 BTC = $740',
  date: '07.28.17',
  fee: '-$3.22'
}, {
  key: '5',
  currency: '0.74 LTE',
  rate: '1 LTE = $99',
  date: '05.22.17',
  fee: '-$2.21'
}];

const OrderHistory = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-order-history",
    title: __jsx("h2", {
      className: "h4 gx-text-capitalize gx-mb-0"
    }, "Order History"),
    extra: __jsx("p", {
      className: "gx-text-primary gx-mb-0 gx-pointer"
    }, "Detailed History")
  }, __jsx("div", {
    className: "gx-table-responsive"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-no-bordered",
    columns: columns,
    dataSource: data,
    pagination: false,
    bordered: false,
    size: "small"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderHistory);

/***/ }),

/***/ "./app/components/dashboard/Crypto/Portfolio.js":
/*!******************************************************!*\
  !*** ./app/components/dashboard/Crypto/Portfolio.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LineIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineIndicator */ "./app/components/dashboard/Crypto/LineIndicator.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Portfolio = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("h2", {
    className: "h4 gx-mb-3"
  }, "Your Portfolio Balance"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx("div", {
    className: "ant-row-flex"
  }, __jsx("h2", {
    className: "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
  }, "$179,626"), __jsx("h4", {
    className: "gx-pt-2 gx-chart-up"
  }, "64% ", __jsx("i", {
    className: "icon icon-menu-up gx-fs-sm"
  }))), __jsx("p", {
    className: "gx-text-grey"
  }, "Overall balance"), __jsx("div", {
    className: "ant-row-flex gx-mb-3 gx-mb-md-2"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "gx-mr-2",
    type: "primary"
  }, "Deposit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "gx-btn-cyan"
  }, "Withdraw")), __jsx("p", {
    className: "gx-text-primary gx-pointer gx-d-none gx-d-sm-block gx-mb-1"
  }, __jsx("i", {
    className: "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
  }), " Add New Wallet")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx("div", {
    className: "gx-site-dash"
  }, __jsx("h5", {
    className: "gx-mb-3"
  }, "Portfolio Distribution"), __jsx("ul", {
    className: "gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0"
  }, __jsx("li", null, __jsx(_LineIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "78%",
    title: "BTC",
    title2: "8.74",
    color: "primary",
    value: "78%"
  })), __jsx("li", null, __jsx(_LineIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "38%",
    title: "RPL",
    title2: "1.23",
    color: "pink",
    value: "48%"
  })), __jsx("li", null, __jsx(_LineIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "24%",
    title: "LTE",
    title2: "0.71",
    color: "orange",
    value: "34%"
  }))), __jsx("p", {
    className: "gx-text-primary gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3"
  }, __jsx("i", {
    className: "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
  }), " Add New Wallet")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./app/components/dashboard/Crypto/RewardCard.js":
/*!*******************************************************!*\
  !*** ./app/components/dashboard/Crypto/RewardCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const RewardCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-bg-dark-primary"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-md-4"
  }, __jsx("i", {
    className: `icon icon-refer gx-fs-xlxl gx-text-white`
  })), __jsx("div", {
    className: "gx-text-center"
  }, __jsx("h2", {
    className: "h3 gx-mb-3 gx-text-white"
  }, "Reffer and Get Reward"), __jsx("p", {
    className: "gx-text-white gx-mb-3"
  }, "Reffer us to your friends and earn bonus when they join."), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "large",
    className: "gx-btn-secondary gx-mt-md-5 gx-mb-1"
  }, "Invite Friends")));
};

/* harmony default export */ __webpack_exports__["default"] = (RewardCard);

/***/ }),

/***/ "./app/components/dashboard/Crypto/SendMoney.js":
/*!******************************************************!*\
  !*** ./app/components/dashboard/Crypto/SendMoney.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const columns = [{
  title: 'Account Holder Name',
  dataIndex: 'image',
  render: (text, record) => {
    return __jsx("div", {
      className: "gx-flex-row gx-align-items-center"
    }, __jsx("img", {
      className: "gx-rounded-circle gx-size-30 gx-mr-2",
      src: text,
      alt: ""
    }), __jsx("p", {
      className: "gx-mb-0"
    }, record.name));
  }
}, {
  title: 'Last Transfer',
  dataIndex: 'transfer',
  render: (text, record) => {
    return __jsx("span", {
      className: "gx-text-grey"
    }, record.transfer);
  }
}, {
  title: 'Action',
  dataIndex: 'status',
  render: text => {
    return __jsx("span", {
      className: "gx-text-primary gx-pointer"
    }, __jsx("i", {
      className: "icon icon-forward gx-fs-sm gx-mr-2"
    }), text);
  }
}];
const data = [{
  key: '1',
  name: 'Jeniffer L.',
  transfer: '2 hrs. ago',
  image: 'https://via.placeholder.com/150x150',
  status: 'Pay'
}, {
  key: '2',
  name: 'Jim Green',
  transfer: '17 days ago',
  image: 'https://via.placeholder.com/150x150',
  status: 'Pay'
}, {
  key: '3',
  name: 'Joe Black',
  transfer: '1 month ago',
  image: 'https://via.placeholder.com/150x150',
  status: 'Pay'
}, {
  key: '4',
  name: 'Mila Alba',
  transfer: '1 month ago',
  image: 'https://via.placeholder.com/150x150',
  status: 'Pay'
}];

const SendMoney = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: __jsx("h2", {
      className: "h4 gx-text-capitalize gx-mb-0"
    }, "Send Money to"),
    extra: __jsx("p", {
      className: "gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block"
    }, __jsx("i", {
      className: "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
    }), " Add New Account")
  }, __jsx("div", {
    className: "gx-table-responsive"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "gx-table-no-bordered",
    columns: columns,
    dataSource: data,
    pagination: false,
    size: "small"
  })), __jsx("p", {
    className: "gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3"
  }, __jsx("i", {
    className: "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
  }), " Add New Account"));
};

/* harmony default export */ __webpack_exports__["default"] = (SendMoney);

/***/ }),

/***/ "./routes/main/Dashboard/Crypto/data.js":
/*!**********************************************!*\
  !*** ./routes/main/Dashboard/Crypto/data.js ***!
  \**********************************************/
/*! exports provided: allNews, bitCoinNews, rippleNews, lightCoinNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allNews", function() { return allNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitCoinNews", function() { return bitCoinNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleNews", function() { return rippleNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightCoinNews", function() { return lightCoinNews; });
const allNews = [{
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: '10 things you must know before trading in cryptocurrency',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Getting started with cryptocurrency - what is blockchain',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Is cryptocurrency investment a trap or opportunity?',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}];
const bitCoinNews = [{
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: '10 things you must know before trading in cryptocurrency',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Getting started with cryptocurrency - what is blockchain',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Is cryptocurrency investment a trap or opportunity?',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}];
const rippleNews = [{
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: '10 things you must know before trading in cryptocurrency',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Getting started with cryptocurrency - what is blockchain',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Is cryptocurrency investment a trap or opportunity?',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}];
const lightCoinNews = [{
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: '10 things you must know before trading in cryptocurrency',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Getting started with cryptocurrency - what is blockchain',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}, {
  id: 1,
  image: 'https://via.placeholder.com/575x480',
  title: 'Is cryptocurrency investment a trap or opportunity?',
  subTitle: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar\n' + 'felis pharetra in vestibulum sed.',
  desc: 'BTC, Crypto, Trading, Tips, Cryptocurrency'
}];

/***/ }),

/***/ "./routes/main/Dashboard/Crypto/index.js":
/*!***********************************************!*\
  !*** ./routes/main/Dashboard/Crypto/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Metrics_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Metrics/data */ "./routes/main/Metrics/data.js");
/* harmony import */ var _app_components_dashboard_Crypto_ChartCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/ChartCard */ "./app/components/dashboard/Crypto/ChartCard.js");
/* harmony import */ var _app_components_dashboard_Crypto_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/Portfolio */ "./app/components/dashboard/Crypto/Portfolio.js");
/* harmony import */ var _app_components_dashboard_Crypto_BalanceHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/BalanceHistory */ "./app/components/dashboard/Crypto/BalanceHistory.js");
/* harmony import */ var _app_components_dashboard_Crypto_SendMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/SendMoney */ "./app/components/dashboard/Crypto/SendMoney.js");
/* harmony import */ var _app_components_dashboard_Crypto_RewardCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/RewardCard */ "./app/components/dashboard/Crypto/RewardCard.js");
/* harmony import */ var _app_components_dashboard_Crypto_CurrencyCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/CurrencyCalculator */ "./app/components/dashboard/Crypto/CurrencyCalculator.js");
/* harmony import */ var _app_components_dashboard_Crypto_CryptoNews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/CryptoNews */ "./app/components/dashboard/Crypto/CryptoNews.js");
/* harmony import */ var _app_components_dashboard_Crypto_DownloadMobileApps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/DownloadMobileApps */ "./app/components/dashboard/Crypto/DownloadMobileApps.js");
/* harmony import */ var _app_components_dashboard_Crypto_OrderHistory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../app/components/dashboard/Crypto/OrderHistory */ "./app/components/dashboard/Crypto/OrderHistory.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Crypto = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_ChartCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    prize: "$9,626",
    title: "23",
    icon: "bitcoin",
    children: __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      width: "100%",
      height: 75
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
      data: _Metrics_data__WEBPACK_IMPORTED_MODULE_3__["increamentData"],
      margin: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx("defs", null, __jsx("linearGradient", {
      id: "color3",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, __jsx("stop", {
      offset: "5%",
      stopColor: "#163469",
      stopOpacity: 0.9
    }), __jsx("stop", {
      offset: "95%",
      stopColor: "#FE9E15",
      stopOpacity: 0.9
    }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
      dataKey: "price",
      strokeWidth: 0,
      stackId: "2",
      stroke: "#4D95F3",
      fill: "url(#color3)",
      fillOpacity: 1
    }))),
    styleName: "up",
    desc: "Bitcoin Price"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_ChartCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    prize: "$7,831",
    title: "07",
    icon: "etherium",
    children: __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      width: "100%",
      height: 75
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
      data: _Metrics_data__WEBPACK_IMPORTED_MODULE_3__["increamentData"],
      margin: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx("defs", null, __jsx("linearGradient", {
      id: "color4",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "0"
    }, __jsx("stop", {
      offset: "5%",
      stopColor: "#4ECDE4",
      stopOpacity: 0.9
    }), __jsx("stop", {
      offset: "95%",
      stopColor: "#06BB8A",
      stopOpacity: 0.9
    }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
      dataKey: "price",
      type: "monotone",
      strokeWidth: 0,
      stackId: "2",
      stroke: "#4D95F3",
      fill: "url(#color4)",
      fillOpacity: 1
    }))),
    styleName: "up",
    desc: "Etherium Price"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_ChartCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    prize: "$1,239",
    title: "08",
    icon: "ripple",
    children: __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      width: "100%",
      height: 75
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
      data: _Metrics_data__WEBPACK_IMPORTED_MODULE_3__["increamentData"],
      margin: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx("defs", null, __jsx("linearGradient", {
      id: "color5",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, __jsx("stop", {
      offset: "5%",
      stopColor: "#e81a24",
      stopOpacity: 0.8
    }), __jsx("stop", {
      offset: "95%",
      stopColor: "#FEEADA",
      stopOpacity: 0.8
    }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
      dataKey: "price",
      strokeWidth: 0,
      stackId: "2",
      stroke: "#FEEADA",
      fill: "url(#color5)",
      fillOpacity: 1
    }))),
    styleName: "down",
    desc: "Ripple Price"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_ChartCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    prize: "$849",
    title: "47",
    icon: "litcoin",
    children: __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      width: "100%",
      height: 75
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["LineChart"], {
      data: _Metrics_data__WEBPACK_IMPORTED_MODULE_3__["lineData"],
      margin: {
        top: 5,
        right: 5,
        left: 5,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
      dataKey: "price",
      stroke: "#038FDE",
      dot: {
        stroke: '#FEA931',
        strokeWidth: 2
      }
    }))),
    styleName: "down",
    desc: "Litecoin Price"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 24,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_Portfolio__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 24,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_BalanceHistory__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 9,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_SendMoney__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_RewardCard__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 9,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_CurrencyCalculator__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 15,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_CryptoNews__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 9,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_dashboard_Crypto_DownloadMobileApps__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_app_components_dashboard_Crypto_OrderHistory__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Crypto);

/***/ }),

/***/ "./routes/main/Metrics/data.js":
/*!*************************************!*\
  !*** ./routes/main/Metrics/data.js ***!
  \*************************************/
/*! exports provided: growthData, growth2Data, trafficData, trafficRaiseData, revenueData, propertiesData, citiesData, visitsData, queriesData, increamentData, increamentRevenueData, lineData, lineData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growthData", function() { return growthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growth2Data", function() { return growth2Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficData", function() { return trafficData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficRaiseData", function() { return trafficRaiseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revenueData", function() { return revenueData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesData", function() { return propertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesData", function() { return citiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitsData", function() { return visitsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queriesData", function() { return queriesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increamentData", function() { return increamentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increamentRevenueData", function() { return increamentRevenueData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineData", function() { return lineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineData2", function() { return lineData2; });
const growthData = [{
  name: 'Page A',
  price: 1200
}, {
  name: 'Page B',
  price: 600
}, {
  name: 'Page C',
  price: 1200
}, {
  name: 'Page D',
  price: 600
}, {
  name: 'Page D',
  price: 900
}];
const growth2Data = [{
  name: 'Page A',
  revenue: 1200
}, {
  name: 'Page B',
  revenue: 600
}, {
  name: 'Page C',
  revenue: 1200
}, {
  name: 'Page D',
  revenue: 600
}, {
  name: 'Page D',
  revenue: 900
}];
const trafficData = [{
  name: 'Page A',
  income: 200
}, {
  name: 'Page B',
  income: 900
}, {
  name: 'Page C',
  income: 600
}, {
  name: 'Page D',
  income: 1600
}, {
  name: 'Page D',
  income: 900
}];
const trafficRaiseData = [{
  name: 'Page A',
  traffic: 200
}, {
  name: 'Page B',
  traffic: 900
}, {
  name: 'Page C',
  traffic: 600
}, {
  name: 'Page D',
  traffic: 1600
}, {
  name: 'Page D',
  traffic: 900
}];
const revenueData = [{
  name: 'Page A',
  revenue: 850
}, {
  name: 'Page B',
  revenue: 300
}, {
  name: 'Page C',
  revenue: 1100
}, {
  name: 'Page D',
  revenue: 600
}];
const propertiesData = [{
  name: 'Page A',
  properties: 200
}, {
  name: 'Page B',
  properties: 1200
}, {
  name: 'Page C',
  properties: 600
}, {
  name: 'Page D',
  properties: 1600
}, {
  name: 'Page D',
  properties: 1000
}, {
  name: 'Page H',
  properties: 2260
}, {
  name: 'Page K',
  properties: 800
}];
const citiesData = [{
  name: 'Page A',
  cities: 200
}, {
  name: 'Page B',
  cities: 1200
}, {
  name: 'Page C',
  cities: 600
}, {
  name: 'Page D',
  cities: 1600
}, {
  name: 'Page D',
  cities: 1000
}, {
  name: 'Page H',
  cities: 2260
}, {
  name: 'Page K',
  cities: 800
}];
const visitsData = [{
  name: 'Page A',
  visit: 200
}, {
  name: 'Page B',
  visit: 1200
}, {
  name: 'Page C',
  visit: 600
}, {
  name: 'Page D',
  visit: 1600
}, {
  name: 'Page D',
  visit: 1000
}, {
  name: 'Page H',
  visit: 2260
}, {
  name: 'Page K',
  visit: 800
}];
const queriesData = [{
  name: 'Page A',
  queries: 200
}, {
  name: 'Page B',
  queries: 1200
}, {
  name: 'Page C',
  queries: 600
}, {
  name: 'Page D',
  queries: 1600
}, {
  name: 'Page D',
  queries: 1000
}, {
  name: 'Page H',
  queries: 2260
}, {
  name: 'Page K',
  queries: 800
}];
const increamentData = [{
  name: 'Page A',
  price: 200
}, {
  name: 'Page B',
  price: 1200
}, {
  name: 'Page C',
  price: 600
}, {
  name: 'Page D',
  price: 1600
}, {
  name: 'Page D',
  price: 1000
}, {
  name: 'Page H',
  price: 2260
}, {
  name: 'Page K',
  price: 800
}];
const increamentRevenueData = [{
  name: 'Page A',
  revenue: 200
}, {
  name: 'Page B',
  revenue: 1200
}, {
  name: 'Page C',
  revenue: 600
}, {
  name: 'Page D',
  revenue: 1600
}, {
  name: 'Page D',
  revenue: 1000
}, {
  name: 'Page H',
  revenue: 2260
}, {
  name: 'Page K',
  revenue: 800
}];
const lineData = [{
  name: 'Page A',
  price: 200
}, {
  name: 'Page B',
  price: 1100
}, {
  name: 'Page C',
  price: 800
}, {
  name: 'Page D',
  price: 1700
}, {
  name: 'Page D',
  price: 600
}, {
  name: 'Page D',
  price: 1800
}, {
  name: 'Page D',
  price: 600
}];
const lineData2 = [{
  name: 'Page A',
  traffic: 200
}, {
  name: 'Page B',
  traffic: 1100
}, {
  name: 'Page C',
  traffic: 800
}, {
  name: 'Page D',
  traffic: 1700
}, {
  name: 'Page D',
  traffic: 600
}, {
  name: 'Page D',
  traffic: 1800
}, {
  name: 'Page D',
  traffic: 600
}];

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9CYWxhbmNlSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0NoYXJ0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0NyeXB0b05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9DcnlwdG9OZXdzSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0N1cnJlbmN5Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0Rvd25sb2FkTW9iaWxlQXBwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0xpbmVJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9PcmRlckhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9Qb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9SZXdhcmRDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9DcnlwdG8vU2VuZE1vbmV5LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9tYWluL0Rhc2hib2FyZC9DcnlwdG8vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvbWFpbi9EYXNoYm9hcmQvQ3J5cHRvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9tYWluL01ldHJpY3MvZGF0YS5qcyJdLCJuYW1lcyI6WyJXaWRnZXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3R5bGVOYW1lIiwiY292ZXIiLCJleHRyYSIsImFjdGlvbnMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImRhdGEiLCJuYW1lIiwiYmFsYW5jZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkJhbGFuY2VIaXN0b3J5IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiQ2hhcnRDYXJkIiwicHJpemUiLCJkZXNjIiwiaWNvbiIsIm5ld3NEYXRhIiwiYWxsTmV3cyIsImJpdENvaW5OZXdzIiwibGlnaHRDb2luTmV3cyIsInJpcHBsZU5ld3MiLCJDcnlwdG9OZXdzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJuZXdzIiwibG9hZGVyIiwiZSIsInRhcmdldCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInJlbmRlciIsInN0YXRlIiwibWFwIiwiaW5kZXgiLCJDcnlwdG9OZXdzSXRlbSIsImltYWdlIiwic3ViVGl0bGUiLCJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiQ3VycmVuY3lDYWxjdWxhdG9yIiwiRG93bmxvYWRNb2JpbGVBcHBzIiwiTGluZUluZGljYXRvciIsInRpdGxlMiIsIndpZHRoIiwiY29sb3IiLCJOdW1iZXIiLCJwYXJzZUludCIsInN0cmluZyIsImNvbHVtbnMiLCJkYXRhSW5kZXgiLCJ0ZXh0Iiwia2V5IiwiY3VycmVuY3kiLCJyYXRlIiwiZGF0ZSIsImZlZSIsIk9yZGVySGlzdG9yeSIsIlBvcnRmb2xpbyIsIlJld2FyZENhcmQiLCJyZWNvcmQiLCJ0cmFuc2ZlciIsInN0YXR1cyIsIlNlbmRNb25leSIsImlkIiwiQ3J5cHRvIiwiaW5jcmVhbWVudERhdGEiLCJsaW5lRGF0YSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZ3Jvd3RoRGF0YSIsInByaWNlIiwiZ3Jvd3RoMkRhdGEiLCJyZXZlbnVlIiwidHJhZmZpY0RhdGEiLCJpbmNvbWUiLCJ0cmFmZmljUmFpc2VEYXRhIiwidHJhZmZpYyIsInJldmVudWVEYXRhIiwicHJvcGVydGllc0RhdGEiLCJwcm9wZXJ0aWVzIiwiY2l0aWVzRGF0YSIsImNpdGllcyIsInZpc2l0c0RhdGEiLCJ2aXNpdCIsInF1ZXJpZXNEYXRhIiwicXVlcmllcyIsImluY3JlYW1lbnRSZXZlbnVlRGF0YSIsImxpbmVEYXRhMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFDQyxPQUFEO0FBQVFDLFVBQVI7QUFBa0JDLFdBQWxCO0FBQTZCQyxPQUE3QjtBQUFvQ0MsT0FBcEM7QUFBMkNDO0FBQTNDLENBQUQsS0FBeUQ7QUFFdEUsU0FDRSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFTCxLQUFiO0FBQW9CLFdBQU8sRUFBRUssT0FBN0I7QUFBc0MsU0FBSyxFQUFFRixLQUE3QztBQUFvRCxhQUFTLEVBQUcsa0JBQWlCRCxTQUFVLEVBQTNGO0FBQThGLFNBQUssRUFBRUU7QUFBckcsS0FDR0gsUUFESCxDQURGO0FBS0QsQ0FQRDs7QUFTZUYscUVBQWY7QUFDQUEsTUFBTSxDQUFDTyxZQUFQLEdBQXNCO0FBQ3BCSixXQUFTLEVBQUU7QUFEUyxDQUF0QjtBQUlBSCxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJQLE9BQUssRUFBRVEsaURBQVMsQ0FBQ0MsSUFEQTtBQUVqQkwsT0FBSyxFQUFFSSxpREFBUyxDQUFDQyxJQUZBO0FBR2pCTixPQUFLLEVBQUVLLGlEQUFTLENBQUNDLElBSEE7QUFJakJKLFNBQU8sRUFBRUcsaURBQVMsQ0FBQ0MsSUFKRjtBQUtqQlIsVUFBUSxFQUFFTyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBTFIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUMsSUFB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d0UsT0FBSyxFQUFFO0FBQXhCLENBRHNCLEVBRXRCO0FBQUN4RSxNQUFJLEVBQUUsUUFBUDtBQUFpQndFLE9BQUssRUFBRTtBQUF4QixDQUZzQixFQUd0QjtBQUFDeEUsTUFBSSxFQUFFLFFBQVA7QUFBaUJ3RSxPQUFLLEVBQUU7QUFBeEIsQ0FIc0IsRUFJdEI7QUFBQ3hFLE1BQUksRUFBRSxRQUFQO0FBQWlCd0UsT0FBSyxFQUFFO0FBQXhCLENBSnNCLEVBS3RCO0FBQUN4RSxNQUFJLEVBQUUsUUFBUDtBQUFpQndFLE9BQUssRUFBRTtBQUF4QixDQUxzQixFQU10QjtBQUFDeEUsTUFBSSxFQUFFLFFBQVA7QUFBaUJ3RSxPQUFLLEVBQUU7QUFBeEIsQ0FOc0IsRUFPdEI7QUFBQ3hFLE1BQUksRUFBRSxRQUFQO0FBQWlCd0UsT0FBSyxFQUFFO0FBQXhCLENBUHNCLENBQWpCO0FBVUEsTUFBTWlCLFNBQVMsR0FBRyxDQUN2QjtBQUFDekYsTUFBSSxFQUFFLFFBQVA7QUFBaUI4RSxTQUFPLEVBQUU7QUFBMUIsQ0FEdUIsRUFFdkI7QUFBQzlFLE1BQUksRUFBRSxRQUFQO0FBQWlCOEUsU0FBTyxFQUFFO0FBQTFCLENBRnVCLEVBR3ZCO0FBQUM5RSxNQUFJLEVBQUUsUUFBUDtBQUFpQjhFLFNBQU8sRUFBRTtBQUExQixDQUh1QixFQUl2QjtBQUFDOUUsTUFBSSxFQUFFLFFBQVA7QUFBaUI4RSxTQUFPLEVBQUU7QUFBMUIsQ0FKdUIsRUFLdkI7QUFBQzlFLE1BQUksRUFBRSxRQUFQO0FBQWlCOEUsU0FBTyxFQUFFO0FBQTFCLENBTHVCLEVBTXZCO0FBQUM5RSxNQUFJLEVBQUUsUUFBUDtBQUFpQjhFLFNBQU8sRUFBRTtBQUExQixDQU51QixFQU92QjtBQUFDOUUsTUFBSSxFQUFFLFFBQVA7QUFBaUI4RSxTQUFPLEVBQUU7QUFBMUIsQ0FQdUIsQ0FBbEIsQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IFdpZGdldCA9ICh7dGl0bGUsIGNoaWxkcmVuLCBzdHlsZU5hbWUsIGNvdmVyLCBleHRyYSwgYWN0aW9uc30pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHRpdGxlPXt0aXRsZX0gYWN0aW9ucz17YWN0aW9uc30gY292ZXI9e2NvdmVyfSBjbGFzc05hbWU9e2BneC1jYXJkLXdpZGdldCAke3N0eWxlTmFtZX1gfSBleHRyYT17ZXh0cmF9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xyXG5XaWRnZXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogJycsXHJcbn07XHJcblxyXG5XaWRnZXQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcclxuICBleHRyYTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgY292ZXI6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBcmVhLCBBcmVhQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXAsIFhBeGlzfSBmcm9tIFwicmVjaGFydHNcIjtcclxuaW1wb3J0IHtTZWxlY3R9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7bmFtZTogJycsIGJhbGFuY2U6IDIwMH0sXHJcbiAge25hbWU6ICdKQU4nLCBiYWxhbmNlOiA0MDB9LFxyXG4gIHtuYW1lOiAnRkVCJywgYmFsYW5jZTogMTUwfSxcclxuICB7bmFtZTogJ01BUicsIGJhbGFuY2U6IDQwMH0sXHJcbiAge25hbWU6ICdBUFInLCBiYWxhbmNlOiAxMDAwfSxcclxuICB7bmFtZTogJ01BWScsIGJhbGFuY2U6IDQwMH0sXHJcbiAge25hbWU6ICdKVU4nLCBiYWxhbmNlOiAxMjAwfSxcclxuICB7bmFtZTogJ0pVTCcsIGJhbGFuY2U6IDEwMDB9LFxyXG4gIHtuYW1lOiAnQVVHJywgYmFsYW5jZTogODAwfSxcclxuICB7bmFtZTogJ1NFUCcsIGJhbGFuY2U6IDc1MH0sXHJcbiAge25hbWU6ICdPQ1QnLCBiYWxhbmNlOiAxNTAwfSxcclxuICB7bmFtZTogJ05PVicsIGJhbGFuY2U6IDEwMDB9LFxyXG4gIHtuYW1lOiAnREVDJywgYmFsYW5jZTogMTUwMH0sXHJcbiAge25hbWU6ICcnLCBiYWxhbmNlOiA1MDB9LFxyXG5dO1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuXHJcbmNvbnN0IEJhbGFuY2VIaXN0b3J5ID0gKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jYXJkLWZ1bGxcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LXJvdy1mbGV4IGd4LXB4LTQgZ3gtcHQtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoNCBneC1tYi0zXCI+QmFsYW5jZSBIaXN0b3J5PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1sLWF1dG9cIj5cclxuICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwiZ3gtbWItMiBneC1zZWxlY3Qtc21cIiBkZWZhdWx0VmFsdWU9XCIxMFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMTBcIj5MYXN0IDEwIGRheXM8L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjIwXCI+TGFzdCAyMCBkYXlzPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIzMFwiPkxhc3QgMzAgZGF5czwvT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsxODB9PlxyXG4gICAgICAgIDxBcmVhQ2hhcnQgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMH19PlxyXG4gICAgICAgICAgPFRvb2x0aXAvPlxyXG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIvPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNvbG9yMTVcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIHN0b3BDb2xvcj1cIiMzOEFBRTVcIiBzdG9wT3BhY2l0eT17MC44fS8+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgc3RvcENvbG9yPVwiI0Y1RkNGRFwiIHN0b3BPcGFjaXR5PXswLjh9Lz5cclxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgIDxBcmVhIGRhdGFLZXk9J2JhbGFuY2UnIHN0cm9rZVdpZHRoPXsyfSBzdGFja0lkPVwiMlwiIHN0cm9rZT0nIzEwMzE2QicgZmlsbD1cInVybCgjY29sb3IxNSlcIlxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezF9Lz5cclxuICAgICAgICA8L0FyZWFDaGFydD5cclxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VIaXN0b3J5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgQ2hhcnRDYXJkID0gKHtwcml6ZSwgdGl0bGUsIGNoaWxkcmVuLCBzdHlsZU5hbWUsIGRlc2MsIGljb259KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtY2FyZC1mdWxsXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWFjdGNoYXJ0IGd4LXB4LTMgZ3gtcHQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LXJvdy1mbGV4XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtbWItMCBneC1mcy14eGwgZ3gtZm9udC13ZWlnaHQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIHtwcml6ZX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZ3gtbWItMCBneC1tbC0yIGd4LXB0LXhsLTIgZ3gtZnMtbGcgZ3gtY2hhcnQtJHtzdHlsZU5hbWV9YH0+e3RpdGxlfSUgPGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS11cCBneC1mcy1zbVwiLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpY29ufSBneC1mcy14bCBneC1tbC1hdXRvIGd4LXRleHQtcHJpbWFyeSBneC1mcy14eHhsYH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtZnMtc20gZ3gtdGV4dC1ncmV5XCI+e2Rlc2N9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1JhZGlvfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuaW1wb3J0IHthbGxOZXdzLCBiaXRDb2luTmV3cywgbGlnaHRDb2luTmV3cywgcmlwcGxlTmV3c30gZnJvbSBcIi4uLy4uLy4uLy4uL3JvdXRlcy9tYWluL0Rhc2hib2FyZC9DcnlwdG8vZGF0YVwiXHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IENyeXB0b05ld3NJdGVtIGZyb20gXCIuL0NyeXB0b05ld3NJdGVtXCI7XHJcblxyXG5jb25zdCBuZXdzRGF0YSA9IFthbGxOZXdzLCBiaXRDb2luTmV3cywgbGlnaHRDb2luTmV3cywgcmlwcGxlTmV3c107XHJcblxyXG5jbGFzcyBDcnlwdG9OZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG5ld3M6IG5ld3NEYXRhWzBdLFxyXG4gICAgbG9hZGVyOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuZXdzOiBuZXdzRGF0YVt2YWx1ZV0sXHJcbiAgICAgIGxvYWRlcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOiBmYWxzZX0pO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2xvYWRlciwgbmV3c30gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFdpZGdldD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1yb3ctZmxleCBneC1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBneC1tYi0zIGd4LWRhc2gtc2VhcmNoXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDQgZ3gtbWItMyBneC1tYi1zbS0xIGd4LW1yLTJcIj5DcnlwdG8gTmV3czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW14LXNtLTJcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cImd4LXJhZGlvLWdyb3VwLWxpbmsgZ3gtcmFkaW8tZ3JvdXAtbGluay1uZXdzXCIgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJneC1tYi0xXCI+QWxsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwiZ3gtbWItMVwiPkJpdGNvaW48L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJneC1tYi0xXCI+UmlwcGxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17M30gY2xhc3NOYW1lPVwiZ3gtbWItMVwiPkxpdGVjb2luPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1sLTIgZ3gtc2VhcmNoLWljb25cIj48aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoLW5ldyBneC10ZXh0LXByaW1hcnkgZ3gtZnMteHhsIGd4LXBvaW50ZXJcIi8+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7bG9hZGVyID8gPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPVwiZ3gtbG9hZGVyLTQwMFwiLz4gOiBuZXdzLm1hcCgoZGF0YSwgaW5kZXgpID0+XHJcbiAgICAgICAgICA8Q3J5cHRvTmV3c0l0ZW0ga2V5PXtpbmRleH0gZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L1dpZGdldD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcnlwdG9OZXdzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gQ3J5cHRvTmV3c0l0ZW0oe2RhdGF9KSB7XHJcbiAgY29uc3Qge2ltYWdlLCB0aXRsZSwgc3ViVGl0bGUsIGRlc2N9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJneC1uZXdzLWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uZXdzLXRodW1iXCI+PGltZyBjbGFzc05hbWU9XCJneC13aWR0aC0xNzUgZ3gtcm91bmRlZC1sZ1wiIHNyYz17aW1hZ2V9IGFsdD1cIi4uLlwiLz48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uZXdzLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZ3gtbXQtMFwiPnt0aXRsZX08L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTJcIj57c3ViVGl0bGV9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbmV3cy10YWdzLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1uZXdzLXRhZ3MtbGVmdFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWdyZXkgZ3gtbWItMCBneC10ZXh0LXRydW5jYXRlXCI+PGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uIGljb24tdGFnLW5ldyBneC1mcy1sZyBneC1tci0yIGd4LWQtaW5saW5lLWZsZXggZ3gtdmVydGljYWwtYWxpZ24tbWlkZGxlIGd4LXRleHQtbGlnaHQtZ3JleWB9Lz57ZGVzY31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW5ld3MtdGFncy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXByaW1hcnkgZ3gtcG9pbnRlciBneC1tYi0wXCI+UmVhZHkgRnVsbCBTdG9yeVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGljb24gaWNvbi1sb25nLWFycm93LXJpZ2h0IGd4LWZzLXhsIGd4LW1sLTIgZ3gtZC1pbmxpbmUtZmxleCBneC12ZXJ0aWNhbC1hbGlnbi1taWRkbGVgfS8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0b05ld3NJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBGb3JtLCBJbnB1dCwgU2VsZWN0fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IEN1cnJlbmN5Q2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXRcclxuICAgICAgdGl0bGU9ezxoMiBjbGFzc05hbWU9XCJoNCBneC1tYi0wIGd4LXRleHQtY2FwaXRhbGl6ZVwiPkN1cnJlbmN5IENhbGN1bGF0b3I8L2gyPn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTJcIj4xLjg3IEJUQyBlcXVhbHM8L3A+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJneC1tYi0yIGd4LXRleHQtcHJpbWFyeSBneC1mb250LXdlaWdodC1tZWRpdW0gZ3gtZnMteHhsXCI+MTE0NjYuNzggVVNEPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5IGd4LWZzLXNtIGd4LW1iLTMgZ3gtbWItbGctNFwiPkAgMSBCVEMgPSA2NzE4LjcyIFVTRDwvcD5cclxuICAgICAgPEZvcm0gbGF5b3V0PVwiaW5saW5lXCIgY2xhc3NOYW1lPVwiZ3gtZm9ybS1pbmxpbmUtbGFiZWwtdXAgZ3gtZm9ybS1pbmxpbmUtY3VycmVuY3lcIj5cclxuICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCJGcm9tXCIgY2xhc3NOYW1lPVwiZ3gtZm9ybS1pdGVtLW9uZS1mb3VydGhcIj5cclxuICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiQlRDXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+QlRDPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+VVNEPC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIlRvXCIgY2xhc3NOYW1lPVwiZ3gtZm9ybS1pdGVtLW9uZS1mb3VydGhcIj5cclxuICAgICAgICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiQlRDXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqYWNrXCI+QlRDPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsdWN5XCI+VVNEPC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgIDxGb3JtSXRlbSBsYWJlbD1cIkFtb3VudCAoQlRDKVwiIGNsYXNzTmFtZT1cImd4LWZvcm0taXRlbS10d28tZm91cnRoXCI+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCIwLjBcIi8+XHJcbiAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICA8Rm9ybUl0ZW0gY2xhc3NOYW1lPVwiZ3gtZC1ibG9jayBneC1tYi0xXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTBcIiB0eXBlPVwicHJpbWFyeVwiPlRyYW5zZmVyIE5vdzwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUNhbGN1bGF0b3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IERvd25sb2FkTW9iaWxlQXBwcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1waW5rLXB1cnBsZS1ncmFkaWVudC1yZXZlcnNlIGd4LXRleHQtd2hpdGVcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhsPXsxNn0gbGc9ezE0fSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgIDxwPkRvd25sb2FkIE1vYmlsZSBBcHBzPC9wPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImd4LWZvbnQtd2VpZ2h0LXNlbWktYm9sZCBneC10ZXh0LXdoaXRlIGd4LW1iLTBcIj5Ob3csIHlvdXIgYWNjb3VudCBpc1xyXG4gICAgICAgICAgICBvbiB5b3VyIGZpbmdlcnM8L2g0PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezh9IGxnPXsxMH0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0gY2xhc3NOYW1lPVwiZ3gtdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LWNvbHVtbiBneC1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGd4LWgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LW1iLTIgZ3gtYXBwLXRodW1iXCI+PGltZyBzcmM9eydodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAweDMwJ30gYWx0PVwiLi4uXCIvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LWFwcC10aHVtYlwiPjxpbWcgc3JjPXsnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHgzMCd9IGFsdD1cIi4uLlwiLz48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRNb2JpbGVBcHBzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcblxyXG5jb25zdCBMaW5lSW5kaWNhdG9yID0gKHt0aXRsZSwgdGl0bGUyLCB3aWR0aCwgdmFsdWUsIGNvbG9yfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtcm93LWZsZXhcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC1tci0xXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWdyZXlcIj58IHt0aXRsZTJ9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1saW5lLWluZGktaW5mb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtbGluZS1pbmRpIGd4LWJnLSR7Y29sb3J9YH0gc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBOdW1iZXIucGFyc2VJbnQod2lkdGgsIDEwKSAqIDRcclxuICAgICAgICB9fS8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGluZS1pbmRpLWNvdW50IGd4LW1sLTJcIj57dmFsdWV9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lSW5kaWNhdG9yO1xyXG5cclxuTGluZUluZGljYXRvci5wcm9wVHlwZXMgPSB7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0N1cnJlbmN5JyxcclxuICAgIGRhdGFJbmRleDogJ2N1cnJlbmN5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUmF0ZSAoVVNEKScsXHJcbiAgICBkYXRhSW5kZXg6ICdyYXRlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnREFURScsXHJcbiAgICBkYXRhSW5kZXg6ICdkYXRlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRkVFJyxcclxuICAgIGRhdGFJbmRleDogJ2ZlZScsXHJcbiAgICByZW5kZXI6ICh0ZXh0KSA9PiB7XHJcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJneC10ZXh0LXJlZFwiPnt0ZXh0fTwvc3Bhbj5cclxuICAgIH0sXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBrZXk6ICcxJyxcclxuICAgIGN1cnJlbmN5OiAnMC4yNCBCVEMnLFxyXG4gICAgcmF0ZTogJzEgQlRDID0gJDc0MCcsXHJcbiAgICBkYXRlOiAnMDguMTAuMTcnLFxyXG4gICAgZmVlOiAnLSQyLjMzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMicsXHJcbiAgICBjdXJyZW5jeTogJzAuMzQgUlBMJyxcclxuICAgIHJhdGU6ICcxIFJQTCA9ICQ4MC4yJyxcclxuICAgIGRhdGU6ICcwOC4wMy4xNycsXHJcbiAgICBmZWU6ICctJDEuMjMnXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICczJyxcclxuICAgIGN1cnJlbmN5OiAnMC4yNCBCVEMnLFxyXG4gICAgcmF0ZTogJzEgQlRDID0gJDc0MCcsXHJcbiAgICBkYXRlOiAnMDcuMjkuMTcnLFxyXG4gICAgZmVlOiAnLSQzLjIyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnNCcsXHJcbiAgICBjdXJyZW5jeTogJzAuMjIgQlRDJyxcclxuICAgIHJhdGU6ICcxIEJUQyA9ICQ3NDAnLFxyXG4gICAgZGF0ZTogJzA3LjI4LjE3JyxcclxuICAgIGZlZTogJy0kMy4yMidcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzUnLFxyXG4gICAgY3VycmVuY3k6ICcwLjc0IExURScsXHJcbiAgICByYXRlOiAnMSBMVEUgPSAkOTknLFxyXG4gICAgZGF0ZTogJzA1LjIyLjE3JyxcclxuICAgIGZlZTogJy0kMi4yMSdcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBPcmRlckhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtb3JkZXItaGlzdG9yeVwiXHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDQgZ3gtdGV4dC1jYXBpdGFsaXplIGd4LW1iLTBcIj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIEhpc3Rvcnk8L2gyPlxyXG4gICAgICAgICAgICB9IGV4dHJhPXtcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1wcmltYXJ5IGd4LW1iLTAgZ3gtcG9pbnRlclwiPkRldGFpbGVkIEhpc3Rvcnk8L3A+XHJcbiAgICB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZ3gtdGFibGUtbm8tYm9yZGVyZWRcIiBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBwYWdpbmF0aW9uPXtmYWxzZX0gYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICBzaXplPVwic21hbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVySGlzdG9yeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgQ29sLCBSb3d9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5lSW5kaWNhdG9yIGZyb20gXCIuL0xpbmVJbmRpY2F0b3JcIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImg0IGd4LW1iLTNcIj5Zb3VyIFBvcnRmb2xpbyBCYWxhbmNlPC9oMj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtcm93LWZsZXhcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LW1yLTIgZ3gtbWItMCBneC1mcy14eHhsIGd4LWZvbnQtd2VpZ2h0LW1lZGl1bVwiPiQxNzksNjI2PC9oMj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImd4LXB0LTIgZ3gtY2hhcnQtdXBcIj42NCUgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtdXAgZ3gtZnMtc21cIi8+PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5XCI+T3ZlcmFsbCBiYWxhbmNlPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtcm93LWZsZXggZ3gtbWItMyBneC1tYi1tZC0yXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtbXItMlwiIHR5cGU9XCJwcmltYXJ5XCI+RGVwb3NpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LWJ0bi1jeWFuXCI+V2l0aGRyYXc8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtcHJpbWFyeSBneC1wb2ludGVyIGd4LWQtbm9uZSBneC1kLXNtLWJsb2NrIGd4LW1iLTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFkZC1jaXJjbGUgZ3gtZnMtbGcgZ3gtZC1pbmxpbmUtZmxleCBneC12ZXJ0aWNhbC1hbGlnbi1taWRkbGVcIi8+IEFkZCBOZXcgV2FsbGV0PC9wPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2l0ZS1kYXNoXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJneC1tYi0zXCI+UG9ydGZvbGlvIERpc3RyaWJ1dGlvbjwvaDU+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1saW5lLWluZGljYXRvciBneC1mcy1zbSBneC1wYi0xIGd4LXBiLXNtLTBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluZUluZGljYXRvciB3aWR0aD1cIjc4JVwiIHRpdGxlPVwiQlRDXCIgdGl0bGUyPVwiOC43NFwiIGNvbG9yPVwicHJpbWFyeVwiIHZhbHVlPVwiNzglXCIvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmVJbmRpY2F0b3Igd2lkdGg9XCIzOCVcIiB0aXRsZT1cIlJQTFwiIHRpdGxlMj1cIjEuMjNcIiBjb2xvcj1cInBpbmtcIiB2YWx1ZT1cIjQ4JVwiLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5lSW5kaWNhdG9yIHdpZHRoPVwiMjQlXCIgdGl0bGU9XCJMVEVcIiB0aXRsZTI9XCIwLjcxXCIgY29sb3I9XCJvcmFuZ2VcIiB2YWx1ZT1cIjM0JVwiLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXByaW1hcnkgZ3gtcG9pbnRlciBneC1kLWJsb2NrIGd4LWQtc20tbm9uZSBneC1tYi0wIGd4LW10LTNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWRkLWNpcmNsZSBneC1mcy1sZyBneC1kLWlubGluZS1mbGV4IGd4LXZlcnRpY2FsLWFsaWduLW1pZGRsZVwiLz4gQWRkIE5ldyBXYWxsZXRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IFJld2FyZENhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtYmctZGFyay1wcmltYXJ5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZmxleC1yb3cgZ3gtanVzdGlmeS1jb250ZW50LWNlbnRlciBneC1tYi0zIGd4LW1iLW1kLTRcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tcmVmZXIgZ3gtZnMteGx4bCBneC10ZXh0LXdoaXRlYH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMyBneC1tYi0zIGd4LXRleHQtd2hpdGVcIj5SZWZmZXIgYW5kIEdldCBSZXdhcmQ8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtd2hpdGUgZ3gtbWItM1wiPlJlZmZlciB1cyB0byB5b3VyIGZyaWVuZHMgYW5kXHJcbiAgICAgICAgICBlYXJuIGJvbnVzIHdoZW4gdGhleSBqb2luLjwvcD5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT1cImd4LWJ0bi1zZWNvbmRhcnkgZ3gtbXQtbWQtNSBneC1tYi0xXCI+SW52aXRlIEZyaWVuZHM8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV3YXJkQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0FjY291bnQgSG9sZGVyIE5hbWUnLFxyXG4gICAgZGF0YUluZGV4OiAnaW1hZ2UnLFxyXG4gICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImd4LWZsZXgtcm93IGd4LWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3gtcm91bmRlZC1jaXJjbGUgZ3gtc2l6ZS0zMCBneC1tci0yXCIgc3JjPXt0ZXh0fSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMFwiPntyZWNvcmQubmFtZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTGFzdCBUcmFuc2ZlcicsXHJcbiAgICBkYXRhSW5kZXg6ICd0cmFuc2ZlcicsXHJcbiAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImd4LXRleHQtZ3JleVwiPntyZWNvcmQudHJhbnNmZXJ9PC9zcGFuPlxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FjdGlvbicsXHJcbiAgICBkYXRhSW5kZXg6ICdzdGF0dXMnLFxyXG4gICAgcmVuZGVyOiAodGV4dCkgPT4ge1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZ3gtdGV4dC1wcmltYXJ5IGd4LXBvaW50ZXJcIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZm9yd2FyZCBneC1mcy1zbSBneC1tci0yXCIvPnt0ZXh0fTwvc3Bhbj5cclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGtleTogJzEnLFxyXG4gICAgbmFtZTogJ0plbmlmZmVyIEwuJyxcclxuICAgIHRyYW5zZmVyOiAnMiBocnMuIGFnbycsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ1BheSdcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJzInLFxyXG4gICAgbmFtZTogJ0ppbSBHcmVlbicsXHJcbiAgICB0cmFuc2ZlcjogJzE3IGRheXMgYWdvJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MHgxNTAnLFxyXG4gICAgc3RhdHVzOiAnUGF5J1xyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnMycsXHJcbiAgICBuYW1lOiAnSm9lIEJsYWNrJyxcclxuICAgIHRyYW5zZmVyOiAnMSBtb250aCBhZ28nLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCcsXHJcbiAgICBzdGF0dXM6ICdQYXknXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICc0JyxcclxuICAgIG5hbWU6ICdNaWxhIEFsYmEnLFxyXG4gICAgdHJhbnNmZXI6ICcxIG1vbnRoIGFnbycsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJyxcclxuICAgIHN0YXR1czogJ1BheSdcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBTZW5kTW9uZXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXRcclxuICAgICAgdGl0bGU9e1xyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoNCBneC10ZXh0LWNhcGl0YWxpemUgZ3gtbWItMFwiPlxyXG4gICAgICAgICAgU2VuZCBNb25leSB0bzwvaDI+XHJcbiAgICAgIH0gZXh0cmE9e1xyXG4gICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXByaW1hcnkgZ3gtbWItMCBneC1wb2ludGVyIGd4LWQtbm9uZSBneC1kLXNtLWJsb2NrXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWFkZC1jaXJjbGUgZ3gtZnMtbGcgZ3gtZC1pbmxpbmUtZmxleCBneC12ZXJ0aWNhbC1hbGlnbi1taWRkbGVcIi8+IEFkZCBOZXcgQWNjb3VudDwvcD5cclxuICAgIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJneC10YWJsZS1uby1ib3JkZXJlZFwiIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICBzaXplPVwic21hbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXByaW1hcnkgZ3gtbWItMCBneC1wb2ludGVyIGd4LWQtYmxvY2sgZ3gtZC1zbS1ub25lIGd4LW1iLTAgZ3gtbXQtM1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hZGQtY2lyY2xlIGd4LWZzLWxnIGd4LWQtaW5saW5lLWZsZXggZ3gtdmVydGljYWwtYWxpZ24tbWlkZGxlXCIvPiBBZGQgTmV3IEFjY291bnQ8L3A+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VuZE1vbmV5O1xyXG4iLCJleHBvcnQgY29uc3QgYWxsTmV3cyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXg0ODAnLFxyXG4gICAgdGl0bGU6ICcxMCB0aGluZ3MgeW91IG11c3Qga25vdyBiZWZvcmUgdHJhZGluZyBpbiBjcnlwdG9jdXJyZW5jeScsXHJcbiAgICBzdWJUaXRsZTogJ0NyYXMgdGluY2lkdW50IHNpdCBhbWV0IG1hc3NhIGF0IGFjY3Vtc2FuLiBNYXVyaXMgdGluY2lkdW50IHRpbmNpZHVudCBlc3QsIGV0IHB1bHZpbmFyXFxuJyArXHJcbiAgICAnZmVsaXMgcGhhcmV0cmEgaW4gdmVzdGlidWx1bSBzZWQuJyxcclxuICAgIGRlc2M6ICdCVEMsIENyeXB0bywgVHJhZGluZywgVGlwcywgQ3J5cHRvY3VycmVuY3knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81NzV4NDgwJyxcclxuICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkIHdpdGggY3J5cHRvY3VycmVuY3kgLSB3aGF0IGlzIGJsb2NrY2hhaW4nLFxyXG4gICAgc3ViVGl0bGU6ICdDcmFzIHRpbmNpZHVudCBzaXQgYW1ldCBtYXNzYSBhdCBhY2N1bXNhbi4gTWF1cmlzIHRpbmNpZHVudCB0aW5jaWR1bnQgZXN0LCBldCBwdWx2aW5hclxcbicgK1xyXG4gICAgJ2ZlbGlzIHBoYXJldHJhIGluIHZlc3RpYnVsdW0gc2VkLicsXHJcbiAgICBkZXNjOiAnQlRDLCBDcnlwdG8sIFRyYWRpbmcsIFRpcHMsIENyeXB0b2N1cnJlbmN5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc1eDQ4MCcsXHJcbiAgICB0aXRsZTogJ0lzIGNyeXB0b2N1cnJlbmN5IGludmVzdG1lbnQgYSB0cmFwIG9yIG9wcG9ydHVuaXR5PycsXHJcbiAgICBzdWJUaXRsZTogJ0NyYXMgdGluY2lkdW50IHNpdCBhbWV0IG1hc3NhIGF0IGFjY3Vtc2FuLiBNYXVyaXMgdGluY2lkdW50IHRpbmNpZHVudCBlc3QsIGV0IHB1bHZpbmFyXFxuJyArXHJcbiAgICAnZmVsaXMgcGhhcmV0cmEgaW4gdmVzdGlidWx1bSBzZWQuJyxcclxuICAgIGRlc2M6ICdCVEMsIENyeXB0bywgVHJhZGluZywgVGlwcywgQ3J5cHRvY3VycmVuY3knLFxyXG4gIH1cclxuXTtcclxuZXhwb3J0IGNvbnN0IGJpdENvaW5OZXdzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc1eDQ4MCcsXHJcbiAgICB0aXRsZTogJzEwIHRoaW5ncyB5b3UgbXVzdCBrbm93IGJlZm9yZSB0cmFkaW5nIGluIGNyeXB0b2N1cnJlbmN5JyxcclxuICAgIHN1YlRpdGxlOiAnQ3JhcyB0aW5jaWR1bnQgc2l0IGFtZXQgbWFzc2EgYXQgYWNjdW1zYW4uIE1hdXJpcyB0aW5jaWR1bnQgdGluY2lkdW50IGVzdCwgZXQgcHVsdmluYXJcXG4nICtcclxuICAgICdmZWxpcyBwaGFyZXRyYSBpbiB2ZXN0aWJ1bHVtIHNlZC4nLFxyXG4gICAgZGVzYzogJ0JUQywgQ3J5cHRvLCBUcmFkaW5nLCBUaXBzLCBDcnlwdG9jdXJyZW5jeScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXg0ODAnLFxyXG4gICAgdGl0bGU6ICdHZXR0aW5nIHN0YXJ0ZWQgd2l0aCBjcnlwdG9jdXJyZW5jeSAtIHdoYXQgaXMgYmxvY2tjaGFpbicsXHJcbiAgICBzdWJUaXRsZTogJ0NyYXMgdGluY2lkdW50IHNpdCBhbWV0IG1hc3NhIGF0IGFjY3Vtc2FuLiBNYXVyaXMgdGluY2lkdW50IHRpbmNpZHVudCBlc3QsIGV0IHB1bHZpbmFyXFxuJyArXHJcbiAgICAnZmVsaXMgcGhhcmV0cmEgaW4gdmVzdGlidWx1bSBzZWQuJyxcclxuICAgIGRlc2M6ICdCVEMsIENyeXB0bywgVHJhZGluZywgVGlwcywgQ3J5cHRvY3VycmVuY3knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81NzV4NDgwJyxcclxuICAgIHRpdGxlOiAnSXMgY3J5cHRvY3VycmVuY3kgaW52ZXN0bWVudCBhIHRyYXAgb3Igb3Bwb3J0dW5pdHk/JyxcclxuICAgIHN1YlRpdGxlOiAnQ3JhcyB0aW5jaWR1bnQgc2l0IGFtZXQgbWFzc2EgYXQgYWNjdW1zYW4uIE1hdXJpcyB0aW5jaWR1bnQgdGluY2lkdW50IGVzdCwgZXQgcHVsdmluYXJcXG4nICtcclxuICAgICdmZWxpcyBwaGFyZXRyYSBpbiB2ZXN0aWJ1bHVtIHNlZC4nLFxyXG4gICAgZGVzYzogJ0JUQywgQ3J5cHRvLCBUcmFkaW5nLCBUaXBzLCBDcnlwdG9jdXJyZW5jeScsXHJcbiAgfVxyXG5dO1xyXG5leHBvcnQgY29uc3QgcmlwcGxlTmV3cyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXg0ODAnLFxyXG4gICAgdGl0bGU6ICcxMCB0aGluZ3MgeW91IG11c3Qga25vdyBiZWZvcmUgdHJhZGluZyBpbiBjcnlwdG9jdXJyZW5jeScsXHJcbiAgICBzdWJUaXRsZTogJ0NyYXMgdGluY2lkdW50IHNpdCBhbWV0IG1hc3NhIGF0IGFjY3Vtc2FuLiBNYXVyaXMgdGluY2lkdW50IHRpbmNpZHVudCBlc3QsIGV0IHB1bHZpbmFyXFxuJyArXHJcbiAgICAnZmVsaXMgcGhhcmV0cmEgaW4gdmVzdGlidWx1bSBzZWQuJyxcclxuICAgIGRlc2M6ICdCVEMsIENyeXB0bywgVHJhZGluZywgVGlwcywgQ3J5cHRvY3VycmVuY3knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81NzV4NDgwJyxcclxuICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkIHdpdGggY3J5cHRvY3VycmVuY3kgLSB3aGF0IGlzIGJsb2NrY2hhaW4nLFxyXG4gICAgc3ViVGl0bGU6ICdDcmFzIHRpbmNpZHVudCBzaXQgYW1ldCBtYXNzYSBhdCBhY2N1bXNhbi4gTWF1cmlzIHRpbmNpZHVudCB0aW5jaWR1bnQgZXN0LCBldCBwdWx2aW5hclxcbicgK1xyXG4gICAgJ2ZlbGlzIHBoYXJldHJhIGluIHZlc3RpYnVsdW0gc2VkLicsXHJcbiAgICBkZXNjOiAnQlRDLCBDcnlwdG8sIFRyYWRpbmcsIFRpcHMsIENyeXB0b2N1cnJlbmN5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc1eDQ4MCcsXHJcbiAgICB0aXRsZTogJ0lzIGNyeXB0b2N1cnJlbmN5IGludmVzdG1lbnQgYSB0cmFwIG9yIG9wcG9ydHVuaXR5PycsXHJcbiAgICBzdWJUaXRsZTogJ0NyYXMgdGluY2lkdW50IHNpdCBhbWV0IG1hc3NhIGF0IGFjY3Vtc2FuLiBNYXVyaXMgdGluY2lkdW50IHRpbmNpZHVudCBlc3QsIGV0IHB1bHZpbmFyXFxuJyArXHJcbiAgICAnZmVsaXMgcGhhcmV0cmEgaW4gdmVzdGlidWx1bSBzZWQuJyxcclxuICAgIGRlc2M6ICdCVEMsIENyeXB0bywgVHJhZGluZywgVGlwcywgQ3J5cHRvY3VycmVuY3knLFxyXG4gIH1cclxuXTtcclxuZXhwb3J0IGNvbnN0IGxpZ2h0Q29pbk5ld3MgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81NzV4NDgwJyxcclxuICAgIHRpdGxlOiAnMTAgdGhpbmdzIHlvdSBtdXN0IGtub3cgYmVmb3JlIHRyYWRpbmcgaW4gY3J5cHRvY3VycmVuY3knLFxyXG4gICAgc3ViVGl0bGU6ICdDcmFzIHRpbmNpZHVudCBzaXQgYW1ldCBtYXNzYSBhdCBhY2N1bXNhbi4gTWF1cmlzIHRpbmNpZHVudCB0aW5jaWR1bnQgZXN0LCBldCBwdWx2aW5hclxcbicgK1xyXG4gICAgJ2ZlbGlzIHBoYXJldHJhIGluIHZlc3RpYnVsdW0gc2VkLicsXHJcbiAgICBkZXNjOiAnQlRDLCBDcnlwdG8sIFRyYWRpbmcsIFRpcHMsIENyeXB0b2N1cnJlbmN5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc1eDQ4MCcsXHJcbiAgICB0aXRsZTogJ0dldHRpbmcgc3RhcnRlZCB3aXRoIGNyeXB0b2N1cnJlbmN5IC0gd2hhdCBpcyBibG9ja2NoYWluJyxcclxuICAgIHN1YlRpdGxlOiAnQ3JhcyB0aW5jaWR1bnQgc2l0IGFtZXQgbWFzc2EgYXQgYWNjdW1zYW4uIE1hdXJpcyB0aW5jaWR1bnQgdGluY2lkdW50IGVzdCwgZXQgcHVsdmluYXJcXG4nICtcclxuICAgICdmZWxpcyBwaGFyZXRyYSBpbiB2ZXN0aWJ1bHVtIHNlZC4nLFxyXG4gICAgZGVzYzogJ0JUQywgQ3J5cHRvLCBUcmFkaW5nLCBUaXBzLCBDcnlwdG9jdXJyZW5jeScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXg0ODAnLFxyXG4gICAgdGl0bGU6ICdJcyBjcnlwdG9jdXJyZW5jeSBpbnZlc3RtZW50IGEgdHJhcCBvciBvcHBvcnR1bml0eT8nLFxyXG4gICAgc3ViVGl0bGU6ICdDcmFzIHRpbmNpZHVudCBzaXQgYW1ldCBtYXNzYSBhdCBhY2N1bXNhbi4gTWF1cmlzIHRpbmNpZHVudCB0aW5jaWR1bnQgZXN0LCBldCBwdWx2aW5hclxcbicgK1xyXG4gICAgJ2ZlbGlzIHBoYXJldHJhIGluIHZlc3RpYnVsdW0gc2VkLicsXHJcbiAgICBkZXNjOiAnQlRDLCBDcnlwdG8sIFRyYWRpbmcsIFRpcHMsIENyeXB0b2N1cnJlbmN5JyxcclxuICB9XHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7QXJlYSwgQXJlYUNoYXJ0LCBMaW5lLCBMaW5lQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXB9IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5pbXBvcnQge2luY3JlYW1lbnREYXRhLCBsaW5lRGF0YX0gZnJvbSBcIi4uLy4uL01ldHJpY3MvZGF0YVwiO1xyXG5pbXBvcnQgQ2hhcnRDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0NoYXJ0Q2FyZFwiO1xyXG5cclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9Qb3J0Zm9saW9cIjtcclxuaW1wb3J0IEJhbGFuY2VIaXN0b3J5IGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0JhbGFuY2VIaXN0b3J5XCI7XHJcbmltcG9ydCBTZW5kTW9uZXkgZnJvbSBcIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9DcnlwdG8vU2VuZE1vbmV5XCI7XHJcbmltcG9ydCBSZXdhcmRDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL1Jld2FyZENhcmRcIjtcclxuaW1wb3J0IEN1cnJlbmN5Q2FsY3VsYXRvciBmcm9tIFwiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NyeXB0by9DdXJyZW5jeUNhbGN1bGF0b3JcIjtcclxuaW1wb3J0IENyeXB0b05ld3MgZnJvbSBcIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9DcnlwdG8vQ3J5cHRvTmV3c1wiO1xyXG5pbXBvcnQgRG93bmxvYWRNb2JpbGVBcHBzIGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL0Rvd25sb2FkTW9iaWxlQXBwc1wiO1xyXG5pbXBvcnQgT3JkZXJIaXN0b3J5IGZyb20gXCIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQ3J5cHRvL09yZGVySGlzdG9yeVwiO1xyXG5cclxuY29uc3QgQ3J5cHRvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Q2hhcnRDYXJkIHByaXplPVwiJDksNjI2XCIgdGl0bGU9XCIyM1wiIGljb249XCJiaXRjb2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49ezxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17NzV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxBcmVhQ2hhcnQgZGF0YT17aW5jcmVhbWVudERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3t0b3A6IDAsIHJpZ2h0OiAwLCBsZWZ0OiAwLCBib3R0b206IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJjb2xvcjNcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjFcIiB5Mj1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIHN0b3BDb2xvcj1cIiMxNjM0NjlcIiBzdG9wT3BhY2l0eT17MC45fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgc3RvcENvbG9yPVwiI0ZFOUUxNVwiIHN0b3BPcGFjaXR5PXswLjl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBcmVhIGRhdGFLZXk9J3ByaWNlJyBzdHJva2VXaWR0aD17MH0gc3RhY2tJZD1cIjJcIiBzdHJva2U9JyM0RDk1RjMnIGZpbGw9XCJ1cmwoI2NvbG9yMylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L0FyZWFDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPn1cclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwidXBcIiBkZXNjPVwiQml0Y29pbiBQcmljZVwiLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPENoYXJ0Q2FyZCBwcml6ZT1cIiQ3LDgzMVwiIHRpdGxlPVwiMDdcIiBpY29uPVwiZXRoZXJpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs3NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtpbmNyZWFtZW50RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNvbG9yNFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMVwiIHkyPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiIzRFQ0RFNFwiIHN0b3BPcGFjaXR5PXswLjl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjMDZCQjhBXCIgc3RvcE9wYWNpdHk9ezAuOX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEFyZWEgZGF0YUtleT0ncHJpY2UnIHR5cGU9J21vbm90b25lJyBzdHJva2VXaWR0aD17MH0gc3RhY2tJZD1cIjJcIiBzdHJva2U9JyM0RDk1RjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjb2xvcjQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PXsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9BcmVhQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj59XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cInVwXCIgZGVzYz1cIkV0aGVyaXVtIFByaWNlXCIvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Q2hhcnRDYXJkIHByaXplPVwiJDEsMjM5XCIgdGl0bGU9XCIwOFwiIGljb249XCJyaXBwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs3NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtpbmNyZWFtZW50RGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNvbG9yNVwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiI2U4MWEyNFwiIHN0b3BPcGFjaXR5PXswLjh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjRkVFQURBXCIgc3RvcE9wYWNpdHk9ezAuOH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEFyZWEgZGF0YUtleT0ncHJpY2UnIHN0cm9rZVdpZHRoPXswfSBzdGFja0lkPVwiMlwiIHN0cm9rZT0nI0ZFRUFEQScgZmlsbD1cInVybCgjY29sb3I1KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT17MX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvQXJlYUNoYXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJkb3duXCIgZGVzYz1cIlJpcHBsZSBQcmljZVwiLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPENoYXJ0Q2FyZCBwcml6ZT1cIiQ4NDlcIiB0aXRsZT1cIjQ3XCIgaWNvbj1cImxpdGNvaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs3NX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17bGluZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3t0b3A6IDUsIHJpZ2h0OiA1LCBsZWZ0OiA1LCBib3R0b206IDV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIGRhdGFLZXk9XCJwcmljZVwiIHN0cm9rZT1cIiMwMzhGREVcIiBkb3Q9e3tzdHJva2U6ICcjRkVBOTMxJywgc3Ryb2tlV2lkdGg6IDJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj59XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImRvd25cIiBkZXNjPVwiTGl0ZWNvaW4gUHJpY2VcIi8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4bD17MTJ9IGxnPXsyNH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8UG9ydGZvbGlvLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXsxMn0gbGc9ezI0fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxCYWxhbmNlSGlzdG9yeS8+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeGw9ezl9IGxnPXsyNH0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8U2VuZE1vbmV5Lz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPFJld2FyZENhcmQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezl9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Q3VycmVuY3lDYWxjdWxhdG9yLz5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCB4bD17MTV9IGxnPXsyNH0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Q3J5cHRvTmV3cy8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4bD17OX0gbGc9ezI0fSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxEb3dubG9hZE1vYmlsZUFwcHMvPlxyXG4gICAgICAgICAgPE9yZGVySGlzdG9yeS8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvO1xyXG4iLCJleHBvcnQgY29uc3QgZ3Jvd3RoRGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIHByaWNlOiAxMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIHByaWNlOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgcHJpY2U6IDEyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJpY2U6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCBwcmljZTogOTAwfVxyXG5cclxuXTtcclxuZXhwb3J0IGNvbnN0IGdyb3d0aDJEYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgcmV2ZW51ZTogMTIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCByZXZlbnVlOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgcmV2ZW51ZTogMTIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCByZXZlbnVlOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcmV2ZW51ZTogOTAwfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFmZmljRGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIGluY29tZTogMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIGluY29tZTogOTAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIGluY29tZTogNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIGluY29tZTogMTYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCBpbmNvbWU6IDkwMH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFmZmljUmFpc2VEYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgdHJhZmZpYzogMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIHRyYWZmaWM6IDkwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCB0cmFmZmljOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogMTYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB0cmFmZmljOiA5MDB9XHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJldmVudWVEYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgcmV2ZW51ZTogODUwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIHJldmVudWU6IDMwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCByZXZlbnVlOiAxMTAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHJldmVudWU6IDYwMH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvcGVydGllc0RhdGEgPSBbXHJcbiAge25hbWU6ICdQYWdlIEEnLCBwcm9wZXJ0aWVzOiAyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBCJywgcHJvcGVydGllczogMTIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCBwcm9wZXJ0aWVzOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJvcGVydGllczogMTYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCBwcm9wZXJ0aWVzOiAxMDAwfSxcclxuICB7bmFtZTogJ1BhZ2UgSCcsIHByb3BlcnRpZXM6IDIyNjB9LFxyXG4gIHtuYW1lOiAnUGFnZSBLJywgcHJvcGVydGllczogODAwfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IGNpdGllc0RhdGEgPSBbXHJcbiAge25hbWU6ICdQYWdlIEEnLCBjaXRpZXM6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBjaXRpZXM6IDEyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgY2l0aWVzOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgY2l0aWVzOiAxNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIGNpdGllczogMTAwMH0sXHJcbiAge25hbWU6ICdQYWdlIEgnLCBjaXRpZXM6IDIyNjB9LFxyXG4gIHtuYW1lOiAnUGFnZSBLJywgY2l0aWVzOiA4MDB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdmlzaXRzRGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIHZpc2l0OiAyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBCJywgdmlzaXQ6IDEyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgdmlzaXQ6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB2aXNpdDogMTYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCB2aXNpdDogMTAwMH0sXHJcbiAge25hbWU6ICdQYWdlIEgnLCB2aXNpdDogMjI2MH0sXHJcbiAge25hbWU6ICdQYWdlIEsnLCB2aXNpdDogODAwfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyaWVzRGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIHF1ZXJpZXM6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBxdWVyaWVzOiAxMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIHF1ZXJpZXM6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCBxdWVyaWVzOiAxNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHF1ZXJpZXM6IDEwMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBIJywgcXVlcmllczogMjI2MH0sXHJcbiAge25hbWU6ICdQYWdlIEsnLCBxdWVyaWVzOiA4MDB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYW1lbnREYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgcHJpY2U6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBwcmljZTogMTIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCBwcmljZTogNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHByaWNlOiAxNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHByaWNlOiAxMDAwfSxcclxuICB7bmFtZTogJ1BhZ2UgSCcsIHByaWNlOiAyMjYwfSxcclxuICB7bmFtZTogJ1BhZ2UgSycsIHByaWNlOiA4MDB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYW1lbnRSZXZlbnVlRGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIHJldmVudWU6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCByZXZlbnVlOiAxMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIHJldmVudWU6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCByZXZlbnVlOiAxNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHJldmVudWU6IDEwMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBIJywgcmV2ZW51ZTogMjI2MH0sXHJcbiAge25hbWU6ICdQYWdlIEsnLCByZXZlbnVlOiA4MDB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVEYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgcHJpY2U6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBwcmljZTogMTEwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCBwcmljZTogODAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHByaWNlOiAxNzAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHByaWNlOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJpY2U6IDE4MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJpY2U6IDYwMH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZURhdGEyID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgdHJhZmZpYzogMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIHRyYWZmaWM6IDExMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgdHJhZmZpYzogODAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDE3MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogNjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHRyYWZmaWM6IDE4MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgdHJhZmZpYzogNjAwfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==