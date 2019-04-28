# build environment

FROM node:10.8.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /client

RUN usermod -d /client/ node
RUN chown node:node /client/
RUN npm config set prefix '/client/.npm-global'

COPY package*.json ./

USER node

ENV NPM_CONFIG_PREFIX=/client/.npm-global
RUN npm install -g yarn
RUN yarn install

COPY --chown=node:node . .

# development environment

EXPOSE 3000
CMD ["yarn", "start"]

