// // RequestsController
// // pre: user is not null
// // post: none
// class RequestsController {
//     constructor(user)

//     // pre: size is an integer greater than 0, user field is a non 
//     // null user object
//     // post: returns a list of unique, non null request objects with
//     // the given size, each request must include at least 1 of the
//     // user’s interests
//     getIncomingRequests(size)

//     // pre: request is a non-null request object and user is a
//     // non-null user object
//     claimRequest(request)

//     // pre: user field is a non null user object; title and
//     // description are 
//     // non null strings; tags is a list of non null strings
//     // post: a new request object has been added to the database for
//     // given parameters.
//     createRequest(title, description, tags)

//     // pre: size is an integer greater than 0
//     // post: returns a list of non-null strings with the given size
//     getMostPopularTags(size)

//     // pre: the user field is non null
//     // post: returns a list of all request objects for the current 
//     // user
//     getMyRequests()
// }


// // TasksController
// // pre: user is authenticated
// // post: none
// class TasksController {
//     constructor(user)

//     // pre: user field is non null
//     // post: returns a list of task objects the user has claimed
//     getMyTasks()

//     // pre: a task exists in the realtime database with the given 
//     // taskID
//     // post: returns the task object with the given taskID
//     getTask(taskID)

//     // pre: the given task exists in the realtime database
//     // post: the task is updated in the realtime database to be 
//     // completed
//     completeTask(task)

//     // pre: the given task exists in the realtime database and is 
//     // claimed by the current user
//     // post: the a request object is added to the database to 
//     // represent the task and the task object is removed from the 
//     // database
//     abandonTask(task)



// }

// // UserController
// // pre: none
// // post: none
// class UserController {

//     // pre: none
//     // post: for the given username and password strings returns the 
//     // userID if successfully authenticated, otherwise returns null 
//     authenticate(username, password)

//     // pre: user is is non null user object
//     // post: the user object is added to the realtime database
//     createNewUser(user)

//     // pre: none
//     // post: if the user is logged in, return their user object
//     getUser()

//     // pre: there is a user in the database with the given userID
//     // post: updates the user with the given userID in the database 
//     // to math the information in the given user object
//     updateUser(userID, user)

//     // pre: there is a user in the database with the given userID
//     // post: returns a list of strings with the given users interests
//     getInterests(userID)

//     // pre: there is a user in the database with the given userID
//     // post: the users interests in the database will match the 
//     // given list of strings “interests”
//     updateInterests(userID, interests)
// }
