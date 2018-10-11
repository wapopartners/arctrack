# `trackDom` Scroll tracking demo

### STEP 1 - try it out
- Run `yarn demo` and visit http://localhost:3000/track-scroll/?disable-adloader&disable-oopadloader
- Open the dev tools console. Then, start scrolling

![scroll tracking example 1](../../../gifs/scroll-tracking-giphy-ex-1.gif)

### STEP 2 - check out the code

For this demo, we're using a static HTML file with no React, to mimic a Classic PB page. However, given the nature of scrolling listeners, using `trackDom` for scroll-tracking may be the best choice for React-based applications as well. In `demo/code/scroll.html`, search for elements with `data-page` and `data-page-on` attributes.

`data-page`  

```html
<p data-page="3">
  <!-- ... -->
</p>
```

`data-page-on`  

```html
<div class="goldfish-player" data-page-on="1" data-producer="Los Angeles Times">
  <!-- ... -->
</div>
```
This is what's meant by "seeding" the DOM: adding data attributes to your markup that will act as flags for `trackDom` to use once it's registered the elements for scrolling.

Look at `demo/code/scroll/index.js` to see this example `trackDom` implementation.

**NOTE**: The demo analytics file that uses `Arctrack` is loaded as a script tag in `scroll.html`, but you can just as easily add the code to your main bundle file.

**NOTE**: in `demo/code/scroll/index.js`, we don't initiate `trackDom` until `window` has fully loaded. Elements you're trying to scroll-track may not have rendered yet if you try to register them sooner. 