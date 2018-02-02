module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "script"
  },
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "func-names": [
      "error",
      "as-needed"
    ],
    "no-shadow": "error",
    "no-extra-semi": 0
  }
}
