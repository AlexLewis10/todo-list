## Todo App

This project was done as part of a timed review and is not yet complete.

This project is a very simple todo app, which takes an input of a task or a message to say that the task has been completed.

It uses an array as storage rather than a database.

### Notes

**The following are notes taken whilst being briefed;**

Add and complete to dos

Input - "add wash dishes"
"done 1"
add to the to do list
Output - "1 wash dishes"

Anything other than a string is a type.

If no add or done - "Invalid input, please use add or done"

If the to do list is empty - Done 1 - array is empty, you have no to dos.
If item is bumped up in the array then return another number


INPUT | OUTPUT
"Add wash dishes" | 1 wash dishes |
"done 1"          | "You have no to dos" |
-------------------------------------
"Add wash dishes" | 1 wash dishes |
"Add walk dog"    | "1 wash dishes\n 2 walk dog"  |
"done 2"          | "1 wash dishes" |
-------------------------------------
"Add wash dishes" | 1 wash dishes |
"Add walk dog"    | "1 wash dishes\n 2 walk dog"  |
"done 1"          | "1 walk dog" |




