exports.ids = [3];
exports.modules = {

/***/ "./app/components/CardBox/index.js":
/*!*****************************************!*\
  !*** ./app/components/CardBox/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardBox = ({
  heading,
  children,
  styleName,
  childrenStyle
}) => {
  return __jsx("div", {
    className: `gx-card ${styleName}`
  }, heading && __jsx("div", {
    className: "gx-card-head"
  }, __jsx("h3", {
    className: "gx-card-title"
  }, heading)), __jsx("div", {
    className: `gx-card-body ${childrenStyle}`
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (CardBox);
CardBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
CardBox.defaultProps = {
  styleName: '',
  childrenStyle: ''
};

/***/ }),

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

/***/ "./app/components/Widgets/AayurvedaCard.js":
/*!*************************************************!*\
  !*** ./app/components/Widgets/AayurvedaCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AayurvedaCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-card-full gx-text-center"
  }, __jsx("div", {
    className: "gx-pt-4 gx-px-3"
  }, __jsx("div", {
    className: "gx-separator gx-bg-success-dark"
  }), __jsx("h2", {
    className: "gx-mb-4 gx-text-success-dark"
  }, "Aayurveda"), __jsx("p", null, "Learn from experts this webinar explains right"), __jsx("span", {
    className: "gx-text-primary gx-pointer gx-text-uppercase gx-mb-3 gx-mb-xxl-2 gx-d-block"
  }, "learn More")), __jsx("div", {
    className: "gx-mt-xxl-3 gx-ayurveda-thumb"
  }, __jsx("img", {
    className: "gx-img-fluid gx-w-100",
    alt: "ayurveda",
    src: "https://via.placeholder.com/576X330"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AayurvedaCard);

/***/ }),

/***/ "./app/components/Widgets/BuildingCard.js":
/*!************************************************!*\
  !*** ./app/components/Widgets/BuildingCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BuildingCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-card-full gx-dot-arrow-hover"
  }, __jsx("div", {
    className: "gx-media gx-align-items-center gx-flex-nowrap"
  }, __jsx("div", {
    className: "gx-px-3 gx-build-box-lay"
  }, __jsx("img", {
    alt: "...",
    src: "https://via.placeholder.com/61X57",
    className: ""
  })), __jsx("div", {
    className: "gx-media-body gx-py-3 gx-pr-4 gx-build-box-lay-content"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    className: "gx-badge-radius-sm gx-mb-2",
    count: "34 New",
    style: {
      backgroundColor: '#52c41a'
    }
  }), __jsx("h2", {
    className: "h4 gx-text-truncate gx-mb-1"
  }, "Home & Offices"), __jsx("p", {
    className: "gx-mb-0 gx-text-grey gx-fs-sm"
  }, "Properties this week"), __jsx("div", {
    className: "gx-dot-arrow"
  }, __jsx("div", {
    className: "gx-bg-primary gx-hover-arrow"
  }, __jsx("i", {
    className: "icon icon-long-arrow-right gx-text-white"
  })), __jsx("div", {
    className: "gx-dot"
  }, __jsx("i", {
    className: "icon icon-ellipse-v gx-text-primary"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuildingCard);

/***/ }),

/***/ "./app/components/Widgets/CampaignCard.js":
/*!************************************************!*\
  !*** ./app/components/Widgets/CampaignCard.js ***!
  \************************************************/
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
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const data = [{
  name: 'Page A',
  uv: 500,
  price: 600,
  sv: 400
}, {
  name: 'Page B',
  uv: 700,
  price: 800,
  sv: 700
}, {
  name: 'Page C',
  uv: 900,
  price: 1400,
  sv: 700
}, {
  name: 'Page D',
  uv: 1600,
  price: 1800,
  sv: 1800
}, {
  name: 'Page G',
  uv: 1200,
  price: 1000,
  sv: 1800
}, {
  name: 'Page F',
  uv: 800,
  price: 1000,
  sv: 1200
}, {
  name: 'Page G',
  uv: 500,
  price: 300,
  sv: 1500
}, {
  name: 'Page H',
  uv: 400,
  price: 200,
  sv: 600
}, {
  name: 'Page I',
  uv: 900,
  price: 800,
  sv: 1400
}];

const CampaignCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleName: "gx-card-full gx-px-3 gx-py-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 15,
    lg: 15,
    md: 15,
    sm: 24,
    xs: 24,
    className: "gx-pr-md-2"
  }, __jsx("h2", {
    className: "h4 gx-mb-2"
  }, "Campaign Stats"), __jsx("p", {
    className: "gx-mb-1 gx-text-grey gx-fs-sm"
  }, "Past three weeks"), __jsx("i", {
    className: "icon icon-long-arrow-right gx-text-blue gx-fs-lg gx-pointer"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 9,
    lg: 9,
    md: 9,
    sm: 24,
    xs: 24,
    className: "gx-pr-md-2"
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 50
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
    data: data,
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    dataKey: "uv",
    stackId: "a",
    fill: "#10316B"
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    dataKey: "price",
    stackId: "a",
    fill: "#FE9E15"
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    dataKey: "sv",
    stackId: "a",
    fill: "#038FDE"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignCard);

/***/ }),

/***/ "./app/components/Widgets/DryFruit.js":
/*!********************************************!*\
  !*** ./app/components/Widgets/DryFruit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DryFruit = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-card-full gx-text-center gx-pt-4 gx-pb-3 gx-px-3"
  }, __jsx("div", {
    className: "gx-separator gx-bg-sepia"
  }), __jsx("h2", {
    className: "gx-mb-4 gx-text-sepia"
  }, "Dry Fruit"), __jsx("div", {
    className: "gx-d-block"
  }, __jsx("img", {
    className: "gx-mb-4 gx-rounded-circle gx-img-fluid gx-object-cover",
    src: "https://via.placeholder.com/120X120",
    alt: "khajoor"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-btn-sepia gx-text-uppercase gx-fs-sm gx-mb-2",
    htmlType: "submit"
  }, "Add to Cart"));
};

/* harmony default export */ __webpack_exports__["default"] = (DryFruit);

/***/ }),

/***/ "./app/components/Widgets/FlyingBird.js":
/*!**********************************************!*\
  !*** ./app/components/Widgets/FlyingBird.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FlyingBird = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "gx-media gx-align-items-center gx-mb-4"
  }, __jsx("div", {
    className: "gx-mr-3"
  }, __jsx("img", {
    src: "/images/widget/flying.png",
    alt: "flying"
  })), __jsx("div", {
    className: "gx-media-body"
  }, __jsx("h2", {
    className: "gx-mb-1"
  }, "Flying bird"), __jsx("p", {
    className: "gx-text-grey gx-mb-0"
  }, "Bob Bush"))), __jsx("p", {
    className: "gx-mb-4"
  }, "Some description about the card. This widget could be used to describe a project, a product, user\u2019s profile or may be more."), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    className: "gx-mb-1",
    htmlType: "submit"
  }, "Subscribe"));
};

/* harmony default export */ __webpack_exports__["default"] = (FlyingBird);

/***/ }),

/***/ "./app/components/Widgets/FriendshipCard.js":
/*!**************************************************!*\
  !*** ./app/components/Widgets/FriendshipCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FriendshipCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-p-lg-1"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 9,
    lg: 10,
    md: 10,
    sm: 10,
    xs: 24
  }, __jsx("img", {
    className: "gx-rounded-lg gx-w-100",
    alt: "...",
    src: "https://via.placeholder.com/392X470"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 15,
    lg: 14,
    md: 14,
    sm: 14,
    xs: 24
  }, __jsx("div", {
    className: "gx-fnd-content"
  }, __jsx("p", {
    className: "gx-text-grey"
  }, "Outdoor Experience"), __jsx("h2", {
    className: "gx-text-uppercase gx-text-black gx-font-weight-bold gx-fnd-title"
  }, "A Friendship with high waves"), __jsx("p", null, "Had a great time with family on beach this weekend."), __jsx("ul", {
    className: "gx-fnd-gallery-list"
  }, __jsx("li", null, __jsx("img", {
    alt: "...",
    src: "https://via.placeholder.com/70X70",
    className: "gx-rounded-lg gx-img-fluid"
  })), __jsx("li", null, __jsx("img", {
    alt: "...",
    src: "https://via.placeholder.com/70X70",
    className: "gx-rounded-lg gx-img-fluid"
  })), __jsx("li", null, __jsx("img", {
    alt: "...",
    src: "https://via.placeholder.com/70X70",
    className: "gx-rounded-lg gx-img-fluid"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FriendshipCard);

/***/ }),

/***/ "./app/components/Widgets/GreenStepCard.js":
/*!*************************************************!*\
  !*** ./app/components/Widgets/GreenStepCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes/main/Widgets/data */ "./routes/main/Widgets/data.js");
/* harmony import */ var _GreenStepItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GreenStepItem */ "./app/components/Widgets/GreenStepItem.js");
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const GreenStepCard = () => {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__["greenStepList"][0].image);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styleName: "gx-card-full"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx("div", {
    className: "gx-slick-slider-lt-thumb"
  }, __jsx("img", {
    className: loading ? 'fadeout gx-img-fluid' : 'fadein gx-img-fluid',
    src: image,
    alt: "..."
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    className: "gx-slick-slider gx-slick-slider-dot-top"
  }, settings, {
    afterChange: index => {
      setLoading(false);
      setImage(_routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__["greenStepList"][index].image);
    },
    beforeChange: (oldIndex, newIndex) => {
      setLoading(true);
    }
  }), _routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__["greenStepList"].map((data, index) => __jsx(_GreenStepItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: index,
    data: data
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (GreenStepCard);

/***/ }),

/***/ "./app/components/Widgets/GreenStepItem.js":
/*!*************************************************!*\
  !*** ./app/components/Widgets/GreenStepItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GreenStepItem = ({
  data
}) => {
  const {
    title,
    subTitle,
    desc
  } = data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    className: "h3 gx-mb-2"
  }, title), __jsx("p", {
    className: "gx-text-grey"
  }, subTitle), __jsx("p", null, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (GreenStepItem);

/***/ }),

