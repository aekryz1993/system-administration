(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userContainer"],{

/***/ "./client/assets/stylesheets/components/user.css":
/*!*******************************************************!*\
  !*** ./client/assets/stylesheets/components/user.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"_user_container":"_2xQr2PcJm7YX6UcJbimezk","_user_grid_container":"_21o8FzJ79XGNGDqvxUUPWX","_user_grid_first_item":"_3VvG69lmasTHJuBLxHu_JF","_use_username_profile":"_2lhz7aizOba8XcAM4QZZMn","_user_update_button":"_33Ymnq9ElQI8K6LxMDg_xT","_user_anchor_update":"_2Wiz3M2Pfg0PLeNtpBcY4L","_user_ul":"_1G7UDhgcjesEGAdtkWXuaH","_user_li_active":"_10r5Ux3aTCzu0gwqMQmBDU","_user_li":"dQuK00gNoQkTJRikxGzil","_user_li_anchor":"_11TRFNsTf7EzwO0BwHJR7p","_table":"_1mODUnpwerynHkBe7OvWtC","_tr":"FJaRIlkppsZJH0mqVp26n","_td_title":"_3tdjY6zsmJNE_4gTsW0qCM","_td":"_34nmJtj7et6q2Wir7CvVsU","_table_permissions":"_1m1CIYA3M_FPWCznS2zpCK _1mODUnpwerynHkBe7OvWtC","_tr_permissions":"_1M2QS0x6pNbRE4rl-wG_Di","_td_title_permissions":"_247EVuHsqsDSLl4CG3wnt9 _3tdjY6zsmJNE_4gTsW0qCM","_td_permissions":"CIw1eHObUf8IF6obusN8I _34nmJtj7et6q2Wir7CvVsU"};
    if(true) {
      // 1568557270602
      var cssReload = __webpack_require__(/*! ./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/extract-css-chunks-webpack-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hot":true,"reloadAll":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./client/components/UserData.js":
/*!***************************************!*\
  !*** ./client/components/UserData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const UserData = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._table
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, user.isActivate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Active  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"],
  size: "lg",
  color: "#1B5E20"
})) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "deactivate ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimesCircle"],
  size: "lg",
  color: "#d50000"
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title
}, "Created date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td
}, dateformat__WEBPACK_IMPORTED_MODULE_3___default()(user.createdAt))))));

UserData.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
const _default = UserData;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserData, "UserData", "/home/aekryz-laptop/Workspace/system-administration/client/components/UserData.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/components/UserData.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/Permissions.js":
/*!************************************!*\
  !*** ./client/user/Permissions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const Permissions = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._table_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "View users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.viewUsers ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Create users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.createUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Edit users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.updateUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Delete users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.deleteUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "View groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.viewGroups ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Create groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.createGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Edit groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.updateGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Delete groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.deleteGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._tr_permissions
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_title_permissions
}, "Is admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_2___default.a._td_permissions
}, user.permission.isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"],
  color: "#1B5E20"
}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimesCircle"],
  color: "#d50000"
}))))));

Permissions.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
const _default = Permissions;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Permissions, "Permissions", "/home/aekryz-laptop/Workspace/system-administration/client/user/Permissions.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/Permissions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/User.js":
/*!*****************************!*\
  !*** ./client/user/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserData */ "./client/components/UserData.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/stylesheets/components/user.css */ "./client/assets/stylesheets/components/user.css");
/* harmony import */ var _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Permissions */ "./client/user/Permissions.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const Users = ({
  user,
  pathname,
  deletePermission,
  updatePermission,
  fetchUser
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUser();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_first_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._use_username_profile
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_update_button
  }, updatePermission && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_anchor_update,
    to: {
      pathname: `/updateuser/${user.id}`,
      state: {
        initialValues: user
      }
    }
  }, "Update"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_grid_second_item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_nav
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_ul
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_anchor,
    exact: true,
    to: `${pathname}`,
    activeClassName: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_active
  }, "Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    className: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_anchor,
    to: `${pathname}/permissions`,
    activeClassName: _assets_stylesheets_components_user_css__WEBPACK_IMPORTED_MODULE_4___default.a._user_li_active
  }, "Permissions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: `${pathname}`,
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserData__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user
    })
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: `${pathname}/permissions`,
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Permissions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user
    })
  }))))));
};

__signature__(Users, "useEffect{}");

