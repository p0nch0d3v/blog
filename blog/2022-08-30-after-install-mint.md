---
title: After Install Mint 21
slug: after-install-mint-21
tags: [linux, mint, neovim, docker]
authors: [p0nch0d3v]
---
### Some packages

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
     gnupg
```

```bash
sudo apt install -y chromium
```

### ohmyzsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### SpaceVim
```bash
curl -sLf https://spacevim.org/install.sh | bash -s -- --install neovim
```

### Docker
```bash
sudo mkdir -p /etc/apt/keyrings
```
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
```bash
sudo apt-get update && \
sudo apt-get install -y docker-ce \
     docker-ce-cli \
     containerd.io \
     docker-compose \
     docker-compose-plugin
```
```bash
sudo usermod -aG docker $USER
```
[Change Docker Storage Location](/change-docker-storage-location)

### Google Chrome
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb --output-document /tmp/google-chrome-stable_current_amd64.deb
```
```bash
sudo apt install libu2f-udev
```
```bash
sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb
```

### Sublime Text & Merge
```bash
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg
```
```bash
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```
```bash
sudo apt-get update && \
sudo apt-get install --yes sublime-text sublime-merge
```

### Visual Studio Code
```bash
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
```
```bash
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
```
```bash
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
```
```bash
rm -f packages.microsoft.gpg
```
```bash
sudo apt install --yes apt-transport-https && \
sudo apt update && \
sudo apt install --yes code 
```

### Virtualbox

```bash
sudo echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list > /dev/null
```
```bash
wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg
```
```bash
sudo apt-get update && \
sudo apt-get install --yes virtualbox-6.1
```

### Skype
```bash
sudo apt install software-properties-common apt-transport-https wget ca-certificates gnupg2 -y
```
```bash
wget -O- https://repo.skype.com/data/SKYPE-GPG-KEY | sudo gpg --dearmor | sudo tee /usr/share/keyrings/skype.gpg
```
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/skype.gpg] https://repo.skype.com/deb stable main" | sudo tee /etc/apt/sources.list.d/skype-stable.list
```
```
sudo apt-get update && \
sudo apt install skypeforlinux -y
```

### Auto mount external drive
#### List drives
```bash
ls -l /dev/disk/by-uuid
```
#### Edit File System Table
```bash
sudo nano /etc/fstab
```
#### Add the corresponding unique id, as the following
`
UUID=00000000-0000-0000-0000-000000000000 /mnt/{location}  ext4    user,rw,exec   0       3
`
#### Ensure the locations exists
```bash
sudo mkdir --parents /mnt/{location}
```
#### Change the owner and/or group of the directory
```bash
sudo chown -R $USER:$USER /mnt/{location}/
```
#### Mount device
```bash
mount /dev/{device}
```

### Add the following cron job
```bash
crontab -e
```

`*/15 * * * * /bin/sh /mnt/{location}/development/copy_to_backup.sh`

