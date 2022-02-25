---
title: Linux Shell snippets
slug: linux-shell-snippets
tags: [linux, bash, sh]
authors: [sneakykoder]
---
# Linux shell snippets
> Here is a set of some git snippets, useful in some way.

### List files/directories
```sh
ls -a -l -h --color=always
```
Where:
```sh
-a      = show all files included the dots(.)
-l      = show in long format
-h      = Show in units in humat readable format
--color = Output colored
```

### Find forlders recursively
```
find . -name "node_modules" -type d -prune | xargs du -chs
```