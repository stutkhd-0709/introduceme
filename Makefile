build:
	docker-compose build

up:
	make build && docker-compose up

run-root-bash:
	docker run --rm -it --name root-todo -w /app -v ${PWD}:/app node:18 bash