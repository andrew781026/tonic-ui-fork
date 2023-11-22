class TonicConfigError extends Error {

  constructor({type, key, value}={}) {
    super(`Config format error , [type=${type}] ~ ${key}=${JSON.stringify(value, null, 2)}`);
  }
}

module.exports = {TonicConfigError};
