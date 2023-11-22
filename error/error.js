"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TonicConfigError = void 0;
class TonicConfigError extends Error {
    constructor({ type, key, value } = {}) {
        super(`Config format error , [type=${type}] ~ ${key}=${JSON.stringify(value, null, 2)}`);
    }
}
exports.TonicConfigError = TonicConfigError;
