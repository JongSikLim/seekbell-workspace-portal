"use strict";
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 7131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pages_Login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./utils/apiHelper/index.ts + 3 modules
var apiHelper = __webpack_require__(9844);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoils/atoms/user.ts
var user = __webpack_require__(4444);
;// CONCATENATED MODULE: ./components/Pages/Login/components/SignIn.tsx








var Page;
(function(Page) {
    Page[Page["SIGN_IN"] = 0] = "SIGN_IN";
    Page[Page["SIGN_UP"] = 1] = "SIGN_UP";
})(Page || (Page = {}));
const SignIn = ({ setPage  })=>{
    const router = (0,router_.useRouter)();
    const setUserInfo = (0,external_recoil_.useSetRecoilState)(user/* userInfoState */.E);
    const onFinish = (values)=>{
        const { id , password  } = values;
        apiHelper/* default.post */.Z.post(`user/login`, {
            id,
            password
        }).then((res)=>{
            console.log('res: ', res);
            setUserInfo((prev)=>{
                router.back();
                return res;
            });
        }).catch((err)=>{
            external_antd_.message.error('계정정보가 틀렸습니다.');
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
            name: "normal_login",
            className: "login-form",
            initialValues: {
                remember: true
            },
            onFinish: onFinish,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                    name: "id",
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Username!'
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                        prefix: /*#__PURE__*/ jsx_runtime_.jsx(icons_.UserOutlined, {
                            className: "site-form-item-icon"
                        }),
                        placeholder: "Username"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                    name: "password",
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Password!'
                        }
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                        prefix: /*#__PURE__*/ jsx_runtime_.jsx(icons_.LockOutlined, {
                            className: "site-form-item-icon"
                        }),
                        type: "password",
                        placeholder: "Password"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "remember",
                            valuePropName: "checked",
                            noStyle: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Checkbox, {
                                children: "비밀번호 기억"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "login-form-forgot",
                            href: "",
                            children: "비밀번호 찾기"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            type: "primary",
                            htmlType: "submit",
                            className: "login-form-button",
                            children: "Log in"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>setPage(Page.SIGN_UP)
                            ,
                            children: "회원가입"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_SignIn = (SignIn);

// EXTERNAL MODULE: ./utils/passwordUtils.ts
var passwordUtils = __webpack_require__(9610);
;// CONCATENATED MODULE: ./components/Pages/Login/components/SignUp.tsx






const Signup = ({ setPage  })=>{
    const [form] = external_antd_.Form.useForm();
    const handleFinish = (value)=>{
        const { id , password , name  } = value;
        //@ts-ignore
        (0,passwordUtils/* createHashedPassword */.iM)(password).then(({ hashedPassword , salt  })=>{
            const newUser = {
                name,
                salt,
                password: hashedPassword,
                email: id
            };
            apiHelper/* default.post */.Z.post(`/user`, newUser).then(()=>{
                setPage(Login_Page.SIGN_IN);
            }).catch((err)=>{
                console.log('err: ', err);
            });
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    marginBottom: 40
                },
                children: "회원가입"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        width: 700
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                        form: form,
                        labelCol: {
                            span: 4
                        },
                        wrapperCol: {
                            span: 12
                        },
                        onFinish: handleFinish,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                name: "id",
                                label: "아이디",
                                rules: [
                                    {
                                        required: true,
                                        message: '아이디를 입력하세요.'
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                name: "password",
                                label: "비밀번호",
                                rules: [
                                    {
                                        required: true,
                                        message: '비밀번호 입력하세요.'
                                    }
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Password, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                name: "passwordConfirm",
                                label: "비밀번호 확인",
                                dependencies: [
                                    'password'
                                ],
                                hasFeedback: true,
                                rules: [
                                    {
                                        required: true,
                                        message: '비밀번호를 입력하세요.'
                                    },
                                    ({ getFieldValue  })=>({
                                            validator (_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            }
                                        })
                                    , 
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input.Password, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                name: "name",
                                label: "이름",
                                tooltip: "최대한 실명을 적어주세요!",
                                rules: [
                                    {
                                        required: true,
                                        message: '이름을 입력해주세요.',
                                        whitespace: true
                                    }, 
                                ],
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                    type: "primary",
                                    htmlType: "submit",
                                    children: "가입하기"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SignUp = (Signup);

;// CONCATENATED MODULE: ./components/Pages/Login/components/index.ts



;// CONCATENATED MODULE: ./components/Pages/Login/Login.tsx



var Login_Page;
(function(Page) {
    Page[Page["SIGN_IN"] = 0] = "SIGN_IN";
    Page[Page["SIGN_UP"] = 1] = "SIGN_UP";
})(Login_Page || (Login_Page = {}));
const Login = ()=>{
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(Login_Page.SIGN_IN);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            height: '100%'
        },
        children: [
            page === Login_Page.SIGN_IN && /*#__PURE__*/ jsx_runtime_.jsx(components_SignIn, {
                setPage
            }),
            page === Login_Page.SIGN_UP && /*#__PURE__*/ jsx_runtime_.jsx(SignUp, {
                setPage
            })
        ]
    }));
};
/* harmony default export */ const Login_Login = (Login);

;// CONCATENATED MODULE: ./components/Pages/Login/index.ts

/* harmony default export */ const Pages_Login = (Login_Login);


/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pages_Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Pages/Main/Main.tsx

const Main = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "메인"
    }));
};
/* harmony default export */ const Main_Main = (Main);

;// CONCATENATED MODULE: ./components/Pages/Main/index.ts

/* harmony default export */ const Pages_Main = (Main_Main);


/***/ }),

/***/ 6960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3879);
/* harmony import */ var recoils_atoms_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4444);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(690);
/* harmony import */ var _components_ChoiceMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1539);
/* harmony import */ var _components_NewCafeteria__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_8__, _components__WEBPACK_IMPORTED_MODULE_6__]);
([_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_8__, _components__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const TodayLunch = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const step = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .stepState */ .lX);
    const userInfo = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(recoils_atoms_user__WEBPACK_IMPORTED_MODULE_5__/* .userInfoState */ .E);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{
        if (!userInfo) {
            // message.warning('로그인이 필요한 서비스입니다.');
            router.push('/login');
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.DASHBOARD */ .T3.DASHBOARD && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Dashboard */ .A, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.HISTORY */ .T3.HISTORY && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .History */ .Ay, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.ORDER */ .T3.ORDER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_6__/* .Order */ .KM, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.NEW_CAFETERIA */ .T3.NEW_CAFETERIA && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.CHOICE_MENU */ .T3.CHOICE_MENU && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChoiceMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodayLunch);

});

