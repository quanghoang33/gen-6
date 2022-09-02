**Question 1:**

```html
<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
  ];

  const mountains = document.getElementById("mountains");
  let contentBody = "";

  MOUNTAINS.forEach((mountain) => {
    const rowContent = `
        <tr>
            <td>${mountain.name}</td>
            <td style="text-align: center;">${mountain.height}</td>
            <td>${mountain.place}</td>
        </tr>
        `;
    contentBody += rowContent;
  });

  mountains.innerHTML = `
    <table>
        <tr>
            <th>name</th>
            <th>height</th>
            <th>place</th>
        </tr>
        ${contentBody}
    </table>
  `;
</script>
```

**Question 2:**

```html
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span> spans.</p>

<script>
  function byTagName(node, tagName) {
    let listOfTagName = [];
    const upperCaseTagName = tagName.toUpperCase();

    function helper(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (child.nodeName === upperCaseTagName) listOfTagName.push(child);
          helper(child);
        }
      }
    }

    helper(node);
    return listOfTagName;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
```

**Question 3:**

```html
<tab-panel>
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</tab-panel>
<script>
  // Keeps track of the currently selected tab.
  let activeTab;
  // Keeps track of the current body of tab to be displayed.
  let currentBody;
  function switchTab(event) {
    // Switches the `activeTab` binding to the newly selected tab, and
    // removes the `selected` class from the previously selected tab while
    // adding it to the newly switched `activeTab`.
    activeTab.classList.remove("selected");
    activeTab = event.target;
    activeTab.classList.add("selected");
    let tabContent = document.querySelectorAll("div");
    // Hides the content of the previously selected tab.
    currentBody.classList.toggle("hidden");

    // Manages display of the contents of the multiple tabbed sections.
    switch (activeTab.textContent) {
      case "one":
        currentBody = tabContent[0];
        break;
      case "two":
        currentBody = tabContent[1];
        break;
      case "three":
        currentBody = tabContent[2];
        break;
    }
    // Displays the content of the currently selected tab.
    currentBody.classList.toggle("hidden");
  }

  function asTabs(node) {
    let tabLength = node.children.length;

    for (let i = 0; i < tabLength; i++) {
      let tabButton = document.createElement("button");

      tabButton.textContent = document
        .querySelectorAll("div")
        [i].getAttribute("data-tabname");
      // By default, hide the body of the tabs.
      node.querySelectorAll("div")[i].classList.add("hidden");
      tabButton.addEventListener("click", switchTab);
      node.insertBefore(tabButton, document.querySelector("div"));
    }
    // Sets the initially selected tab & display its associated content.
    activeTab = document.querySelector("button");
    activeTab.classList.add("selected");
    currentBody = document.querySelector("div");
    currentBody.classList.toggle("hidden");
  }

  asTabs(document.querySelector("tab-panel"));
</script>
```

**Question 4:**

```css
input[type="range"] {
  accent-color: #f44336;
}
```

**Question 5: What's the output?**

```js
const myPromise = Promise.resolve(Promise.resolve("Promise"));

function funcOne() {
  setTimeout(() => console.log("Timeout 1!"), 0);
  myPromise.then((res) => res).then((res) => console.log(`${res} 1!`));
  console.log("Last line 1!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`);
  setTimeout(() => console.log("Timeout 2!"), 0);
  console.log("Last line 2!");
}

funcOne();
funcTwo();
```

- A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!
- B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!
- `C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!` => **Answer**
- D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!

**Question 6: How can we invoke sum in sum.js from index.js?**

```js
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from "./sum";
```

- A: sum(4)
- B: sum.sum(4)
- `C: sum.default(4)` => **Answer**
- D: Default aren't imported with \*, only named exports

**Question 7: What's the output?**

```js
const handler = {
  set: () => console.log("Added a new property!"),
  get: () => console.log("Accessed a property!"),
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```

- A: Added a new property!
- B: Accessed a property!
- `C: Added a new property! Accessed a property!` => **Answer**
- D: Nothing gets logged

**Question 8: Which of the following will modify the person object?**

```js
const person = { name: "Lydia Hallie" };

Object.seal(person);
```

- `A: person.name = "Evan Bacon"` => **Answer**
- B: person.age = 21
- C: delete person.name
- D: Object.assign(person, { age: 21 })

> Explain: The method **seal** of the Object is mean that you can't modify the existing properties and you can't add new properties

**Question 9: What's the output?**

```js
const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- `A: 2 4 and 3 6` => **Answer**
- B: 2 NaN and 3 NaN
- C: 2 Error and 3 6
- D: 2 4 and 3 Error

**Question 10: What's the output?**

```js
class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);
```

- A: 10
- B: 11
- C: undefined
- `D: SyntaxError` => **Answer**