/***/ "./app/components/Widgets/IconCard.js":
/*!********************************************!*\
  !*** ./app/components/Widgets/IconCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IconCard = ({
  color,
  icon
}) => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: `gx-card-full gx-p-2 gx-text-center gx-text-primary ${color}`
  }, __jsx("i", {
    className: `icon icon-${icon} gx-fs-iconcard`
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCard);

/***/ }),

/***/ "./app/components/Widgets/IncreamentCard.js":
/*!**************************************************!*\
  !*** ./app/components/Widgets/IncreamentCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const data = [{
  name: 'Page A',
  increment: 200
}, {
  name: 'Page B',
  increment: 1000
}, {
  name: 'Page C',
  increment: 600
}, {
  name: 'Page D',
  increment: 1600
}, {
  name: 'Page D',
  increment: 1000
}, {
  name: 'Page H',
  increment: 2260
}, {
  name: 'Page K',
  increment: 400
}];

const IncreamentCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-card-full"
  }, __jsx("div", {
    className: "gx-actchart gx-px-3 gx-pt-3 gx-pb-2 gx-d-flex gx-flex-row"
  }, __jsx("h2", {
    className: "gx-mb-0 gx-mr-2 gx-fs-lg"
  }, "84% ", __jsx("i", {
    className: "icon icon-menu-up gx-fs-sm"
  })), __jsx("p", {
    className: "gx-mb-0 gx-text-grey gx-fs-sm"
  }, "Increment in Active users")), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    width: "100%",
    height: 60
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
    data: data,
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx("defs", null, __jsx("linearGradient", {
    id: "color07",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, __jsx("stop", {
    offset: "5%",
    stopColor: "#FF557F",
    stopOpacity: 0.9
  }), __jsx("stop", {
    offset: "95%",
    stopColor: "#6757DE",
    stopOpacity: 0.9
  }))), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
    dataKey: "increment",
    stackId: "2",
    strokeWidth: 0,
    stroke: "#4D95F3",
    fill: "url(#color07)",
    fillOpacity: 1
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IncreamentCard);

/***/ }),

/***/ "./app/components/Widgets/NewPhotos.js":
/*!*********************************************!*\
  !*** ./app/components/Widgets/NewPhotos.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NewPhotos = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-widget-bg"
  }, __jsx("span", {
    className: "gx-widget-badge"
  }, "$20/month"), __jsx("i", {
    className: "icon icon-camera gx-fs-xlxl"
  }), __jsx("h1", {
    className: "gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4"
  }, "38,248 Photos"), __jsx("p", null, "NEW PHOTOS ADDED THIS WEEK"), __jsx("p", null, "Now kickstart with your next design. Subscribe today and save $20/month"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-1 gx-btn-warning",
    htmlType: "submit"
  }, "Subscribe"));
};

/* harmony default export */ __webpack_exports__["default"] = (NewPhotos);

/***/ }),

/***/ "./app/components/Widgets/Newsletter.js":
/*!**********************************************!*\
  !*** ./app/components/Widgets/Newsletter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Newsletter = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: __jsx("h4", {
      className: "gx-text-primary gx-text-capitalize gx-mb-0"
    }, __jsx("i", {
      className: "icon icon-mail-open gx-mr-3"
    }), "Newsletter Subscription")
  }, __jsx("h2", {
    className: "gx-mb-3 gx-mb-xxl-4 gx-font-weight-light"
  }, "Dont's miss our weekly news and updates"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "gx-signup-form gx-form-row0 gx-mb-0"
  }, __jsx("div", {
    className: "gx-mb-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Username"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    className: "gx-mb-0",
    htmlType: "submit"
  }, "Subscribe")));
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "./app/components/Widgets/PhotosCard.js":
/*!**********************************************!*\
  !*** ./app/components/Widgets/PhotosCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PhotosCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-pink-purple-gradient gx-text-white gx-card-1367-p"
  }, __jsx("h2", {
    className: "gx-font-weight-semi-bold gx-text-white"
  }, "523"), __jsx("p", null, "+18 New Photos"), __jsx("p", {
    className: "gx-text-uppercase gx-fs-sm gx-mb-0"
  }, "Photos"));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotosCard);

/***/ }),

/***/ "./app/components/Widgets/Productivity.js":
/*!************************************************!*\
  !*** ./app/components/Widgets/Productivity.js ***!
  \************************************************/
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
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const data = [{
  name: 'Page A',
  price: 200
}, {
  name: 'Page B',
  price: 800
}, {
  name: 'Page C',
  price: 600
}, {
  name: 'Page D',
  price: 2200
}, {
  name: 'Page D',
  price: 1000
}, {
  name: 'Page H',
  price: 2960
}, {
  name: 'Page K',
  price: 1960
}];

const Productivity = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleName: "gx-card-full",
    extra: __jsx("i", {
      className: "icon icon-setting gx-text-grey gx-fs-xl"
    })
  }, __jsx("div", {
    className: "gx-text-center gx-px-3 gx-pt-3"
  }, __jsx("div", {
    className: "gx-d-flex gx-justify-content-around gx-align-items-center gx-mb-3"
  }, __jsx("i", {
    className: "icon icon-chart gx-fs-xxl gx-text-grey"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-80",
    src: "https://via.placeholder.com/150"
  }), __jsx("i", {
    className: "icon icon-chat gx-fs-xxl gx-text-grey"
  })), __jsx("div", {
    className: "gx-mb-3"
  }, __jsx("h2", null, "Christina Johnson"), __jsx("p", {
    className: "gx-text-grey"
  }, "Crypto Expert"))), __jsx("div", {
    className: "gx-rechart"
  }, __jsx("div", {
    className: "gx-rechart-prod"
  }, __jsx("div", {
    className: "gx-d-flex gx-flex-row"
  }, __jsx("i", {
    className: "icon icon-menu-up gx-text-geekblue gx-mr-2 gx-pt-1"
  }), __jsx("h2", {
    className: "gx-text-geekblue"
  }, "38%")), __jsx("p", {
    className: "gx-text-left gx-text-grey"
  }, "Productivity")), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
    width: "100%",
    height: 118
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
    data: data,
    margin: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
    type: "monotone",
    dataKey: "price",
    stackId: "2",
    stroke: "#4D95F3",
    fill: "#038FDE",
    fillOpacity: 1
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Productivity);

/***/ }),

/***/ "./app/components/Widgets/ProjectWidget.js":
/*!*************************************************!*\
  !*** ./app/components/Widgets/ProjectWidget.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "0"
}, __jsx("a", {
  href: "http://www.alipay.com/"
}, "1st menu item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, __jsx("a", {
  href: "http://www.taobao.com/"
}, "2nd menu item")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Divider, null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "3rd menu item"));

const ProjectWidget = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-ch-capitalize gx-card-sm-px",
    extra: __jsx("ul", {
      className: "gx-list-inline gx-ml-auto gx-mb-0 gx-text-grey"
    }, __jsx("li", null, __jsx("i", {
      className: "icon icon-sweet-alert"
    })), __jsx("li", null, __jsx("i", {
      className: "icon icon-invert-color"
    })), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu,
      trigger: ['click']
    }, __jsx("span", {
      className: "gx-link ant-dropdown-link gx-text-grey"
    }, __jsx("i", {
      className: "icon icon-chevron-down"
    }))))),
    title: "Project Widget"
  }, __jsx("div", {
    className: "gx-text-center gx-pt-sm-3"
  }, __jsx("img", {
    className: "gx-size-60 gx-mb-3",
    src: "https://via.placeholder.com/44X46",
    alt: "birds"
  }), __jsx("h2", {
    className: "gx-mb-3 gx-mb-sm-4"
  }, "Eagal Hunt App"), __jsx("ul", {
    className: "gx-list-inline gx-mb-3 gx-mb-lg-4"
  }, __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://via.placeholder.com/150"
  })), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://via.placeholder.com/150"
  })), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://via.placeholder.com/150"
  })), __jsx("li", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-bg-primary gx-text-white"
  }, "Ms")), __jsx("li", null, __jsx("span", {
    className: "ant-avatar gx-border gx-border-grey gx-bg-transparent gx-text-grey gx-d-flex gx-align-items-center gx-justify-content-center"
  }, __jsx("i", {
    className: "icon icon-add"
  })))), __jsx("button", {
    className: "gx-btn gx-btn-primary gx-text-white gx-mb-1"
  }, "Go to project")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectWidget);

/***/ }),

/***/ "./app/components/Widgets/RoadMap.js":
/*!*******************************************!*\
  !*** ./app/components/Widgets/RoadMap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RoadMapItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoadMapItem */ "./app/components/Widgets/RoadMapItem.js");
/* harmony import */ var _routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes/main/Widgets/data */ "./routes/main/Widgets/data.js");
/* harmony import */ var _components_CardBox_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CardBox/index */ "./app/components/CardBox/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const RoadMap = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return __jsx(_components_CardBox_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-card-full",
    heading: ''
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    className: "gx-slick-slider"
  }, settings), _routes_main_Widgets_data__WEBPACK_IMPORTED_MODULE_5__["mediaList"].map((media, index) => __jsx(_RoadMapItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    data: media
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadMap);

/***/ }),

/***/ "./app/components/Widgets/RoadMapItem.js":
/*!***********************************************!*\
  !*** ./app/components/Widgets/RoadMapItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RoadMapItem = ({
  data
}) => {
  const {
    image,
    image2,
    title,
    desc
  } = data;
  return __jsx("div", {
    className: "gx-slider"
  }, __jsx("div", {
    className: "gx-slider-img"
  }, __jsx("img", {
    alt: "example",
    src: image,
    style: {
      maxHeight: 185
    }
  }), __jsx("img", {
    className: "gx-img-up",
    alt: "example",
    src: image2
  })), __jsx("div", {
    className: "gx-slider-content"
  }, __jsx("h4", null, title), __jsx("p", {
    className: "gx-text-grey"
  }, desc)));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadMapItem);

/***/ }),

