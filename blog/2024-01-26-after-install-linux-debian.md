---
title: After Install Linux Debian
slug: after-install-linux-debian
tags: [linux, debian]
authors: [p0nch0d3v]
---
### Base
Switch to root user:
```bash
su
```

Install sudo:
```bash
apt install -y sudo
```

Add user to sudoers
```bash
/usr/sbin/usermod -aG sudo [USER]
```

<h3><a target="_blank" href="/docs/base-debian-distros#base-packages">Base packages</a></h3>

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

<h3><a target="_blank" href="/docs/base-debian-distros#useful-scripts">Useful scripts</a></h3>

<h3><a target="_blank" href="/docs/base-debian-distros#ohmyzsh">ohmyzsh</a></h3>

### Cockpit
```bash
sudo apt install -y cockpit cockpit-machines
```

### [Optional] - Virtualbox
Download it:
```bash
cd /tmp && /usr/bin/wget https://download.virtualbox.org/virtualbox/7.0.14/VirtualBox-7.0.14-161095-Linux_amd64.run
```
Update to executable:
```bash 
chmod +x VirtualBox-7.0.14-161095-Linux_amd64.run
```
Run it:
```bash 
sudo bash VirtualBox-7.0.14-161095-Linux_amd64.run
```
Verify Installation:
```bash
VBoxManage list vms
```
Add `vbox` user to `vboxusers`
```bash
sudo useradd -m vbox -G vboxusers
```
Password change `vbox`
```bash
sudo passwd vbox
```
Edit Virtualbox defaults:
```bash
sudo nano /etc/default/virtualbox
```
```
VBOXWEB_USER=vbox
VBOXWEB_HOST=0.0.0.0
VBOXAUTOSTART_DB=/etc/vbox
VBOXAUTOSTART_CONFIG=/etc/vbox/autostartvm.cfg
```

Setup auto start vm
```bash
sudo nano /etc/vbox/autostartvm.cfg
```
```
default_policy = deny

vbox = {
    allow = true
    startup_delay = 10
}
```
```bash 
sudo chgrp vboxusers /etc/vbox && \
sudo chmod g+w /etc/vbox && \
sudo chmod +t /etc/vbox
```
```bash
sudo -u vbox VBoxManage setproperty autostartdbpath /etc/vbox/
```
