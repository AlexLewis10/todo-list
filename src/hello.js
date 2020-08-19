export default class Todo {

  updateToDo (command) {
    let splitString = command.split(" ")
    console.log(command)
    if (splitString[0] === "Add") {
      splitString.shift()
      splitString.unshift("1")
      console.log(splitString.join(" "))
      return splitString.join(" ")
    }
    if (command === "Done 1") {
      return "You have no to dos"
    } 
  }
}