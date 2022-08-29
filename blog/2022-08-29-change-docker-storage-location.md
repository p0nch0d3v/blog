---
title: Change Docker storage location
slug: change-docker-storage-location
tags: [docker]
authors: [p0nch0d3v]
---
#### Stop docker service and socket
```bash
sudo systemctl stop docker.service && \
sudo systemctl stop docker.socket
```
#### Edit the current configuration
```bash
sudo nano /lib/systemd/system/docker.service
```
#### Locate: `ExecStart` 
#### and add the follwing line: `-g /some/other/location`

#### Ensure that the directory exits
```bash
sudo mkdir -p /some/other/location
```

#### Sync pre-existing content
```bash
sudo rsync -aqxP /var/lib/docker/ /some/other/location
```

#### Start docker service and socket
```bash
sudo systemctl daemon-reload && \
sudo systemctl start docker
```
