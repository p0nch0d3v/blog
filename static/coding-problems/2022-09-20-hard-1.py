def main(input, distinct_count_chars):
    total_len = len(input)
    pointer = 0
    step = 2
    while (pointer < total_len and step <= (total_len - 1)):
        if (pointer + step <= total_len):
            substr = input[pointer:(pointer + step)]
            result = count_distinct_chars(substr, distinct_count_chars)
            if (result != None):
                return result
        pointer = pointer + 1

        if (pointer == len(input)):
            pointer = 0
            step = step + 1
    print(pointer)

def count_distinct_chars(input, distinct_count_chars):
    # Create dictionary from characters
    # char_dic = dict.fromkeys(input, 0)
    char_dic = {}
    for char in input:
        char_dic[char] = input.count(char)
        if (char_dic[char] == distinct_count_chars):
            print('input', input)
            return input

assert main("abcba", 2) == "bcb"
assert main("xababa", 2) == "aba"