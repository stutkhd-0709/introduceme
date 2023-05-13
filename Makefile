up:
	docker-compose up

base-bash:
	docker-compose exec base bash

base-debug-bash:
	docker-compose run --rm base bash