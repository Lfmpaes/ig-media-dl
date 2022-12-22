FROM node:lts-alpine3.16 AS node-builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn prisma db pull && yarn prisma generate
RUN yarn build

FROM node:lts-alpine3.16

COPY --from=node-builder /app/node_modules ./node_modules
COPY --from=node-builder /app/package*.json ./
COPY --from=node-builder /app/.env ./
COPY --from=node-builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod"]