FROM node:latest

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package.json /usr/src/server/

COPY yarn.lock /usr/src/server/

RUN yarn

COPY . /usr/src/server

RUN yarn build

EXPOSE 4100

CMD [ "yarn", "start" ]
