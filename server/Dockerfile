FROM node:latest

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package.json /usr/src/server/

COPY yarn.lock /usr/src/server/

RUN yarn

COPY . /usr/src/server

RUN yarn build

EXPOSE 4100

CMD /wait && yarn start
