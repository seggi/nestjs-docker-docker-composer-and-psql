# Build stage 1.
# The instructions for the development stage
FROM node:12.19.0-alpine3.9 AS builder

RUN apk --no-cache add python make g++

WORKDIR  /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN yarn install
COPY . .
RUN yarn build

# The instructions for second stage
FROM node:12.19.0-alpine3.9

ENV NODE_ENV=production
RUN yarn install --production=true

USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/ /usr/src/app/
COPY --chown=node:node . /usr/src/app

EXPOSE 9000

CMD [ "sh", "entrypoint.bash" ]

