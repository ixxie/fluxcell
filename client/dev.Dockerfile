# build environment

FROM node:10-alpine as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g yarn
RUN yarn install

COPY --chown=node:node . .

# development environment

EXPOSE 80
CMD ["yarn", "start"]

