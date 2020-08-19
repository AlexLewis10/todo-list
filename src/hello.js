export default class Todo {
  constructor () {
    this.toDoList = []
  }


  updateToDo (command) {
    let splitString = command.split(" ")
    if (splitString[0] === "Add") {
      this._removeAdd(splitString)
      this._addArrayPosition()
      return this.toDoList.join("\n")
    }
    if (command === "Done 1") {
      return "You have no to dos"
    } 
  }

  _removeAdd (splitString) {
    splitString.shift()
    const joinedString = splitString.join(" ")
    this._addToArray(joinedString)
  }

  _addToArray (listItem) {
    this.toDoList.push(listItem)
  }

  _addArrayPosition () {
    const position = `${this.toDoList.length}`
    const toDoListPosition = position - 1
    this.toDoList[toDoListPosition] = (
      `${position} ${this.toDoList[toDoListPosition]}`
    )
  }
}
