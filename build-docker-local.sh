docker image rm --force blog:test

docker build \
    --no-cache \
    --progress=plain \
    --build-arg SITE_URL=http://localhost:80 \
    --build-arg USERNAME=user_name \
    --tag blog:test .