/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ChoiceMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/form/Form"
var Form_ = __webpack_require__(5723);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoils/selectors/todaylunch.ts
var todaylunch = __webpack_require__(1193);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/ChoiceMenu/ChioceMenu.tsx







const ChioceMenu = ()=>{
    const cafeteriaMenuList = (0,external_recoil_.useRecoilValue)(todaylunch/* cafeteriaMenuState */.O);
    const [form] = (0,Form_.useForm)();
    // 메뉴추가 기능
    const handleAddMenu = ()=>{};
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
        style: {
            width: '100%'
        },
        options: cafeteriaMenuList,
        optionLabelProp: 'menu_title',
        optionFilterProp: 'menu_title',
        dropdownRender: (menu)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    menu,
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {
                        style: {
                            margin: '8px 0'
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Space, {
                        align: "center",
                        style: {
                            padding: '0 8px 4px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                            form: form,
                            style: {
                                display: 'flex'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        placeholder: "Please enter item"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                        placeholder: "Please enter item"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Typography.Link, {
                                        onClick: handleAddMenu,
                                        style: {
                                            whiteSpace: 'nowrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.PlusOutlined, {}),
                                            " 메뉴추가"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ,
        defaultOpen: true,
        showArrow: true,
        removeIcon: true
    }));
};
/* harmony default export */ const ChoiceMenu_ChioceMenu = (ChioceMenu);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/ChoiceMenu/index.ts

/* harmony default export */ const ChoiceMenu = (ChoiceMenu_ChioceMenu);


/***/ }),

/***/ 352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/button/button-group"
var button_group_ = __webpack_require__(3645);
var button_group_default = /*#__PURE__*/__webpack_require__.n(button_group_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoils/atoms/todaylunch.ts
var todaylunch = __webpack_require__(3879);
// EXTERNAL MODULE: ./utils/apiHelper/index.ts + 3 modules
var apiHelper = __webpack_require__(9844);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/components/OrderList.tsx




const OrderList = ({ orderList  })=>{
    const orderListElements = (0,external_react_.useMemo)(()=>orderList.map((_order)=>{
            const { order_id  } = _order;
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_OrderItem, {
                order: _order
            }, order_id));
        })
    , [
        orderList
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: orderListElements
    }));
};
/* harmony default export */ const components_OrderList = (OrderList);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/components/OrderItem.tsx





