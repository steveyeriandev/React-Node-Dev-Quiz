const { formatName } = require('./format-name.js');

const obj = {
    last: "Yerigan",
    first: "Steve"
};

test("format should be Yerigan, Steve", () => {
    expect(formatName(obj)).toBe("Yerigan, Steve")
})
test("should not be Steve Yerigan", () => {
    expect(formatName(obj)).not.toBe("Steve Yerigan")
})
test("should not be empty", () => {
    expect(formatName(obj)).toBeTruthy()
})
