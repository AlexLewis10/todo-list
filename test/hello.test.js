import Todo from '../src/hello'

let todo

beforeEach(() => {
  todo = new Todo()
})

describe('Add an item to the todo list', () => {
  it ('add wash dishes to todo array', () => {
    expect(todo.updateToDo("Add wash dishes")).toStrictEqual(["Add wash dishes"])
  })
})