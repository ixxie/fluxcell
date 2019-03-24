
# build environment
FROM node:9.10.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
# RUN npm cache clean --force
RUN npm install -g yarn
RUN npm install env-cmd -g
RUN yarn install
COPY . /usr/src/app
RUN yarn build

# production environment
FROM nginx:1.13.9-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /var/www
COPY ./src/img/logo.png /var/www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
