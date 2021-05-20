import axios from 'axios';
import { httpErrorStatus, httpStatus } from '@/common/constants';
import core from '@/lib/core';

const { VUE_APP_API_BASE_URL } = process.env;

export default class BaseHttpClient {
  constructor() {
    this.axiosHttpClient = axios.create({
      baseURL: VUE_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  init() {
    this.response = {};
    this.success = null;
    this.statusCode = null;
  }

  //this is the constructor for the data error listener
  onErrorDataListener() {} 
  onErrorListener() {}
  onSuccessListener() {}
  onDataListener() {}
  onLoadListener() {}

  get httpClient() {
    this.init();
    return this.axiosHttpClient;
  }

  get params() {
    return this.queryParams;
  }

  setError(error) {
    this.success = false;
    if (core.isset(() => error.response)) {
      this.setResponse(error.response);
    } else {
      this.onErrorListener(error.message);
      this.onErrorDataListener(error);
    }
  }

  setResponse(httpResponse, resultMessage) {
    if (core.isset(() => httpResponse.data)) {
      this.response = httpResponse.data;
      this.statusCode = httpResponse.status;
      this.message = resultMessage || this.response.message || httpResponse.statusText;
      this.success = this.statusCode === httpStatus.OK || this.statusCode === httpStatus.PARTIAL_CONTENT;

      if (httpErrorStatus.includes(this.statusCode)) {
        this.onErrorListener(this.message);
        this.onErrorDataListener(this.response);
      }

      if (this.success) {
        if (resultMessage) this.onSuccessListener(this.message);

        if (core.isset(() => this.response.data.data)) {
          this.onDataListener(this.response.data.data, {
            totalPages: this.response.data.lastPage,
            dataResponse: this.response.data,
          });
        } else {
          this.onLoadListener(this.response.data);
        }
      }
    }
  }

  onError(listener) {
    this.onErrorListener = listener;
  }

  onErrorData(listener) {
    this.onErrorDataListener = listener;
  }

  onSuccess(listener) {
    this.onSuccessListener = listener;
  }

  onData(listener) {
    this.onDataListener = listener;
  }

  onLoad(listener) {
    this.onLoadListener = listener;
  }
}
