- Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

- Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.
- _.replace()_ takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with. "example".replace(regex, "") = replace with nothing
- i flag = insensitive search, ie. case insensitive
- The + modifier in a regex allows you to match a pattern that occurs one or more times.
- \d = shorthand for digit, sub for [0-9]
- \s = shorthand for white space [] = character set g = global search