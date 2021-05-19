// import { default as i18n } from '@/lang/index';

export const strings = {
  LOGIN_ROUTER_PATH: '/login',
  HOME_ROUTER_PATH: '/',
  OK: 'ok',
};

export const uiRoutes = {
  LOGIN_PATH: '/login',
  HOME_PATH: '/',
};

export const httpResources = {
  LOGIN: '/login',
  HOGWARTS_LIST: '/characters',
};

export const httpStatusString = {
  OK: 'Ok',
  BAD_REQUEST: 'Bad Request',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Not Found',
  TIMEOUT: 'Timeout',
  CONFLICT: 'Conflict',
  ERROR: 'Server Error',
};

export const httpStatus = {
  OK: 200,
  PARTIAL_CONTENT: 206,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 408,
  CONFLICT: 409,
  EXPECTATION_FAILED: 417,
  SERVER_ERROR: 500,
  INVALID_OPERATION: 422,
};

export const httpErrorStatus = [
  httpStatus.BAD_REQUEST,
  httpStatus.FORBIDDEN,
  httpStatus.NOT_FOUND,
  httpStatus.TIMEOUT,
  httpStatus.CONFLICT,
  httpStatus.SERVER_ERROR,
  httpStatus.EXPECTATION_FAILED,
  httpStatus.INVALID_OPERATION,
];

export const toastedTime = {
  TIME_SHORT: 5000,
  TIME_MEDIUM: 7000,
  TIME_LONG: 10000,
};

// export const transferDicStatus = {
//   CREATE: i18n.t('lang.global-created'),
//   FINISH: i18n.t('lang.global-finalized'),
//   CANCEL: i18n.t('lang.global-cancelled'),
// };
