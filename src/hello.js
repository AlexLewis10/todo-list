export default class Todo {

  updateToDo (command) {
    if (command === "Done 1") {
      return "You have no to dos"
    } 
    return [command]
  }
}