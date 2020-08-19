import Hello from '../src/hello'

let hello

beforeEach(() => {
  hello = new Hello()
})

describe('Hello', () => {
  it ('says hello', () => {
    expect(hello.hello()).toStrictEqual("Hello")
  })
})