"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_vue_backend_pages_settings_components_AppSettingsComponent_vue"],{

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