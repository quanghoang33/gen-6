**Question 1**: Describe the difference between `<script>`, `<script async>` and `<script defer>`

**Question 2**: What's the difference between `block`, `inline` and `inline-block`?

**Question 3**: In browsers, we are able to find specific words or phrases within a webpage by using `Ctrl + F` (Windows, Linux) or `⌘ + F` (Mac) and entering the search term. Matches which appear will be highlighted in yellow.
 
Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear bolded.
 
Given a content string and a query string, implement a function textSearch that finds all case-insensitive matches with the query string, wrapping the matches in <b>...</b> tags

**Example:**
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'

textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'

A character will not match the same query more than once, with letters appearing earlier taking priority.
textSearch('aaa', 'aa');
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
 
Consecutive matches should be combined into a single <b></b> tag
textSearch('aaaa', 'aa');
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'

**Question 4**: Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?

**Question 5**:  Explain how **prototypal inheritance** works in javascript

 
