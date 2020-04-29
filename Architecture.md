# HelpOut Architecture Specification

Listed below are the different components that will make up our ReactApp. They are categorized into Views, Models, and Controllers, and include information on their responsibilities and communication. A note on the formatting: the components indented underneath other components are written so to clarify that the indented component is contained within the latter component. This structure helps in understanding our architecture better.

## Views - React.js
### *NavBarView*
- This component remains static on all pages and displays HelpOut’s branding, user account information, and tabs navigating to other screens.
- Resides in the client-side only.
- Communicates with UserController to determine the user’s login state, and depending on that, alters the display. 
- Passes a user object to components within it and communicates with the UserController to log out. 

  ### *AccountDropdownView*
  - This component displays a dialog box that prompts the user to log out or change personal information.
  - Resides in the client-side only.
  - Communicates with the UserController to change login state or update personal information. 

### *UserLoginView*
- This component displays actions the user must take to either log in (by inputting their information) or sign up (navigate to another screen). 
- Resides in the client-side only
- Communicates with the UserController to grant entry to users with accounts. 

### *CreateAccountView*
- This component displays the actions the user must take to create an account by prompting them to input information.
- Resides in the client-side only
- Communicates with the UserController to create a profile and save the information.

### *HomepageView*
- Contains the NavBarView component.
- Displays information and certain actions relevant to the user upon logging in. All actions navigate to separate screens. Communicates with the UserController and TaskController.
- Resides in the client-side only.
- Does not communicate with any controllers.

### *ClaimedTasksView*
- This component displays the tasks a user has committed to completing. It is made up of ClaimedTaskCardView and ClaimedTaskMoreCardView.
- Resides in the client-side only.
- Communicates with TasksController to retrieve this information.
- Passes a task object to components within it and communicates with the task controller to abandon or complete the task.

  ### *ClaimedTaskCardView*
  - This component displays information for a task, as well as its details, tags, name of its requester, and date the task was accepted.
  - Displays options to either complete or give up the task 
  - Resides in the client-side only.
  - Communicates with TasksController to send this information.
  
  ### *ClaimedTaskMoreCardView*
   - Displays the same information as “ClaimedTaskView” as well as the requester’s contact information and address.
   - Resides in the client-side only.
   - Communicates with TasksController to retrieve this information.
    
### *SuggestedTasksView*
- This component allows users to view tasks that other users have requested. These tasks will match the preferences selected by the user. It is made up of the TasksThatFitCriteriaView and EditYourInterestsView.
- Resides in the client-side only.
- Communicates with the TasksController and UserController to attain information on the user’s preferences and tasks matching those.
- Passes the requests controller to components within it and communicates with the requests controller to show tasks matching user criteria.

  ### *EditYourInterestsView*
  - This component displays the interest settings of the user, and allow the user to change their interests
  - Resides in the client-side only.
  - Receive information from and write information to UserController

    ### *Dropdown View*
    - This component displays a list of popular and potential interests that users can choose from.
    - Resides in the client-side only.
    - Receive information from and write information to UserController.

  ### *TasksThatFitCriteriaView*
  - This component displays a list of tasks that fits the criteria of the user. It is made up of IncomingRequestsCardView component.
  - Resides in the client-side only.
  - Receive information from TasksController and UserController by communicating with them.
    
    ### *IncomingRequestsCardView*
    - This component displays the details of a task in a card. It also allows the users to click into each task to view more information.
    - Resides in the client-side only.
    - Communicates with the TasksController to receive this information.

### *MyRequestsView*
- This component displays a list of tasks that have been posted by the user. It also allows the user to click into each task to see more information and edit the request.
- Receives and writes information from RequestsController.
- Resides in the client-side only.
- Passes the requests controller to components within it and communicates with the requests controller to retrieve a user’s requests. 

  ### *YourRequestsCardView*
  - This component displays information about a single request the user has made.
  - Resides in the client-side only.
  - Communicates with the RequestsController to receive information on the user's requests.
  
### *CreateNewRequestView*
- This component displays the actions the user must take to create a new request by prompting them to input information.
- Resides in the client-side only.
- Communicates with the RequestsController to create the request and save its attributes.
- Communicates with the UserController to obtain user information.

  ### *DropdownView (repeated; also located under EditYourInterestsView)*
  - This component displays a list of popular and potential interests that users can choose from.
  - Resides in the client-side only.
  - Receive information from and write information to UserController

  ### *RequestCreatedView*
  - This component creates a pop-up message communicating to the user that the request has successfully been created.
  - The request must have been successfully created in order for this component to appear.
  - Resides in the client-side only.
  - Communicates with RequestsController to update and save the creation of a new request.