const OrderItem = ({ order  })=>{
    const setStep = (0,external_recoil_.useSetRecoilState)(todaylunch/* stepState */.lX);
    const setSelectCafeteria = (0,external_recoil_.useSetRecoilState)(todaylunch/* selectCafeteriaIdState */.Rj);
    const { Cafeteria: { cafeteria_name , cafeteria_id  } , Order_detail ,  } = order;
    const orderListElements = Order_detail.map((orderDetail, index)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: index
        }, index));
    });
    const handleClickMoreview = ()=>{
        setSelectCafeteria(cafeteria_id);
        setStep(todaylunch/* Page.CHOICE_MENU */.T3.CHOICE_MENU);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Card, {
        title: cafeteria_name,
        extra: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
            type: "link",
            onClick: handleClickMoreview,
            children: "참여하기"
        }),
        style: {
            width: 300
        },
        children: orderListElements
    }));
};
/* harmony default export */ const components_OrderItem = (OrderItem);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/components/index.ts



;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/Dashboard.tsx










const Dashboard = (props)=>{
    console.log('props: ', props);
    const setOrderList = (0,external_recoil_.useSetRecoilState)(todaylunch/* orderListState */.cu);
    const { state: orderListStatus , contents: orderListContents  } = (0,external_recoil_.useRecoilValueLoadable)(todaylunch/* orderListState */.cu);
    const setStep = (0,external_recoil_.useSetRecoilState)(todaylunch/* stepState */.lX);
    const orderElements = (0,external_react_.useMemo)(()=>{
        let _elements;
        switch(orderListStatus){
            case 'loading':
                _elements = /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Skeleton, {});
                break;
            case 'hasValue':
                if (orderListContents.length > 0) {
                    _elements = /*#__PURE__*/ jsx_runtime_.jsx(components_OrderList, {
                        orderList: orderListContents
                    });
                } else {
                    _elements = /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Empty, {});
                }
                break;
            case 'hasError':
                _elements = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: '에러'
                });
                break;
        }
        return _elements;
    }, [
        orderListStatus
    ]);
    (0,external_react_.useLayoutEffect)(()=>{
        apiHelper/* default.get */.Z.get('order/getOrderInfo').then((res)=>{
            setOrderList(res);
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((button_group_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.FieldTimeOutlined, {}),
                                children: "히스토리"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                type: "primary",
                                onClick: ()=>setStep(todaylunch/* Page.ORDER */.T3.ORDER)
                                ,
                                children: "주문하기"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "주문 중인 내역"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: orderElements
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "어제 주문한 내역"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: orderElements
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "오래된 내역"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: orderElements
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getServerSideProps(context) {
    return {
        props: {
            temp: 1
        }
    };
}
/* harmony default export */ const Dashboard_Dashboard = (Dashboard);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/index.ts

/* harmony default export */ const components_Dashboard = (Dashboard_Dashboard);


/***/ }),

/***/ 1855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_History)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/History/History.tsx

const History = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "History"
    }));
};
/* harmony default export */ const History_History = (History);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/History/index.ts

