"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_settings_SettingsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppSettingsComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppSettingsComponent.vue */ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppSettings: _components_AppSettingsComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var pureColor = vue__WEBPACK_IMPORTED_MODULE_0__.ref < tinycolor2__WEBPACK_IMPORTED_MODULE_1__.ColorInputWithoutInstance > "red";
    var gradientColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("linear-gradient(0deg, rgba(0, 0, 0,   1) 0%, rgba(0, 0, 0, 1) 100%)"); //    pureColor=pureColor?.replace(/rgb/, "");

    return {
      pureColor: pureColor,
      gradientColor: gradientColor
    };
  },
  data: function data() {
    return {
      custom_layout: false,
      settings: {
        custom: {
          primary_color: "",
          primary_rgb: ""
        }
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      var primary_rgb = this.settings.custom.primary_rgb.replace('rgb', "");
      primary_rgb = primary_rgb.replace('(', "");
      primary_rgb = primary_rgb.replace(')', "");
      this.settings.custom.primary_rgb = primary_rgb;
      axios.post('/config/update-app-settings', {
        settings: this.settings.custom,
        type: 'custom'
      }).then(function (res) {
        _this.$root.alertNotify(res.status, 'Update Successfuly', 'info', res.data);

        window.location.reload(true);
      });
    },
    mapColor: function mapColor(item) {
      this.settings.custom.primary_rgb = "rgb(" + item.settings.primary_rgb + ")";
      this.settings.custom.primary_color = item.settings.primary_color;
    },
    getSettings: function getSettings() {
      var _this2 = this;

      axios.get('/config/settings').then(function (res) {
        var data = res.data;
        console.log(data);

        if (data.setting_by_user) {
          _this2.mapColor(data.setting_by_user);
        }
      });
    }
  },
  mounted: function mounted() {
    this.getSettings();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-xl-12 col-lg-12"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "card-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("App Settings "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-regular fa-circle-check"
})])], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-2 nav-justified",
  id: "myTab2",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "home-tab-justified",
  "data-bs-toggle": "tab",
  href: "#home-just",
  role: "tab",
  "aria-controls": "home-just",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "profile-tab-justified",
  "data-bs-toggle": "tab",
  href: "#profile-just",
  role: "tab",
  "aria-controls": "profile-just",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "messages-tab-justified",
  "data-bs-toggle": "tab",
  href: "#messages-just",
  role: "tab",
  "aria-controls": "messages-just",
  "aria-selected": "false"
}, "Messages")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "settings-tab-justified",
  "data-bs-toggle": "tab",
  href: "#settings-just",
  role: "tab",
  "aria-controls": "settings-just",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "data-feather": "settings"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings")])])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "tab-content pt-2"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane active",
  id: "home-just",
  role: "tabpanel",
  "aria-labelledby": "home-tab-justified"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Chocolate cake sweet roll lemon drops marzipan chocolate cake cupcake cotton candy. Drag??e ice cream drag??e biscuit chupa chups bear claw cupcake brownie cotton candy. Sesame snaps topping cupcake cake. Macaroon lemon drops gummies danish marzipan donut. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Chocolate bar souffl?? tiramisu tiramisu jelly-o carrot cake gummi bears cake. Candy canes wafer croissant donut bonbon drag??e bear claw jelly sugar plum. Sweet lemon drops caramels croissant cheesecake jujubes carrot cake fruitcake. Halvah biscuit lemon drops fruitcake tart. ")], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane",
  id: "profile-just",
  role: "tabpanel",
  "aria-labelledby": "profile-tab-justified"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Bear claw jelly beans wafer pastry jelly beans candy macaroon biscuit topping. Sesame snaps lemon drops donut gingerbread dessert cotton candy wafer croissant jelly beans. Sweet roll halvah gingerbread bonbon apple pie gummies chocolate bar pastry gummi bears. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Croissant danish chocolate bar pie muffin. Gummi bears marshmallow chocolate bar bear claw. Fruitcake halvah chupa chups drag??e carrot cake cookie. Carrot cake oat cake cake chocolate bar cheesecake. Wafer gingerbread sweet roll candy chocolate bar gingerbread. ")], -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane",
  id: "messages-just",
  role: "tabpanel",
  "aria-labelledby": "messages-tab-justified"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Croissant jelly tootsie roll candy canes. Donut sugar plum jujubes sweet roll chocolate cake wafer. Tart caramels jujubes. Drag??e tart oat cake. Fruitcake cheesecake danish. Danish topping candy jujubes. Candy canes candy canes lemon drops caramels tiramisu chocolate bar pie. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Gummi bears tootsie roll cake wafer. Gummies powder apple pie bear claw. Caramels bear claw fruitcake topping lemon drops. Carrot cake macaroon ice cream liquorice donut souffl??. Gummi bears carrot cake toffee bonbon gingerbread lemon drops chocolate cake. ")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "tab-pane",
  id: "settings-just",
  role: "tabpanel",
  "aria-labelledby": "settings-tab-justified"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-settings");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab panes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_settings)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-lg-6"
};
var _hoisted_2 = {
  "class": "card"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header border-bottom"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "card-title"
}, "Colors Layout")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "card-body pt-2"
};
var _hoisted_5 = {
  "class": "row custom-options-checkable g-1"
};
var _hoisted_6 = {
  "class": "col-md-6"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-option-item p-1",
  "for": "customOptionsCheckableRadios1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-flex justify-content-between flex-wrap mb-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bolder"
}, "Basic Colors"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bolder"
}, "Default")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"d-block\">Get 1 project with 1 team member.</small> ")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-md-6"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-option-item p-1",
  "for": "customOptionsCheckableRadios2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-flex justify-content-between flex-wrap mb-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bolder"
}, "Custom Colors"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bolder"
}, "By User")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"d-block\">Get 5 projects with 5 team members.</small> ")], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col pt-2"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "defaultInput"
}, "Primary Color", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col pt-2"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label",
  "for": "defaultInput"
}, "Primary Rgb Color", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "pt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_color_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("color-picker");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "custom-option-item-check",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.custom_layout = false;
    }),
    type: "radio",
    name: "customOptionsCheckableRadios",
    id: "customOptionsCheckableRadios1",
    checked: ""
  }), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "custom-option-item-check",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.custom_layout = !_this.custom_layout;
    }),
    type: "radio",
    name: "customOptionsCheckableRadios",
    id: "customOptionsCheckableRadios2",
    value: ""
  }), _hoisted_9])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "color",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.settings.custom.primary_color = $event;
    }),
    "class": "form-control",
    id: "floating-label1",
    placeholder: "Label-placeholder"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.settings.custom.primary_color]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_color_picker, {
    "class": "form-control",
    format: "rgb",
    pureColor: $data.settings.custom.primary_rgb,
    "onUpdate:pureColor": _cache[3] || (_cache[3] = function ($event) {
      return $data.settings.custom.primary_rgb = $event;
    })
  }, null, 8
  /* PROPS */
  , ["pureColor"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.onSubmit && $options.onSubmit.apply($options, arguments);
    }),
    type: "button",
    "class": "btn btn-primary waves-effect waves-float waves-light"
  }, "Submit")])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.custom_layout]])])])])])]);
}

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/SettingsComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/SettingsComponent.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsComponent_vue_vue_type_template_id_2e49a976__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=template&id=2e49a976 */ "./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976");
/* harmony import */ var _SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_vuexyStarter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexyStarter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SettingsComponent_vue_vue_type_template_id_2e49a976__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/settings/SettingsComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue":
/*!*************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSettingsComponent_vue_vue_type_template_id_4bd45906__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSettingsComponent.vue?vue&type=template&id=4bd45906 */ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906");
/* harmony import */ var _AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSettingsComponent.vue?vue&type=script&lang=js */ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_vuexyStarter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_vuexyStarter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppSettingsComponent_vue_vue_type_template_id_4bd45906__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_template_id_2e49a976__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsComponent_vue_vue_type_template_id_2e49a976__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsComponent.vue?vue&type=template&id=2e49a976 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/SettingsComponent.vue?vue&type=template&id=2e49a976");


/***/ }),

/***/ "./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906":
/*!*******************************************************************************************************************!*\
  !*** ./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_template_id_4bd45906__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_babel_loader_lib_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSettingsComponent_vue_vue_type_template_id_4bd45906__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSettingsComponent.vue?vue&type=template&id=4bd45906 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/vue/backend/pages/settings/components/AppSettingsComponent.vue?vue&type=template&id=4bd45906");


/***/ })

}]);