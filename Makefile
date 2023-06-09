build:
	docker-compose build

up:
	make build && docker-compose up -d

down:
	docker-compose down

stop-client:
	docker-compose stop client

stop-server:
	docker-compose stop server

log-client:
	docker-compose logs -f client

log-server:
	docker-compose logs -f server

run-root-bash:
	docker run --rm -it --name root-intro -w /app -v ${PWD}:/app node:18 bash

install-all-packages:
	docker run --rm -it --name root-intro -w /app -v ${PWD}:/app node:18 bash -c 'npm install'

run-test-server:
	docker-compose run --rm --entrypoint='npm run test' server