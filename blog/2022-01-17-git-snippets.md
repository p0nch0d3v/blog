---
title: Git snippets
slug: git-snippets
tags: [git, bash, sh]
authors: [p0nch0d3v]
---
# Git snippets
> Here is a set of some git snippets, useful in some way.

### Delete merged branches
> Code
```bash
git branch --merged | grep -v '\*\|master\|main\|develop' | xargs -n 1 git branch -d
```

### Git log
> Alias:
```bash
git config --global alias.graph-log 'log --pretty=oneline --abbrev-commit --graph'
```
> Use: 

```bash
git graph-log
```

> Alias:
```bash
git config --global alias.graph-log 'log --pretty --oneline --graph --abbrev-commit --relative-date'
```
> Use: 
```bash
git graph-log
```

---
### Refresh with development branch
> Alias:
```bash
git config --global alias.dev '!f() { git add . ; git stash push --message "stash_dev" ; git checkout development ; git pull origin development ; git stash apply stash^{/stash_dev} ; }; f'
```
> Use:
```bash
git dev
```

---
### Commit no verify
> Alias:
```bash
git config --global alias.cnv 'commit --no-verify'
```
> Use:
```bash
git cnv --message "..."
```

### Push no verify
> Alias:
```bash
git config --global alias.pnv 'push --no-verify'
```
> Use:
```bash
git pnv {origin} {branch}
```

---
### Git config user
```bash
git config --local user.email "john.doe@mail.com"
```
```bash
git config --local user.name "John Doe"
```

---
### Git hook
#### Git hook to validate branch name
```bash
#!/bin/sh
remote="$1"
url="$2"
LC_ALL=C
local_branch="$(git rev-parse --abbrev-ref HEAD)"
valid_branch_regex="^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\/{1,1}[a-zA-Z0-9_.-]+))$"
message="The branch name \"$local_branch\" is not correct. Branch names must accomplish the following convention: \"$valid_branch_regex\". The branch should be renamed a valid name and try again."
if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    echo "$message"
    exit 1
fi
exit 0
```
