# Arctrack
Analytics layer for Arc partner sites built with PageBuilder.

## Description
Arctrack is a Node-based data layer library aimed at simplifying client-side analytics build-outs. It works by seeding an application with different types of action listeners that can respond to general or fine-tuned user actions.

## API Overview

### `trackDom`

Takes an `options` object containing DOM target information and developer-defined (that's you) callbacks that will execute whenever a user action is tracked. `trackDom` is set up to execute specified callbacks on page load, on DOM element click, and on scroll (vertical). 

#### `options`

| Key       | Data type            | required? | default          |
| ----------| ---------------------| ----------| ---------------- |
| `public`  | `string` or `object` | `true`    | `undefined`      |
| `dataAttr` | `string`            | `false`   | `'data-arctrack'`|
| `init`     | `function`          | `false`   | `undefined`      |
| `click`    | `function`          | `false`   | `undefined`      |
| `scroll`   | `array` or `object` | `false`   | `undefined`      |

**`public`**  
The "page level" data that you'd like passed to every one of your custom callbacks when _any_ user action is tracked. _Page level_ data here just refers to general or high level classification data from your application model that will be used by your analytics platform, e.g., Omniture, GA, Chartbeat, etc. For example, canonical URL and site name.

If passed as `string`, it should represent the `window` _location_ of where you have attached the page level data object. For example, if your page level data is at `window.mySite.dataLayer.pageData`, you can pass in the string `'mySite.dataLayer.pageData'`.

If passed as `object`, it should just be the object you want included as page level data for every developer-defined callback that Arctrack executes.

**Example** 
```javascript
import { trackDom } from 'arctrack';

const options = {
  public: 'mySite.dataLayer.pageData', // window.mySite.dataLayer.pageData (obj) will also work
  // ...
};

trackDom(options);
```

**`init`**  
On page load, your `init` callback is passed an object containing the page level data from `public`. 

**Example**  
```javascript
import { trackDom } from 'arctrack';

const options = {
  public: 'mySite.dataLayer.pageData',
  init: function(pageData) {
    // play with pageData however you need to
    // pass it along to your analytics network call...
  }
  // ...
};

trackDom(options);
``` 

**`click`**  

If you've seeded a page with data attributes that match `dataAttr`, whenever these elements are clicked, your `click` callback will fire with an object containing the following: 

* `pageData`: the object defined in `public`
* `target`: DOM target element from click event (we might want to change this to `event` in a later PR)
* `type`: a camelcase string derived from the value of the data attribute that observed the click event on the `target` element.

**Example**  

_some serverside page template:_
```html
<!-- other HTML or rendering tags -->

<div id="foo" data-sitetrack="social-share">
  <!-- markup... -->
</div>

```

_the application's JS:_  

```javaScript
import { trackDom } from 'arctrack';

const options = {
  public: 'mySite.dataLayer.pageData',
  dataAttr: 'data-sitetrack',
  click: function({ pageData, target, type }) {
    console.log('CLICKED!', pageData, target, type);
    // play with your click data however you need to
    // pass it along to your analytics network call...
  },
  // ...
};

trackDom(options);
```

_in the browser console after a user clicks the 'social share' div:_

```
CLICKED!
{src: "mySiteProd", canonical_url: "my-site-cool-page.html", ...}
div#foo...
socialShare
```

**`scroll`**  
An array of scroll entries (objects), or a single scroll entry. Each entry corresponds to a DOM element that should trigger a tracking event when it's scrolled over.

**Scroll Entry API** . 

| Key      | Data type | Required | Default    |
|----------|-----------|----------|------------|
|`load`    | `function`| `true`   | `undefined`|
|`buffer`  | `object`  | `false`  |            |
|`selector`| `string`  | `false`  |            |
|`type`    | `string`  | `true`   |            |

`load`  
Developer-defined callback that fires whenever the user scrolls over a page element of this scroll entry type. `load` is passed an object containing:

* `pageData`: from `options.public` 
* `target`: Specific DOM Element that was scrolled over (the same as `Event.target`)
* `type`: specified in this entry's `type` property.

`buffer`  
An object containing properties `top` and `bottom` (both JavaScript `number`), that tells the scroll listener if it should observe a scroll once a buffer (some amount of vertical pixel distance) has been breached either _above_ or _below_ a target element. This can be useful if a tracking event needs to be dispatched when a page element is _almost_ in the viewport.

`selector`  

`type`  

### `trackJs`

Decorator function used within ES6 classes (including React component classes) that takes a developer-defined callback and executes it whenever a decorated method is fired. This is an efficient way to track user interaction with React or ES6 service-based UIs because tracking transactions take place in memory and require zero interfacing with the DOM. This approach is inspired by [New York Times react-tracking](https://github.com/NYTimes/react-tracking) library. 

## Example Usage 
- [] todo
