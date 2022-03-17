"use strict";
exports.id = 844;
exports.ids = [844];
exports.modules = {

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
// const baseURL = process.env.NODE_ENV === 'production' ? prodBaseUrl : devBaseUrl;
const baseURL = devBaseUrl;
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