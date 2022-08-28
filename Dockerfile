FROM node:latest

COPY . /build
WORKDIR /build

RUN ls -lart
RUN yarn install

CMD [ "yarn", "start" ]
