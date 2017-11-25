const add = (a, b) => a + b
const greeting = (name = 'Anonymous') => `Hello ${name}`


test('Should Add Two Numbers', () => {
    const result = add(3, 4)

    expect(result).toBe(7)

})

test('Should Return A Greeting With A Name', () => {
    const result = greeting('Brandon')

    expect(result).toBe('Hello Brandon')
})

test('Should Return A Greeting With Anonymous', () => {
    const result = greeting()

    expect(result).toBe('Hello Anonymous')
})
