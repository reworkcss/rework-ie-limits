# rework-ie-limits

[![Build Status](https://secure.travis-ci.org/reworkcss/rework-ie-limits.png?branch=master)](http://travis-ci.org/reworkcss/rework-ie-limits)

A [Rework](https://github.com/reworkcss/rework) plugin that tests whether a
chunk of CSS exceeds IE < 10's limit of [4095
selectors](http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx).

## Installation

Install with npm:

```
npm install rework-ie-limits
```

## Use

As a Rework plugin:

```js
var rework = require('rework');
var ieLimits = require('rework-ie-limits');

var css = rework(cssinput).use(ieLimits);
```

It will throw an `Error` if the limit has been exceeded.

Note that the plugin is extremely conservative. It will assume that ALL
selectors (and those within any media query) are supported and applied by each
version of IE < 10. Therefore, there will be some false positives as you
approach the limit.

## Testing

For CI:

```
npm test
```

For development:

```
npm run watch
```
