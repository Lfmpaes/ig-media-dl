FROM arm64v8/node:lts AS builder

WORKDIR /app

ADD VERSION .

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn prisma db pull && yarn prisma generate
RUN yarn build

FROM arm64v8/node:lts

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod"]