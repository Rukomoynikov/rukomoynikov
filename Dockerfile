FROM node:lts-alpine
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
RUN apk add --upgrade --no-cache vips-dev build-base git
WORKDIR /app
COPY package* .
RUN npm install
