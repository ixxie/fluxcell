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

RUN yarn build

# production environment

FROM nginx:1.13.9-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /home/node/app/build /var/www
COPY ./src/img/logo.png /var/www

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

