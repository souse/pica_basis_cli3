import axios from 'axios';
import qs from 'qs';

import config, { codeMessage } from './config.js';

export default function request(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function(data, headers) {}]
    });

    instance.interceptors.request.use(
      config => {
        // 0. Do something before request is sent
        // 1. can be add loading
        // 2. make sure if need token
        const method = config.method.toLocaleLowerCase();

        if (method === 'post' || method === 'put' || method === 'delete') {
          config.data = qs.stringify(config.data);
        }

        return config;
      },
      error => {
        // when set loading close it
        if (
          error.code === 'ECONNABORTED' &&
          error.message.indexOf('timeout') !== -1
        ) {
          // do something when request timeout
        }
        console.error('interceptors.request error', error);
        // error message tips here
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      response => {
        // for ie9 reponse.data undefined
        let data =
          response.data == undefined
            ? response.request.responseText
            : response.data;

        // for error code
        // throw error
        return data;
      },
      error => {
        const { status } = error.response;

        if (error && error.reponse) {
          error.message = codeMessage[status];
        } else {
          error.message = '连接到服务器失败';
        }

        console.error('[interceptors.response error]', error);

        return Promise.reject(error);
      }
    );

    instance(options)
      .then(res => {
        resolve(res);
        // return false;
      })
      .catch(error => {
        reject(error);
      });
  });
}