Users.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updatePermission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  deletePermission: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fetchUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
const _default = Users;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Users, "Users", "/home/aekryz-laptop/Workspace/system-administration/client/user/User.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/User.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./client/user/userContainer.js":
/*!**************************************!*\
  !*** ./client/user/userContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./client/user/User.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/user */ "./client/store/actions/user.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const mapStateUserToProps = (state, ownProps) => {
  const {
    user,
    updatePermission,
    deletePermission
  } = state.userReducer;
  const {
    url
  } = ownProps.match;
  console.log('************************');
  console.log(user);
  console.log('************************');
  return {
    user: user,
    updatePermission: updatePermission,
    deletePermission: deletePermission,
    pathname: url
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    id
  } = ownProps.match.params;
  return {
    fetchUser: () => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_3__["startFetchUser"])(id))
  };
};

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateUserToProps, mapDispatchToProps)(_User__WEBPACK_IMPORTED_MODULE_2__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateUserToProps, "mapStateUserToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/userContainer.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/aekryz-laptop/Workspace/system-administration/client/user/userContainer.js");
  reactHotLoader.register(_default, "default", "/home/aekryz-laptop/Workspace/system-administration/client/user/userContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1],
          tt:   H < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3],
          T:    H < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5],
          TT:   H < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7],
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occurred and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dateFormat;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlci5jc3M/YzIzNCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Vc2VyRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlci9QZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlci9Vc2VyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91c2VyL3VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGVmb3JtYXQvbGliL2RhdGVmb3JtYXQuanMiXSwibmFtZXMiOlsiVXNlckRhdGEiLCJ1c2VyIiwidXNlclN0eWxlcyIsIl90YWJsZSIsIl90ciIsIl90ZF90aXRsZSIsIl90ZCIsInVzZXJuYW1lIiwiZW1haWwiLCJpc0FjdGl2YXRlIiwiZmFDaGVja0NpcmNsZSIsImZhVGltZXNDaXJjbGUiLCJkYXRlRm9ybWF0IiwiY3JlYXRlZEF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiUGVybWlzc2lvbnMiLCJfdGFibGVfcGVybWlzc2lvbnMiLCJfdHJfcGVybWlzc2lvbnMiLCJfdGRfdGl0bGVfcGVybWlzc2lvbnMiLCJfdGRfcGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uIiwidmlld1VzZXJzIiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJkZWxldGVVc2VyIiwidmlld0dyb3VwcyIsImNyZWF0ZUdyb3VwIiwidXBkYXRlR3JvdXAiLCJkZWxldGVHcm91cCIsImlzQWRtaW4iLCJVc2VycyIsInBhdGhuYW1lIiwiZGVsZXRlUGVybWlzc2lvbiIsInVwZGF0ZVBlcm1pc3Npb24iLCJmZXRjaFVzZXIiLCJ1c2VFZmZlY3QiLCJ1c2VyU3R5bGUiLCJfdXNlcl9jb250YWluZXIiLCJfdXNlcl9ncmlkX2NvbnRhaW5lciIsIl91c2VyX2dyaWRfZmlyc3RfaXRlbSIsIl91c2VfdXNlcm5hbWVfcHJvZmlsZSIsIl91c2VyX3VwZGF0ZV9idXR0b24iLCJfdXNlcl9hbmNob3JfdXBkYXRlIiwiaWQiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJfdXNlcl9ncmlkX3NlY29uZF9pdGVtIiwiX3VzZXJfbmF2IiwiX3VzZXJfdWwiLCJfdXNlcl9saSIsIl91c2VyX2xpX2FuY2hvciIsIl91c2VyX2xpX2FjdGl2ZSIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVXNlclRvUHJvcHMiLCJvd25Qcm9wcyIsInVzZXJSZWR1Y2VyIiwidXJsIiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXJhbXMiLCJzdGFydEZldGNoVXNlciIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsNEtBQXFJLEVBQUUsUUFBUyxHQUFHLDBDQUEwQztBQUMzTjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNmLHdFQUNFO0FBQU8sV0FBUyxFQUFFQyw4RUFBVSxDQUFDQztBQUE3QixHQUNFLDBFQUNFO0FBQUksV0FBUyxFQUFFRCw4RUFBVSxDQUFDRTtBQUExQixHQUNFO0FBQUksV0FBUyxFQUFFRiw4RUFBVSxDQUFDRztBQUExQixjQURGLEVBRUU7QUFBSSxXQUFTLEVBQUVILDhFQUFVLENBQUNJO0FBQTFCLEdBQWdDTCxJQUFJLENBQUNNLFFBQXJDLENBRkYsQ0FERixFQUtFO0FBQUksV0FBUyxFQUFFTCw4RUFBVSxDQUFDRTtBQUExQixHQUNFO0FBQUksV0FBUyxFQUFFRiw4RUFBVSxDQUFDRztBQUExQixX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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7Ozs7QUFJQSxNQUFNLElBQTBDO0FBQ2hELElBQUksbUNBQU87QUFDWDtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOLEdBQUcsTUFBTSxFQUlOO0FBQ0gsQ0FBQyIsImZpbGUiOiJ1c2VyQ29udGFpbmVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJfdXNlcl9jb250YWluZXJcIjpcIl8yeFFyMlBjSm03WVg2VWNKYmltZXprXCIsXCJfdXNlcl9ncmlkX2NvbnRhaW5lclwiOlwiXzIxbzhGeko3OVhHTkdEcXZ4VVVQV1hcIixcIl91c2VyX2dyaWRfZmlyc3RfaXRlbVwiOlwiXzNWdkc2OWxtYXNUSEp1Qkx4SHVfSkZcIixcIl91c2VfdXNlcm5hbWVfcHJvZmlsZVwiOlwiXzJsaHo3YWl6T2JhOFhjQU00UVpaTW5cIixcIl91c2VyX3VwZGF0ZV9idXR0b25cIjpcIl8zM1ltbnE5RWxRSThLNkx4TURnX3hUXCIsXCJfdXNlcl9hbmNob3JfdXBkYXRlXCI6XCJfMldpejNNMlBmZzBQTGVOdHBCY1k0TFwiLFwiX3VzZXJfdWxcIjpcIl8xRzdVRGhnY2plc0VHQWR0a1dYdWFIXCIsXCJfdXNlcl9saV9hY3RpdmVcIjpcIl8xMHI1VXgzYVRDenUwZ3dxTVFtQkRVXCIsXCJfdXNlcl9saVwiOlwiZFF1SzAwZ05vUWtUSlJpa3hHemlsXCIsXCJfdXNlcl9saV9hbmNob3JcIjpcIl8xMVRSRk5zVGY3RXp3TzBCd0hKUjdwXCIsXCJfdGFibGVcIjpcIl8xbU9EVW5wd2VyeW5Ia0JlN092V3RDXCIsXCJfdHJcIjpcIkZKYVJJbGtwcHNaSkgwbXFWcDI2blwiLFwiX3RkX3RpdGxlXCI6XCJfM3Rkalk2enNtSk5FXzRnVHNXMHFDTVwiLFwiX3RkXCI6XCJfMzRubUp0ajdldDZxMldpcjdDdlZzVVwiLFwiX3RhYmxlX3Blcm1pc3Npb25zXCI6XCJfMW0xQ0lZQTNNX0ZQV0N6blMyenBDSyBfMW1PRFVucHdlcnluSGtCZTdPdld0Q1wiLFwiX3RyX3Blcm1pc3Npb25zXCI6XCJfMU0yUVMweDZwTmJSRTRybC13R19EaVwiLFwiX3RkX3RpdGxlX3Blcm1pc3Npb25zXCI6XCJfMjQ3RVZ1SHNxc0RTTGw0Q0czd250OSBfM3Rkalk2enNtSk5FXzRnVHNXMHFDTVwiLFwiX3RkX3Blcm1pc3Npb25zXCI6XCJDSXcxZUhPYlVmOElGNm9idXNOOEkgXzM0bm1KdGo3ZXQ2cTJXaXI3Q3ZWc1VcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODU1NzI3MDYwMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hZWtyeXotbGFwdG9wL1dvcmtzcGFjZS9zeXN0ZW0tYWRtaW5pc3RyYXRpb24vbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVzZXJTdHlsZXMgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvdXNlci5jc3MnOyBcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQ2hlY2tDaXJjbGUsIGZhVGltZXNDaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5jb25zdCBVc2VyRGF0YSA9ICh7IHVzZXIgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDx0YWJsZSBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RhYmxlfT5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJ9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlfT5Vc2VybmFtZTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGR9Pnt1c2VyLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZX0+RW1haWw8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkfT57dXNlci5lbWFpbH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cn0+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGV9PlN0YXR1czwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGR9Pnt1c2VyLmlzQWN0aXZhdGUgPyA8c3Bhbj5BY3RpdmUgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gc2l6ZT1cImxnXCIgY29sb3I9XCIjMUI1RTIwXCIgLz48L3NwYW4+OiA8c3Bhbj5kZWFjdGl2YXRlIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gc2l6ZT1cImxnXCIgY29sb3I9XCIjZDUwMDAwXCIgLz48L3NwYW4+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZX0+Q3JlYXRlZCBkYXRlPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZH0+e2RhdGVGb3JtYXQodXNlci5jcmVhdGVkQXQpfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuKTtcblxuVXNlckRhdGEucHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXNlclN0eWxlcyBmcm9tICcuLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy91c2VyLmNzcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFDaGVja0NpcmNsZSwgZmFUaW1lc0NpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmNvbnN0IFBlcm1pc3Npb25zID0gKHsgdXNlciB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHRhYmxlIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGFibGVfcGVybWlzc2lvbnN9PlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PlZpZXcgdXNlcnM8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3Blcm1pc3Npb25zfT57dXNlci5wZXJtaXNzaW9uLnZpZXdVc2VycyA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PkNyZWF0ZSB1c2VyczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24uY3JlYXRlVXNlciA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PkVkaXQgdXNlcnM8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3Blcm1pc3Npb25zfT57dXNlci5wZXJtaXNzaW9uLnVwZGF0ZVVzZXIgPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tDaXJjbGV9ICBjb2xvcj1cIiMxQjVFMjBcIiAvPjogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSAgY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJfcGVybWlzc2lvbnN9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlX3Blcm1pc3Npb25zfT5EZWxldGUgdXNlcnM8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3Blcm1pc3Npb25zfT57dXNlci5wZXJtaXNzaW9uLmRlbGV0ZVVzZXIgPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tDaXJjbGV9ICBjb2xvcj1cIiMxQjVFMjBcIiAvPjogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSAgY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJfcGVybWlzc2lvbnN9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlX3Blcm1pc3Npb25zfT5WaWV3IGdyb3VwczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24udmlld0dyb3VwcyA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9ICBjb2xvcj1cIiNkNTAwMDBcIiAvPn08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90cl9wZXJtaXNzaW9uc30+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfdGl0bGVfcGVybWlzc2lvbnN9PkNyZWF0ZSBncm91cHM8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3Blcm1pc3Npb25zfT57dXNlci5wZXJtaXNzaW9uLmNyZWF0ZUdyb3VwID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+RWRpdCBncm91cHM8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3Blcm1pc3Npb25zfT57dXNlci5wZXJtaXNzaW9uLnVwZGF0ZUdyb3VwID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrQ2lyY2xlfSAgY29sb3I9XCIjMUI1RTIwXCIgLz46IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc0NpcmNsZX0gIGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RyX3Blcm1pc3Npb25zfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt1c2VyU3R5bGVzLl90ZF90aXRsZV9wZXJtaXNzaW9uc30+RGVsZXRlIGdyb3VwczwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24uZGVsZXRlR3JvdXAgPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hlY2tDaXJjbGV9ICBjb2xvcj1cIiMxQjVFMjBcIiAvPjogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfSAgY29sb3I9XCIjZDUwMDAwXCIgLz59PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdHJfcGVybWlzc2lvbnN9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3VzZXJTdHlsZXMuX3RkX3RpdGxlX3Blcm1pc3Npb25zfT5JcyBhZG1pbjwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17dXNlclN0eWxlcy5fdGRfcGVybWlzc2lvbnN9Pnt1c2VyLnBlcm1pc3Npb24uaXNBZG1pbiA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja0NpcmNsZX0gIGNvbG9yPVwiIzFCNUUyMFwiIC8+OiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9IGNvbG9yPVwiI2Q1MDAwMFwiIC8+fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuKTtcblxuUGVybWlzc2lvbnMucHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbnM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFVzZXJEYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckRhdGEnO1xuaW1wb3J0IHsgTGluaywgTmF2TGluaywgUm91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgdXNlclN0eWxlIGZyb20gJy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL3VzZXIuY3NzJztcbmltcG9ydCBQZXJtaXNzaW9ucyBmcm9tICcuL1Blcm1pc3Npb25zJztcblxuY29uc3QgVXNlcnMgPSAoe1xuICB1c2VyLFxuICBwYXRobmFtZSxcbiAgZGVsZXRlUGVybWlzc2lvbixcbiAgdXBkYXRlUGVybWlzc2lvbixcbiAgZmV0Y2hVc2VyLFxufSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VyKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfY29udGFpbmVyfSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2dyaWRfY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlcl9ncmlkX2ZpcnN0X2l0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZV91c2VybmFtZV9wcm9maWxlfT48c3Bhbj57dXNlci51c2VybmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlcl91cGRhdGVfYnV0dG9ufT5cbiAgICAgICAgICAgIHsgdXBkYXRlUGVybWlzc2lvbiAmJiBcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXt1c2VyU3R5bGUuX3VzZXJfYW5jaG9yX3VwZGF0ZX1cbiAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvdXBkYXRldXNlci8ke3VzZXIuaWR9YCwgXG4gICAgICAgICAgICAgICAgICBzdGF0ZToge2luaXRpYWxWYWx1ZXM6IHVzZXJ9XG4gICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgIDwvTGluaz4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2dyaWRfc2Vjb25kX2l0ZW19PlxuICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX25hdn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3VzZXJTdHlsZS5fdXNlcl91bH0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpfT5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpX2FuY2hvcn0gZXhhY3QgdG89e2Ake3BhdGhuYW1lfWB9IGFjdGl2ZUNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpX2FjdGl2ZX0gPkluZm9ybWF0aW9uPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpfT5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpX2FuY2hvcn0gdG89e2Ake3BhdGhuYW1lfS9wZXJtaXNzaW9uc2B9IGFjdGl2ZUNsYXNzTmFtZT17dXNlclN0eWxlLl91c2VyX2xpX2FjdGl2ZX0+UGVybWlzc2lvbnM8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3BhdGhuYW1lfWB9IHJlbmRlcj17KCkgPT4gPFVzZXJEYXRhIHVzZXI9e3VzZXJ9IC8+fSAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake3BhdGhuYW1lfS9wZXJtaXNzaW9uc2B9IHJlbmRlcj17KCkgPT4gPFBlcm1pc3Npb25zIHVzZXI9e3VzZXJ9IC8+fSAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyp7ZGVsZXRlUGVybWlzc2lvbiAmJlxuICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogYC9kZWxldGV1c2VyLyR7dXNlci5faWR9YCwgXG4gICAgICAgICAgICBzdGF0ZToge2luaXRpYWxWYWx1ZXM6IHVzZXJ9XG4gICAgICAgICAgfX0gPlxuICAgICAgICAgICAgREVMRVRFXG4gICAgICAgIDwvTGluaz4gICB9XG4gICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICA8TGluayB0bz0nL3VzZXJzJyA+IFVTRVJTIDwvTGluaz4gICovfSBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVXNlcnMucHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXBkYXRlUGVybWlzc2lvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlbGV0ZVBlcm1pc3Npb246IFByb3BUeXBlcy5ib29sLFxuICBmZXRjaFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7IHN0YXJ0RmV0Y2hVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyJztcblxuY29uc3QgbWFwU3RhdGVVc2VyVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyB1c2VyLCB1cGRhdGVQZXJtaXNzaW9uLCBkZWxldGVQZXJtaXNzaW9uIH0gPSBzdGF0ZS51c2VyUmVkdWNlcjtcbiAgY29uc3Qge3VybH0gPSBvd25Qcm9wcy5tYXRjaDtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKicpO1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHVzZXIsXG4gICAgdXBkYXRlUGVybWlzc2lvbjogdXBkYXRlUGVybWlzc2lvbixcbiAgICBkZWxldGVQZXJtaXNzaW9uOiBkZWxldGVQZXJtaXNzaW9uLFxuICAgIHBhdGhuYW1lOiB1cmwsXG4gIH07XG59O1xuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gb3duUHJvcHMubWF0Y2gucGFyYW1zO1xuICByZXR1cm4ge1xuICAgIGZldGNoVXNlcjogKCkgPT4gZGlzcGF0Y2goc3RhcnRGZXRjaFVzZXIoaWQpKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBtYXBTdGF0ZVVzZXJUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKFVzZXIpKTtcbiIsIi8qXG4gKiBEYXRlIEZvcm1hdCAxLjIuM1xuICogKGMpIDIwMDctMjAwOSBTdGV2ZW4gTGV2aXRoYW4gPHN0ZXZlbmxldml0aGFuLmNvbT5cbiAqIE1JVCBsaWNlbnNlXG4gKlxuICogSW5jbHVkZXMgZW5oYW5jZW1lbnRzIGJ5IFNjb3R0IFRyZW5kYSA8c2NvdHQudHJlbmRhLm5ldD5cbiAqIGFuZCBLcmlzIEtvd2FsIDxjaXhhci5jb20vfmtyaXMua293YWwvPlxuICpcbiAqIEFjY2VwdHMgYSBkYXRlLCBhIG1hc2ssIG9yIGEgZGF0ZSBhbmQgYSBtYXNrLlxuICogUmV0dXJucyBhIGZvcm1hdHRlZCB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGRhdGUgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZGF0ZS90aW1lLlxuICogVGhlIG1hc2sgZGVmYXVsdHMgdG8gZGF0ZUZvcm1hdC5tYXNrcy5kZWZhdWx0LlxuICovXG5cbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBkYXRlRm9ybWF0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRva2VuID0gL2R7MSw0fXxtezEsNH18eXkoPzp5eSk/fChbSGhNc1R0XSlcXDE/fFtMbG9TWldOXXxcIlteXCJdKlwifCdbXiddKicvZztcbiAgICAgIHZhciB0aW1lem9uZSA9IC9cXGIoPzpbUE1DRUFdW1NEUF1UfCg/OlBhY2lmaWN8TW91bnRhaW58Q2VudHJhbHxFYXN0ZXJufEF0bGFudGljKSAoPzpTdGFuZGFyZHxEYXlsaWdodHxQcmV2YWlsaW5nKSBUaW1lfCg/OkdNVHxVVEMpKD86Wy0rXVxcZHs0fSk/KVxcYi9nO1xuICAgICAgdmFyIHRpbWV6b25lQ2xpcCA9IC9bXi0rXFxkQS1aXS9nO1xuICBcbiAgICAgIC8vIFJlZ2V4ZXMgYW5kIHN1cHBvcnRpbmcgZnVuY3Rpb25zIGFyZSBjYWNoZWQgdGhyb3VnaCBjbG9zdXJlXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUsIG1hc2ssIHV0YywgZ210KSB7XG4gIFxuICAgICAgICAvLyBZb3UgY2FuJ3QgcHJvdmlkZSB1dGMgaWYgeW91IHNraXAgb3RoZXIgYXJncyAodXNlIHRoZSAnVVRDOicgbWFzayBwcmVmaXgpXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGtpbmRPZihkYXRlKSA9PT0gJ3N0cmluZycgJiYgIS9cXGQvLnRlc3QoZGF0ZSkpIHtcbiAgICAgICAgICBtYXNrID0gZGF0ZTtcbiAgICAgICAgICBkYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gIFxuICAgICAgICBkYXRlID0gZGF0ZSB8fCBuZXcgRGF0ZTtcbiAgXG4gICAgICAgIGlmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgZGF0ZScpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBtYXNrID0gU3RyaW5nKGRhdGVGb3JtYXQubWFza3NbbWFza10gfHwgbWFzayB8fCBkYXRlRm9ybWF0Lm1hc2tzWydkZWZhdWx0J10pO1xuICBcbiAgICAgICAgLy8gQWxsb3cgc2V0dGluZyB0aGUgdXRjL2dtdCBhcmd1bWVudCB2aWEgdGhlIG1hc2tcbiAgICAgICAgdmFyIG1hc2tTbGljZSA9IG1hc2suc2xpY2UoMCwgNCk7XG4gICAgICAgIGlmIChtYXNrU2xpY2UgPT09ICdVVEM6JyB8fCBtYXNrU2xpY2UgPT09ICdHTVQ6Jykge1xuICAgICAgICAgIG1hc2sgPSBtYXNrLnNsaWNlKDQpO1xuICAgICAgICAgIHV0YyA9IHRydWU7XG4gICAgICAgICAgaWYgKG1hc2tTbGljZSA9PT0gJ0dNVDonKSB7XG4gICAgICAgICAgICBnbXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgdmFyIF8gPSB1dGMgPyAnZ2V0VVRDJyA6ICdnZXQnO1xuICAgICAgICB2YXIgZCA9IGRhdGVbXyArICdEYXRlJ10oKTtcbiAgICAgICAgdmFyIEQgPSBkYXRlW18gKyAnRGF5J10oKTtcbiAgICAgICAgdmFyIG0gPSBkYXRlW18gKyAnTW9udGgnXSgpO1xuICAgICAgICB2YXIgeSA9IGRhdGVbXyArICdGdWxsWWVhciddKCk7XG4gICAgICAgIHZhciBIID0gZGF0ZVtfICsgJ0hvdXJzJ10oKTtcbiAgICAgICAgdmFyIE0gPSBkYXRlW18gKyAnTWludXRlcyddKCk7XG4gICAgICAgIHZhciBzID0gZGF0ZVtfICsgJ1NlY29uZHMnXSgpO1xuICAgICAgICB2YXIgTCA9IGRhdGVbXyArICdNaWxsaXNlY29uZHMnXSgpO1xuICAgICAgICB2YXIgbyA9IHV0YyA/IDAgOiBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIHZhciBXID0gZ2V0V2VlayhkYXRlKTtcbiAgICAgICAgdmFyIE4gPSBnZXREYXlPZldlZWsoZGF0ZSk7XG4gICAgICAgIHZhciBmbGFncyA9IHtcbiAgICAgICAgICBkOiAgICBkLFxuICAgICAgICAgIGRkOiAgIHBhZChkKSxcbiAgICAgICAgICBkZGQ6ICBkYXRlRm9ybWF0LmkxOG4uZGF5TmFtZXNbRF0sXG4gICAgICAgICAgZGRkZDogZGF0ZUZvcm1hdC5pMThuLmRheU5hbWVzW0QgKyA3XSxcbiAgICAgICAgICBtOiAgICBtICsgMSxcbiAgICAgICAgICBtbTogICBwYWQobSArIDEpLFxuICAgICAgICAgIG1tbTogIGRhdGVGb3JtYXQuaTE4bi5tb250aE5hbWVzW21dLFxuICAgICAgICAgIG1tbW06IGRhdGVGb3JtYXQuaTE4bi5tb250aE5hbWVzW20gKyAxMl0sXG4gICAgICAgICAgeXk6ICAgU3RyaW5nKHkpLnNsaWNlKDIpLFxuICAgICAgICAgIHl5eXk6IHksXG4gICAgICAgICAgaDogICAgSCAlIDEyIHx8IDEyLFxuICAgICAgICAgIGhoOiAgIHBhZChIICUgMTIgfHwgMTIpLFxuICAgICAgICAgIEg6ICAgIEgsXG4gICAgICAgICAgSEg6ICAgcGFkKEgpLFxuICAgICAgICAgIE06ICAgIE0sXG4gICAgICAgICAgTU06ICAgcGFkKE0pLFxuICAgICAgICAgIHM6ICAgIHMsXG4gICAgICAgICAgc3M6ICAgcGFkKHMpLFxuICAgICAgICAgIGw6ICAgIHBhZChMLCAzKSxcbiAgICAgICAgICBMOiAgICBwYWQoTWF0aC5yb3VuZChMIC8gMTApKSxcbiAgICAgICAgICB0OiAgICBIIDwgMTIgPyBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzBdIDogZGF0ZUZvcm1hdC5pMThuLnRpbWVOYW1lc1sxXSxcbiAgICAgICAgICB0dDogICBIIDwgMTIgPyBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzJdIDogZGF0ZUZvcm1hdC5pMThuLnRpbWVOYW1lc1szXSxcbiAgICAgICAgICBUOiAgICBIIDwgMTIgPyBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzRdIDogZGF0ZUZvcm1hdC5pMThuLnRpbWVOYW1lc1s1XSxcbiAgICAgICAgICBUVDogICBIIDwgMTIgPyBkYXRlRm9ybWF0LmkxOG4udGltZU5hbWVzWzZdIDogZGF0ZUZvcm1hdC5pMThuLnRpbWVOYW1lc1s3XSxcbiAgICAgICAgICBaOiAgICBnbXQgPyAnR01UJyA6IHV0YyA/ICdVVEMnIDogKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSkgfHwgWycnXSkucG9wKCkucmVwbGFjZSh0aW1lem9uZUNsaXAsICcnKSxcbiAgICAgICAgICBvOiAgICAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KSxcbiAgICAgICAgICBTOiAgICBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bZCAlIDEwID4gMyA/IDAgOiAoZCAlIDEwMCAtIGQgJSAxMCAhPSAxMCkgKiBkICUgMTBdLFxuICAgICAgICAgIFc6ICAgIFcsXG4gICAgICAgICAgTjogICAgTlxuICAgICAgICB9O1xuICBcbiAgICAgICAgcmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgaWYgKG1hdGNoIGluIGZsYWdzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3NbbWF0Y2hdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoMSwgbWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gIGRhdGVGb3JtYXQubWFza3MgPSB7XG4gICAgJ2RlZmF1bHQnOiAgICAgICAgICAgICAgICdkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3MnLFxuICAgICdzaG9ydERhdGUnOiAgICAgICAgICAgICAnbS9kL3l5JyxcbiAgICAnbWVkaXVtRGF0ZSc6ICAgICAgICAgICAgJ21tbSBkLCB5eXl5JyxcbiAgICAnbG9uZ0RhdGUnOiAgICAgICAgICAgICAgJ21tbW0gZCwgeXl5eScsXG4gICAgJ2Z1bGxEYXRlJzogICAgICAgICAgICAgICdkZGRkLCBtbW1tIGQsIHl5eXknLFxuICAgICdzaG9ydFRpbWUnOiAgICAgICAgICAgICAnaDpNTSBUVCcsXG4gICAgJ21lZGl1bVRpbWUnOiAgICAgICAgICAgICdoOk1NOnNzIFRUJyxcbiAgICAnbG9uZ1RpbWUnOiAgICAgICAgICAgICAgJ2g6TU06c3MgVFQgWicsXG4gICAgJ2lzb0RhdGUnOiAgICAgICAgICAgICAgICd5eXl5LW1tLWRkJyxcbiAgICAnaXNvVGltZSc6ICAgICAgICAgICAgICAgJ0hIOk1NOnNzJyxcbiAgICAnaXNvRGF0ZVRpbWUnOiAgICAgICAgICAgJ3l5eXktbW0tZGRcXCdUXFwnSEg6TU06c3NvJyxcbiAgICAnaXNvVXRjRGF0ZVRpbWUnOiAgICAgICAgJ1VUQzp5eXl5LW1tLWRkXFwnVFxcJ0hIOk1NOnNzXFwnWlxcJycsXG4gICAgJ2V4cGlyZXNIZWFkZXJGb3JtYXQnOiAgICdkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFonXG4gIH07XG5cbiAgLy8gSW50ZXJuYXRpb25hbGl6YXRpb24gc3RyaW5nc1xuICBkYXRlRm9ybWF0LmkxOG4gPSB7XG4gICAgZGF5TmFtZXM6IFtcbiAgICAgICdTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnLFxuICAgICAgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xuICAgIF0sXG4gICAgbW9udGhOYW1lczogW1xuICAgICAgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJyxcbiAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF0sXG4gICAgdGltZU5hbWVzOiBbXG4gICAgICAnYScsICdwJywgJ2FtJywgJ3BtJywgJ0EnLCAnUCcsICdBTScsICdQTSdcbiAgICBdXG4gIH07XG5cbmZ1bmN0aW9uIHBhZCh2YWwsIGxlbikge1xuICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgbGVuID0gbGVuIHx8IDI7XG4gIHdoaWxlICh2YWwubGVuZ3RoIDwgbGVuKSB7XG4gICAgdmFsID0gJzAnICsgdmFsO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbi8qKlxuICogR2V0IHRoZSBJU08gODYwMSB3ZWVrIG51bWJlclxuICogQmFzZWQgb24gY29tbWVudHMgZnJvbVxuICogaHR0cDovL3RlY2hibG9nLnByb2N1cmlvcy5ubC9rL242MTgvbmV3cy92aWV3LzMzNzk2LzE0ODYzL0NhbGN1bGF0ZS1JU08tODYwMS13ZWVrLWFuZC15ZWFyLWluLWphdmFzY3JpcHQuaHRtbFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYGRhdGVgXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFdlZWsoZGF0ZSkge1xuICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnRzIG9mIGRhdGVcbiAgdmFyIHRhcmdldFRodXJzZGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKTtcblxuICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgdGFyZ2V0VGh1cnNkYXkuc2V0RGF0ZSh0YXJnZXRUaHVyc2RheS5nZXREYXRlKCkgLSAoKHRhcmdldFRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpO1xuXG4gIC8vIFRha2UgSmFudWFyeSA0dGggYXMgaXQgaXMgYWx3YXlzIGluIHdlZWsgMSAoc2VlIElTTyA4NjAxKVxuICB2YXIgZmlyc3RUaHVyc2RheSA9IG5ldyBEYXRlKHRhcmdldFRodXJzZGF5LmdldEZ1bGxZZWFyKCksIDAsIDQpO1xuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICBmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgLSAoKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMyk7XG5cbiAgLy8gQ2hlY2sgaWYgZGF5bGlnaHQtc2F2aW5nLXRpbWUtc3dpdGNoIG9jY3VycmVkIGFuZCBjb3JyZWN0IGZvciBpdFxuICB2YXIgZHMgPSB0YXJnZXRUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpIC0gZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB0YXJnZXRUaHVyc2RheS5zZXRIb3Vycyh0YXJnZXRUaHVyc2RheS5nZXRIb3VycygpIC0gZHMpO1xuXG4gIC8vIE51bWJlciBvZiB3ZWVrcyBiZXR3ZWVuIHRhcmdldCBUaHVyc2RheSBhbmQgZmlyc3QgVGh1cnNkYXlcbiAgdmFyIHdlZWtEaWZmID0gKHRhcmdldFRodXJzZGF5IC0gZmlyc3RUaHVyc2RheSkgLyAoODY0MDAwMDAqNyk7XG4gIHJldHVybiAxICsgTWF0aC5mbG9vcih3ZWVrRGlmZik7XG59XG5cbi8qKlxuICogR2V0IElTTy04NjAxIG51bWVyaWMgcmVwcmVzZW50YXRpb24gb2YgdGhlIGRheSBvZiB0aGUgd2Vla1xuICogMSAoZm9yIE1vbmRheSkgdGhyb3VnaCA3IChmb3IgU3VuZGF5KVxuICogXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBkYXRlYFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZSkge1xuICB2YXIgZG93ID0gZGF0ZS5nZXREYXkoKTtcbiAgaWYoZG93ID09PSAwKSB7XG4gICAgZG93ID0gNztcbiAgfVxuICByZXR1cm4gZG93O1xufVxuXG4vKipcbiAqIGtpbmQtb2Ygc2hvcnRjdXRcbiAqIEBwYXJhbSAgeyp9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWw7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWwpXG4gICAgLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuXG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGF0ZUZvcm1hdDtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRhdGVGb3JtYXQ7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLmRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0O1xuICB9XG59KSh0aGlzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=