/* harmony default export */ const components_History = (History_History);


/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewCafeteria_MenuList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/NewCafeteria/MenuItem.tsx




const MenuItem = ({ menu , handleChangeMenu  })=>{
    const { name , price  } = menu;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                display: 'flex'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        marginBottom: 5
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                        defaultValue: name,
                        onChange: (e)=>handleChangeMenu('name')(e.target.value)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.InputNumber, {
                        defaultValue: price,
                        min: 0,
                        formatter: (val)=>`${val}`
                        ,
                        onChange: (val)=>handleChangeMenu('price')(val)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.DeleteOutlined, {})
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const NewCafeteria_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/NewCafeteria/MenuList.tsx



const MenuList = ({ menuList , handleChangeMenuList  })=>{
    const menuListElements = (0,external_react_.useMemo)(()=>{
        return menuList.map((menu)=>{
            const handleChangeMenu = (type)=>(value)=>{
                    handleChangeMenuList((prev)=>{
                        return prev.map((_menu)=>{
                            if (_menu.id === menu.id) {
                                return {
                                    ...menu,
                                    [type]: value
                                };
                            } else return _menu;
                        });
                    });
                }
            ;
            return(/*#__PURE__*/ jsx_runtime_.jsx(NewCafeteria_MenuItem, {
                menu: menu,
                handleChangeMenu: handleChangeMenu
            }, menu.id));
        });
    }, [
        menuList
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: menuListElements
    }));
};
/* harmony default export */ const NewCafeteria_MenuList = (MenuList);


/***/ }),

/***/ 9454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3879);
/* harmony import */ var utils_apiHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9844);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_6__]);
uuid__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const NewCafeteria = ()=>{
    const setStep = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .stepState */ .lX);
    const { 0: menuList , 1: setMenuList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: cafeName , 1: setCafeName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    /**
   * 메뉴추가 버튼 처리
   */ const handleInsertMenu = ()=>{
        const newMenu = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v1)(),
            name: '',
            price: 0
        };
        setMenuList((prev)=>prev.concat(newMenu)
        );
    };
    /**
   * 가게등록 버튼 처리
   */ const handleInsertCafeteria = ()=>{
        // validation
        if (checkValidation() === false) antd__WEBPACK_IMPORTED_MODULE_1__.message.error('데이터 양식을 확인해주세요.');
        // cafeteria insert API 호출
        const cafeteriaForApi = {
            cafeteria_name: cafeName
        };
        const menuListForApi = menuList.map((menu)=>({
                menu_title: menu.name,
                price: menu.price
            })
        );
        const body = {
            cafeteria: cafeteriaForApi,
            menuList: menuListForApi
        };
        utils_apiHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post('/cafeteria/insertCafeteria', body).then((res)=>{
            antd__WEBPACK_IMPORTED_MODULE_1__.message.success('가게 등록 완료');
            setStep(recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_4__/* .Page.HISTORY */ .T3.HISTORY);
        }).catch((err)=>{
            antd__WEBPACK_IMPORTED_MODULE_1__.message.error(err);
        });
    };
    /**
   * 데이터 타당성 검사
   * @returns
   */ const checkValidation = ()=>{
        let validResult = true;
        if (cafeName === '' || menuList.length === 0) {
            validResult = false;
        }
        if (menuList.some((menu)=>{
            menu.name === '' || menu.price === 0;
        })) {
            validResult = false;
        }
        return validResult;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: '50%',
            minWidth: '300px'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: 'flex',
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        type: 'text',
                        value: cafeName,
                        onChange: (e)=>setCafeName(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        onClick: handleInsertCafeteria,
                        children: "가게등록"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "메뉴항목"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                onClick: handleInsertMenu,
                                children: "메뉴추가"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        menuList,
                        handleChangeMenuList: setMenuList
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewCafeteria);

});

