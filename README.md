# uq-id

![npm bundle size](https://img.shields.io/bundlephobia/min/uq-id)
![npm](https://img.shields.io/npm/v/uq-id)

> A lightweight random id generator

## Install

```bash
npm i uq-id
```

## Usage

```js
const {
  shortId,
  epochId,
  complexId,
  generateId,
  uniqueIdFactory,
} = require("uq-id");

// generate a short id, kept simple
// params
// size: int, max allowed is 10
shortId();
output: "yr7k6";

// generate a custom id based on input size and chartset (url friendly by default)
// params
// size - int, default 10
// charset - string of characters, defaults to a...z,A...Z,0...9
generateId();
output: "aSzxMCbOo6v";

// generate uniqueId, history of ids is maintained in memory (closure)
// params
// retryLimit - int, default 5
// returns a generateId function with uniqueness wrapper
const genUniqueId = uniqueIdFactory();
// this function has the same interface as generateId above
// returns null if a random id could not be generated within retry limit
genUniqueId();
output: "dVGsGQLNVQ";

// generate a complex id (not url friendly)
// chartset containts a...z,A...Z,0...9 and symbols
// params
// size - int, default 10
complexId();
output: "q5yTPo&oPUd";

// generate an epoch based id, using epoch + short id
// params
// size: int, default 5, max allowed is 10
// (indicates size of tailend string and not the output)
epochId();
output: "1587843550015-dxp6r";

// custom use cases
// generate an otp like id
generateId(4, "0123456789");
output: "6776";
```

That's all folks.
