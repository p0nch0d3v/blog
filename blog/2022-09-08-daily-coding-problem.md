---
title: Coding Problem 2022-09-08
slug: coding-problem-2022-09-08
tags: [coding-problem]
authors: [p0nch0d3v]
---
### Problem:
>
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?

### Proposed solution (Python):
```python
def main ():
    my_list = [10, 15, 3, 7]
    k = 17
    i = 0
    j = 0
    success = False
    while (i < len(my_list)):
        while (j < len(my_list)):
            if (i != j):
                if (my_list[i] + my_list[j] == k):
                    print(my_list[i])
                    print(my_list[j])
                    success = True
            j = j + 1
            if (success):
                break
        j = 0
        i = i + 1
        if (success):
            break
    print(success)
main()
```
