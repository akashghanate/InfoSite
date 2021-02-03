---
id: regex
sidebar_label: Regex
hide_title: true
---

## Regex

### Character Class

- **\d** - matches a digit or a character from 0 to 9
- **\s** - match a whitespace symbol such a space, a tab (\t), a newline (\n), etc.
- **\w** - w stands for *word character*. It matches the ASCII character [A-Za-z0-9_] including Latin alphabets, digits, and the underscore ( _ )
    - ### Inverse Classes
        - **\D** - matches any character except digits e.g., a letter.
        - **\S** - matches any character except whitespace e.g., a letter
        - **\W** - matches any character except word character e.g., non-Latin letter or space.
- **dot( . )** - is a special character class that matches any character except a newline.

### Anchors
Anchors have special meaning in regular expressions. They do not match any character. Instead, they match a position before or after characters:

- **^** - The **caret** anchor matches the *beginning* of the text.
- **$** - The **dollar** anchor matches the *end* of the text.
- **\b** - The **word boundary** anchor matches the position
    - The following three positions that qualify as word boundaries:
        - Before the first character in a string if the first character is a word character.
        - After the last character in a string if the last character is a word character.
        - Between two characters in a string if one is a word character and the other is not.

### Quantifiers
Quantifiers match a number of instances of a character, group, or character class in a string.

- Exact count **{n}** - A number in curly braces {n} is the simplest quantifier. When you append it to a character or character class, it specifies how many characters or character classes you want to match.
- The range **{n,m}** - The range matches a character or character class from n to m times.
- **+** - The quantifier *+* means one or more, which is equivalent to *{1, }*
- **?** - The quantifier *?* means zero or one, which is equivalent to *{0,1}*
- **\*** - The quantifier \* means zero or more, which is equivalent to *{0, }*

### Sets & Ranges
- **[...]** - The square brackets searches for any character in a set. <br/>For example, [aeiou] matches any of the five characters: 'a', 'e', 'i', 'o' and 'u'. The [...] is called a set.
- **[a-zA-z]**,**[0-9]** - The square brackets can contain character ranges.<br/> For example, [a-z] is a character range from a to z. And [0-9] is a digit from 0 to 9.
- **[ ^abc]** - To negate a range, you use the excluding range like: [ ^...]. <br/>
    For example, [ ^0-9] matches any character except a digit. It is the same as \D

### flags
- **g** - global flag, when you add 'g' the regular expression will search all occurences, not just the first
- **m** - flag to enable the multiline mode.

In practice, you often combine the character classes to form a powerful match.