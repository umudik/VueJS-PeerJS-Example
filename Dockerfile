FROM node:12.18.3-buster

COPY package*.json ./
RUN npm install babel-loader
RUN npm install
RUN npm update

EXPOSE 8081
RUN npm run serve