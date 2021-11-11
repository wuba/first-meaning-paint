module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:react/recommended",
        // "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "parserOptions": {
        "ecmaVersion": 7,
        // 开启实验属性
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            // 修饰器
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "import"
    ],
    "rules": {}
};