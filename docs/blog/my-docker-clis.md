---
title: My docker CLI's
description: A collection of custom docker images as CLI's
---
# My docker CLI’s

I had the need to run different technologies in my local dev environment, such as .net-core, node js, python, ruby, etc. without install them.

So I took the decision to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process.

## python:3
### Docker image:
> [https://hub.docker.com/r/sneakykoder/python-cli](https://hub.docker.com/r/sneakykoder/python-cli){:target="_blank"}.
### Github repository: 
> [https://github.com/sneakykoder/python-cli](https://github.com/sneakykoder/python-cli){:target="_blank"}
### How to use it:
```bash
docker run --rm -it -v ${PWD}:/app sneakykoder/python:3
```

## dotnet core with entity framework
### Docker image:
> [https://hub.docker.com/r/sneakykoder/dotnet-cli/tags](https://hub.docker.com/r/sneakykoder/dotnet-cli/tags){:target="_blank"}
### Repository:
> [](){:target="_blank"}
> [PENDING]
### How to use it
```bash
docker run —rm -it -v ${PWD}:/app sneakykoder/dotnet-cli
```

## dotnet core with entity framework and node-js
### Docker image:
> [https://hub.docker.com/r/sneakykoder/dotnet-node-cli](https://hub.docker.com/r/sneakykoder/dotnet-node-cli){:target="_blank"}
### Github repository:
> [https://github.com/sneakykoder/dotnet-node-cli](https://github.com/sneakykoder/dotnet-node-cli){:target="_blank"}
### How to use it:
```bash
docker run --rm -it -v ${PWD}:/app sneakykoder/dotnet-node-cli
```
## node with vue-js
### Docker Image:
> [https://hub.docker.com/r/sneakykoder/node-vue-cli](https://hub.docker.com/r/sneakykoder/node-vue-cli){:target="_blank"}
### Github repository:
> [](){:target="_blank"}
> [PENDING]
### How to use it:
```bash
```

## node with react-js
### Docker Image:
> [https://hub.docker.com/r/sneakykoder/node-react-cli](https://hub.docker.com/r/sneakykoder/node-react-cli){:target="_blank"}
### Github repository:
> [PENDING]
### How to use it:
```bash
```
