/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": [
        "plugin:react/jsx-runtime"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/no-unknown-property": ["error", { ignore: ["cost"] }],
    }
}
