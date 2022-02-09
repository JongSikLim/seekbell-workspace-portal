/**
 * 파라미터를 직렬화하는 함수
 * @param params
 * @returns {string}
 */
export const paramSerialize = (params: any) => {
  const KeyArray = Object.keys(params);

  const reuslt = KeyArray.map((item) => {
    return `${item}=${params[item]}`;
  });

  return reuslt.join('&');
};

/**
 * 현재 시간의 timestamp 값을 가져옴
 * @returns {number}
 */
export const getTimeStamp = () => Math.floor(new Date().getTime() / 1000);
