# Express + TypeScript スターター

## 使い方

本リポジトリを取得し、npm install して使用してください  
npm-scripts に関しては本資料最下部に記載しています

※DB を扱う場合は config/db.ts の設定を変えてください

## 動作環境

```
node v8.11.3
npm v5.6.0
```

## 構成

```
expres-ts-start
├─ __tests__               // UT用ディレクトリ
|  ├─ client               // フロント側
|  └─ server               // サーバー側
├─ .vscode
|  └─ setting.json         // Visual Studio Code設定ファイル
├─ public                  // 開発環境で出力されるディレクトリ
├─ node_modules            // パッケージ群
├─ src
|  ├─ client               // フロント側ファイル
|  |  ├─ scripts           // TypeScriptファイル
|  |  └─ scss              // Scssファイル
|  |
|  ├─ server               // サーバー側ファイル
|  |  ├─ config            // 設定
|  |  ├─ logs              // ログ
|  |  ├─ migrations        // マイグレーション用
|  |  ├─ models            // モデル
|  |  ├─ routes            // ルーティング
|  |  ├─ views             // EJSテンプレート
|  |  ├─ utils             // 汎用処理
|  |  └─ app.ts            // サーバー起動ファイル
|  |
|  └─ types                // 型定義ファイル
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

| パッケージ名 | バージョン | 概要                 |
| :----------- | :--------- | :------------------- |
| ejs          | 2.6.1      | テンプレートエンジン |
| express      | 4.16.4     | Express              |
| helmet       | 3.18.0     | CSR                  |
| jquery       | 3.4.1      | jQuery               |
| mysql2       | 1.6.5      | DB アダプター        |
| sequelize    | 5.8.6      | OR マッパー          |
| supertest    | 4.0.2      | テスト用             |

devDependencies

| パッケージ名                     | バージョン   | 概要                                                 |
| :------------------------------- | :----------- | :--------------------------------------------------- |
| @types/express                   | 4.16.1       | 型定義                                               |
| @types/helmet                    | 0.0.43       | 〃                                                   |
| @types/jest                      | 24.0.11      | 〃                                                   |
| @types/jquery                    | 3.3.29       | 〃                                                   |
| @types/node                      | 12.0.0       | 〃                                                   |
| @types/sequelize                 | 4.27.48      | 〃                                                   |
| @types/supertest                 | 2.0.7        | 〃                                                   |
| @typescript-eslint/eslint-plugin | 1.9.0        | ESLint x TypeScript 用                               |
| @typescript-eslint/parser        | 1.9.0        | 〃                                                   |
| autoprefixer                     | 9.5.1        | autoprefix 用                                        |
| cpx                              | 1.5.0        | ファイルコピー用                                     |
| css-loader                       | 2.1.1        | JS で CSS を取り込む用                               |
| eslint                           | 5.16.0       | ESLint(静的チェッカー)                               |
| eslint-config-airbnb-base        | 13.1.0       | 〃                                                   |
| eslint-config-prettier           | 4.1.0        | 〃                                                   |
| eslint-plugin-import             | 2.17.2       | 〃                                                   |
| eslint-plugin-prettier           | 3.1.0        | 〃                                                   |
| extract-text-webpack-plugin      | 4.0.0-beta.0 | css ファイル出力用                                   |
| husky                            | 2.2.1        | git hook で Pre-commit 時に ESLint + Prettier 設定用 |
| jest                             | 24.7.1       | UT 用ライブラリ                                      |
| lint-staged                      | 8.1.5        | git hook で Pre-commit 時に ESLint + Prettier 設定用 |
| node-sass                        | 4.11.0       | scss ビルド用                                        |
| postcss-loader                   | 3.0.0        | autoprefix 用                                        |
| prettier                         | 1.17.0       | prettier(コード自動フォーマッター)                   |
| prettier-eslint                  | 8.8.2        | 〃                                                   |
| prettier-eslint-cli              | 4.7.1        | 〃                                                   |
| prettier-stylelint               | 0.4.2        | 〃                                                   |
| rimraf                           | 2.6.3        | ファイル削除用                                       |
| sass-loader                      | 7.1.0        | scss x TypeScript 用                                 |
| sequelize-cli                    | 5.4.0        | sequelize                                            |
| stylelint                        | 10.0.1       | StyleLint(静的チェッカー)                            |
| stylelint-config-standard        | 18.3.0       | 〃                                                   |
| stylelint-prettier               | 1.1.0        | 〃                                                   |
| stylelint-scss                   | 3.6.1        | 〃                                                   |
| ts-jest                          | 24.0.2       | Jest x TypeScript 用                                 |
| ts-loader                        | 6.0.0        | webpack x TypeScript 用                              |
| ts-node                          | 8.1.0        | Node.js x TypeScript 用                              |
| ts-node-dev                      | 1.0.0-pre.39 | 〃（開発用）                                         |
| typescript                       | 3.4.4        | TypeScript(AltJS)                                    |
| webpack                          | 4.31.0       | webpack(bundle)                                      |
| webpack-cli                      | 3.3.1        | 〃                                                   |
| webpack-dev-middleware           | 3.6.2        | webpack 開発用サーバ                                 |
| webpack-dev-server               | 3.3.1        | 〃                                                   |
| webpack-hot-middleware           | 2.24.3"      | 〃                                                   |

※dependencies と devDependencies の違い

- dependencies：ソースコードと一緒にバンドル(出力)されるもの(例：jQuery、React、Bootstrap)
- devDependencies：ソースコードをバンドル(出力)する際に必要なもの（例：gulp、webpack、babel）

## npm スクリプト

| スクリプト   | 実行コマンド                                                                                       | 概要                  |
| :----------- | :------------------------------------------------------------------------------------------------- | :-------------------- |
| dev          | ts-node-dev src/server/app.ts                                                                      | 開発モードで起動      |
| serve        | node build/server/app.js                                                                           | ビルド後の環境で起動  |
| start        | npm run serve                                                                                      | 〃                    |
| build        | npm run build:server && npm run build:client                                                       | ビルド                |
| build:server | tsc && cpx src/server/views/\*.ejs build/server/views && rimraf build/client && rimraf build/types | 〃（サーバー側のみ）  |
| build:client | webpack --config webpack.config.js                                                                 | 〃（フロント側のみ）  |
| lint         | npm run lint:ts && npm run lint:scss                                                               | コードチェック        |
| lint:ts      | eslint src/\*_/_.ts                                                                                | 〃（TypeScript のみ） |
| lint:scss    | stylelint src/\*_/_.scss                                                                           | 〃（Scss のみ）       |
| fmt          | npm run fmt:ts && npm run fmt:scss                                                                 | コードフォーマット    |
| fmt:ts       | prettier-eslint --write src/\*_/_.ts                                                               | 〃（TypeScript のみ） |
| fmt:scss     | prettier-stylelint --write src/\*_/_.scss                                                          | 〃（Scss のみ）       |
| precommit    | lint-staged                                                                                        | Git コミット時用      |
| test         | jest                                                                                               | テスト実行            |
