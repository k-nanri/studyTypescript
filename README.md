# study Typescript

## やった

[https://www.tohoho-web.com/ex/typescript.html]

## 今やっている

[https://maku.blog/p/gqo9yoo/]

## 次にやる

[https://future-architect.github.io/typescript-guide/index.html]

# express を使って API サーバを作る

- get メソッド
- UnitTest
- post メソッド
- postgresql 連携
- delete メソッド
- update メソッド
- openapi

## 参考

[https://qiita.com/wakusan-6126/items/c7963ba2359f60474e99]
[https://qiita.com/isihigameKoudai/items/4b790b5b2256dec27d1f]
[https://babeljs.io/setup#installation]

## やったこと

### eslint の設定

### prettierrc の設定

### webpack

#### webpack のインストール

webpack と関連するパッケージをインストール

| Name                   | 用途                                      |
| :--------------------- | :---------------------------------------- |
| webpack                | webpack 本体                              |
| webpack-cli            | cli ツール                                |
| webpack-node-externals | node-modules をサーバサイドで bundle する |
| babel                  | ES6+ を ES5 にトランスパイルする          |

```shell
npm install --save-dev webpack webpack-cli webpack-node-externals webpack-merge
```

#### webpack のコンフィグファイルを作成

### bable

#### babel とは

次世代の JavaScript の標準機能をブラウザのサポートを待たずに使えるようにする Node.js 製のツール。  
次世代の標準機能を使って書かれたコードをそれらの機能をサポートしないブラウザでも動くコードに変換する。  
(新しい書き方から古い書き方に変換するツール)

#### babel のインストール

#### インストール

```shellscript
npm install --save-dev babel-loader @babel/core
```

##### コンフィグファイルの作成

babel.config.json を作成

```json
{
  "presets": ["@babel/preset-env"]
}
```

### メモ

- nodemon というのがあるらしい

node サーバを手動ではなくファイルに変更を加えた自転でプロセスを再起動し変更分含めて反映してくれる。

```shell
npm install --save-dev nodemon
```

nodemon.json

```json
{
  "restartable": "rs",
  "env": {
    "NODE_ENV": "development"
  },
  "watch": ["src"],
  "ignore": ["tests/**/*.ts"],
  "exec": "ts-node ./src/index.ts"
}
```
