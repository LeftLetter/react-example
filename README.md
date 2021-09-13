# react-example
俺的コンポーネント設計にテストコード付きのCRUDアプリサンプル。

## 開発
VS Code Remote Containersで起動可能。

## 本番
準備中



## create-react-appの初期設定手順

### ui

```
$ PROJECT_NAME=<project-name>
$ create-react-app $PROJECT_NAME --template typescript
$ rm -rf $PROJECT_NAME/node_modules
$ mv $PROJECT_NAME/* .
$ rm -rf $PROJECT_NAME
$ yarn
```

```
$ yarn add -D eslint prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
$ touch .prettierrc
$ touch .eslintrc.json
```

`.prettierrc`は以下とする
```
{
  "singleQuote": true,
  "semi": false
}

```

`.eslintrc.json`は以下とする
```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": { "react/prop-types": "off", "react/react-in-jsx-scope": "off" }
}

```


`package.json`の以下を削除
```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

### server

```
$ express . --no-view
$ npm i
```