/***/ }),

/***/ 4155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewCafeteria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewCafeteria__WEBPACK_IMPORTED_MODULE_0__]);
_NewCafeteria__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NewCafeteria__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

});

/***/ }),

/***/ 7861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Order)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "antd/lib/button/button-group"
var button_group_ = __webpack_require__(3645);
var button_group_default = /*#__PURE__*/__webpack_require__.n(button_group_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoils/atoms/todaylunch.ts
var todaylunch = __webpack_require__(3879);
// EXTERNAL MODULE: ./recoils/atoms/user.ts
var user = __webpack_require__(4444);
// EXTERNAL MODULE: ./utils/apiHelper/index.ts + 3 modules
var apiHelper = __webpack_require__(9844);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/MenuItem.tsx

const MenuItem = ({ menu  })=>{
    const { menu_title , price  } = menu;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: menu_title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: price
            })
        ]
    }));
};
/* harmony default export */ const components_MenuItem = (MenuItem);

// EXTERNAL MODULE: ./recoils/selectors/todaylunch.ts
var selectors_todaylunch = __webpack_require__(1193);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/MenuList.tsx






const MenuList = ()=>{
    const { state , contents  } = (0,external_recoil_.useRecoilValueLoadable)(selectors_todaylunch/* cafeteriaMenuState */.O);
    const menuListElements = (0,external_react_.useMemo)(()=>{
        let _element;
        switch(state){
            case 'loading':
                _element = /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Skeleton, {});
                break;
            case 'hasValue':
                _element = contents.map((_menu)=>/*#__PURE__*/ jsx_runtime_.jsx(components_MenuItem, {
                        menu: _menu
                    }, _menu.menu_id)
                );
                break;
            case 'hasError':
                break;
        }
        return _element;
    }, [
        state
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: menuListElements
    }));
};
/* harmony default export */ const components_MenuList = (MenuList);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/index.ts



;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/Order.tsx









const getCafeteriaList = ()=>{
    return apiHelper/* default.get */.Z.get('/cafeteria');
};
const Order = ()=>{
    const setStep = (0,external_recoil_.useSetRecoilState)(todaylunch/* stepState */.lX);
    const userInfo = (0,external_recoil_.useRecoilValue)(user/* userInfoState */.E);
    const [selectCafeteriaId, setSelectCafeteriaId] = (0,external_recoil_.useRecoilState)(todaylunch/* selectCafeteriaIdState */.Rj);
    const [cafeteriaList, setCafeteriaList] = (0,external_recoil_.useRecoilState)(todaylunch/* cafeteriaListState */.xf);
    /**
   * 가게 선택 처리
   * @param value
   */ const handleSelectCafeteria = (value)=>{
        setSelectCafeteriaId(value);
    };
    const init = ()=>{
        getCafeteriaList().then((res)=>{
            setCafeteriaList(res);
        });
    };
    /**
   * 주문시작 버튼 클릭
   */ const handleCreateOrder = ()=>{
        const newOrder = {
            cafeteria_id: selectCafeteriaId,
            order_user: userInfo
        };
        apiHelper/* default.post */.Z.post('order', newOrder);
        setStep(todaylunch/* Page.DASHBOARD */.T3.DASHBOARD);
    };
    //#region hooks
    (0,external_react_.useLayoutEffect)(()=>{
        init();
    }, []);
    //#endregion
    //#region render
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "주문하기"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((button_group_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                type: "primary",
                                onClick: handleCreateOrder,
                                children: "주문시작"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                onClick: ()=>setStep(todaylunch/* Page.DASHBOARD */.T3.DASHBOARD)
                                ,
                                children: "취소하기"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                    style: {
                        width: 300
                    },
                    size: "large",
                    showSearch: true,
                    placeholder: "가게 고르세요",
                    fieldNames: {
                        label: 'cafeteria_name',
                        value: 'cafeteria_id'
                    },
                    optionFilterProp: "cafeteria_name",
                    optionLabelProp: "cafeteria_name",
                    // value={cafeteriaList}
                    options: cafeteriaList,
                    onChange: handleSelectCafeteria,
                    filterOption: (input, option)=>//@ts-ignore
                        option['cafeteria_name'].toLowerCase().indexOf(input.toLowerCase()) >= 0
                    ,
                    dropdownRender: (menu)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        menu,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        paddingLeft: '10',
                                        paddingRight: '10'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                        block: true,
                                        type: "primary",
                                        onClick: ()=>setStep(todaylunch/* Page.NEW_CAFETERIA */.T3.NEW_CAFETERIA)
                                        ,
                                        children: "가게 추가"
                                    })
                                })
                            ]
                        })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "메뉴리스트"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuList, {})
                ]
            })
        ]
    }));
