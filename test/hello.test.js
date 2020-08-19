import Todo from '../src/hello'

let todo

beforeEach(() => {
  todo = new Todo()
})

describe('Add an item to the todo list', () => {
  it('add wash dishes to todo array', () => {
    expect(todo.updateToDo("Add wash dishes")).toStrictEqual("1 wash dishes")
  })

  it('add new item to the start of the list', () => {
    expect(todo.updateToDo('Add walk dog')).toStrictEqual("1 walk dog")
  })

  it('add 2 items to the list', () => {
    todo.updateToDo("Add wash dishes")

    expect(todo.updateToDo("Add walk dog")).toStrictEqual('1 wash dishes\n2 walk dog')
  })
})

describe('Remove an item from the todo list', () => {
  it('remove wash dishes from the todo array and return', () => {
    expect(todo.updateToDo("Done 1")).toStrictEqual("You have no to dos")
  })

  it('remove second item from the todo array and return', () => {
    todo.updateToDo("Add wash dishes")
    todo.updateToDo("Add walk dog")

    expect(todo.updateToDo("Done 2")).toStrictEqual('1 wash dishes')
  })
})