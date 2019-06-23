FROM node:latest

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY package.json /usr/src/client/

COPY yarn.lock /usr/src/client/

RUN yarn

COPY . /usr/src/client

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "serve" ]
