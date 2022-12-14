module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: [
          "function-declaration",
          "arrow-function",
          "function-expression",
        ],
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ],
    "comma-dangle": 2,
    // "trailing-comma": [
    //   true,
    //   {
    //     singleline: "never",
    //     multiline: {
    //       objects: "never", // <==================
    //       arrays: "never",
    //       functions: "never",
    //       typeLiterals: "ignore",
    //     },
    //   },
    // ],
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "import/extensions": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "import/prefer-default-export": 0,
    "max-len": [2, 250],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-underscore-dangle": [
      "error",
      { allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"] },
    ],
    "object-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
  },
};
