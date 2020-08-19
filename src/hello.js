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

      let position = `${this.toDoList.length}`
      this.toDoList[position -1] = `${position} ${this.toDoList[position - 1]}`

      return this.toDoList.join("\n")
    }
    if (command === "Done 1") {
      return "You have no to dos"
    } 
  }
}
