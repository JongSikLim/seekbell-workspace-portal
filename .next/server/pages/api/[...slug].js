"use strict";
(() => {
var exports = {};
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 6046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// NAMESPACE OBJECT: ./backend/controller/index.ts
var controller_namespaceObject = {};
__webpack_require__.r(controller_namespaceObject);
__webpack_require__.d(controller_namespaceObject, {
  "cafeteriaController": () => (cafeteria),
  "cafeteriaMenuController": () => (controller_cafeteriaMenu),
  "categoryController": () => (controller_category),
  "orderController": () => (controller_order),
  "orderDetailController": () => (controller_orderDetail),
  "userController": () => (controller_user)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./backend/services/category.ts

const prisma = new client_namespaceObject.PrismaClient();
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
/* harmony default export */ const services_category = (category);

;// CONCATENATED MODULE: ./backend/services/cafeteria.ts

const cafeteria_prisma = new client_namespaceObject.PrismaClient();
const cafeteria_GET = ()=>{
    return cafeteria_prisma.cafeteria.findMany();
};
const cafeteria_POST = (item)=>{
    console.log('item: ', item);
    console.log(typeof item);
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
/* harmony default export */ const services_cafeteria = (cafeteria_category);

;// CONCATENATED MODULE: ./backend/services/cafeteriaMenu.ts

const cafeteriaMenu_prisma = new client_namespaceObject.PrismaClient();
const cafeteriaMenu_GET = ({ id  })=>{
    let data;
    if (id) {
        data = cafeteriaMenu_prisma.cafeteria_menu.findMany({
            where: {
                cafeteria_id_fk: id
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
const cafeteriaMenu_DELETE = (menu_id)=>{
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
/* harmony default export */ const cafeteriaMenu = (cafeteriaMenu_category);

;// CONCATENATED MODULE: ./backend/services/order.ts

const order_prisma = new client_namespaceObject.PrismaClient();
const getOrderInfo = async ()=>{
    const orderList = await order_prisma.order.findMany({
        select: {
            order_id: true,
            order_state: true,
            order_date: true,
            Cafeteria: {
                select: {
                    cafeteria_id: true,
                    cafeteria_name: true
                }
            },
            order_user: {
                select: {
                    user_id: true,
                    name: true
                }
            },
            Order_detail: {
                select: {
                    order_detail_id: true,
                    User: {
                        select: {
                            name: true
                        }
                    },
                    menu_id: {
                        select: {
                            menu_title: true,
                            price: true
                        }
                    }
                }
            }
        }
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
                Cafeteria: {
                    connect: {
                        cafeteria_id: item.cafeteria_id
                    }
                },
                order_user: {
                    connect: {
                        user_id: item.order_user.user_id
                    }
                }
            },
            include: {
                Cafeteria: true,
                order_user: true
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
const order_DELETE = (order_id)=>{
    return order_prisma.order.delete({
        where: {
            order_id
        }
    });
};
const order_category = {
    getOrderInfo,
    GET: order_GET,
    POST: order_POST,
    PATCH: order_PATCH,
    DELETE: order_DELETE
};
/* harmony default export */ const order = (order_category);

;// CONCATENATED MODULE: ./backend/services/orderDetail.ts

const orderDetail_prisma = new client_namespaceObject.PrismaClient();
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
                menu_id: {
                    connect: {
                        menu_id
                    }
                },
                order_id: {
                    connect: {
                        order_id
                    }
                },
                User: {
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
/* harmony default export */ const orderDetail = (orderDetail_category);

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// CONCATENATED MODULE: ./utils/passwordUtils.ts

const createSalt = ()=>{
    return new Promise((resolve, reject)=>{
        Crypto.randomBytes(64, (err, buf)=>{
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
};
const createHashedPassword = (plainPassword)=>{
    return new Promise(async (resolve, reject)=>{
        const salt = await createSalt();
        Crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
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
        external_crypto_default().pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key)=>{
            if (err) reject(err);
            resolve(key.toString('base64'));
        });
    })
;

;// CONCATENATED MODULE: ./backend/services/user.ts


const user_prisma = new client_namespaceObject.PrismaClient();
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
                makeHashedPassword(password, salt).then((hashedPassword)=>{
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
/* harmony default export */ const user = (user_category);

;// CONCATENATED MODULE: ./backend/services/index.ts







;// CONCATENATED MODULE: ./backend/controller/cafeteria.ts

const categoryController = {
    GET: async ()=>{
        return await services_cafeteria.GET();
    },
    POST: async (item)=>{
        return await services_cafeteria.POST(item);
    },
    PATCH: async (item)=>{
        return await services_cafeteria.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services_cafeteria.DELETE(id);
    },
    insertCafeteria: async ({ cafeteria , menuList  })=>{
        return await services_cafeteria.insertCafeteria(cafeteria, menuList);
    }
};
/* harmony default export */ const cafeteria = (categoryController);

;// CONCATENATED MODULE: ./backend/controller/cafeteriaMenu.ts

const cafeteriaMenu_categoryController = {
    GET: async (param)=>{
        return await cafeteriaMenu.GET(param);
    },
    POST: async (item)=>{
        return await cafeteriaMenu.POST(item);
    },
    PATCH: async (item)=>{
        return await cafeteriaMenu.PATCH(item);
    },
    DELETE: async (id)=>{
        return await cafeteriaMenu.DELETE(id);
    }
};
/* harmony default export */ const controller_cafeteriaMenu = (cafeteriaMenu_categoryController);

;// CONCATENATED MODULE: ./backend/controller/category.ts

const category_categoryController = {
    GET: async ()=>{
        return await services_category.GET();
    },
    POST: async (item)=>{
        return await services_category.POST(item);
    },
    PATCH: async (item)=>{
        return await services_category.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services_category.DELETE(id);
    }
};
/* harmony default export */ const controller_category = (category_categoryController);

;// CONCATENATED MODULE: ./backend/controller/order.ts

const order_categoryController = {
    GET: async ()=>{
        return await order.GET();
    },
    POST: async (item)=>{
        return await order.POST(item);
    },
    PATCH: async (item)=>{
        return await order.PATCH(item);
    },
    DELETE: async (id)=>{
        return await order.DELETE(id);
    },
    getOrderInfo: async (data)=>{
        return await order.getOrderInfo();
    }
};
/* harmony default export */ const controller_order = (order_categoryController);

;// CONCATENATED MODULE: ./backend/controller/orderDetail.ts

const orderDetail_categoryController = {
    GET: async ()=>{
        return await orderDetail.GET();
    },
    POST: async (item)=>{
        return await orderDetail.POST(item);
    },
    PATCH: async (item)=>{
        return await orderDetail.PATCH(item);
    },
    DELETE: async (id)=>{
        return await orderDetail.DELETE(id);
    }
};
/* harmony default export */ const controller_orderDetail = (orderDetail_categoryController);

;// CONCATENATED MODULE: ./backend/controller/user.ts

const user_categoryController = {
    GET: async ()=>{
        return await user.GET();
    },
    POST: async (item)=>{
        return await user.POST(item);
    },
    PATCH: async (item)=>{
        return await user.PATCH(item);
    },
    DELETE: async (id)=>{
        return await user.DELETE(id);
    },
    login: async (body)=>{
        return await user.login(body);
    }
};
/* harmony default export */ const controller_user = (user_categoryController);

;// CONCATENATED MODULE: ./backend/controller/index.ts







;// CONCATENATED MODULE: ./pages/api/[...slug].ts

async function handler(req, res) {
    const { method , body ={} , query  } = req;
    const { slug  } = query;
    const cList = {
        ...controller_namespaceObject
    };
    try {
        const service = slug[0];
        const router = slug[1] === undefined ? method : slug[1];
        const targetController = cList[`${service}Controller`];
        let result;
        // url로, (쿼리) 파라미터 받아야하는 놈들
        if ([
            'GET',
            'DELETE'
        ].includes(method)) {
            result = await targetController[router](query);
        } else {
            const data = JSON.parse(body);
            result = await targetController[router](data);
        }
        res.status(200).json(result);
    } catch (error) {
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
var __webpack_exports__ = (__webpack_exec__(6046));
module.exports = __webpack_exports__;

})();