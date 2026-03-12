const helloWorld = require('./helloworld');

test("Testar função Hello World", () => {
    expect(helloWorld()).toBe("Hello World!")
})