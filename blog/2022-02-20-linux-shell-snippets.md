---
title: Linux Shell snippets
slug: linux-shell-snippets
tags: [linux, bash, sh]
authors: [p0nch0d3v]
---
# Linux shell snippets
> Here is a set of some git snippets, useful in some way.

### List files/directories
```bash
ls -a -l -h --color=always
```
Where:
```bash
-a      = show all files included the dots(.)
-l      = show in long format
-h      = Show in units in humat readable format
--color = Output colored
```

### Find forlders recursively
```bash
find . -name "node_modules" -type d -prune | xargs du -chs
```
