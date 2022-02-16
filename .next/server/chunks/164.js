"use strict";
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 5164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mL": () => (/* reexport */ cafeteriaMenu),
  "Yq": () => (/* reexport */ cafeteria),
  "GN": () => (/* reexport */ services_category),
  "Jd": () => (/* reexport */ orderDetail),
  "XK": () => (/* reexport */ order),
  "W4": () => (/* reexport */ user)
});

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
/* harmony default export */ const services_category = (category);

;// CONCATENATED MODULE: ./backend/services/cafeteria.ts

const cafeteria_prisma = new client_.PrismaClient();
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
/* harmony default export */ const cafeteria = (cafeteria_category);

;// CONCATENATED MODULE: ./backend/services/cafeteriaMenu.ts

const cafeteriaMenu_prisma = new client_.PrismaClient();
const cafeteriaMenu_GET = (id)=>{
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

const order_prisma = new client_.PrismaClient();
const order_GET = ()=>{
    return order_prisma.order.findMany();
};
const order_POST = (item)=>{
    return order_prisma.order.create({
        data: item
    });
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
const orderDetail_POST = (item)=>{
    return orderDetail_prisma.order_detail.create({
        data: item
    });
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

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
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
                makeHashedPassword(password, salt).then((hashedPassword)=>{
                    console.log('hashedPassword: ', hashedPassword);
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








/***/ })

};
;