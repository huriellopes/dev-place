FROM node:lts-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

CMD ["yarn", "dev:server"]
