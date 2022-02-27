"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 9394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "XK": () => (/* reexport */ order)
});

// UNUSED EXPORTS: cafeteriaMenuService, cafeteriaService, categoryService, orderDetailService, userService

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
;// CONCATENATED MODULE: ./backend/services/category.ts

const prisma = new client_.PrismaClient();
const GET = ()=>{
    return prisma.category.findMany();
};
const POST = (item)=>{
    return prisma.category.create({
        data: item
    });
};
const PATCH = (item)=>{
    const { category_id  } = item;
    return prisma.category.update({
        where: {
            category_id: category_id
        },
        data: item
    });
};
const DELETE = (id)=>{
    return prisma.category.delete({
        where: {
            category_id: id
        }
    });
};
const category = {
    GET,
    POST,
    PATCH,
    DELETE
};
/* harmony default export */ const services_category = ((/* unused pure expression or super */ null && (category)));

;// CONCATENATED MODULE: ./backend/services/cafeteria.ts

const cafeteria_prisma = new client_.PrismaClient();
const cafeteria_GET = ()=>{
    return cafeteria_prisma.cafeteria.findMany();
};
const cafeteria_POST = (item)=>{
    return cafeteria_prisma.cafeteria.create({
        data: item
    });
};
const cafeteria_PATCH = (item)=>{
    const { cafeteria_id  } = item;
    return cafeteria_prisma.cafeteria.update({
        where: {
            cafeteria_id: cafeteria_id
        },
        data: item
    });
};
const cafeteria_DELETE = (id)=>{
    return cafeteria_prisma.cafeteria.delete({
        where: {
            cafeteria_id: id
        }
    });
};
/**
 *
 */ const insertCafeteria = (cafeteria, menuList)=>{
    return cafeteria_prisma.cafeteria.create({
        data: {
            ...cafeteria,
            menus: {
                create: menuList
            }
        }
    });
};
const cafeteria_category = {
    GET: cafeteria_GET,
    POST: cafeteria_POST,
    PATCH: cafeteria_PATCH,
    DELETE: cafeteria_DELETE,
    insertCafeteria
};
/* harmony default export */ const cafeteria = ((/* unused pure expression or super */ null && (cafeteria_category)));

;// CONCATENATED MODULE: ./backend/services/cafeteriaMenu.ts

const cafeteriaMenu_prisma = new client_.PrismaClient();
const cafeteriaMenu_GET = ({ id  })=>{
    let data;
    if (id) {
        data = cafeteriaMenu_prisma.cafeteria_menu.findMany({
            where: {
                cafeteria_id: id
            }
        });
    } else {
        data = cafeteriaMenu_prisma.cafeteria_menu.findMany();
    }
    return data;
};
const cafeteriaMenu_POST = (item)=>{
    return cafeteriaMenu_prisma.cafeteria_menu.create({
        data: item
    });
};
const cafeteriaMenu_PATCH = (item)=>{
    const { menu_id  } = item;
    return cafeteriaMenu_prisma.cafeteria_menu.update({
        where: {
            menu_id: menu_id
        },
        data: item
    });
};
const cafeteriaMenu_DELETE = ({ menu_id  })=>{
    return cafeteriaMenu_prisma.cafeteria_menu.delete({
        where: {
            menu_id
        }
    });
};
const cafeteriaMenu_category = {
    GET: cafeteriaMenu_GET,
    POST: cafeteriaMenu_POST,
    PATCH: cafeteriaMenu_PATCH,
    DELETE: cafeteriaMenu_DELETE
};
/* harmony default export */ const cafeteriaMenu = ((/* unused pure expression or super */ null && (cafeteriaMenu_category)));

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./backend/services/order.ts


const order_prisma = new client_.PrismaClient();
const selectOption = {
    order_id: true,
    order_state: true,
    order_date: true,
    cafeteria: {
        select: {
            cafeteria_id: true,
            cafeteria_name: true
        }
    },
    user: {
        select: {
            user_id: true,
            name: true
        }
    },
    orderDetails: {
        select: {
            order_detail_id: true,
            user: {
                select: {
                    name: true
                }
            },
            menu: {
                select: {
                    menu_title: true,
                    price: true
                }
            }
        }
    }
};
const timeTrigger = async ()=>{
    const date = external_moment_default()().toDate();
    const result = await order_prisma.order.updateMany({
        data: {
            order_state: 'COMPLETED'
        },
        where: {
            AND: [
                {
                    order_state: 'PENDING'
                },
                {
                    order_date: {
                        lte: date
                    }
                }, 
            ]
        }
    });
    return result;
};
const getOrderInfo = async ()=>{
    const orderList = await order_prisma.order.findMany({
        select: selectOption,
        orderBy: {
            order_state: 'asc'
        }
    });
    return orderList;
};
const yesterdayOrderInfo = async ()=>{
    const yesterdayStart = external_moment_default()().subtract(1, 'days').startOf('day').toDate();
    const yesterdayEnd = external_moment_default()().subtract(1, 'days').endOf('day').toDate();
    const orderList = await order_prisma.order.findMany({
        select: selectOption,
        where: {
            order_date: {
                gte: yesterdayStart,
                lte: yesterdayEnd
            }
        },
        orderBy: [
            {
                order_state: 'asc'
            },
            {
                created_at: 'desc'
            }, 
        ]
    });
    return orderList;
};
const todayOrderInfo = async ()=>{
    const todayStart = external_moment_default()().startOf('day').toDate();
    const todayEnd = external_moment_default()().endOf('day').toDate();
    const orderList = await order_prisma.order.findMany({
        select: selectOption,
        where: {
            order_date: {
                gte: todayStart,
                lte: todayEnd
            }
        },
        orderBy: [
            {
                order_state: 'asc'
            },
            {
                created_at: 'desc'
            }, 
        ]
    });
    return orderList;
};
const order_GET = ()=>{
    return order_prisma.order.findMany();
};
const order_POST = (item)=>{
    try {
        return order_prisma.order.create({
            data: {
                order_date: item.order_date,
                cafeteria: {
                    connect: {
                        cafeteria_id: item.cafeteria_id
                    }
                },
                user: {
                    connect: {
                        user_id: item.order_user.user_id
                    }
                }
            },
            include: {
                cafeteria: true,
                user: true
            }
        });
    } catch (error) {
        console.log('error: ', error);
    }
};
const order_PATCH = (item)=>{
    const { order_id  } = item;
    return order_prisma.order.update({
        where: {
            order_id: order_id
        },
        data: item
    });
};
const order_DELETE = (param)=>{
    const { order_id  } = param;
    return order_prisma.order.delete({
        where: {
            order_id
        }
    });
};
const order_category = {
    timeTrigger,
    yesterdayOrderInfo,
    todayOrderInfo,
    getOrderInfo,
    GET: order_GET,
    POST: order_POST,
    PATCH: order_PATCH,
    DELETE: order_DELETE
};
/* harmony default export */ const order = (order_category);