/***/ "./app/components/Widgets/SmartHomeCard.js":
/*!*************************************************!*\
  !*** ./app/components/Widgets/SmartHomeCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SmartHomeCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-card-full"
  }, __jsx("img", {
    className: "gx-smart-img",
    alt: "example",
    src: "https://via.placeholder.com/576X383"
  }), __jsx("div", {
    className: "gx-p-3"
  }, __jsx("p", {
    className: "gx-mb-2"
  }, "Smart home on iPad with smart kids"), __jsx("span", {
    className: "gx-text-primary gx-pointer gx-text-uppercase gx-fs-sm"
  }, "Read More")));
};

/* harmony default export */ __webpack_exports__["default"] = (SmartHomeCard);

/***/ }),

/***/ "./app/components/Widgets/SocialMedia.js":
/*!***********************************************!*\
  !*** ./app/components/Widgets/SocialMedia.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SocialMedia = () => {
  const ButtonGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group;
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", null, __jsx("div", {
    className: "ant-card-head-title gx-mb-3"
  }, "Social Media"), __jsx("h2", {
    className: "gx-mb-3"
  }, "Digital Media Marketing Online Webbinar"), __jsx("p", {
    className: "gx-text-grey gx-fs-sm"
  }, "27th Aug, 09:30 pm EST"), __jsx("p", null, "Learn from experts. This webinar explains right.."), __jsx("h4", {
    className: "gx-text-primary gx-mb-3 gx-mb-sm-4"
  }, "Are You ready to join?"), __jsx(ButtonGroup, {
    className: "gx-mb-1"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-mb-0",
    type: "primary"
  }, "Yes"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-btn-warning gx-mb-0"
  }, "Maybe"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "gx-btn-light gx-mb-0"
  }, "No"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./app/components/Widgets/ToolTheDay.js":
/*!**********************************************!*\
  !*** ./app/components/Widgets/ToolTheDay.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ToolTheDay = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    styleName: "gx-card-full gx-text-center"
  }, __jsx("div", {
    className: "gx-pt-4 gx-px-3"
  }, __jsx("div", {
    className: "gx-separator gx-bg-success-dark"
  }), __jsx("h2", {
    className: "gx-mb-4 gx-text-success-dark"
  }, "Tool's Day"), __jsx("img", {
    className: "gx-mb-4 gx-rounded-circle gx-img-fluid gx-object-cover",
    src: "https://via.placeholder.com/120X120",
    alt: "spoons"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    className: "gx-mt-sm-4 gx-fs-sm gx-btn-block gx-mb-0 gx-text-uppercase gx-border-radius-top-left-0 gx-border-radius-top-right-0",
    size: "large",
    htmlType: "submit",
    block: true
  }, "learn more"));
};

/* harmony default export */ __webpack_exports__["default"] = (ToolTheDay);

/***/ }),

/***/ "./app/components/Widgets/UnreadMessagesCard.js":
/*!******************************************************!*\
  !*** ./app/components/Widgets/UnreadMessagesCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UnreadMessagesCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-blue-cyan-gradient gx-text-white gx-card-1367-p"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-between gx-mb-2"
  }, __jsx("i", {
    className: "icon icon-mail-open gx-fs-xxl gx-mr-2"
  }), __jsx("i", {
    className: "icon icon-long-arrow-right gx-fs-xxl"
  })), __jsx("h2", {
    className: "gx-text-white"
  }, "271"), __jsx("p", {
    className: "gx-mb-0"
  }, "New messages"));
};

/* harmony default export */ __webpack_exports__["default"] = (UnreadMessagesCard);

/***/ }),

/***/ "./app/components/Widgets/UserCard.js":
/*!********************************************!*\
  !*** ./app/components/Widgets/UserCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "gx-card-full gx-dot-arrow-hover"
  }, __jsx("div", {
    className: "gx-user-wid-row"
  }, __jsx("div", {
    className: "gx-user-wid gx-mr-3"
  }, __jsx("img", {
    alt: "...",
    src: "https://via.placeholder.com/150",
    className: "gx-object-cover"
  })), __jsx("div", {
    className: "gx-user-wid-body gx-py-3 gx-pr-3"
  }, __jsx("div", {
    className: "ant-row-flex"
  }, __jsx("h2", {
    className: "h4 gx-mr-1 gx-mb-1"
  }, "Mila Alba")), __jsx("p", {
    className: "gx-mb-1 gx-text-grey gx-fs-sm"
  }, "Creative Head", __jsx("br", null), " @example"), __jsx("div", {
    className: "gx-dot-arrow"
  }, __jsx("div", {
    className: "gx-bg-primary gx-hover-arrow"
  }, __jsx("i", {
    className: "icon icon-long-arrow-right gx-text-white"
  })), __jsx("div", {
    className: "gx-dot"
  }, __jsx("i", {
    className: "icon icon-ellipse-v gx-text-primary"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./app/components/Widgets/WorkStatusCard.js":
/*!**************************************************!*\
  !*** ./app/components/Widgets/WorkStatusCard.js ***!
  \**************************************************/
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
/* harmony import */ var _components_Widget_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widget/index */ "./app/components/Widget/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const data = [{
  name: 'Page A',
  lastWeek: 1900,
  thisWeek: 3200
}, {
  name: 'Page B',
  lastWeek: 1300,
  thisWeek: 4000
}, {
  name: 'Page C',
  lastWeek: 1850,
  thisWeek: 2500
}, {
  name: 'Page D',
  lastWeek: 1680,
  thisWeek: 3000
}, {
  name: 'Page H',
  lastWeek: 3900,
  thisWeek: 2560
}, {
  name: 'Page I',
  lastWeek: 1400,
  thisWeek: 2700
}, {
  name: 'Page J',
  lastWeek: 2200,
  thisWeek: 2000
}, {
  name: 'Page K',
  lastWeek: 1300,
  thisWeek: 2000
}, {
  name: 'Page L',
  lastWeek: 1880,
  thisWeek: 3408
}, {
  name: 'Page M',
  lastWeek: 2290,
  thisWeek: 2960
}];

const WorkStatusCard = () => {
  return __jsx(_components_Widget_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    styleName: "gx-card-img gx-card-cover-black",
    hoverable: true,
    title: __jsx("h1", {
      className: "gx-font-weight-bold gx-mb-1 gx-fs-xxl"
    }, "76% ", __jsx("i", {
      className: "icon icon-menu-up gx-fs-sm"
    })),
    cover: __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      className: "gx-bg-dark",
      width: "100%",
      height: 80
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
      data: data,
      margin: {
        top: 10,
        right: 0,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
      type: "monotone",
      dataKey: "thisWeek",
      stackId: "2",
      stroke: "#FE9E15",
      fill: "#FE9E15",
      fillOpacity: 1
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
      type: "monotone",
      dataKey: "lastWeek",
      stackId: "1",
      stroke: "#038FDE",
      fill: "#038FDE",
      fillOpacity: 1
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    className: "gx-badge-up gx-badge-up-right gx-bg-white gx-text-primary gx-size-36"
  }, __jsx("i", {
    className: "icon icon-long-arrow-right gx-fs-lg"
  }), " "), __jsx("h4", null, "Works Status"), __jsx("p", {
    className: "gx-text-light gx-fs-sm gx-mb-0"
  }, "Last week progress"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkStatusCard);

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./routes/main/Widgets/data.js":
/*!*************************************!*\
  !*** ./routes/main/Widgets/data.js ***!
  \*************************************/
/*! exports provided: mediaList, greenStepList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaList", function() { return mediaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenStepList", function() { return greenStepList; });
const mediaList = [{
  id: 1,
  postion: 0,
  image: 'https://via.placeholder.com/575x372',
  image2: 'https://via.placeholder.com/80x80',
  title: 'Welcome to roadmap new',
  desc: 'Crypto Expert'
}, {
  id: 2,
  postion: 0,
  image: 'https://via.placeholder.com/575x372',
  image2: 'https://via.placeholder.com/80x80',
  title: 'Welcome to roadmap',
  desc: 'Crypto Expert'
}, {
  id: 3,
  postion: 0,
  image: 'https://via.placeholder.com/575x372',
  image2: 'https://via.placeholder.com/80x80',
  title: 'Welcome to roadmap new',
  desc: 'Crypto Expert'
}];
const greenStepList = [{
  id: 1,
  title: 'Welcome to roadmap new',
  image: 'https://via.placeholder.com/120x120',
  subTitle: 'Theory of origami',
  desc: 'Mother nature want you to become a\n' + '              part of it and feel the love. There could\n' + '              be more which you can take as an\n' + '              initiative and collaborate in making this\n' + '              world a better world.'
}, {
  id: 2,
  title: 'Generate coffee to use in your graphic',
  image: 'https://via.placeholder.com/575x692',
  subTitle: 'Theory of Coffee',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
}, {
  id: 3,
  image: 'https://via.placeholder.com/575x692',
  title: 'A single right green step',
  subTitle: 'Theory of green',
  desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
}];

/***/ }),

/***/ "./routes/main/Widgets/index.js":
/*!**************************************!*\
  !*** ./routes/main/Widgets/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_Widgets_Productivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/components/Widgets/Productivity */ "./app/components/Widgets/Productivity.js");
