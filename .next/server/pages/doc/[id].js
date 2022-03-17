"use strict";
(() => {
var exports = {};
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 5210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var utils_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9844);




const MdEditor = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "doc/[id].tsx -> " + "components/Pages/MdEditor"
        ]
    },
    ssr: false
});
const Doc = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common__WEBPACK_IMPORTED_MODULE_1__/* .HeadWrapper */ .TO, {
                metaTemplate: {
                    html: {
                        title: '프로필',
                        description: 'Seekbell playground project for nextjs study.',
                        imageUrl: 'https://avatars.githubusercontent.com/u/19147143?v=4'
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MdEditor, {})
        ]
    }));
};
const getStaticProps = async (context)=>{
    const { id  } = context.params;
    const document = await utils_apiHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get('document', {
        id
    });
    return {
        props: {
            document
        }
    };
};
const getStaticPaths = async ()=>{
    const documentList = await utils_apiHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get('document/list');
    const idList = documentList.map((doc)=>doc.id
    );
    const paths = idList.map((id)=>{
        return {
            params: {
                id
            }
        };
    });
    return {
        paths,
        fallback: true
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doc);


/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,102,844], () => (__webpack_exec__(5210)));
module.exports = __webpack_exports__;

})();