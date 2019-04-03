FROM node:10.13-alpine

WORKDIR /dir
COPY . .

RUN apk add bash git
RUN npm install pm2 -g
RUN npm i

EXPOSE 50050