/* harmony import */ var _app_components_Widgets_Newsletter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/components/Widgets/Newsletter */ "./app/components/Widgets/Newsletter.js");
/* harmony import */ var _app_components_Widgets_SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/components/Widgets/SocialMedia */ "./app/components/Widgets/SocialMedia.js");
/* harmony import */ var _app_components_Widgets_ProjectWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/components/Widgets/ProjectWidget */ "./app/components/Widgets/ProjectWidget.js");
/* harmony import */ var _app_components_Widgets_RoadMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/components/Widgets/RoadMap */ "./app/components/Widgets/RoadMap.js");
/* harmony import */ var _app_components_Widgets_FlyingBird__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/Widgets/FlyingBird */ "./app/components/Widgets/FlyingBird.js");
/* harmony import */ var _app_components_Widgets_DryFruit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/components/Widgets/DryFruit */ "./app/components/Widgets/DryFruit.js");
/* harmony import */ var _app_components_Widgets_AayurvedaCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app/components/Widgets/AayurvedaCard */ "./app/components/Widgets/AayurvedaCard.js");
/* harmony import */ var _app_components_Widgets_ToolTheDay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../app/components/Widgets/ToolTheDay */ "./app/components/Widgets/ToolTheDay.js");
/* harmony import */ var _app_components_Widgets_SmartHomeCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app/components/Widgets/SmartHomeCard */ "./app/components/Widgets/SmartHomeCard.js");
/* harmony import */ var _app_components_Widgets_PhotosCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../app/components/Widgets/PhotosCard */ "./app/components/Widgets/PhotosCard.js");
/* harmony import */ var _app_components_Widgets_UnreadMessagesCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../app/components/Widgets/UnreadMessagesCard */ "./app/components/Widgets/UnreadMessagesCard.js");
/* harmony import */ var _app_components_Widgets_IconCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../app/components/Widgets/IconCard */ "./app/components/Widgets/IconCard.js");
/* harmony import */ var _app_components_Widgets_WorkStatusCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../app/components/Widgets/WorkStatusCard */ "./app/components/Widgets/WorkStatusCard.js");
/* harmony import */ var _app_components_Widgets_UserCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../app/components/Widgets/UserCard */ "./app/components/Widgets/UserCard.js");
/* harmony import */ var _app_components_Widgets_IncreamentCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../app/components/Widgets/IncreamentCard */ "./app/components/Widgets/IncreamentCard.js");
/* harmony import */ var _app_components_Widgets_CampaignCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../app/components/Widgets/CampaignCard */ "./app/components/Widgets/CampaignCard.js");
/* harmony import */ var _app_components_Widgets_BuildingCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../app/components/Widgets/BuildingCard */ "./app/components/Widgets/BuildingCard.js");
/* harmony import */ var _app_components_Widgets_GreenStepCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../app/components/Widgets/GreenStepCard */ "./app/components/Widgets/GreenStepCard.js");
/* harmony import */ var _app_components_Widgets_FriendshipCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../app/components/Widgets/FriendshipCard */ "./app/components/Widgets/FriendshipCard.js");
/* harmony import */ var _app_components_Widgets_NewPhotos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../app/components/Widgets/NewPhotos */ "./app/components/Widgets/NewPhotos.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
























