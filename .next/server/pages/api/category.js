"use strict";
(() => {
var exports = {};
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var backend_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5164);

async function handler(req, res) {
    const { method  } = req;
    try {
        const result = await backend_services__WEBPACK_IMPORTED_MODULE_0__/* .categoryService */ .GN[method]();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).end();
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [164], () => (__webpack_exec__(7588)));
module.exports = __webpack_exports__;

})();