//#endregion
};
/* harmony default export */ const Order_Order = (Order);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/index.ts

/* harmony default export */ const components_Order = (Order_Order);


/***/ }),

/***/ 690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _Dashboard__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "KM": () => (/* reexport safe */ _Order__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Ay": () => (/* reexport safe */ _History__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7861);
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1855);
/* harmony import */ var _NewCafeteria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewCafeteria__WEBPACK_IMPORTED_MODULE_3__]);
_NewCafeteria__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





});

/***/ }),

/***/ 6241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodayLunch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TodayLunch__WEBPACK_IMPORTED_MODULE_0__]);
_TodayLunch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TodayLunch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

});

/***/ }),

/***/ 2859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "or": () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "m3": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Kf": () => (/* reexport safe */ _TodayLunch__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7131);
/* harmony import */ var _TodayLunch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6241);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TodayLunch__WEBPACK_IMPORTED_MODULE_2__]);
_TodayLunch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




});

/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ common_HeadWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/common/HeadWrapper.tsx



const HeadWrapper = ()=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
            children: router.pathname
        })
    }));
};
/* harmony default export */ const common_HeadWrapper = (HeadWrapper);

;// CONCATENATED MODULE: ./components/common/index.ts



/***/ }),

/***/ 3879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T3": () => (/* binding */ Page),
/* harmony export */   "lX": () => (/* binding */ stepState),
/* harmony export */   "xf": () => (/* binding */ cafeteriaListState),
/* harmony export */   "Rj": () => (/* binding */ selectCafeteriaIdState),
/* harmony export */   "cu": () => (/* binding */ orderListState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const sampleOrderList = [
    {
        order_id: 'sda',
        order_date: new Date(),
        cafeteria_id_fk: 'sasda',
        order_state: 'COMPLETED',
        user_id_fk: 'sdfa'
    }, 
];
var Page;
(function(Page) {
    Page[Page["ORDER"] = 0] = "ORDER";
    Page[Page["HISTORY"] = 1] = "HISTORY";
    Page[Page["DASHBOARD"] = 2] = "DASHBOARD";
    Page[Page["NEW_CAFETERIA"] = 3] = "NEW_CAFETERIA";
    Page[Page["CHOICE_MENU"] = 4] = "CHOICE_MENU";
})(Page || (Page = {}));
// 현재 페이지 스텝
const stepState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'stepState',
    default: Page.DASHBOARD
});
// 식당 리스트
const cafeteriaListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'cafeteriaListState',
    default: []
});
const selectCafeteriaIdState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'selectCafeteriaState',
    default: undefined
});
// 주문내역
const orderListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'orderListState',
    default: []
});


/***/ }),

/***/ 4444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ userInfoState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const userInfoState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'userInfoState',
    default: undefined
});


/***/ }),

/***/ 1193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ cafeteriaMenuState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3879);
/* harmony import */ var utils_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9844);



