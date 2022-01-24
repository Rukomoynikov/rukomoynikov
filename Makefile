deploy:
  docker-compose run --rm client npm run deploy

.PHONY: test release-major release-minor release-patch
