# ud-id

A lightweight unique id generator

    const { shortId, uniqueId, complexId, generateId } = require("uq-id");

    # generate a short id,
    # params
    # size: int, max allowed is 10
    shortId();
    output: "yr7k6"

    # generate a unique id, using epoch + short id
    # params
    # size: int, default 5, max allowed is 10 (indicates size of tailend string and not the output)
    uniqueId();
    output: "1587843550015-dxp6r"

    # generate a complex id, using charset and math random (not url friendly)
    # chartset containts a...z,A...Z,0...9 and symbols
    # params
    # size - int, default 10
    complexId();
    output: "q5yTPo&oPUd"

    # generate a custom id based on input size and chartset
    # params
    # size - int, default 5
    # charset - array of characters, defaults to a...z,A...Z,0...9
    generateId();
    output: "aSzxMCbOo6v"
