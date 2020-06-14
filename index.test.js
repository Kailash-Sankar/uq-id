const {
  shortId,
  epochId,
  complexId,
  generateId,
  uniqueIdFactory,
} = require("./index");

//console.log("short", shortId());
//console.log("epochId", epochId());
//console.log("generateId", generateId());
//console.log("complexId", complexId());
//console.log("uniqueId", uniqueIdFactory()());

function testLoop(fn, size, verifySize, loopSize = 10) {
  const uqMap = {};
  for (let i = 0; i < loopSize; i++) {
    const out = fn(size);
    expect(out).toHaveLength(verifySize || size);
    if (out in uqMap) {
      throw "duplicate id found";
    }
  }
}

test("short id", () => {
  expect(shortId()).toBeTruthy();
  testLoop(shortId, 5);
});

test("epoch id", () => {
  expect(epochId()).toBeTruthy();
  testLoop(epochId, 5, 19);
});

test("generateId id", () => {
  expect(generateId()).toBeTruthy();
  testLoop(generateId, 5);
  testLoop(generateId, 10);
});

test("complex id", () => {
  expect(complexId()).toBeTruthy();
  testLoop(complexId, 5);
  testLoop(complexId, 10);
});

test("custom: OTP", () => {
  const out = generateId(4, "0123456789");
  expect(out).toHaveLength(4);
  expect(Number(out)).not.toBeNaN();
});

test("unique id", () => {
  const genUniqueId = uniqueIdFactory();
  expect(genUniqueId()).toBeTruthy();
  testLoop(genUniqueId, 5);
  testLoop(genUniqueId, 10);
});

test("unique dupe and retry success", () => {
  const genUniqueId = uniqueIdFactory();
  testLoop(genUniqueId, 10, 10, 100);
});

test("unique dupe and retry fail", () => {
  const genUniqueId = uniqueIdFactory(10);
  // exhaust uniqueness
  for (let i = 0; i < 100; i++) {
    genUniqueId(3, "abc");
  }
  // check for null
  expect(genUniqueId(3, "abc")).toBeNull();
});