const Widgets = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_ProjectWidget__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_Productivity__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_SocialMedia__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_RoadMap__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_Newsletter__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_NewPhotos__WEBPACK_IMPORTED_MODULE_22__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 8,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_FlyingBird__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_DryFruit__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 8,
    md: 8,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_AayurvedaCard__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 8,
    md: 8,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_ToolTheDay__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 8,
    md: 8,
    sm: 12,
    xs: 24
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx(_app_components_Widgets_IconCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: "noodles"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx(_app_components_Widgets_IconCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
    icon: "donut"
  }))), __jsx(_app_components_Widgets_SmartHomeCard__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_PhotosCard__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_app_components_Widgets_UnreadMessagesCard__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 4,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_Widgets_WorkStatusCard__WEBPACK_IMPORTED_MODULE_15__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx(_app_components_Widgets_IconCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "gx-bg-orange gx-icon-white",
    icon: "burger"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, __jsx(_app_components_Widgets_IconCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "gx-bg-primary gx-icon-white",
    icon: "pizza"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_UserCard__WEBPACK_IMPORTED_MODULE_16__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_IncreamentCard__WEBPACK_IMPORTED_MODULE_17__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_CampaignCard__WEBPACK_IMPORTED_MODULE_18__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 6,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 24
  }, __jsx(_app_components_Widgets_BuildingCard__WEBPACK_IMPORTED_MODULE_19__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_Widgets_GreenStepCard__WEBPACK_IMPORTED_MODULE_20__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: 12,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }, __jsx(_app_components_Widgets_FriendshipCard__WEBPACK_IMPORTED_MODULE_21__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Widgets);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9DYXJkQm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL0FheXVydmVkYUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9CdWlsZGluZ0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9DYW1wYWlnbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9EcnlGcnVpdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL0ZseWluZ0JpcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9GcmllbmRzaGlwQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL0dyZWVuU3RlcENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9HcmVlblN0ZXBJdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvSWNvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9JbmNyZWFtZW50Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL05ld1Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL05ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9QaG90b3NDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvUHJvZHVjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvUHJvamVjdFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1JvYWRNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Sb2FkTWFwSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1NtYXJ0SG9tZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Tb2NpYWxNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1Rvb2xUaGVEYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9VbnJlYWRNZXNzYWdlc0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Vc2VyQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1dvcmtTdGF0dXNDYXJkLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy9tYWluL1dpZGdldHMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvbWFpbi9XaWRnZXRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRCb3giLCJoZWFkaW5nIiwiY2hpbGRyZW4iLCJzdHlsZU5hbWUiLCJjaGlsZHJlblN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJXaWRnZXQiLCJ0aXRsZSIsImNvdmVyIiwiZXh0cmEiLCJhY3Rpb25zIiwiQWF5dXJ2ZWRhQ2FyZCIsIkJ1aWxkaW5nQ2FyZCIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJuYW1lIiwidXYiLCJwcmljZSIsInN2IiwiQ2FtcGFpZ25DYXJkIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiRHJ5RnJ1aXQiLCJGbHlpbmdCaXJkIiwiRnJpZW5kc2hpcENhcmQiLCJHcmVlblN0ZXBDYXJkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiZ3JlZW5TdGVwTGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0dGluZ3MiLCJhcnJvd3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5kZXgiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibWFwIiwiR3JlZW5TdGVwSXRlbSIsInN1YlRpdGxlIiwiZGVzYyIsIkljb25DYXJkIiwiY29sb3IiLCJpY29uIiwiaW5jcmVtZW50IiwiSW5jcmVhbWVudENhcmQiLCJOZXdQaG90b3MiLCJOZXdzbGV0dGVyIiwiUGhvdG9zQ2FyZCIsIlByb2R1Y3Rpdml0eSIsIm1lbnUiLCJQcm9qZWN0V2lkZ2V0IiwiUm9hZE1hcCIsIm1lZGlhTGlzdCIsIm1lZGlhIiwiUm9hZE1hcEl0ZW0iLCJpbWFnZTIiLCJtYXhIZWlnaHQiLCJTbWFydEhvbWVDYXJkIiwiU29jaWFsTWVkaWEiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsIkdyb3VwIiwiVG9vbFRoZURheSIsIlVucmVhZE1lc3NhZ2VzQ2FyZCIsIlVzZXJDYXJkIiwibGFzdFdlZWsiLCJ0aGlzV2VlayIsIldvcmtTdGF0dXNDYXJkIiwiaWQiLCJwb3N0aW9uIiwiV2lkZ2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUNDLFNBQUQ7QUFBVUMsVUFBVjtBQUFvQkMsV0FBcEI7QUFBK0JDO0FBQS9CLENBQUQsS0FBbUQ7QUFFakUsU0FDRTtBQUFLLGFBQVMsRUFBRyxXQUFVRCxTQUFVO0FBQXJDLEtBQ0dGLE9BQU8sSUFDUjtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUErQkEsT0FBL0IsQ0FERixDQUZGLEVBS0U7QUFBSyxhQUFTLEVBQUcsZ0JBQWVHLGFBQWM7QUFBOUMsS0FDR0YsUUFESCxD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LEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFxQyxNQUFFLEVBQUU7QUFBekMsS0FDRSxNQUFDLDhFQUFELE9BREYsQ0E3RUYsRUFnRkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBcUMsTUFBRSxFQUFFO0FBQXpDLEtBQ0UsTUFBQywrRUFBRCxPQURGLENBaEZGLENBREYsQ0FERjtBQXdGRCxDQXpGRDs7QUEyRmVBLHNFQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgQ2FyZEJveCA9ICh7aGVhZGluZywgY2hpbGRyZW4sIHN0eWxlTmFtZSwgY2hpbGRyZW5TdHlsZX0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3gtY2FyZCAke3N0eWxlTmFtZX1gfT5cclxuICAgICAge2hlYWRpbmcgJiZcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1jYXJkLWhlYWRcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3gtY2FyZC10aXRsZVwiPntoZWFkaW5nfTwvaDM+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BneC1jYXJkLWJvZHkgJHtjaGlsZHJlblN0eWxlfWB9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQm94O1xyXG5cclxuQ2FyZEJveC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbkNhcmRCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogJycsXHJcbiAgY2hpbGRyZW5TdHlsZTogJydcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IFdpZGdldCA9ICh7dGl0bGUsIGNoaWxkcmVuLCBzdHlsZU5hbWUsIGNvdmVyLCBleHRyYSwgYWN0aW9uc30pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHRpdGxlPXt0aXRsZX0gYWN0aW9ucz17YWN0aW9uc30gY292ZXI9e2NvdmVyfSBjbGFzc05hbWU9e2BneC1jYXJkLXdpZGdldCAke3N0eWxlTmFtZX1gfSBleHRyYT17ZXh0cmF9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xyXG5XaWRnZXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlTmFtZTogJycsXHJcbn07XHJcblxyXG5XaWRnZXQucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcclxuICBleHRyYTogUHJvcFR5cGVzLm5vZGUsXHJcbiAgY292ZXI6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBBYXl1cnZlZGFDYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0IHN0eWxlTmFtZT1cImd4LWNhcmQtZnVsbCBneC10ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXB0LTQgZ3gtcHgtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2VwYXJhdG9yIGd4LWJnLXN1Y2Nlc3MtZGFya1wiLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtbWItNCBneC10ZXh0LXN1Y2Nlc3MtZGFya1wiPkFheXVydmVkYTwvaDI+XHJcbiAgICAgICAgPHA+TGVhcm4gZnJvbSBleHBlcnRzXHJcbiAgICAgICAgICB0aGlzIHdlYmluYXIgZXhwbGFpbnNcclxuICAgICAgICAgIHJpZ2h0PC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXRleHQtcHJpbWFyeSBneC1wb2ludGVyIGd4LXRleHQtdXBwZXJjYXNlIGd4LW1iLTMgZ3gtbWIteHhsLTIgZ3gtZC1ibG9ja1wiPmxlYXJuIE1vcmU8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW10LXh4bC0zIGd4LWF5dXJ2ZWRhLXRodW1iXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJneC1pbWctZmx1aWQgZ3gtdy0xMDBcIiBhbHQ9XCJheXVydmVkYVwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc2WDMzMFwifS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFheXVydmVkYUNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYWRnZX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBCdWlsZGluZ0NhcmQgPSgpPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jYXJkLWZ1bGwgZ3gtZG90LWFycm93LWhvdmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWVkaWEgZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LWZsZXgtbm93cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1weC0zIGd4LWJ1aWxkLWJveC1sYXlcIj5cclxuICAgICAgICAgIDxpbWcgYWx0PVwiLi4uXCIgc3JjPXtcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MVg1N1wifSBjbGFzc05hbWU9XCJcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5IGd4LXB5LTMgZ3gtcHItNCBneC1idWlsZC1ib3gtbGF5LWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwiZ3gtYmFkZ2UtcmFkaXVzLXNtIGd4LW1iLTJcIiBjb3VudD1cIjM0IE5ld1wiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzUyYzQxYSd9fS8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDQgZ3gtdGV4dC10cnVuY2F0ZSBneC1tYi0xXCI+SG9tZSAmIE9mZmljZXM8L2gyPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC1ncmV5IGd4LWZzLXNtXCI+UHJvcGVydGllcyB0aGlzIHdlZWs8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWRvdC1hcnJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJnLXByaW1hcnkgZ3gtaG92ZXItYXJyb3dcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9uZy1hcnJvdy1yaWdodCBneC10ZXh0LXdoaXRlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kb3RcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZWxsaXBzZS12IGd4LXRleHQtcHJpbWFyeVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZGluZ0NhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYXIsIEJhckNoYXJ0LCBSZXNwb25zaXZlQ29udGFpbmVyLCBUb29sdGlwfSBmcm9tIFwicmVjaGFydHNcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgdXY6IDUwMCwgcHJpY2U6IDYwMCwgc3Y6IDQwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCB1djogNzAwLCBwcmljZTogODAwLCBzdjogNzAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIHV2OiA5MDAsIHByaWNlOiAxNDAwLCBzdjogNzAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIHV2OiAxNjAwLCBwcmljZTogMTgwMCwgc3Y6IDE4MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBHJywgdXY6IDEyMDAsIHByaWNlOiAxMDAwLCBzdjogMTgwMH0sXHJcbiAge25hbWU6ICdQYWdlIEYnLCB1djogODAwLCBwcmljZTogMTAwMCwgc3Y6IDEyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBHJywgdXY6IDUwMCwgcHJpY2U6IDMwMCwgc3Y6IDE1MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBIJywgdXY6IDQwMCwgcHJpY2U6IDIwMCwgc3Y6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEknLCB1djogOTAwLCBwcmljZTogODAwLCBzdjogMTQwMH0sXHJcbl07XHJcblxyXG5jb25zdCBDYW1wYWlnbkNhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtY2FyZC1mdWxsIGd4LXB4LTMgZ3gtcHktM1wiPlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgeGw9ezE1fSBsZz17MTV9IG1kPXsxNX0gc209ezI0fSB4cz17MjR9IGNsYXNzTmFtZT1cImd4LXByLW1kLTJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoNCBneC1tYi0yXCI+Q2FtcGFpZ24gU3RhdHM8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMSBneC10ZXh0LWdyZXkgZ3gtZnMtc21cIj5QYXN0IHRocmVlIHdlZWtzPC9wPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxvbmctYXJyb3ctcmlnaHQgZ3gtdGV4dC1ibHVlIGd4LWZzLWxnIGd4LXBvaW50ZXJcIi8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4bD17OX0gbGc9ezl9IG1kPXs5fSBzbT17MjR9IHhzPXsyNH0gY2xhc3NOYW1lPVwiZ3gtcHItbWQtMlwiPlxyXG4gICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs1MH0+XHJcbiAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt7dG9wOiAwLCByaWdodDogMCwgbGVmdDogMCwgYm90dG9tOiAwfX0+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAvPlxyXG4gICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cInV2XCIgc3RhY2tJZD1cImFcIiBmaWxsPVwiIzEwMzE2QlwiLz5cclxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJwcmljZVwiIHN0YWNrSWQ9XCJhXCIgZmlsbD1cIiNGRTlFMTVcIi8+XHJcbiAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PVwic3ZcIiBzdGFja0lkPVwiYVwiIGZpbGw9XCIjMDM4RkRFXCIvPlxyXG4gICAgICAgICAgICA8L0JhckNoYXJ0PlxyXG4gICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkNhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgRHJ5RnJ1aXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtY2FyZC1mdWxsIGd4LXRleHQtY2VudGVyIGd4LXB0LTQgZ3gtcGItMyBneC1weC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2VwYXJhdG9yIGd4LWJnLXNlcGlhXCIvPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtbWItNCBneC10ZXh0LXNlcGlhXCI+RHJ5IEZydWl0PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kLWJsb2NrXCI+PGltZyBjbGFzc05hbWU9XCJneC1tYi00IGd4LXJvdW5kZWQtY2lyY2xlIGd4LWltZy1mbHVpZCBneC1vYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEyMFgxMjBcIn0gYWx0PSdraGFqb29yJy8+PC9kaXY+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtYnRuLXNlcGlhIGd4LXRleHQtdXBwZXJjYXNlIGd4LWZzLXNtIGd4LW1iLTJcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyeUZydWl0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBGbHlpbmdCaXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LW1lZGlhIGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tci0zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3dpZGdldC9mbHlpbmcucG5nXCJ9IGFsdD0nZmx5aW5nJy8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtbWItMVwiPlxyXG4gICAgICAgICAgICBGbHlpbmcgYmlyZFxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LXRleHQtZ3JleSBneC1tYi0wXCI+Qm9iIEJ1c2g8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJneC1tYi00XCI+U29tZSBkZXNjcmlwdGlvbiBhYm91dCB0aGUgY2FyZC4gVGhpcyB3aWRnZXRcclxuICAgICAgICBjb3VsZCBiZSB1c2VkIHRvIGRlc2NyaWJlIGEgcHJvamVjdCwgYSBwcm9kdWN0LFxyXG4gICAgICAgIHVzZXLigJlzIHByb2ZpbGUgb3IgbWF5IGJlIG1vcmUuPC9wPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZ3gtbWItMVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZseWluZ0JpcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgRnJpZW5kc2hpcENhcmQgPSgpPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1wLWxnLTFcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhsPXs5fSBsZz17MTB9IG1kPXsxMH0gc209ezEwfSB4cz17MjR9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJneC1yb3VuZGVkLWxnIGd4LXctMTAwXCIgYWx0PVwiLi4uXCIgc3JjPXtcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zOTJYNDcwXCJ9Lz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXsxNX0gbGc9ezE0fSBtZD17MTR9IHNtPXsxNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtZm5kLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5XCI+T3V0ZG9vciBFeHBlcmllbmNlPC9wPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtdGV4dC11cHBlcmNhc2UgZ3gtdGV4dC1ibGFjayBneC1mb250LXdlaWdodC1ib2xkIGd4LWZuZC10aXRsZVwiPkEgRnJpZW5kc2hpcCB3aXRoIGhpZ2hcclxuICAgICAgICAgICAgICB3YXZlczwvaDI+XHJcbiAgICAgICAgICAgIDxwPkhhZCBhIGdyZWF0IHRpbWUgd2l0aCBmYW1pbHkgb24gYmVhY2ggdGhpc1xyXG4gICAgICAgICAgICAgIHdlZWtlbmQuPC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3gtZm5kLWdhbGxlcnktbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48aW1nIGFsdD1cIi4uLlwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNzBYNzBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1yb3VuZGVkLWxnIGd4LWltZy1mbHVpZFwiLz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aW1nIGFsdD1cIi4uLlwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNzBYNzBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1yb3VuZGVkLWxnIGd4LWltZy1mbHVpZFwiLz48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aW1nIGFsdD1cIi4uLlwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNzBYNzBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneC1yb3VuZGVkLWxnIGd4LWltZy1mbHVpZFwiLz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kc2hpcENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb2wsIFJvd30gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxuaW1wb3J0IHtncmVlblN0ZXBMaXN0fSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL21haW4vV2lkZ2V0cy9kYXRhXCJcclxuaW1wb3J0IEdyZWVuU3RlcEl0ZW0gZnJvbSBcIi4vR3JlZW5TdGVwSXRlbVwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgR3JlZW5TdGVwQ2FyZCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShncmVlblN0ZXBMaXN0WzBdLmltYWdlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jYXJkLWZ1bGxcIj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezI0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2xpY2stc2xpZGVyLWx0LXRodW1iXCI+PGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZmFkZW91dCBneC1pbWctZmx1aWQnIDogJ2ZhZGVpbiBneC1pbWctZmx1aWQnfSBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9XCIuLi5cIi8+PC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8U2xpZGVyIGNsYXNzTmFtZT1cImd4LXNsaWNrLXNsaWRlciBneC1zbGljay1zbGlkZXItZG90LXRvcFwiIHsuLi5zZXR0aW5nc31cclxuICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltYWdlKGdyZWVuU3RlcExpc3RbaW5kZXhdLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYmVmb3JlQ2hhbmdlPXsob2xkSW5kZXgsIG5ld0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2dyZWVuU3RlcExpc3QubWFwKChkYXRhLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICA8R3JlZW5TdGVwSXRlbSBrZXk9e2luZGV4fSBkYXRhPXtkYXRhfS8+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JlZW5TdGVwQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEdyZWVuU3RlcEl0ZW0gPSAoe2RhdGF9KSA9PiB7XHJcbiAgY29uc3Qge3RpdGxlLCBzdWJUaXRsZSwgZGVzY30gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImgzIGd4LW1iLTJcIj57dGl0bGV9PC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5XCI+e3N1YlRpdGxlfTwvcD5cclxuICAgICAgPHA+e2Rlc2N9PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyZWVuU3RlcEl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IEljb25DYXJkID0gKHtjb2xvciwgaWNvbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9e2BneC1jYXJkLWZ1bGwgZ3gtcC0yIGd4LXRleHQtY2VudGVyIGd4LXRleHQtcHJpbWFyeSAke2NvbG9yfWB9PlxyXG4gICAgICA8aSBjbGFzc05hbWU9e2BpY29uIGljb24tJHtpY29ufSBneC1mcy1pY29uY2FyZGB9Lz5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FyZWEsIEFyZWFDaGFydCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcH0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIGluY3JlbWVudDogMjAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQicsIGluY3JlbWVudDogMTAwMH0sXHJcbiAge25hbWU6ICdQYWdlIEMnLCBpbmNyZW1lbnQ6IDYwMH0sXHJcbiAge25hbWU6ICdQYWdlIEQnLCBpbmNyZW1lbnQ6IDE2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgaW5jcmVtZW50OiAxMDAwfSxcclxuICB7bmFtZTogJ1BhZ2UgSCcsIGluY3JlbWVudDogMjI2MH0sXHJcbiAge25hbWU6ICdQYWdlIEsnLCBpbmNyZW1lbnQ6IDQwMH0sXHJcbl07XHJcblxyXG5jb25zdCBJbmNyZWFtZW50Q2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jYXJkLWZ1bGxcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtYWN0Y2hhcnQgZ3gtcHgtMyBneC1wdC0zIGd4LXBiLTIgZ3gtZC1mbGV4IGd4LWZsZXgtcm93XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtbXItMiBneC1mcy1sZ1wiPjg0JSA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS11cCBneC1mcy1zbVwiLz48L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTAgZ3gtdGV4dC1ncmV5IGd4LWZzLXNtXCI+SW5jcmVtZW50IGluIEFjdGl2ZSB1c2VyczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17NjB9PlxyXG4gICAgICAgIDxBcmVhQ2hhcnQgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e3RvcDogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMH19PlxyXG4gICAgICAgICAgPFRvb2x0aXAvPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNvbG9yMDdcIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjFcIiB5Mj1cIjBcIj5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIHN0b3BDb2xvcj1cIiNGRjU1N0ZcIiBzdG9wT3BhY2l0eT17MC45fS8+XHJcbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgc3RvcENvbG9yPVwiIzY3NTdERVwiIHN0b3BPcGFjaXR5PXswLjl9Lz5cclxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgIDxBcmVhIGRhdGFLZXk9XCJpbmNyZW1lbnRcIiBzdGFja0lkPVwiMlwiIHN0cm9rZVdpZHRoPXswfSBzdHJva2U9JyM0RDk1RjMnIGZpbGw9XCJ1cmwoI2NvbG9yMDcpXCIgZmlsbE9wYWNpdHk9ezF9Lz5cclxuICAgICAgICA8L0FyZWFDaGFydD5cclxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmNyZWFtZW50Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5cclxuY29uc3QgTmV3UGhvdG9zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0IHN0eWxlTmFtZT1cImd4LXdpZGdldC1iZ1wiPlxyXG5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtd2lkZ2V0LWJhZGdlXCI+JDIwL21vbnRoPC9zcGFuPlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FtZXJhIGd4LWZzLXhseGxcIi8+XHJcblxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZ3gtZnMteHh4bCBneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtbWItMyBneC1tYi1zbS00XCI+MzgsMjQ4IFBob3RvczwvaDE+XHJcbiAgICAgIDxwPk5FVyBQSE9UT1MgQURERUQgVEhJUyBXRUVLPC9wPlxyXG4gICAgICA8cD5Ob3cga2lja3N0YXJ0IHdpdGggeW91ciBuZXh0IGRlc2lnbi4gU3Vic2NyaWJlXHJcbiAgICAgICAgdG9kYXkgYW5kIHNhdmUgJDIwL21vbnRoPC9wPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LW1iLTEgZ3gtYnRuLXdhcm5pbmdcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIFN1YnNjcmliZVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQaG90b3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCdXR0b24sIEZvcm0sIElucHV0fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBOZXdzbGV0dGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0XHJcbiAgICAgIHRpdGxlPXs8aDQgY2xhc3NOYW1lPVwiZ3gtdGV4dC1wcmltYXJ5IGd4LXRleHQtY2FwaXRhbGl6ZSBneC1tYi0wXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1haWwtb3BlbiBneC1tci0zXCIvPlxyXG4gICAgICAgIE5ld3NsZXR0ZXIgU3Vic2NyaXB0aW9uPC9oND5cclxuICAgICAgfT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LW1iLTMgZ3gtbWIteHhsLTQgZ3gtZm9udC13ZWlnaHQtbGlnaHRcIj5Eb250J3MgbWlzcyBvdXIgd2Vla2x5IG5ld3MgYW5kIHVwZGF0ZXM8L2gyPlxyXG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJneC1zaWdudXAtZm9ybSBneC1mb3JtLXJvdzAgZ3gtbWItMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtbWItM1wiPlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImd4LW1iLTBcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgUGhvdG9zQ2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1waW5rLXB1cnBsZS1ncmFkaWVudCBneC10ZXh0LXdoaXRlIGd4LWNhcmQtMTM2Ny1wXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJneC1mb250LXdlaWdodC1zZW1pLWJvbGQgZ3gtdGV4dC13aGl0ZVwiPjUyMzwvaDI+XHJcbiAgICAgIDxwPisxOCBOZXcgUGhvdG9zPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LXVwcGVyY2FzZSBneC1mcy1zbSBneC1tYi0wXCI+UGhvdG9zPC9wPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3Rvc0NhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7QXJlYSwgQXJlYUNoYXJ0LCBSZXNwb25zaXZlQ29udGFpbmVyfSBmcm9tIFwicmVjaGFydHNcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtuYW1lOiAnUGFnZSBBJywgcHJpY2U6IDIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBwcmljZTogODAwfSxcclxuICB7bmFtZTogJ1BhZ2UgQycsIHByaWNlOiA2MDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJpY2U6IDIyMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBEJywgcHJpY2U6IDEwMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBIJywgcHJpY2U6IDI5NjB9LFxyXG4gIHtuYW1lOiAnUGFnZSBLJywgcHJpY2U6IDE5NjB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJvZHVjdGl2aXR5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0IHN0eWxlTmFtZT1cImd4LWNhcmQtZnVsbFwiIGV4dHJhPXs8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2V0dGluZyBneC10ZXh0LWdyZXkgZ3gtZnMteGxcIi8+fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC10ZXh0LWNlbnRlciBneC1weC0zIGd4LXB0LTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleCBneC1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGd4LWFsaWduLWl0ZW1zLWNlbnRlciBneC1tYi0zXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hhcnQgZ3gtZnMteHhsIGd4LXRleHQtZ3JleVwiLz5cclxuICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtc2l6ZS04MFwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCJ9Lz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGF0IGd4LWZzLXh4bCBneC10ZXh0LWdyZXlcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1tYi0zXCI+XHJcbiAgICAgICAgICA8aDI+Q2hyaXN0aW5hIEpvaG5zb248L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5XCI+Q3J5cHRvIEV4cGVydDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcmVjaGFydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtcmVjaGFydC1wcm9kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWQtZmxleCBneC1mbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS11cCBneC10ZXh0LWdlZWtibHVlIGd4LW1yLTIgZ3gtcHQtMVwiLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LXRleHQtZ2Vla2JsdWVcIj4zOCU8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWxlZnQgZ3gtdGV4dC1ncmV5XCI+UHJvZHVjdGl2aXR5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MTE4fT5cclxuICAgICAgICAgIDxBcmVhQ2hhcnQgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt7dG9wOiAwLCByaWdodDogMCwgbGVmdDogMCwgYm90dG9tOiAwfX0+XHJcbiAgICAgICAgICAgIDxBcmVhIHR5cGU9J21vbm90b25lJyBkYXRhS2V5PVwicHJpY2VcIiBzdGFja0lkPVwiMlwiIHN0cm9rZT0nIzREOTVGMycgZmlsbD1cIiMwMzhGREVcIiBmaWxsT3BhY2l0eT17MX0vPlxyXG4gICAgICAgICAgPC9BcmVhQ2hhcnQ+XHJcbiAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0aXZpdHk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIERyb3Bkb3duLCBNZW51fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnU+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjBcIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuYWxpcGF5LmNvbS9cIj4xc3QgbWVudSBpdGVtPC9hPlxyXG4gICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cudGFvYmFvLmNvbS9cIj4ybmQgbWVudSBpdGVtPC9hPlxyXG4gICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5EaXZpZGVyLz5cclxuICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPjNyZCBtZW51IGl0ZW08L01lbnUuSXRlbT5cclxuICA8L01lbnU+XHJcbik7XHJcblxyXG5cclxuY29uc3QgUHJvamVjdFdpZGdldCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jaC1jYXBpdGFsaXplIGd4LWNhcmQtc20tcHhcIiBleHRyYT17XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJneC1saXN0LWlubGluZSBneC1tbC1hdXRvIGd4LW1iLTAgZ3gtdGV4dC1ncmV5XCI+XHJcbiAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zd2VldC1hbGVydFwiLz48L2xpPlxyXG4gICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uIGljb24taW52ZXJ0LWNvbG9yXCIvPjwvbGk+XHJcbiAgICAgICAgPGxpPjxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3gtbGluayBhbnQtZHJvcGRvd24tbGluayBneC10ZXh0LWdyZXlcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNoZXZyb24tZG93blwiLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0Ryb3Bkb3duPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICB9IHRpdGxlPVwiUHJvamVjdCBXaWRnZXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC10ZXh0LWNlbnRlciBneC1wdC1zbS0zXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJneC1zaXplLTYwIGd4LW1iLTNcIiBzcmM9e1wiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzQ0WDQ2XCJ9IGFsdD0nYmlyZHMnLz5cclxuXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImd4LW1iLTMgZ3gtbWItc20tNFwiPkVhZ2FsIEh1bnQgQXBwPC9oMj5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImd4LWxpc3QtaW5saW5lIGd4LW1iLTMgZ3gtbWItbGctNFwiPlxyXG4gICAgICAgICAgPGxpPjxBdmF0YXIgc3JjPXtcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIn0vPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PEF2YXRhciBzcmM9e1wiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwifS8+PC9saT5cclxuICAgICAgICAgIDxsaT48QXZhdGFyIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCJ9Lz48L2xpPlxyXG4gICAgICAgICAgPGxpPjxBdmF0YXIgY2xhc3NOYW1lPVwiZ3gtYmctcHJpbWFyeSBneC10ZXh0LXdoaXRlXCI+TXM8L0F2YXRhcj48L2xpPlxyXG4gICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImFudC1hdmF0YXIgZ3gtYm9yZGVyIGd4LWJvcmRlci1ncmV5IGd4LWJnLXRyYW5zcGFyZW50IGd4LXRleHQtZ3JleSBneC1kLWZsZXggZ3gtYWxpZ24taXRlbXMtY2VudGVyIGd4LWp1c3RpZnktY29udGVudC1jZW50ZXJcIj48aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tYWRkXCIvPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJneC1idG4gZ3gtYnRuLXByaW1hcnkgZ3gtdGV4dC13aGl0ZSBneC1tYi0xXCI+R28gdG8gcHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0V2lkZ2V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcbmltcG9ydCBSb2FkTWFwSXRlbSBmcm9tIFwiLi9Sb2FkTWFwSXRlbVwiO1xyXG5pbXBvcnQge21lZGlhTGlzdH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9tYWluL1dpZGdldHMvZGF0YVwiXHJcbmltcG9ydCBDYXJkQm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRCb3gvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFJvYWRNYXAgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAxMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRCb3ggc3R5bGVOYW1lPVwiZ3gtY2FyZC1mdWxsXCIgaGVhZGluZz17Jyd9PlxyXG4gICAgICA8U2xpZGVyIGNsYXNzTmFtZT1cImd4LXNsaWNrLXNsaWRlclwiIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge21lZGlhTGlzdC5tYXAoKG1lZGlhLCBpbmRleCkgPT5cclxuICAgICAgICAgIDxSb2FkTWFwSXRlbSBrZXk9e2luZGV4fSBkYXRhPXttZWRpYX0vPlxyXG4gICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG4gICAgPC9DYXJkQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2FkTWFwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSb2FkTWFwSXRlbSA9ICh7ZGF0YX0pID0+IHtcclxuICBjb25zdCB7aW1hZ2UsIGltYWdlMiwgdGl0bGUsIGRlc2N9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2xpZGVyLWltZ1wiPlxyXG4gICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz17aW1hZ2V9IHN0eWxlPXt7bWF4SGVpZ2h0OiAxODV9fS8+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJneC1pbWctdXBcIiBhbHQ9XCJleGFtcGxlXCIgc3JjPXtpbWFnZTJ9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2xpZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1ncmV5XCI+e2Rlc2N9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2FkTWFwSXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFNtYXJ0SG9tZUNhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtY2FyZC1mdWxsXCI+XHJcblxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImd4LXNtYXJ0LWltZ1wiIGFsdD1cImV4YW1wbGVcIiBzcmM9e1wiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NlgzODNcIn0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXAtM1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTJcIj5TbWFydCBob21lIG9uIGlQYWQgd2l0aCBzbWFydCBraWRzPC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd4LXRleHQtcHJpbWFyeSBneC1wb2ludGVyIGd4LXRleHQtdXBwZXJjYXNlIGd4LWZzLXNtXCI+UmVhZCBNb3JlPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFydEhvbWVDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XaWRnZXQvaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBTb2NpYWxNZWRpYSA9ICgpID0+IHtcclxuICBjb25zdCBCdXR0b25Hcm91cCA9IEJ1dHRvbi5Hcm91cDtcclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jYXJkLWhlYWQtdGl0bGUgZ3gtbWItM1wiPlNvY2lhbCBNZWRpYTwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJneC1tYi0zXCI+RGlnaXRhbCBNZWRpYSBNYXJrZXRpbmcgT25saW5lIFdlYmJpbmFyPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJneC10ZXh0LWdyZXkgZ3gtZnMtc21cIj4yN3RoIEF1ZywgMDk6MzAgcG0gRVNUPC9wPlxyXG4gICAgICAgIDxwPkxlYXJuIGZyb20gZXhwZXJ0cy4gVGhpcyB3ZWJpbmFyIGV4cGxhaW5zIHJpZ2h0Li48L3A+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImd4LXRleHQtcHJpbWFyeSBneC1tYi0zIGd4LW1iLXNtLTRcIj5BcmUgWW91IHJlYWR5IHRvIGpvaW4/PC9oND5cclxuICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPVwiZ3gtbWItMVwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJneC1tYi0wXCIgdHlwZT1cInByaW1hcnlcIj5ZZXM8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3gtYnRuLXdhcm5pbmcgZ3gtbWItMFwiPk1heWJlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImd4LWJ0bi1saWdodCBneC1tYi0wXCI+Tm88L0J1dHRvbj5cclxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV2lkZ2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxNZWRpYTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBUb29sVGhlRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2lkZ2V0IHN0eWxlTmFtZT1cImd4LWNhcmQtZnVsbCBneC10ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXB0LTQgZ3gtcHgtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtc2VwYXJhdG9yIGd4LWJnLXN1Y2Nlc3MtZGFya1wiLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtbWItNCBneC10ZXh0LXN1Y2Nlc3MtZGFya1wiPlRvb2wncyBEYXk8L2gyPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3gtbWItNCBneC1yb3VuZGVkLWNpcmNsZSBneC1pbWctZmx1aWQgZ3gtb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTIwWDEyMFwifSBhbHQ9J3Nwb29ucycvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3gtbXQtc20tNCBneC1mcy1zbSBneC1idG4tYmxvY2sgZ3gtbWItMCBneC10ZXh0LXVwcGVyY2FzZSBneC1ib3JkZXItcmFkaXVzLXRvcC1sZWZ0LTAgZ3gtYm9yZGVyLXJhZGl1cy10b3AtcmlnaHQtMFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBibG9jaz5cclxuICAgICAgICBsZWFybiBtb3JlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xUaGVEYXk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2lkZ2V0L2luZGV4XCI7XHJcblxyXG5jb25zdCBVbnJlYWRNZXNzYWdlc0NhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtYmx1ZS1jeWFuLWdyYWRpZW50IGd4LXRleHQtd2hpdGUgZ3gtY2FyZC0xMzY3LXBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1mbGV4LXJvdyBneC1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBneC1tYi0yXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1haWwtb3BlbiBneC1mcy14eGwgZ3gtbXItMlwiLz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9uZy1hcnJvdy1yaWdodCBneC1mcy14eGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZ3gtdGV4dC13aGl0ZVwiPjI3MTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImd4LW1iLTBcIj5OZXcgbWVzc2FnZXM8L3A+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5yZWFkTWVzc2FnZXNDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgVXNlckNhcmQgPSgpPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdpZGdldCBzdHlsZU5hbWU9XCJneC1jYXJkLWZ1bGwgZ3gtZG90LWFycm93LWhvdmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3gtdXNlci13aWQtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC11c2VyLXdpZCBneC1tci0zXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cIi4uLlwiIHNyYz17XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCJ9IGNsYXNzTmFtZT1cImd4LW9iamVjdC1jb3ZlclwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LXVzZXItd2lkLWJvZHkgZ3gtcHktMyBneC1wci0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1yb3ctZmxleFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDQgZ3gtbXItMSBneC1tYi0xXCI+TWlsYSBBbGJhPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtbWItMSBneC10ZXh0LWdyZXkgZ3gtZnMtc21cIj5DcmVhdGl2ZSBIZWFkPGJyLz4gQGV4YW1wbGU8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWRvdC1hcnJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd4LWJnLXByaW1hcnkgZ3gtaG92ZXItYXJyb3dcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9uZy1hcnJvdy1yaWdodCBneC10ZXh0LXdoaXRlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneC1kb3RcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZWxsaXBzZS12IGd4LXRleHQtcHJpbWFyeVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1dpZGdldD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JhZGdlfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge0FyZWEsIEFyZWFDaGFydCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcH0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldC9pbmRleFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7bmFtZTogJ1BhZ2UgQScsIGxhc3RXZWVrOiAxOTAwLCB0aGlzV2VlazogMzIwMH0sXHJcbiAge25hbWU6ICdQYWdlIEInLCBsYXN0V2VlazogMTMwMCwgdGhpc1dlZWs6IDQwMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBDJywgbGFzdFdlZWs6IDE4NTAsIHRoaXNXZWVrOiAyNTAwfSxcclxuICB7bmFtZTogJ1BhZ2UgRCcsIGxhc3RXZWVrOiAxNjgwLCB0aGlzV2VlazogMzAwMH0sXHJcbiAge25hbWU6ICdQYWdlIEgnLCBsYXN0V2VlazogMzkwMCwgdGhpc1dlZWs6IDI1NjB9LFxyXG4gIHtuYW1lOiAnUGFnZSBJJywgbGFzdFdlZWs6IDE0MDAsIHRoaXNXZWVrOiAyNzAwfSxcclxuICB7bmFtZTogJ1BhZ2UgSicsIGxhc3RXZWVrOiAyMjAwLCB0aGlzV2VlazogMjAwMH0sXHJcbiAge25hbWU6ICdQYWdlIEsnLCBsYXN0V2VlazogMTMwMCwgdGhpc1dlZWs6IDIwMDB9LFxyXG4gIHtuYW1lOiAnUGFnZSBMJywgbGFzdFdlZWs6IDE4ODAsIHRoaXNXZWVrOiAzNDA4fSxcclxuICB7bmFtZTogJ1BhZ2UgTScsIGxhc3RXZWVrOiAyMjkwLCB0aGlzV2VlazogMjk2MH0sXHJcbl07XHJcblxyXG5jb25zdCBXb3JrU3RhdHVzQ2FyZCA9ICgpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXaWRnZXQgc3R5bGVOYW1lPVwiZ3gtY2FyZC1pbWcgZ3gtY2FyZC1jb3Zlci1ibGFja1wiIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICB0aXRsZT17PGgxIGNsYXNzTmFtZT1cImd4LWZvbnQtd2VpZ2h0LWJvbGQgZ3gtbWItMSBneC1mcy14eGxcIj43NiUgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtdXAgZ3gtZnMtc21cIi8+XHJcbiAgICAgICAgICAgIDwvaDE+fVxyXG4gICAgICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgY2xhc3NOYW1lPVwiZ3gtYmctZGFya1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17ODB9PlxyXG4gICAgICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3t0b3A6IDEwLCByaWdodDogMCwgbGVmdDogMCwgYm90dG9tOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwLz5cclxuICAgICAgICAgICAgICAgICAgPEFyZWEgdHlwZT0nbW9ub3RvbmUnIGRhdGFLZXk9XCJ0aGlzV2Vla1wiIHN0YWNrSWQ9XCIyXCIgc3Ryb2tlPScjRkU5RTE1JyBmaWxsPScjRkU5RTE1JyBmaWxsT3BhY2l0eT17MX0vPlxyXG4gICAgICAgICAgICAgICAgICA8QXJlYSB0eXBlPSdtb25vdG9uZScgZGF0YUtleT0nbGFzdFdlZWsnIHN0YWNrSWQ9XCIxXCIgc3Ryb2tlPScjMDM4RkRFJyBmaWxsPScjMDM4RkRFJyBmaWxsT3BhY2l0eT17MX0vPlxyXG4gICAgICAgICAgICAgICAgPC9BcmVhQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB9PlxyXG4gICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwiZ3gtYmFkZ2UtdXAgZ3gtYmFkZ2UtdXAtcmlnaHQgZ3gtYmctd2hpdGUgZ3gtdGV4dC1wcmltYXJ5IGd4LXNpemUtMzZcIj48aVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1sb25nLWFycm93LXJpZ2h0IGd4LWZzLWxnXCIvPiA8L0JhZGdlPlxyXG4gICAgICA8aDQ+V29ya3MgU3RhdHVzPC9oND5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZ3gtdGV4dC1saWdodCBneC1mcy1zbSBneC1tYi0wXCI+TGFzdCB3ZWVrIHByb2dyZXNzPC9wPlxyXG4gICAgPC9XaWRnZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTdGF0dXNDYXJkO1xyXG4iLCJleHBvcnQgY29uc3QgbWVkaWFMaXN0ID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcG9zdGlvbjogMCxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXgzNzInLFxyXG4gICAgaW1hZ2UyOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgweDgwJyxcclxuICAgIHRpdGxlOiAnV2VsY29tZSB0byByb2FkbWFwIG5ldycsXHJcbiAgICBkZXNjOiAnQ3J5cHRvIEV4cGVydCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgcG9zdGlvbjogMCxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXgzNzInLFxyXG4gICAgaW1hZ2UyOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgweDgwJyxcclxuICAgIHRpdGxlOiAnV2VsY29tZSB0byByb2FkbWFwJyxcclxuICAgIGRlc2M6ICdDcnlwdG8gRXhwZXJ0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBwb3N0aW9uOiAwLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTc1eDM3MicsXHJcbiAgICBpbWFnZTI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODB4ODAnLFxyXG4gICAgdGl0bGU6ICdXZWxjb21lIHRvIHJvYWRtYXAgbmV3JyxcclxuICAgIGRlc2M6ICdDcnlwdG8gRXhwZXJ0J1xyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ3JlZW5TdGVwTGlzdCA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnV2VsY29tZSB0byByb2FkbWFwIG5ldycsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMjB4MTIwJyxcclxuICAgIHN1YlRpdGxlOiAnVGhlb3J5IG9mIG9yaWdhbWknLFxyXG4gICAgZGVzYzogJ01vdGhlciBuYXR1cmUgd2FudCB5b3UgdG8gYmVjb21lIGFcXG4nICtcclxuICAgICAgJyAgICAgICAgICAgICAgcGFydCBvZiBpdCBhbmQgZmVlbCB0aGUgbG92ZS4gVGhlcmUgY291bGRcXG4nICtcclxuICAgICAgJyAgICAgICAgICAgICAgYmUgbW9yZSB3aGljaCB5b3UgY2FuIHRha2UgYXMgYW5cXG4nICtcclxuICAgICAgJyAgICAgICAgICAgICAgaW5pdGlhdGl2ZSBhbmQgY29sbGFib3JhdGUgaW4gbWFraW5nIHRoaXNcXG4nICtcclxuICAgICAgJyAgICAgICAgICAgICAgd29ybGQgYSBiZXR0ZXIgd29ybGQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0dlbmVyYXRlIGNvZmZlZSB0byB1c2UgaW4geW91ciBncmFwaGljJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzU3NXg2OTInLFxyXG4gICAgc3ViVGl0bGU6ICdUaGVvcnkgb2YgQ29mZmVlJyxcclxuICAgIGRlc2M6ICdJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81NzV4NjkyJyxcclxuICAgIHRpdGxlOiAnQSBzaW5nbGUgcmlnaHQgZ3JlZW4gc3RlcCcsXHJcbiAgICBzdWJUaXRsZTogJ1RoZW9yeSBvZiBncmVlbicsXHJcbiAgICBkZXNjOiAnVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLidcclxuICB9XHJcblxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29sLCBSb3d9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQcm9kdWN0aXZpdHkgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvUHJvZHVjdGl2aXR5XCI7XHJcbmltcG9ydCBOZXdzZWxldHRlciBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9OZXdzbGV0dGVyXCI7XHJcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Tb2NpYWxNZWRpYVwiO1xyXG5pbXBvcnQgUHJvamVjdFdpZGdldCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Qcm9qZWN0V2lkZ2V0XCI7XHJcbmltcG9ydCBSb2FkTWFwIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1JvYWRNYXBcIjtcclxuaW1wb3J0IEZseWluZ0JpcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvRmx5aW5nQmlyZFwiO1xyXG5pbXBvcnQgRHJ5RnJ1aXQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvRHJ5RnJ1aXRcIjtcclxuaW1wb3J0IEFheXVydmVkYUNhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvQWF5dXJ2ZWRhQ2FyZFwiO1xyXG5pbXBvcnQgVG9vbFRoZURheSBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Ub29sVGhlRGF5XCI7XHJcbmltcG9ydCBTbWFydEhvbWVDYXJkIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1NtYXJ0SG9tZUNhcmRcIjtcclxuaW1wb3J0IFBob3Rvc0NhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvUGhvdG9zQ2FyZFwiO1xyXG5pbXBvcnQgVW5yZWFkTWVzc2FnZXNDYXJkIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1VucmVhZE1lc3NhZ2VzQ2FyZFwiO1xyXG5pbXBvcnQgSWNvbkNhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvSWNvbkNhcmRcIjtcclxuaW1wb3J0IFdvcmtTdGF0dXNDYXJkIGZyb20gXCIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9XaWRnZXRzL1dvcmtTdGF0dXNDYXJkXCI7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9Vc2VyQ2FyZFwiO1xyXG5pbXBvcnQgSW5jcmVhbWVudENhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvSW5jcmVhbWVudENhcmRcIjtcclxuaW1wb3J0IENhbXBhaWduQ2FyZCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9DYW1wYWlnbkNhcmRcIjtcclxuaW1wb3J0IEJ1aWxkaW5nQ2FyZCBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9CdWlsZGluZ0NhcmRcIjtcclxuaW1wb3J0IEdyZWVuU3RlcENhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvR3JlZW5TdGVwQ2FyZFwiO1xyXG5pbXBvcnQgRnJpZW5kc2hpcENhcmQgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1dpZGdldHMvRnJpZW5kc2hpcENhcmRcIjtcclxuaW1wb3J0IE5ld1Bob3RvcyBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvV2lkZ2V0cy9OZXdQaG90b3NcIjtcclxuXHJcblxyXG5cclxuY29uc3QgV2lkZ2V0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPFByb2plY3RXaWRnZXQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8UHJvZHVjdGl2aXR5Lz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPFNvY2lhbE1lZGlhLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPFJvYWRNYXAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezh9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8TmV3c2VsZXR0ZXIvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezh9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8TmV3UGhvdG9zLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs4fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZseWluZ0JpcmQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHhsPXs0fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPERyeUZydWl0Lz5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCB4bD17NH0gbGc9ezh9IG1kPXs4fSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8QWF5dXJ2ZWRhQ2FyZC8+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeGw9ezR9IGxnPXs4fSBtZD17OH0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPFRvb2xUaGVEYXkvPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHhsPXs0fSBsZz17OH0gbWQ9ezh9IHNtPXsxMn0geHM9ezI0fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxJY29uQ2FyZCBpY29uPVwibm9vZGxlc1wiLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxJY29uQ2FyZCBpY29uPVwiZG9udXRcIi8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8U21hcnRIb21lQ2FyZC8+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeGw9ezR9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8UGhvdG9zQ2FyZC8+XHJcbiAgICAgICAgICA8VW5yZWFkTWVzc2FnZXNDYXJkLz5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCB4bD17NH0gbGc9ezEyfSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICAgIDxXb3JrU3RhdHVzQ2FyZC8+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8SWNvbkNhcmQgY29sb3I9XCJneC1iZy1vcmFuZ2UgZ3gtaWNvbi13aGl0ZVwiIGljb249XCJidXJnZXJcIi8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8SWNvbkNhcmQgY29sb3I9XCJneC1iZy1wcmltYXJ5IGd4LWljb24td2hpdGVcIiBpY29uPVwicGl6emFcIi8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8VXNlckNhcmQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8SW5jcmVhbWVudENhcmQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezZ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsyNH0+XHJcbiAgICAgICAgICA8Q2FtcGFpZ25DYXJkLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhsPXs2fSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MjR9PlxyXG4gICAgICAgICAgPEJ1aWxkaW5nQ2FyZC8+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgeGw9ezEyfSBsZz17MjR9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEdyZWVuU3RlcENhcmQvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeGw9ezEyfSBsZz17MjR9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgICAgPEZyaWVuZHNoaXBDYXJkLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==