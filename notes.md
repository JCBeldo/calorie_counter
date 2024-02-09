- Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

- Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.
- _.replace()_ takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with. "example".replace(regex, "") = replace with nothing
- i flag = insensitive search, ie. case insensitive
- The + modifier in a regex allows you to match a pattern that occurs one or more times.
- \d = shorthand for digit, sub for [0-9]
- \s = shorthand for white space [] = character set g = global search

- The insertAdjacentHtml method takes two arguments. The first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.
For the first argument, pass the string "`beforeend`" to insert the new element as the last child of `targetInputContainer`.
For the second argument, pass your HTMLString variable.

- A `for...of` loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.
  ``for (const element of elementArray) {
  console.log(element);
}``