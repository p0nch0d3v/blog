---
title: Use Jenkins on Dokku
slug: use-jenkins-on-dokku
tags: [jenkins, dokku]
authors: [sneakykoder]
---
Create the app on dokku.
```bash
dokku apps:create j
```

Get `Jenkins` docker image
```bash
docker pull jenkins/jenkins:lts-jdk11
```

Tag the pulled image as the current application image
```bash
docker tag jenkins/jenkins:lts-jdk11 dokku/j:latest
```

Deploy the tagged image to the application
```bash
dokku tags:deploy j latest
```

Map the exposed port `8080` from Jenkins to `80` port
```bash
dokku proxy:set j http:80:8080
dokku proxy:ports-add j 80:8080
```

Optional, create a mount point for the whole jenkins configurations.
```bash
dokku storage:mount j /home/sneakykoder/jenkins_home:/var/jenkins_home
```
