---
title: Git snippets
slug: git-snippets
tags: [git, bash]
authors: [sneakykoder]
---
# Git snippets

### Git log
```bash
git log --pretty=oneline --abbrev-commit --graph
```

### Git config user
```bash
git config --local user.email ""
git config --local user.name ""
```

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