**Question 1**: Describe the difference between `<script>`, `<script async>` and `<script defer>`

`<script>` without any attributes

- The HTML file will be parsed until the script file is hit, at that point parsing will stop and a request will be made to fetch the file (if it’s external). The script will then be executed before parsing is resumed.

`script async`

- load the script in the background
-  downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

`script defer`

- load the script in the background
- downloads the file during HTML parsing and will only execute it after the parser has completed. 
- `defer` scripts are also guaranteed to execute in the order that they appear in the document.

**When should I use what ?**

- If the script is modular and does not rely on any scripts then use `async`.
- If the script relies upon or is relied upon by another script then use `defer`.
- If the script is small and is relied upon by an `async` script then use an inline `script` with no attributes placed *above* the `async` scripts.

**Question 2**: What's the difference between `block`, `inline` and `inline-block`?

**Key Criteria**: full-width, margins & padding, set height and width

**Display: Inline**
+ respect left & right margins and padding, but not top & bottom
+ cannot have a width and height set
+ allow other elements to sit to their left and right.
+ Element with default inline property: `span`, `a`, `img`, formatting tags `em`, `strong`, `i`, ...

**Display: Inline-block**
+ respect top & bottom margins and padding (also left & right) = respect all
+ respect width and height
+ allow other elements to sit to their left and right.

**Display: Block**
+ respect all of those (margin, padding)
+ force a line break after the block element
+ acquires full-width if width not defined
+ Element with default block property: `div`, `h1`, `p`, `li`, `section`

**Question 3**: In browsers, we are able to find specific words or phrases within a webpage by using `Ctrl + F` (Windows, Linux) or `⌘ + F` (Mac) and entering the search term. Matches which appear will be highlighted in yellow.
 
Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear bolded.
 
Given a content string and a query string, implement a function textSearch that finds all case-insensitive matches with the query string, wrapping the matches in <b>...</b> tags

**Example:**

```js
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown `<b>Fox</b>` Jumps Over The Lazy Dog'

textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking `<b>Dog</b>` overtakes the lazy `<b>dog</b>`

// A character will not match the same query more than once, with letters appearing earlier taking priority.
textSearch('aaa', 'aa');
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
 
// Consecutive matches should be combined into a single <b></b> tag
textSearch('aaaa', 'aa');
// Correct: `<b>aaaa</b>`
// Wrong: `<b>aa</b><b>aa</b>`
```

```js
// I copied answer from master file

function textSearch(string, query) {
  const boldChars = Array(string.length).fill(false);
  const lowerCaseString = string.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();

  if(query === null || query.length === 0) return;

  for(let i = 0; i < string.length; i++>) {
    if(lowerCaseString.substr(i, query.length) === lowerCaseQuery) {
      boldChars.fill(true, i, i + query.length);
      i += query.length - 1;
    }
  }

  let highlightedString = "";

  for(let i = 0; i < string.length; i++>) {
    if(boldChars[i] && !boldChars[i-1]) {
      highlightedString += '<b>';
    }
    highlightedString += string[i];

    if(boldChars[i] && !boldChars[i+1]){
      highlightedString += '</b>';
    }
  }

  return highlightedString;
}

```

**Question 4**: Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?

`translate()` is a possible value of the CSS transform property. When using `translate()`, the element still occupies its original space (sort of like position: relative). But when changing the absolute positioning of elements, the elements are removed from the flow of the page and the positioning of the surrounding elements will be affected. Hence the page layout will have to be recalculated.
 
Changing transform or opacity does not trigger browser reflows or repaints but does trigger compositions; On the other hand, changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.


**Question 5**:  Explain how **prototypal inheritance** works in javascript

 - Reference here: https://www.frontendinterviewhandbook.com/javascript-questions/#explain-how-prototypal-inheritance-works
