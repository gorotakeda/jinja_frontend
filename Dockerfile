# ベースイメージをslimからfullに変更
FROM node:20.16.0-alpine

# メモリ制限の緩和
ENV NODE_OPTIONS="--max-old-space-size=2048"

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ビルド
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]