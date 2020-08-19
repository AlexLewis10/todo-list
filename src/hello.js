export default class Todo {
  constructor () {
    this.toDoList = []
  }


  updateToDo (command) {
    let splitString = command.split(" ")
    if (splitString[0] === "Add") {
      this._removeAdd(splitString)
      this._addArrayPosition()
      // return this.toDoList.join("\n")
    }
    if (splitString[0] === "Done") {
      const listPosition = (parseInt(splitString[1]) - 1)
      this.toDoList.splice(listPosition, 1)
    } 
    if (this.toDoList.length === 0) {
      return "You have no to dos"
    }

    return this.toDoList.join("\n")
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
