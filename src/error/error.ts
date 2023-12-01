interface TonicConfigErrorMessage {
  type?: string,
  key?: string,
  value?: any
}

export class TonicConfigError extends Error {

  constructor({type, key, value}: TonicConfigErrorMessage = {}) {
    super(`Config format error , [type=${type}] ~ ${key}=${JSON.stringify(value, null, 2)}`);
  }
}
