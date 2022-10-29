# 📣cheers
## 開発環境
```bash
$ yarn install
```
## パッケージ関連
### contract
```bash
// 追加
$ yarn contract add {PACKAGE_NAME}
// 削除
$ yarn contract remove {PACKAGE_NAME}
// 更新
$ yarn contract update {PACKAGE_NAME}
```
### client
```bash
// 追加
$ yarn client add {PACKAGE_NAME}
// 削除
$ yarn client remove {PACKAGE_NAME}
// 更新
$ yarn client update {PACKAGE_NAME}
```
## スクリト
top directoryでの実行パターン
### contract
#### hardhat compile
hardhat.config.ts に設定しているclient側にコンパイルされると同時にtypechainにより型生成
```bash
$ yarn contract compile
```
#### hardhat test

Contract テスト実行

```bash
// テスト実行のみ
$ yarn contract test
```

Contract test & coverage出力
```bash
$ yarn contract coverage
```
結果出力は2形式
- JSON `packages/contract/coverage.json`
- HTML `coverages/contract/coverage/*`

### client
#### dev
開発モードで実行 localhost:8080
```bash
$ yarn client dev
```
