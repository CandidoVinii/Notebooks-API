FROM node:16

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3001

CMD npm start