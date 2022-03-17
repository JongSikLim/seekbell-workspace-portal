exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 545:
/***/ ((module) => {

// Exports
module.exports = {
	"common_button": "component_common_button__Vc9Zj",
	"common_button_primary": "component_common_button_primary__BMTMY",
	"common_button_danger": "component_common_button_danger__uv79a",
	"common_button_danger_primary": "component_common_button_danger_primary__ie6mg"
};


/***/ }),

/***/ 5023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(545);
/* harmony import */ var styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const CButton = ({ icon , type , block =false , handleClick , children ,  })=>{
    const buttonClassName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let _cName;
        switch(type){
            case 'primary':
                _cName = (styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default().common_button_primary);
                break;
            case 'danger':
                _cName = (styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default().common_button_danger);
                break;
            default:
                _cName = (styles_common_component_module_scss__WEBPACK_IMPORTED_MODULE_3___default().common_button);
                break;
        }
        return _cName;
    }, [
        type
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: buttonClassName,
        icon: icon,
        block: block,
        onClick: handleClick,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CButton);


/***/ }),

/***/ 8102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u5": () => (/* reexport */ CButton/* default */.Z),
  "TO": () => (/* reexport */ common_HeadWrapper),
  "VL": () => (/* reexport */ common_NumberFormatText),
  "nv": () => (/* reexport */ common_TextField)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/common/HeadWrapper.tsx


const HeadWrapper = ({ metaTemplate  })=>{
    const { html , og =undefined  } = metaTemplate;
    const { title , description , imageUrl ='https://avatars.githubusercontent.com/u/19147143?v=4' , keywords =[
        'seekbell',
        'jsim',
        '임종식',
        'nextjs'
    ] , author ='임종식' ,  } = html;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "title",
                content: title
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "description",
                content: description
            }, "description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "image",
                content: imageUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "keywords",
                content: keywords.join(',')
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: author
            }),
            og ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: og.title
                    }, "title"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: og.description
                    }, "description"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: og.imageUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:keywords",
                        content: og.keywords.join(',')
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: og.author
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: title
                    }, "title"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: description
                    }, "description"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: imageUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:keywords",
                        content: keywords.join(',')
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: author
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const common_HeadWrapper = (HeadWrapper);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/common/TextField.tsx



const TextField = ({ width , children  })=>{
    const { 0: isOverflow , 1: setIsOverFlow  } = (0,external_react_.useState)(false);
    let hiddenRef = (0,external_react_.useCallback)((ref)=>{
        if (ref) {
            let elWidth = ref.getBoundingClientRect().width;
            setIsOverFlow(elWidth > width);
        } else {
            setIsOverFlow(false);
        }
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ref: hiddenRef,
                style: {
                    position: 'absolute',
                    visibility: 'hidden',
                    whiteSpace: 'nowrap'
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    display: 'inline-block',
                    width,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                },
                children: isOverflow ? /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tooltip, {
                    title: children,
                    children: children
                }) : children
            })
        ]
    }));
};
/* harmony default export */ const common_TextField = (TextField);

// EXTERNAL MODULE: ./components/common/CButton.tsx
var CButton = __webpack_require__(5023);
;// CONCATENATED MODULE: ./components/common/NumberFormatText.tsx

const NumberFormatText = ({ value  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }));
};
/* harmony default export */ const common_NumberFormatText = (NumberFormatText);

;// CONCATENATED MODULE: ./components/common/index.ts






/***/ })

};
;