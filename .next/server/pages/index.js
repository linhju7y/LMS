module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./firebaseConfig/index.js":
/*!*********************************!*\
  !*** ./firebaseConfig/index.js ***!
  \*********************************/
/*! exports provided: database, auth, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubAuthProvider", function() { return githubAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuthProvider", function() { return facebookAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterAuthProvider", function() { return twitterAuthProvider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
 // Initialize Firebase

const config = {
  apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  authDomain: "wieldy-4f59c.firebaseapp.com",
  databaseURL: "https://wieldy-4f59c.firebaseio.com",
  projectId: "wieldy-4f59c",
  storageBucket: "wieldy-4f59c.appspot.com",
  messagingSenderId: "81949884261"
};

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const googleAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.TwitterAuthProvider();
const database = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin */ "./pages/signin.js");
/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/use-auth */ "./util/use-auth.js");
/* harmony import */ var _main_dashboard_crm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/dashboard/crm */ "./pages/main/dashboard/crm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const homePage = () => {
  const {
    user
  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  return user ? __jsx(_main_dashboard_crm__WEBPACK_IMPORTED_MODULE_3__["default"], null) : __jsx(_signin__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (homePage);

/***/ }),

/***/ "./pages/main/dashboard/crm.js":
/*!*************************************!*\
  !*** ./pages/main/dashboard/crm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CRM = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../routes/main/Dashboard/CRM */ "./routes/main/Dashboard/CRM/index.js")), {
  loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../../routes/main/Dashboard/CRM */ "./routes/main/Dashboard/CRM/index.js")],
    modules: ['../../../routes/main/Dashboard/CRM']
  }
});

const CrmDashboard = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "CRM Dashboard")), __jsx(CRM, null));

/* harmony default export */ __webpack_exports__["default"] = (CrmDashboard);

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/asyncComponent */ "./util/asyncComponent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SignIn = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../routes/customViews/userAuth/SignIn */ "./routes/customViews/userAuth/SignIn/index.js")));

const SignInPage = () => {
  return __jsx(SignIn, null);
};

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ "./app/components/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function asyncComponent(importComponent) {
  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {
    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  });
}

/***/ }),

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: ProvideAuth, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideAuth", function() { return ProvideAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnRestrictedRoute", function() { return isUnRestrictedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseConfig/index */ "./firebaseConfig/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); // Provider component that wraps your app and makes auth object ..
// ... available to any child component that calls useAuth().

function ProvideAuth({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth
  }, children);
} // Hook for child components to get the auth object ...
// ... and re-render when it changes.

const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
}; // Provider hook that creates auth object and handles state

function useProvideAuth() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoadingUser,
    1: setLoadingUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const fetchStart = () => {
    setLoading(true);
    setError('');
  };

  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  };

  const fetchError = error => {
    setLoading(false);
    setError(error.message);
  }; // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.


  const loginWithSocial = (platform, callbackFun) => {
    let authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["googleAuthProvider"];

    if (platform === 'facebook') {
      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["facebookAuthProvider"];
    }

    if (platform === 'github') {
      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["githubAuthProvider"];
    }

    if (platform === 'twitter') {
      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["twitterAuthProvider"];
    }

    try {
      fetchStart();
      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithPopup(authProvider).then(response => {
        fetchSuccess();
        setUser(response.user);
        if (callbackFun) callbackFun();
        return response.user;
      }).catch(error => {
        fetchError(error);
      });
    } catch (error) {
      fetchError(error);
    }
  };

  const login = (email, password, callbackFun) => {
    try {
      fetchStart();
      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password).then(response => {
        fetchSuccess();
        setUser(response.user);
        if (callbackFun) callbackFun();
        return response.user;
      }).catch(error => {
        fetchError(error);
      });
    } catch (error) {
      fetchError(error);
    }
  };

  const signup = (email, password, callbackFun) => {
    try {
      fetchStart();
      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
        fetchSuccess();
        setUser(response.user);
        if (callbackFun) callbackFun();
        return response.user;
      }).catch(error => {
        fetchError(error);
      });
    } catch (error) {
      fetchError(error);
    }
  };

  const signOut = () => {
    return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = (email, callbackFun) => {
    try {
      fetchStart();
      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].sendPasswordResetEmail(email).then(() => {
        fetchSuccess();
        if (callbackFun) callbackFun();
        return true;
      }).catch(error => {
        fetchError(error);
      });
    } catch (error) {
      fetchError(error);
    }
  };

  const confirmPasswordReset = (code, password, callbackFun) => {
    try {
      fetchStart();
      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].confirmPasswordReset(code, password).then(() => {
        fetchSuccess();
        if (callbackFun) callbackFun();
        return true;
      }).catch(error => {
        fetchError(error);
      });
    } catch (error) {
      fetchError(error);
    }
  }; // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["auth"].onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }

      setLoadingUser(false);
    }); // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []); // Return the user object and auth methods

  return {
    isLoadingUser,
    isLoading,
    user,
    error,
    login,
    signup,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
    loginWithSocial
  };
}