### *AdditionalResourcesView*
- This component displays links that navigate to external websites. 
-  Resides in the client-side only.
- It does not communicate with any controllers.

### *EditYourRequestsView*
- This component displays the same information as the CreateNewRequestView with the fields pre-populated based on the task, but can be changed by the user. 
- Resides in the client-side only. 
- Communicates with the RequestsController to update requests in the database.

## Models
### *Firebase Realtime Database*
- Allows controllers to read and write information and notifies them of changes to the database.
- Resides on Server-Side only.
- The RequestsController communicates the following with the Firebase Realtime Database.
  - The RequestsController can communicate information to create request objects in the database.
  - The Requests Controller can read all of the request objects in the database.
- The TasksController can read all of the claimed tasks on the database for the given user.
  - The TasksController can read all of the claimed tasks on the database for the given
  - The TasksController can communicate information to create claimed tasks objects in the database.

### *Firebase User Authentication*
- Receives information from UserController to create new users and authenticate users.
- Resides on Server-Side only.
- Only the UserController Communicates the following with the Firebase User 5Authentication.
  - The UserController can ask to create a new user given user credentials.
  - The UserController can ask to authenticate a new user given user credentials.
  - The UserController can ask to sign out the current user.
  - The UserController will be notified of changes to the user’s authentication.

## Controllers - JavaScript
### *AppController*
- Instantiates all of the controllers, handles the react router to display the proper views for the current screen.
- Resides on Server-Side only.
- AppController passes the UserController to the CreateAccountView.
- AppController passes the UserController to the UserLoginView.
- AppController passes the UserController and the TasksController to the HomepageView.
- AppController passes the TasksController to the ClaimedTasksView.
-  AppController passes the RequestsController to the SuggestedTasksView.
- AppController passes the RequestsController to the MyRequestsView.
- AppController passes the RequestsController to the CreateNewRequestView.

### *RequestsController*
- Communicates with the Firebase Realtime Database to write and read request objects as well as numerous views to display, create, and update requests.
- Reads and writes information dealing with requests in the Realtime Database
- SuggestedTasksView can ask the RequestsController for a list of request objects.
- TasksThatFitCriteriaView can tell the RequestController to claim a request object for a user.
- IncomingRequestsCardView can tell the RequestController to claim a request object for a user.
- MyRequestsView can ask for a list of request objects the current user has made.
- CreateNewRequestView notifies the RequestController of user input and passes it information to create new request objects in the database.
- EditYourInterestsView can ask RequestsController for a list of the most popular tags.
- Resides in Client-Side only.

### *TasksController*
- Communicates with the Firebase Realtime Database to write and read request objects.
- Resides in Client-Side only
- Reads and writes information dealing with tasks in the Realtime Database
- ClaimedTasksView can ask the TaskController for a list of all the Task objects that the user has claimed.
- ClaimedTaskCardView can ask the TaskController for a list of all the Task objects that the user has claimed and notify the TaskController if a user has completed or abandoned their claimed task.
- ClaimedTaskMoreCardView can ask the TaskController for the details of a specific task that the user has claimed.
- SuggestedTasksView can ask the TaskController for a list of all the Task objects that the user has claimed
- IncomingRequestsCardView can ask the TaskController for the detail of a task and populate the information in a card format.


### *UserController*
- Communicates with the Firebase User Authentication to create new accounts and log users in using user credentials as well as write changes to the user object in the database. Also handles reading and writing to the user object in the realtime database.
- Resides in Client-Side only.
- Communicates with Firebase User Authentication to create new accounts and log users in user user credentials.
- Communicates with the Realtime Database to read and write user objects.
- NavbarView can ask the UserController for a user object and the user’s login state.
- AccountDropDownView can notify the UserController if the user has logged out.
- UserLoginView can ask the UserController to authorize a user given their username and password.
- CreateAccountView can ask the UserController to update the user’s information in the database as a new user. 
- EditYourInterestsView can ask the UserController for the user’s saved interests, and can notify the UserController of newly added user interests.




