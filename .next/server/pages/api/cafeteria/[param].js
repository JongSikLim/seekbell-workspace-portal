"use strict";
(() => {
var exports = {};
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 5783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var backend_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6788);

async function handler(req, res) {
    const { url ='' , method , body  } = req;
    const withoutBaseRoute = url.replace('/api/cafeteria', '');
    const path = withoutBaseRoute === '' ? method : withoutBaseRoute.replace('/', '');
    try {
        const result = await backend_controller__WEBPACK_IMPORTED_MODULE_0__/* .cafeteriaController */ .FK[path](JSON.parse(body));
        res.status(200).json(result);
    } catch (error) {
        res.status(500).end(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [164,788], () => (__webpack_exec__(5783)));
module.exports = __webpack_exports__;

})();