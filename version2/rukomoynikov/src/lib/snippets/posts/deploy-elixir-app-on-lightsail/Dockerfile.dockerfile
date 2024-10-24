# ----------------- # BASE # -----------------
FROM elixir:alpine AS base
WORKDIR /app
RUN mix do local.hex --force, local.rebar --force
RUN apk add npm inotify-tools

# ----------------- # BUILD #-----------------
FROM base AS build
RUN apk add curl bash git
ARG MIX_ENV=prod
ENV MIX_ENV=$MIX_ENV
COPY ../../../../routes/posts/deploy-elixir-app-on-lightsail/snippets ./

# install application
RUN mix do deps.get, compile

# ----------------- # RELEASE #-----------------
FROM build AS release
ARG MIX_ENV=prod

# digests and compresses static files RUN mix assets.deploy # generate release executable
RUN mix phx.gen.release RUN mix release

# ----------------- #PRODUCTION # -----------------
FROM elixir:alpine
WORKDIR /app
ARG MIX_ENV=prod

# install dependencies
RUN apk add ncurses-libs curl
COPY --from=release /app/_build/prod/rel/github_dashboard ./

# start application
CMD ["bin/server", "start"]