;// CONCATENATED MODULE: ./backend/services/orderDetail.ts

const orderDetail_prisma = new client_.PrismaClient();
const orderDetail_GET = ()=>{
    return orderDetail_prisma.order_detail.findMany();
};
/**
 * 주문 추가
 * @param item
 * @returns
 */ const orderDetail_POST = (item)=>{
    const { menu_id , order_id , menu_count , user_id  } = item;
    try {
        return orderDetail_prisma.order_detail.create({
            data: {
                menu_count,
                menu: {
                    connect: {
                        menu_id
                    }
                },
                order: {
                    connect: {
                        order_id
                    }
                },
                user: {
                    connect: {
                        user_id
                    }
                }
            }
        });
    } catch (error) {
        console.log('error: ', error);
    }
};
const orderDetail_PATCH = (item)=>{
    const { order_detail_id  } = item;
    return orderDetail_prisma.order_detail.update({
        where: {
            order_detail_id: order_detail_id
        },
        data: item
    });
};
const orderDetail_DELETE = (order_detail_id)=>{
    return orderDetail_prisma.order_detail.delete({
        where: {
            order_detail_id
        }
    });
};
const orderDetail_category = {
    GET: orderDetail_GET,
    POST: orderDetail_POST,
    PATCH: orderDetail_PATCH,
    DELETE: orderDetail_DELETE
};
/* harmony default export */ const orderDetail = ((/* unused pure expression or super */ null && (orderDetail_category)));

// EXTERNAL MODULE: ./utils/passwordUtils.ts
var passwordUtils = __webpack_require__(9610);
;// CONCATENATED MODULE: ./backend/services/user.ts


const user_prisma = new client_.PrismaClient();
const user_GET = ()=>{
    return user_prisma.user.findMany();
};
const user_POST = (item)=>{
    return user_prisma.user.create({
        data: item
    });
};
const user_PATCH = (item)=>{
    const { user_id  } = item;
    return user_prisma.user.update({
        where: {
            user_id: user_id
        },
        data: item
    });
};
const user_DELETE = (id)=>{
    return user_prisma.user.delete({
        where: {
            user_id: id
        }
    });
};
/**
 * 로그인 처리
 */ const login = ({ id , password  })=>{
    const targetUser = user_prisma.user.findUnique({
        where: {
            email: id
        },
        select: {
            salt: true,
            password: true
        }
    });
    return new Promise((resolve, reject)=>{
        targetUser.then((res1)=>{
            if (res1) {
                const { salt , password: _password  } = res1;
                (0,passwordUtils/* makeHashedPassword */.jL)(password, salt).then((hashedPassword)=>{
                    if (hashedPassword === _password) {
                        user_prisma.user.findUnique({
                            where: {
                                email: id
                            }
                        }).then((res)=>{
                            resolve(res);
                        });
                    } else {
                        reject();
                    }
                });
            } else {
                reject();
            }
        });
    });
};
const user_category = {
    GET: user_GET,
    POST: user_POST,
    PATCH: user_PATCH,
    DELETE: user_DELETE,
    login
};
/* harmony default export */ const user = ((/* unused pure expression or super */ null && (user_category)));

;// CONCATENATED MODULE: ./backend/services/index.ts








/***/ }),

/***/ 9527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2859);
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8102);
/* harmony import */ var backend_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Pages__WEBPACK_IMPORTED_MODULE_1__]);
components_Pages__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const TodayLunch = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common__WEBPACK_IMPORTED_MODULE_2__/* .HeadWrapper */ .TO, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Pages__WEBPACK_IMPORTED_MODULE_1__/* .TodayLunch */ .Kf, {})
        ]
    }));
};
async function getServerSideProps(context) {
    const orderInfoList = await backend_services__WEBPACK_IMPORTED_MODULE_3__/* .orderService.getOrderInfo */ .XK.getOrderInfo();
    return {
        props: {
            orderInfoList
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodayLunch);

});

/***/ })

};
;