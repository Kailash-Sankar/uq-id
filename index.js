const _CHARSET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const _SYMBOLS = "-_@%$#*&";
const _SLICE_SZ = 5;
const _MAX_SZ = 10;
const _SMP_SZ = 10;

// generates a random string (max size 10)
// sample: "yr7k6"
function shortId(size = _SLICE_SZ) {
  const sliceSize = -1 * (size > _MAX_SZ ? _MAX_SZ : size);
  return Math.random().toString(36).slice(sliceSize);
}

// generates a unique id with epoch and random string
// sample: "1587843550015-dxp6r"
function uniqueId(size = _SLICE_SZ) {
  const epochStr = new Date().getTime();
  const randStr = shortId(size);
  return `${epochStr}-${randStr}`;
}

// generates simple random strings, accepts charset
// sample "aSzxMCbOo6v"
function generateId(size = _SMP_SZ, charset = _CHARSET) {
  const max = charset.length;
  let rstr = "";

  for (let i = size; i > 0; i--) {
    let idx = Math.floor(Math.random() * max);
    rstr += charset[idx];
  }
  return rstr;
}

// generates complex random strings,includes symbols
// sample "q5yTPo&oPUd"
function complexId() {
  return generateId(10, _CHARSET + _SYMBOLS);
}

module.exports = {
  shortId,
  uniqueId,
  complexId,
  generateId,
};
