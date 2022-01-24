---
title: Some scripts
slug: some-scripts
tags: [bash, powershell]
authors: [sneakykoder]
---
# Some scripts
> Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.

## Docker

### Clean up docker
```sh
docker rm $(docker ps -a -q -f="status=exited")
docker rm $(docker ps -a -q -f="status=dead")
docker rmi $(docker images -a -q -f="dangling=true")
docker volume rm $(docker volume ls -q)
docker network rm $(docker network ls -q)

docker ps -a
docker images -a
docker volume ls
docker network ls
```
> [Download bash](https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.sh)
> |
> [Download powershell](https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.ps1)

