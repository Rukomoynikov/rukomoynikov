<template>
<div>services:
  web:
    image: rukomoynikov/rails:2.7.1
    volumes:
      - ./:/app
      - rails_cache:/app/tmp/cache
      - bundle:/usr/local/bundle
    ports:
      - 3000:3000
    tmpfs:
      - /tmp
      - /app/tmp/pids
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    command: bundle exec rails server -b 0.0.0.0
  client:
    image: rukomoynikov/rails:2.7.1
    command: yarn run build -w
    ports:
      - '3035:3035'
    volumes:
      - ./:/app:cached
      - bundle:/usr/local/bundle
      - node_modules:/app/node_modules
      - packs:/app/public/packs
    environment:
      WEBPACKER_DEV_SERVER_HOST: 0.0.0.0
  postgres:
    image: postgres:13
    volumes:
      - postgres:/var/lib/postgresql/data
    environment:
      PSQL_HISTFILE: /root/log/.psql_history
      POSTGRES_PASSWORD: postgres
    ports:
      - 5432
    healthcheck:
      test: pg_isready -U postgres -h 127.0.0.1
      interval: 5s
  redis:
    image: redis:3.2-alpine
    volumes:
      - redis:/data
    ports:
      - 6379
    healthcheck:
      test: redis-cli ping
      interval: 1s
      timeout: 3s
      retries: 30

volumes:
  postgres:
  redis:
  bundle:
  rails_cache:
  node_modules:
  packs:
</div>
</template>
