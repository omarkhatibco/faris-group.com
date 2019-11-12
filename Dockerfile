FROM mhart/alpine-node

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm build

EXPOSE 3000

CMD [ "yarn", "start" ]
