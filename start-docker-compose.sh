docker-compose --file docker-compose.dev.yml --env-file .env.local down
docker-compose --file docker-compose.dev.yml --env-file .env.local up -d
docker-compose --file docker-compose.dev.yml --env-file .env.local logs -f