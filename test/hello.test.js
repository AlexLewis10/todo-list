import Todo from '../src/hello'

let todo

beforeEach(() => {
  todo = new Todo()
})

describe('Add an item to the todo list', () => {
  it('add wash dishes to todo array', () => {
    expect(todo.updateToDo("Add wash dishes")).toStrictEqual("1 wash dishes")
  })

  it('add two items and return todo list', () => {
    expect(todo.updateToDo('Add walk dog')).toStrictEqual("1 walk dog")
  })
})

describe('Remove an item from the todo list', () => {
  it('remove wash dishes from the todo array and return', () => {
    expect(todo.updateToDo("Done 1")).toStrictEqual("You have no to dos")
  })
})