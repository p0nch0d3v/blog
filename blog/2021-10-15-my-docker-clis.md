---
title: Docker CLI's
slug: docker-clis
tags: [docker, bash, python, dotNetCore, node-js]
authors: [p0nch0d3v]
---
# Docker CLI's
## A collection of custom docker images as CLI's

There was a need to run different technologies in local dev environment, such as .net-core, node js, python, ruby, etc. without install them.

A decision mas made to create a set of docker images with some pre-installed apps/plugins/extensions according to the technology to help with the development process.

<!--truncate-->

## dotnet core with entity framework
### Docker image:
> [https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags](https://hub.docker.com/r/p0nch0d3v/dotnet-sdk/tags)
### Repository:
> [https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile](https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk/Dockerfile)
### How to use it
```bash
docker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk bash
```

## dotnet core with entity framework and node-js
### Docker image:
> [https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags](https://hub.docker.com/r/p0nch0d3v/dotnet-sdk-node/tags)
### Repository:
> [https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile](https://github.com/p0nch0d3v/docker-images/blob/master/dotnet-sdk-node/Dockerfile)
### How to use it:
```bash
docker run --rm --interactive --tty --volume ${PWD}:/app p0nch0d3v/dotnet-sdk-node bash
```
