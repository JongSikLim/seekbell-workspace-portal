import { AxiosRequestHeaders } from 'axios';

/**
 * 위하고에서 사용하는 공통헤더
 */
export type wehagoHeader = {
  Authorization: string;
  timestamp: string;
  service: string;
  'transaction-id': string;
  'client-id': string;
  'portal-id': string;
  'wehago-sign': string;
  cno: string;
};

export type RequestParams = {
  url: string;
  params?: { [key in string]: string };
  options?: { [key in string]: string };
};

export type RequestParamsWithBody = {
  url: string;
  body: any;
  params: { [key in string]: string };
  options: { [key in string]: string };
};

// SECTION method type

export type GetRequest = (
  url: string,
  params?: { [key in string]: string },
  options?: { [key in string]: string }
) => Promise<any>;

export type PostRequest = (
  url: string,
  body?: any,
  options?: AxiosRequestHeaders
) => Promise<any>;

export type PutRequest = (
  url: string,
  body?: any,
  options?: AxiosRequestHeaders
) => Promise<any>;

export type PatchRequest = (
  url: string,
  body?: any,
  options?: AxiosRequestHeaders
) => Promise<any>;

export type DeleteRequest = (
  url: string,
  params?: { [key in string]: string },
  options?: AxiosRequestHeaders
) => Promise<any>;
//!SECTION

/**
 * Axios API를 호출할 수 있도록 하는 Helper 객체의 타입
 */
export type AxiosHelper = {
  get: GetRequest;
  post: PostRequest;
  put: PutRequest;
  patch: PatchRequest;
  delete: DeleteRequest;
};

export const APIRequestHeaderContentTypes: {
  form: string;
  json: string;
  multipart: string;
} = {
  form: 'application/x-www-form-urlencodeds',
  json: 'application/json',
  multipart: 'multipart/form-data',
};
