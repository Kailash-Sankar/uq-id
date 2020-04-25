const { shortId, uniqueId, complexId, generateId } = require("./index");

//console.log("short", shortId());
//console.log("uniqueId", uniqueId());
//console.log("generateId", generateId());
//console.log("complexId", complexId());

function testLoop(fn, size, verifySize) {
  const uqMap = {};
  for (let i = 0; i < 10; i++) {
    const out = fn(size);
    expect(out).toHaveLength(verifySize || size);
    if (out in uqMap) {
      throw "duplicate id found";
    }
  }
}

test("short id", () => {
  expect(shortId(5)).toBeTruthy();
  testLoop(shortId, 5);
});

test("unique id", () => {
  expect(uniqueId(5)).toBeTruthy();
  testLoop(uniqueId, 5, 19);
});

test("generateId id", () => {
  expect(generateId(10)).toBeTruthy();
  testLoop(generateId, 10);
});

test("complex id", () => {
  expect(complexId(10)).toBeTruthy();
  testLoop(complexId, 10);
});
