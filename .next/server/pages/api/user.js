"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541,83];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9634);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_user__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 9634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var backend_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6788);

async function handler(req, res) {
    const { url ='' , method , body ={} , query  } = req;
    const withoutBaseRoute = url.replace('/api/user', '');
    const path = withoutBaseRoute === '' ? method : withoutBaseRoute.replace('/', '');
    try {
        const validBody = body === '' ? {} : JSON.parse(body);
        const result = await backend_controller__WEBPACK_IMPORTED_MODULE_0__/* .userController */ .zN[path](validBody);
        res.status(200).json(result);
    } catch (error) {
        console.log('error: ', error);
        res.status(500).end(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [164,788], () => (__webpack_exec__(3800)));
module.exports = __webpack_exports__;

})();