const isUnRestrictedRoute = pathname => {
  return pathname === '/signin' || pathname === '/signup';
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@ant-design/icons/lib/icons/FacebookOutlined":
/*!***************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/FacebookOutlined" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/FacebookOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/GithubOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/GithubOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/GithubOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/GoogleOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/GoogleOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/GoogleOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/TwitterOutlined":
/*!**************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/TwitterOutlined" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/TwitterOutlined");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-simple-maps":
/*!************************************!*\
  !*** external "react-simple-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VDb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFpbi9kYXNoYm9hcmQvY3JtLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL2FzeW5jQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3V0aWwvdXNlLWF1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRmFjZWJvb2tPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9HaXRodWJPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Hb29nbGVPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Ud2l0dGVyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZDMtc2NhbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2ltcGxlLW1hcHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiIl0sIm5hbWVzIjpbIkNpcmN1bGFyUHJvZ3Jlc3MiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJkZWZhdWx0UHJvcHMiLCJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsImdvb2dsZUF1dGhQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJnaXRodWJBdXRoUHJvdmlkZXIiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJ0d2l0dGVyQXV0aFByb3ZpZGVyIiwiVHdpdHRlckF1dGhQcm92aWRlciIsImRhdGFiYXNlIiwiaG9tZVBhZ2UiLCJ1c2VyIiwidXNlQXV0aCIsIkNSTSIsImR5bmFtaWMiLCJsb2FkaW5nIiwiQ3JtRGFzaGJvYXJkIiwiU2lnbkluIiwiYXN5bmNDb21wb25lbnQiLCJTaWduSW5QYWdlIiwiaW1wb3J0Q29tcG9uZW50IiwiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJjaGlsZHJlbiIsInVzZVByb3ZpZGVBdXRoIiwidXNlQ29udGV4dCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZ1VzZXIiLCJzZXRMb2FkaW5nVXNlciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJtZXNzYWdlIiwibG9naW5XaXRoU29jaWFsIiwicGxhdGZvcm0iLCJjYWxsYmFja0Z1biIsImF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiaXNVblJlc3RyaWN0ZWRSb3V0ZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHtjbGFzc05hbWV9KSA9PiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke2NsYXNzTmFtZX1gfT5cclxuICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGVyLnN2Z1wiIGFsdD1cImxvYWRlclwiIHN0eWxlPXt7aGVpZ2h0OiA2MH19Lz5cclxuPC9kaXY+O1xyXG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5DaXJjdWxhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUF6LUdQZkEtaE43NG9GaDNYdlhzRjl2UXJsRTV4cFUxMFwiLFxyXG4gIGF1dGhEb21haW46IFwid2llbGR5LTRmNTljLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vd2llbGR5LTRmNTljLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIndpZWxkeS00ZjU5Y1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwid2llbGR5LTRmNTljLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODE5NDk4ODQyNjFcIlxyXG59O1xyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcblxyXG5jb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuY29uc3QgZmFjZWJvb2tBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xyXG5jb25zdCBnaXRodWJBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIoKTtcclxuY29uc3QgdHdpdHRlckF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGF0YWJhc2UsXHJcbiAgYXV0aCxcclxuICBnb29nbGVBdXRoUHJvdmlkZXIsXHJcbiAgZ2l0aHViQXV0aFByb3ZpZGVyLFxyXG4gIGZhY2Vib29rQXV0aFByb3ZpZGVyLFxyXG4gIHR3aXR0ZXJBdXRoUHJvdmlkZXJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZ25JblBhZ2UgZnJvbSBcIi4vc2lnbmluXCI7XHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIi4uL3V0aWwvdXNlLWF1dGhcIjtcclxuaW1wb3J0IENybURhc2hib2FyZCBmcm9tIFwiLi9tYWluL2Rhc2hib2FyZC9jcm1cIjtcclxuXHJcbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHt1c2VyfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIHVzZXIgPyA8Q3JtRGFzaGJvYXJkLz4gOiA8U2lnbkluUGFnZS8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgQ1JNID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL3JvdXRlcy9tYWluL0Rhc2hib2FyZC9DUk0nKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+IDxDaXJjdWxhclByb2dyZXNzLz4sXHJcbn0pO1xyXG5cclxuY29uc3QgQ3JtRGFzaGJvYXJkID0gKCkgPT4gKFxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Q1JNIERhc2hib2FyZDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q1JNLz5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JtRGFzaGJvYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXN5bmNDb21wb25lbnQgZnJvbSAnLi4vdXRpbC9hc3luY0NvbXBvbmVudCdcclxuXHJcbmNvbnN0IFNpZ25JbiA9IGFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi4vcm91dGVzL2N1c3RvbVZpZXdzL3VzZXJBdXRoL1NpZ25JbicpKTtcclxuXHJcbmNvbnN0IFNpZ25JblBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxTaWduSW4vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUGFnZTtcclxuIiwiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXN5bmNDb21wb25lbnQoaW1wb3J0Q29tcG9uZW50KSB7XHJcblxyXG4gIHJldHVybiBkeW5hbWljKGltcG9ydENvbXBvbmVudCxcclxuICAgIHtcclxuICAgICAgbG9hZGluZzogKCkgPT4gPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgYXV0aCxcclxuICBmYWNlYm9va0F1dGhQcm92aWRlcixcclxuICBnaXRodWJBdXRoUHJvdmlkZXIsXHJcbiAgZ29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHR3aXR0ZXJBdXRoUHJvdmlkZXJcclxufSBmcm9tIFwiLi4vZmlyZWJhc2VDb25maWcvaW5kZXhcIjtcclxuXHJcbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIHlvdXIgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxyXG4vLyAuLi4gYXZhaWxhYmxlIHRvIGFueSBjaGlsZCBjb21wb25lbnQgdGhhdCBjYWxscyB1c2VBdXRoKCkuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxyXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5cclxuLy8gUHJvdmlkZXIgaG9vayB0aGF0IGNyZWF0ZXMgYXV0aCBvYmplY3QgYW5kIGhhbmRsZXMgc3RhdGVcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hTdGFydCA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcignJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEVycm9yKCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxyXG4gIC8vIC4uLiB0byBzYXZlIHRoZSB1c2VyIHRvIHN0YXRlLlxyXG5cclxuICBjb25zdCBsb2dpbldpdGhTb2NpYWwgPSAocGxhdGZvcm0sIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICBsZXQgYXV0aFByb3ZpZGVyID0gZ29vZ2xlQXV0aFByb3ZpZGVyO1xyXG4gICAgaWYgKHBsYXRmb3JtID09PSAnZmFjZWJvb2snKSB7XHJcbiAgICAgIGF1dGhQcm92aWRlciA9IGZhY2Vib29rQXV0aFByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ2dpdGh1YicpIHtcclxuICAgICAgYXV0aFByb3ZpZGVyID0gZ2l0aHViQXV0aFByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgIGF1dGhQcm92aWRlciA9IHR3aXR0ZXJBdXRoUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgZmV0Y2hTdGFydCgpO1xyXG4gICAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoUG9wdXAoYXV0aFByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xyXG4gICAgICAgICAgc2V0VXNlcihyZXNwb25zZS51c2VyKTtcclxuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGZldGNoRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dpbiA9IChlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmZXRjaFN0YXJ0KCk7XHJcbiAgICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcclxuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBmZXRjaEVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGZldGNoRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmZXRjaFN0YXJ0KCk7XHJcbiAgICAgIHJldHVybiBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XHJcbiAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IChlbWFpbCwgY2FsbGJhY2tGdW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZldGNoU3RhcnQoKTtcclxuICAgICAgcmV0dXJuIGF1dGguc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcclxuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGZldGNoRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQsIGNhbGxiYWNrRnVuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmZXRjaFN0YXJ0KCk7XHJcbiAgICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xyXG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBTdWJzY3JpYmUgdG8gdXNlciBvbiBtb3VudFxyXG4gIC8vIEJlY2F1c2UgdGhpcyBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjayBpdCB3aWxsIGNhdXNlIGFueSAuLi5cclxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cclxuICAvLyAuLi4gbGF0ZXN0IGF1dGggb2JqZWN0LlxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkaW5nVXNlcihmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xyXG4gIHJldHVybiB7XHJcbiAgICBpc0xvYWRpbmdVc2VyLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgdXNlcixcclxuICAgIGVycm9yLFxyXG4gICAgbG9naW4sXHJcbiAgICBzaWdudXAsXHJcbiAgICBzaWduT3V0LFxyXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcclxuICAgIGNvbmZpcm1QYXNzd29yZFJlc2V0LFxyXG4gICAgbG9naW5XaXRoU29jaWFsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcclxuICByZXR1cm4gcGF0aG5hbWUgPT09ICcvc2lnbmluJyB8fCBwYXRobmFtZSA9PT0gJy9zaWdudXAnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0ZhY2Vib29rT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0dpdGh1Yk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Hb29nbGVPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvVHdpdHRlck91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZDMtc2NhbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2ltcGxlLW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjaGFydHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==