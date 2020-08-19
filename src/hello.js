export default class Todo {
  constructor () {
    this.toDoList = []
  }


  updateToDo (command) {
    let splitString = command.split(" ")
    if (splitString[0] === "Add") {
      splitString.shift()
      splitString = splitString.join(" ")
      this.toDoList.push(splitString)

      this._addArrayPosition()


      

      return this.toDoList.join("\n")
    }
    if (command === "Done 1") {
      return "You have no to dos"
    } 
  }

  _addArrayPosition () {
    const position = `${this.toDoList.length}`
    const toDoListPosition = position - 1
    this.toDoList[toDoListPosition] = (
      `${position} ${this.toDoList[toDoListPosition]}`
    )
  }
}
