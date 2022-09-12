---
title: Coding Problem 2022-09-09
slug: coding-problem-2022-09-09
tags: [coding-problem, hard]
authors: [p0nch0d3v]
---
### Problem (hard):
*Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.*

*For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.*

*Follow-up: what if you can't use division?*

### Proposed solution (Python):

```python
def main(the_list, expected):
    print('List: ', the_list)
    print('Expected:', expected)

    factor = 1
    for item in the_list:
        factor = factor * item
    print('Factor:', factor)    
    
    result = []
    for item in the_list:
        i = 0
        while (i < factor):
            i = i + 1
            if (i * item == factor):
                result.append(i)
                
    print('Result:', result)

    return 0

if __name__ == "__main__":
    main([1, 2, 3, 4, 5], [120, 60, 40, 30, 24])
    main([3, 2, 1], [2, 3, 6])
```
