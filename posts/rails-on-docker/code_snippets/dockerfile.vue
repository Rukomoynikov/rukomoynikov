<template>
<div>...
FROM debian:bullseye

WORKDIR /app

ARG ruby_version=2.7.1
ARG PG_MAJOR=13
ARG NODE_MAJOR=14

# Installing general packages
RUN apt update \
  && apt upgrade -y \
  && apt install libpq-dev postgresql-client-$PG_MAJOR gnupg2 git wget curl vim build-essential libssl-dev zlib1g-dev libyaml-dev libffi-dev -y

# Installing rbenv and ruby
RUN apt install rbenv -y \
  && echo 'eval "$(rbenv init -)"' >> ~/.bashrc \
  && rbenv install $ruby_version \
    && rbenv global $ruby_version \
  && eval "$(rbenv init -)" \
  && gem install rails

#Installing node and yarn
RUN curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash - \
  && apt install nodejs \
  && npm i -g yarn

ENV PATH /root/.rbenv/versions/$ruby_version/bin/:/root/.rbenv/shims:$PATH

RUN gem install rails
</div>
</template>

