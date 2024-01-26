---
title: After Install Linux Debian
slug: after-install-linux-debian
tags: [linux, debian]
authors: [p0nch0d3v]
---
Switch to root user:
```bash
su
```

Install sudo:
```bash
apt install -y sudo
```

As user, install some packages:
```bash
sudo apt install -y zsh \
     neofetch \
     neovim \
     git \
     openssh-server \
     curl \
     bat \
     wget \
     curl \
     htop \
     nano \
     rsync \
     wakeonlan \
     gnupg \
     sudo \
     gcc \
     make \
     linux-headers-amd64 \
     linux-headers-$(uname -r)
```

Edit login defaults:
```bash
sudo nano /etc/login.defs
```
Locate the line:
```
ENV_PATH
```
Add to `ENV_PATH` the path: `/usr/sbin`

Edit `/etc/apt/sources.list`
```
deb http://deb.debian.org/debian/ testing main contrib non-free non-free-firmware

deb http://security.debian.org/debian-security testing-security main contrib non-free non-free-firmware

deb http://deb.debian.org/debian/ testing-updates main contrib non-free non-free-firmware

```