const cafeteriaMenuState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'cafeteriaMenuState',
    get: async ({ get  })=>{
        const cafeteriaId = get(recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_1__/* .selectCafeteriaIdState */ .Rj);
        console.log('cafeteriaId: ', cafeteriaId);
        let menus = [];
        if (cafeteriaId) {
            menus = await utils_apiHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get('/cafeteriaMenu', {
                id: cafeteriaId
            });
        }
        return menus;
    }
});


/***/ }),

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ apiHelper)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./utils/apiHelper/type.ts
const APIRequestHeaderContentTypes = {
    form: 'application/x-www-form-urlencodeds',
    json: 'application/json',
    multipart: 'multipart/form-data'
};

;// CONCATENATED MODULE: ./utils/apiHelper/utils.ts
/**
 * 파라미터를 직렬화하는 함수
 * @param params
 * @returns {string}
 */ const paramSerialize = (params)=>{
    const KeyArray = Object.keys(params);
    const reuslt = KeyArray.map((item)=>{
        return `${item}=${params[item]}`;
    });
    return reuslt.join('&');
};
/**
 * 현재 시간의 timestamp 값을 가져옴
 * @returns {number}
 */ const getTimeStamp = ()=>Math.floor(new Date().getTime() / 1000)
;

;// CONCATENATED MODULE: ./utils/apiHelper/commonAxios.ts
/**
 * API 모듈
 */ 


const devBaseUrl = 'http://localhost:3000/api';
const prodBaseUrl = 'http://playground.jsim.kr/api';
const baseURL =  true ? prodBaseUrl : 0;
const commonAxiosInstance = external_axios_default().create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': APIRequestHeaderContentTypes.form
    }
});
/**
 *
 */ commonAxiosInstance.interceptors.request.use((config)=>{
    const { url  } = config;
    config.headers = {
        ...config.headers
    };
    return config;
});
commonAxiosInstance.interceptors.response.use((response)=>{
    return new Promise((resolve, reject)=>{
        const { status , data  } = response;
        if (status === 200) {
            resolve(data);
        } else {
            reject(data);
        }
    });
});
/**
 * Common API Helper
 * ----------------------
 * get, post, put, patch, delete 메소드 제공 객체
 */ const commonAxios = {
    get: (url, params = {}, option = {})=>{
        return commonAxiosInstance.get(url, {
            ...option,
            params,
            paramsSerializer: paramSerialize
        });
    },
    post: (url, body = {}, option = {})=>{
        return commonAxiosInstance.post(url, body, option);
    },
    put: (url, body = {}, option = {})=>{
        return commonAxiosInstance.put(url, body, option);
    },
    patch: (url, body = {}, option = {})=>{
        return commonAxiosInstance.patch(url, body, option);
    },
    delete: (url, params = {}, option = {})=>{
        return commonAxiosInstance.delete(url, {
            ...option,
            params,
            paramsSerializer: paramSerialize
        });
    }
};
/* harmony default export */ const apiHelper_commonAxios = (commonAxios);

;// CONCATENATED MODULE: ./utils/apiHelper/index.ts

/* harmony default export */ const apiHelper = (apiHelper_commonAxios);


/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iM": () => (/* binding */ createHashedPassword),
/* harmony export */   "jL": () => (/* binding */ makeHashedPassword)
/* harmony export */ });
/* unused harmony export createSalt */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const createSalt = ()=>{
    return new Promise((resolve, reject)=>{
        crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(64, (err, buf)=>{
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
};
const createHashedPassword = (plainPassword)=>{
    return new Promise(async (resolve, reject)=>{
        const salt = await createSalt();
        crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
            if (err) reject(err);
            resolve({
                hashedPassword: key.toString('base64'),
                salt
            });
        });
    });
};
const makeHashedPassword = (plainPassword, salt)=>new Promise(async (resolve, reject)=>{
        // salt를 가져오는 부분은 각자의 DB에 따라 수정
        crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    })
;


/***/ })

};
;