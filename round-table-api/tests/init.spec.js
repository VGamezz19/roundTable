function sum () {
    return 1 + 1
}

test("1 +1", () => {
    expect(sum().toBe(3))
})