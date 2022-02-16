"use strict";
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 9204:
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
;// CONCATENATED MODULE: ./components/Pages/Login/components/SignIn.tsx





var Page;
(function(Page) {
    Page[Page["SIGN_IN"] = 0] = "SIGN_IN";
    Page[Page["SIGN_UP"] = 1] = "SIGN_UP";
})(Page || (Page = {}));
const SignIn = ({ setPage  })=>{
    const onFinish = (values)=>{
        const { id , password  } = values;
        apiHelper/* default.post */.Z.post(`user/login`, {
            id,
            password
        }).then((res)=>{
            console.log('res: ', res);
        }).catch((err)=>{
            external_antd_.message.error('계정정보가 틀렸습니다.');
        });
    };
    const onFinishFailed = (errorInfo)=>{
        console.log('Failed:', errorInfo);
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

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./utils/passwordUtils.ts

const createSalt = ()=>{
    return new Promise((resolve, reject)=>{
        external_crypto_default().randomBytes(64, (err, buf)=>{
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
};
const createHashedPassword = (plainPassword)=>{
    return new Promise(async (resolve, reject)=>{
        const salt = await createSalt();
        external_crypto_default().pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
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
        Crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    })
;

;// CONCATENATED MODULE: ./components/Pages/Login/components/SignUp.tsx






const Signup = ({ setPage  })=>{
    const [form] = external_antd_.Form.useForm();
    const handleFinish = (value)=>{
        const { id , password , name  } = value;
        //@ts-ignore
        createHashedPassword(password).then(({ hashedPassword , salt  })=>{
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(690);
/* harmony import */ var _components_NewCafeteria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_5__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const TodayLunch = ()=>{
    const step = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__/* .stepState */ .lX);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__/* .Page.DASHBOARD */ .T3.DASHBOARD && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Dashboard */ .A, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__/* .Page.HISTORY */ .T3.HISTORY && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .History */ .Ay, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__/* .Page.ORDER */ .T3.ORDER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Order */ .KM, {}),
            step === recoils_atoms_todaylunch__WEBPACK_IMPORTED_MODULE_3__/* .Page.NEW_CAFETERIA */ .T3.NEW_CAFETERIA && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewCafeteria__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodayLunch);

});

/***/ }),

/***/ 2647:
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
;// CONCATENATED MODULE: ./recoils/atoms/main.ts

const MenuListState = (0,external_recoil_.atom)({
    key: 'MenuListState',
    default: false
});
const orderListState = (0,external_recoil_.atom)({
    key: 'orderListState',
    // default: commonAxios.get(`/order`),
    default: null
});

// EXTERNAL MODULE: ./recoils/atoms/todaylunch.ts
var todaylunch = __webpack_require__(3879);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Dashboard/Dashboard.tsx








const Dashboard = ()=>{
    const { state: orderListStatus , contents: orderListContents  } = (0,external_recoil_.useRecoilValueLoadable)(orderListState);
    const setStep = (0,external_recoil_.useSetRecoilState)(todaylunch/* stepState */.lX);
    const orderElements = (0,external_react_.useMemo)(()=>{
        switch(orderListStatus){
            case 'loading':
                return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: '로딩중'
                }));
            case 'hasValue':
                console.log('orderListContents: ', orderListContents);
                return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: orderListContents
                }));
            case 'hasError':
                return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: '에러'
                }));
        }
    }, [
        orderListStatus
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "주문 내역"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((button_group_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.FieldTimeOutlined, {}),
                                children: "히스토리"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                onClick: ()=>setStep(todaylunch/* Page.ORDER */.T3.ORDER)
                                ,
                                children: "주문하기"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: orderElements
            })
        ]
    }));
};
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
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./recoils/atoms/todaylunch.ts
var todaylunch = __webpack_require__(3879);
;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/MenuItem.tsx

const MenuItem = ()=>{
    return(/*#__PURE__*/ _jsx("div", {
        children: "MenuItem"
    }));
};
/* harmony default export */ const components_MenuItem = ((/* unused pure expression or super */ null && (MenuItem)));

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/MenuList.tsx

const MenuList = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "MenuList"
    }));
};
/* harmony default export */ const components_MenuList = (MenuList);

;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/components/index.ts



;// CONCATENATED MODULE: ./components/Pages/TodayLunch/components/Order/Order.tsx






const Order = ()=>{
    const cafeteriaList = (0,external_recoil_.useRecoilValue)(todaylunch/* cafeteriaListState */.xf);
    const setStep = (0,external_recoil_.useSetRecoilState)(todaylunch/* stepState */.lX);
    const setSelectCafeteria = (0,external_recoil_.useSetRecoilState)(todaylunch/* selectCafeteriaState */.LC);
    /**
   * 가게 선택 처리
   * @param value
   */ const handleSelectCafeteria = (_, option)=>{
        setSelectCafeteria(option);
    };
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
                                onClick: ()=>setStep(todaylunch/* Page.HISTORY */.T3.HISTORY)
                                ,
                                children: "주문시작"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                onClick: ()=>setStep(todaylunch/* Page.HISTORY */.T3.HISTORY)
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
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2647);
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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9204);
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
/* harmony export */   "LC": () => (/* binding */ selectCafeteriaState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

var Page;
(function(Page) {
    Page[Page["ORDER"] = 0] = "ORDER";
    Page[Page["HISTORY"] = 1] = "HISTORY";
    Page[Page["DASHBOARD"] = 2] = "DASHBOARD";
    Page[Page["NEW_CAFETERIA"] = 3] = "NEW_CAFETERIA";
})(Page || (Page = {}));
// 현재 페이지 스텝
const stepState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'stepState',
    default: Page.DASHBOARD
});
// 식당 리스트
const cafeteriaListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'cafeteriaListState',
    // default: commonAxios.get('/cafeteria'),
    default: []
});
const selectCafeteriaState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'selectCafeteriaState',
    default: null
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


/***/ })

};
;