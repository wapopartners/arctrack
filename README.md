# Arctrack
Analytics layer for Arc partner sites built with PageBuilder.

## Description
Arctrack is an analytics utility library aimed at simplifying client-side analytics build-outs. It works by seeding an application with different types of action listeners that can respond to general or fine-tuned user actions.

## API Overview

### `trackDom`

Takes an `options` object containing DOM target information and developer-defined (that's you) callbacks that will execute whenever a user action is tracked. `trackDom` is set up to execute specified callbacks on DOM element click and on scroll. 

#### `options`

| Key       | Data type            | required? | default          |
| ----------| ---------------------| ----------| ---------------- |
| `dataAttr` | `string`            | `false`   | `'data-arctrack'`|
| `click`    | `function`          | `false`   | `undefined`      |
| `scroll`   | `array` or `object` | `false`   | `undefined`      |

**`click`**  

If you've seeded a page with data attributes that match `dataAttr`, whenever these elements are clicked, your `click` callback will fire with an object containing the following: 

* `target`: DOM target element from click event
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
import { trackDom } from '@arc-publishing/arctrack';

const options = {
  dataAttr: 'data-sitetrack',
  click: function({ target, type }) {
    console.log('CLICKED!', target, type);
    // use your click data however you need to
    // pass it along to your analytics network call...
  },
  // ...
};

trackDom(options);
```

_in the browser console after a user clicks the 'social share' div:_

```
CLICKED!
div#foo...
socialShare
```

**`scroll`**  
An array of scroll entries (objects), or a single scroll entry. Each entry corresponds to a DOM element that should trigger a tracking event when it's scrolled over.

**Scroll Entry API** . 

| Key      | Data type | Required |
|----------|-----------|----------|
|`load`    | `function`| `true`   |
|`buffer`  | `object`  | `false`  |
|`selector`| `string`  | `false`  |
|`type`    | `string`  | `true`   |

`load`  
Developer-defined callback that fires whenever the user scrolls over a page element of this scroll entry type. `load` is passed an object containing:

* `target`: Specific DOM Element that was scrolled over (the same as `Event.target`)
* `type`: specified in this entry's `type` property.

`buffer`  
An object containing properties `top` and `bottom` (both JavaScript `number`), that tells the scroll listener if it should observe a scroll once a buffer (some amount of vertical pixel distance) has been breached either _above_ or _below_ a target element. This can be useful if a tracking event needs to be dispatched when a page element is _almost_ in the viewport.

`selector`  
Should correspond to a data-attribute name on types of elements you would like to have scroll-tracking for. 

In the example markup below, your `selector` would be `mysite-leaderboard-ad`:

```html
<div data-mysite-leaderboard-ad="1">
  <!-- markup... -->
</div>
```

`type`  
A name you assign to a particular order of elements on a page. `type` allows you to track scrolling over a number of different types of elements on a single page. For the example above, it could be `'ad'`. 

**Complete scrolling example**

```javascript
import { trackDom } from '@arc-publishing/arctrack';

const scrollEntries = [];
scrollEntries.push({
  load: function({ type, target }) {
    if (type === 'ad') {
      // an ad has been scrolled over.
      // collect data from it using target...
      const classes = target.classList;
      // pass along to some analytics library
      s.eVar999 = classes;
      s.tl(undefined, 'o', 'AD_SCROLL');
    }
  },
  buffer: { top: 50, bottom: 50 },
  selector: 'mysite-leaderboard-ad',
  type: 'ad'
});
scrollEntries.push({
  load: function ({ type, target }) {
    /* some logic and custom analytics-gathering for media modules */
  },
  selector: 'video-playlist',
  type: 'media-module'
});
const options = {
  scroll: scrollEntries
};
trackDom(options);
```
In the example above, elements of type `ad` have a buffer of `50px`, meaning `load` will fire when the `ad` element is within `50px` of the viewport. `media-module` entries do not have a buffer.  

### `trackJs`

Decorator function used within ES6 classes (including React component classes) that takes a developer-defined callback and executes it whenever a decorated method is fired. This is an efficient way to track user interaction with React or ES6 service-based UIs because tracking transactions take place in memory and require zero interfacing with the DOM. This approach is inspired by [New York Times react-tracking](https://github.com/NYTimes/react-tracking) library. 

`trackJs` accepts two arguments, a callback (`fn`) and an event name (`string`). The callback will be called with an object containing the following data: 

**TrackJs API** . 

| Key      | Data type  |
|----------|------------|
|`methodName` | `string`|
|`instance`   | `object` |
|`eventName`  | `string` |
|`args`       | JavaScript [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object |

**`methodName`**
The name of the method that `trackJs` is decorating.

Example:

```javascript
import { trackJs } from '@arc-publishing/arctrack';

class MyClass {
  @trackJs(function({ methodName }) {
    console.log(`The method name is ${methodName}.`);
  })
  baz() {
    console.log('Hello, world!');
  }
}
```
When `baz` is called, the `trackJs` callback function above would print:
```
The method name is baz.
```

**`instance`**

The instance is the `this` value of the class instance in which you are decorating. This is very useful in cases where you're tracking React component behavior, because you'll have access to `state` and `props` by way of `instance`. 

Example:

```javascript
import React, { Component } from 'react';
import { trackJs } from '@arc-publishing/arctrack';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  @trackJs(function({ instance }) {
    const { state } = instance;
    if (state.active) {
      // do something ... 
    }
  })
  handleClick(e) {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {/* ... */}
      </div>
    );
  }
}
```

**`eventName`**

A string passed as the second argument to `trackJs`, to be used by the callback to further categorize the type of behavior being tracked. 

Example:  
```javascript
import React, { Component } from 'react';
import { trackJs } from '@arc-publishing/arctrack';
import { trackClicks } from '../analytics';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  @trackJs(trackClicks, 'OPEN_MENU')
  handleClick(e) {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {/* ... */}
      </div>
    );
  }
```
`analytics/index.js`  
```javascript
export const trackClicks = function({ instance, eventName }) {
  if (eventName === 'OPEN_MENU') {
    if (instance.state && !instance.state.active) {
      s.tl(undefined, 'o', 'OPEN_MENU');
    }
  }
  // ... 
}
```  
In the example above, `active` would be `false` if the component were clicked to be opened, since the `trackJs` callback fires _**before**_ the method code itself runs, setting state to `{active: true}`. Using `eventName` allows you as the developer to combine multiple event types into a single callback, such as `trackClicks`, which could track different types of click events differently depending on the `eventName` value, but reuse a lot of code as well. 

**`args`**  

These are the arguments passed to the method you are decorating. For React `onClick` handlers, this parameter could give you access to the click target, for very refined observation and tracking.  

Example:

```javascript
import React, { Component } from 'react';
import { trackJs } from '@arc-publishing/arctrack';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: props.loggedIn ? false : true,
    };
    // ...
  }
  // ...
  @trackJs(function({ args }) {
    if (args.length > 0) {
      const [syntheticEvent] = args;
      console.log('target', syntheticEvent.target);
    }
  })
  toggleShowComments(e) {
    this.setState({ showComments: !this.state.showComments });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.toggleShowComments}>
          {/* ... */}
        </button>
        {this.state.showComments && (
          <Fragment>
            {/* ... */}
          </Fragment>
        )}
      </div>
    );
  }
}
```

## Example Usage 
See recipes here. And try them out in the demo project. 
