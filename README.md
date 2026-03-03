# Pokemonzukan（ポケモン図鑑）

PokeAPI から取得したポケモン情報を、カード形式で一覧表示できる図鑑アプリです。  
一覧取得 → 各ポケモンの詳細取得まで行い、ページ送り（前へ/次へ）で閲覧できます。

- デモURL：未デプロイ（TODO：公開URLを追記）

---

## 主な機能

- ポケモン一覧の取得（PokeAPI）
- 各ポケモンの詳細データ取得（一覧取得後に個別URLから取得）
- カード表示（`Card` コンポーネント）
- ページネーション（「前へ」「次へ」ボタン）
- ローディング表示（データ取得中は「ロード中・・・」）

---

## 使用API

- PokeAPI：`https://pokeapi.co/api/v2/pokemon`

> 補足：`src/utils/pokemon.js` に翻訳API（LibreTranslate）を呼び出す処理もあります（現在の画面では未使用の場合あり）。

---

## 使用技術

- React 19
- JavaScript
- Create React App（react-scripts 5）
- CSS
- Testing Library（Jest / React Testing Library）

---

## セットアップ & 起動方法

```bash
npm install
npm start
