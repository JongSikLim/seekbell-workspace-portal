(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4246:
/***/ ((module) => {

// Exports
module.exports = {
	"lnb": "layout_lnb__cdC6B",
	"title": "layout_title__AfmPQ",
	"subTitle": "layout_subTitle__pZXM8",
	"lnb-title": "layout_lnb-title__8PVFT",
	"lnb-content": "layout_lnb-content__uzC_G",
	"lnb-footer": "layout_lnb-footer__ekPDr",
	"icon-box": "layout_icon-box__0c2PI",
	"content-container": "layout_content-container__2OmfA",
	"header": "layout_header__aTK08",
	"content": "layout_content__yl2ol"
};


/***/ }),

/***/ 7134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/components/Footer/Footer.tsx


const Footer = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/components/Footer/index.ts

/* harmony default export */ const components_Footer = (Footer_Footer);

;// CONCATENATED MODULE: ./components/layout/components/Header/Header.tsx


const Header = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }));
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/components/Header/index.ts

/* harmony default export */ const components_Header = (Header_Header);

// EXTERNAL MODULE: ./styles/common/layout.module.scss
var layout_module = __webpack_require__(4246);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/layout/components/Contents/Contents.tsx




const Contents = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
    const title = (0,external_react_.useMemo)(()=>{
        let _title;
        switch(pathname){
            case '/todaylunch':
                _title = '오늘의 점심은';
                break;
            default:
                _title = '헤더 기본값';
                break;
        }
        return _title;
    }, [
        pathname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default())["content-container"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (layout_module_default()).header,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (layout_module_default()).content,
                children: children
            })
        ]
    }));
};
/* harmony default export */ const Contents_Contents = (Contents);

;// CONCATENATED MODULE: ./components/layout/components/Contents/index.ts

/* harmony default export */ const components_Contents = (Contents_Contents);

;// CONCATENATED MODULE: ./components/layout/components/LNB/components/Title.tsx



const Title = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).title,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Seekbell playground"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (layout_module_default()).subTitle,
                children: "Hello All Developers!"
            })
        ]
    }));
};
/* harmony default export */ const components_Title = (Title);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/layout/components/LNB/components/MenuBox.tsx





const { SubMenu  } = external_antd_.Menu;
const MenuBox = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (layout_module_default())["lnb-content"],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Menu, {
            mode: "inline",
            theme: "dark",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: '/profile',
                        children: "🙋‍♂️Profile"
                    })
                }, "landing"),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubMenu, {
                    title: "🧰Service",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: '/todaylunch',
                                children: "오늘의 점심은?"
                            })
                        }, "1"),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                            children: "추가 예정"
                        }, "2"),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                            children: "추가 예정222"
                        }, "3")
                    ]
                }, "service"),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubMenu, {
                    title: "📘Document",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Menu.ItemGroup, {
                            title: "React",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g1-1"
                                }, "doc-g1-1"),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g1-2"
                                }, "doc-g1-2"),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g1-3"
                                }, "doc-g1-3")
                            ]
                        }, 'group1'),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Menu.ItemGroup, {
                            title: "Javascript",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g2-1"
                                }, "doc-g2-1"),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g2-2"
                                }, "doc-g2-2"),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu.Item, {
                                    children: "doc-g2-3"
                                }, "doc-g2-3")
                            ]
                        }, 'group2')
                    ]
                }, "document")
            ]
        })
    }));
};
/* harmony default export */ const components_MenuBox = (MenuBox);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/layout/components/LNB/components/Footer.tsx





const components_Footer_Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (layout_module_default())["lnb-footer"],
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (layout_module_default())["icon-box"],
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.GithubOutlined, {}),
                shape: 'circle',
                onClick: ()=>{
                    window.open('https://github.com/jongsiklim');
                }
            })
        })
    }));
};
/* harmony default export */ const LNB_components_Footer = (components_Footer_Footer);

;// CONCATENATED MODULE: ./components/layout/components/LNB/components/index.ts




;// CONCATENATED MODULE: ./components/layout/components/LNB/LNB.tsx




const LNB = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).lnb,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Title, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_MenuBox, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LNB_components_Footer, {})
        ]
    }));
};
/* harmony default export */ const LNB_LNB = (LNB);

;// CONCATENATED MODULE: ./components/layout/components/LNB/index.ts

/* harmony default export */ const components_LNB = (LNB_LNB);

;// CONCATENATED MODULE: ./components/layout/components/index.ts





;// CONCATENATED MODULE: ./components/layout/common/GridBox.tsx


const GridBox = (props)=>{
    const { children  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: 'flex',
            height: '100%'
        },
        children: children
    }));
};
/* harmony default export */ const common_GridBox = (GridBox);

;// CONCATENATED MODULE: ./components/layout/common/Grid.tsx

const Grid = (props)=>{
    const { children , flex , minWidth  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            flex,
            minWidth,
            height: '100%'
        },
        children: children
    }));
};
/* harmony default export */ const common_Grid = (Grid);

;// CONCATENATED MODULE: ./components/layout/common/FixedHeight.tsx


const FixedHeight = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: '100vh',
            overflowY: 'hidden'
        },
        children: children
    }));
};
/* harmony default export */ const common_FixedHeight = (FixedHeight);

;// CONCATENATED MODULE: ./components/layout/common/index.ts




;// CONCATENATED MODULE: ./components/layout/MainLayout.tsx




const MainLayout = (props)=>{
    const { children  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(common_FixedHeight, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common_GridBox, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(common_Grid, {
                    flex: 2,
                    minWidth: 400,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_LNB, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common_Grid, {
                    flex: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Contents, {
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const layout_MainLayout = (MainLayout);

;// CONCATENATED MODULE: ./components/layout/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx





/**
 * 페이지가 라우팅 될 때 해당 컴포넌트를 거친다.
 * Component에 라우팅 경로에 해당하는 컴포넌트 파일을 가져온다.
 *
 * 공통 css 파일 추가도 본 파일에서 하는게 좋다.
 * 프론트에서 관리해야하는 걸 여기서 사용하는게 좋다.
 */ function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_MainLayout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,122], () => (__webpack_exec__(7134)));
module.exports = __webpack_exports__;

})();