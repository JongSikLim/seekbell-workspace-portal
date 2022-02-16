"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 6788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FK": () => (/* reexport */ cafeteria),
  "R": () => (/* reexport */ cafeteriaMenu),
  "Dx": () => (/* reexport */ order),
  "Z5": () => (/* reexport */ orderDetail),
  "zN": () => (/* reexport */ user)
});

// UNUSED EXPORTS: categoryController

// EXTERNAL MODULE: ./backend/services/index.ts + 7 modules
var services = __webpack_require__(5164);
;// CONCATENATED MODULE: ./backend/controller/cafeteria.ts

const categoryController = {
    GET: async ()=>{
        return await services/* cafeteriaService.GET */.Yq.GET();
    },
    POST: async (item)=>{
        return await services/* cafeteriaService.POST */.Yq.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* cafeteriaService.PATCH */.Yq.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* cafeteriaService.DELETE */.Yq.DELETE(id);
    },
    insertCafeteria: async ({ cafeteria , menuList  })=>{
        return await services/* cafeteriaService.insertCafeteria */.Yq.insertCafeteria(cafeteria, menuList);
    }
};
/* harmony default export */ const cafeteria = (categoryController);

;// CONCATENATED MODULE: ./backend/controller/cafeteriaMenu.ts

const cafeteriaMenu_categoryController = {
    GET: async (id)=>{
        return await services/* cafeteriaMenuService.GET */.mL.GET(id);
    },
    POST: async (item)=>{
        return await services/* cafeteriaMenuService.POST */.mL.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* cafeteriaMenuService.PATCH */.mL.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* cafeteriaMenuService.DELETE */.mL.DELETE(id);
    }
};
/* harmony default export */ const cafeteriaMenu = (cafeteriaMenu_categoryController);

;// CONCATENATED MODULE: ./backend/controller/category.ts

const category_categoryController = {
    GET: async ()=>{
        return await services/* categoryService.GET */.GN.GET();
    },
    POST: async (item)=>{
        return await services/* categoryService.POST */.GN.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* categoryService.PATCH */.GN.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* categoryService.DELETE */.GN.DELETE(id);
    }
};
/* harmony default export */ const category = ((/* unused pure expression or super */ null && (category_categoryController)));

;// CONCATENATED MODULE: ./backend/controller/order.ts

const order_categoryController = {
    GET: async ()=>{
        return await services/* orderService.GET */.XK.GET();
    },
    POST: async (item)=>{
        return await services/* orderService.POST */.XK.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* orderService.PATCH */.XK.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* orderService.DELETE */.XK.DELETE(id);
    }
};
/* harmony default export */ const order = (order_categoryController);

;// CONCATENATED MODULE: ./backend/controller/orderDetail.ts

const orderDetail_categoryController = {
    GET: async ()=>{
        return await services/* orderDetailService.GET */.Jd.GET();
    },
    POST: async (item)=>{
        return await services/* orderDetailService.POST */.Jd.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* orderDetailService.PATCH */.Jd.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* orderDetailService.DELETE */.Jd.DELETE(id);
    }
};
/* harmony default export */ const orderDetail = (orderDetail_categoryController);

;// CONCATENATED MODULE: ./backend/controller/user.ts

const user_categoryController = {
    GET: async ()=>{
        return await services/* userService.GET */.W4.GET();
    },
    POST: async (item)=>{
        return await services/* userService.POST */.W4.POST(item);
    },
    PATCH: async (item)=>{
        return await services/* userService.PATCH */.W4.PATCH(item);
    },
    DELETE: async (id)=>{
        return await services/* userService.DELETE */.W4.DELETE(id);
    },
    login: async (body)=>{
        return await services/* userService.login */.W4.login(body);
    }
};
/* harmony default export */ const user = (user_categoryController);

;// CONCATENATED MODULE: ./backend/controller/index.ts








/***/ })

};
;