---
title: Host domain on local network
slug: host-domain-local-net
tags: []
authors: [p0nch0d3v]
---
Prefer used a domain parked on <a href="https://www.namecheap.com/" target="_blank">namecheap</a>.

> Install `ddclient`, debian base linux distro:

```bash 
sudo apt-get install ddclient -y
```
```bash
sudo vim /etc/ddclient.conf
```
Use the following content
```
ssl=yes
use=web, web=dynamicdns.park-your-domain.com/getip
protocol=namecheap
server=dynamicdns.park-your-domain.com
login=dummy-domain.tld
password=''
@
*
```
Get IP info:
```bash
sudo ddclient -query
```
Restart service:
```bash
sudo service ddclient restart
```

References:
* https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/
* https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/