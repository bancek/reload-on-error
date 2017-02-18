# reload-on-error [![NPM version][npm-image]][npm-url]
> Reload browser location when called

## Installation

```sh
$ npm install --save reload-on-error
```

## Usage

```js
import * as reloadOnError from 'reload-on-error';

require.ensure('./lib', function {
  var lib = require('./lib');
}, 'lib-name').catch(reloadOnError);
```
## License

MIT © [Luka Zakrajšek]()

[npm-image]: https://badge.fury.io/js/reload-on-error.svg
[npm-url]: https://npmjs.org/package/reload-on-error
