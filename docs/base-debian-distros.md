---
title: Base Debian distros
slug: base-debian-distros
---
# Base Debian distos

### Base packages:
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

### Useful scripts
```bash
cd ~ && \
git clone https://github.com/p0nch0d3v/scripts-labs.git && \
sudo bash ~/scripts-labs/debian_package_update.sh
```

### ohmyzsh
Install:
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
Change default theme
```bash
sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="random"/g' ~/.zshrc
```
```bash
sed -i 's/# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )/ZSH_THEME_RANDOM_CANDIDATES=( "dstufft" "steeef" )/g' ~/.zshrc
```
```bash
exec $SHELL
```