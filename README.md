# Express + TypeScript スターター

## 使い方

本リポジトリをクローン又はダウンロードし、yarn install を実行してお使いください。
※npm install の場合、エラーが出る可能性があります

## 構成

```
expres-ts-start
├─ __tests__               // UT用ディレクトリ
|  ├─ client
|  └─ server
├─ .vscode
|  └─ setting.json         // Visual Studio Code設定ファイル
├─ public                  // 開発環境で出力されるディレクトリ
├─ node_modules            // パッケージ群
├─ src
|  ├─ client               //
|  |  ├─ scripts           //
|  |  └─ scss              //
|  └─ server               //
|     ├─ config            //
|     ├─ logs              //
|     ├─ migrations        //
|     ├─ models            //
|     ├─ routes            //
|     ├─ views             //
|     ├─ utils             //
|     └─ app.ts            // エントリーポイント
|
├─ .eslintrc               // eslint設定ファイル
├─ .gitignore              // git対象外設定ファイル
├─ .stylelintrc            // stylelint設定ファイル
├─ package.json            // npm設定ファイル
├─ tsconfig.json           // TypeScript設定ファイル
├─ webpack.config.js       // Webpack設定ファイル（デプロイ用）
└─ yarn.lock               // Webpack設定ファイル（デプロイ用）
```

## インストールパッケージ

dependencies

| パッケージ名 | バージョン | 概要 |
| :----------- | :--------- | :--- |
| ejs          | 2.6.1      |      |
| express      | 4.16.4     |      |
| jquery       | 3.4.1      |      |
| mysql2       | 1.6.5      |      |
| sequelize    | 5.7.6      |      |

devDependencies

| パッケージ名                     | バージョン   | 概要                                                 |
| :------------------------------- | :----------- | :--------------------------------------------------- |
| @types/express                   | 4.16.1       | 型定義                                               |
| @types/jest                      | 24.0.11      | 〃                                                   |
| @types/jquery                    | 3.3.29       | 〃                                                   |
| @types/node                      | 11.13.7      | 〃                                                   |
| @types/sequelize                 | 4.27.48      | 〃                                                   |
| @typescript-eslint/eslint-plugin | 1.7.0        | ESLint x TypeScript 用                               |
| @typescript-eslint/parser        | 1.7.0        | 〃                                                   |
| autoprefixer                     | 9.5.1        | autoprefix 用                                        |
| css-loader                       | 2.1.1        | JS で CSS を取り込む用                               |
| eslint                           | 5.16.0       | ESLint(静的チェッカー)                               |
| eslint-config-airbnb-base        | 13.1.0       |                                                      |
| eslint-config-prettier           | 4.1.0        |                                                      |
| eslint-plugin-import             | 2.17.2       |                                                      |
| eslint-plugin-prettier           | 3.0.1        |                                                      |
| extract-text-webpack-plugin      | 4.0.0-beta.0 | css ファイル出力用                                   |
| husky                            | 1.3.1        | git hook で Pre-commit 時に ESLint + Prettier 設定用 |
| jest                             | 24.7.1       | UT 用ライブラリ                                      |
| lint-staged                      | 8.1.5        | git hook で Pre-commit 時に ESLint + Prettier 設定用 |
| node-sass                        | 4.11.0       | scss ビルド用                                        |
| postcss-loader                   | 3.0.0        | autoprefix 用                                        |
| prettier                         | 1.17.0       | prettier(コード自動フォーマッター)                   |
| prettier-eslint                  | 8.8.2        |                                                      |
| prettier-eslint-cli              | 4.7.1        |                                                      |
| prettier-stylelint               | 0.4.2        |                                                      |
| sass-loader                      | 7.1.0        | scss x TypeScript 用                                 |
| sequelize-cli                    | 5.4.0        |                                                      |
| stylelint                        | 10.0.1       | StyleLint(静的チェッカー)                            |
| stylelint-config-standard        | 18.3.0       |                                                      |
| stylelint-prettier               | 1.0.6        |                                                      |
| stylelint-scss                   | 3.6.1        |                                                      |
| ts-jest                          | 24.0.2       | Jest x TypeScript 用                                 |
| ts-loader                        | 5.4.3        | webpack x TypeScript 用                              |
| ts-node                          | 8.1.0        | Node.js x TypeScript 用                              |
| ts-node-dev                      | 1.0.0-pre.32 | 〃（開発用）                                         |
| typescript                       | 3.4.4        | TypeScript(AltJS)                                    |
| webpack                          | 4.30.0       | webpack(bundle)                                      |
| webpack-cli                      | 3.3.1        | 〃                                                   |
| webpack-dev-middleware           | 3.6.2        | webpack 開発用サーバ                                 |
| webpack-dev-server               | 3.3.1        | 〃                                                   |
| webpack-hot-middleware           | 2.24.3"      | 〃                                                   |

※dependencies と devDependencies の違い

- dependencies：ソースコードと一緒にバンドル(出力)されるもの(例：jQuery、React、Bootstrap)
- devDependencies：ソースコードをバンドル(出力)する際に必要なもの（例：gulp、webpack、babel）

## npm スクリプト

| スクリプト | 実行コマンド | 概要 |
| :--------- | :----------- | :--- |
|            |              |      |
