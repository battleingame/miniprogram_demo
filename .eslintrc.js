module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "globals": {
    "DEV": true,
    "WECHAT": true,
    "ALIPAY": true,
    "App": true,
    "Page": true,
    "Component": true,
    "Behavior": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true,
  },
  "rules": {
    "indent": ["error",2],
    "quotes": ["error","single"],
    "no-console":["off",{"allow":["log","warn","error","info"]}],
    "no-cond-assign": 2,
    "no-mixed-spaces-and-tabs":["error","smart-tabs"],
    "no-ex-assign": 2,
    "curly": [2, "all"],
    "no-label-var": 2,
    "max-nested-callbacks": [2, 5],
    "max-statements-per-line": 0,
    "no-duplicate-imports": 2,
    "arrow-body-style": 2,
    "no-var": 1,
    "prefer-arrow-callback": 0,
  }
};