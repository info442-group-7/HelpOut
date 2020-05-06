# Project Plan

## Work Coordination
Our team’s work will be coordinated by our CEO, Pranita, who will supervise task delegation as well as ensuring the completion of work. 
### Justification
We have decided that Pranita will be in charge of coordinating the work, as she has previously held leadership positions, including with her dance team and industry experience. She has interned as a Technical Product Management Intern at Tableau and exercised multiple Agile methodologies, particularly Scrum, and will share that experience with the team to ensure the product is delivered at a steady pace. She is committed to breaking up tasks and assigning them based on her peer’s interest and capabilities. Finally, as CEO, she has committed to being engaged with every aspect of the project and ensure that everything is funcitoning smoothly. Coordinating the project's work will allow her to do that.

## Project Management Practices:
- We will track our current and upcoming work through Github Issues. Pranita and Kelsie will be checking this every day, and Eddy and Jamie will be checking it at least twice a week. 
- Pranita or Kelsie will be adding and assigning the tasks.
- When a member has completed their assigned task they will mark it as complete on Github. 
- A member who has completed their task will inform Pranita or Kelsie, who will then assign them a new task.
- If a member has trouble with their task, we will work as a group to solve it. If it is taking them longer than expected to complete the task, we will discuss adding a member to the task.
- During weekly meetings and on an as-needed basis we will discuss the progress of each member’s assigned work. 
- Pranita and Kelsie will check-in through Slack every few days to make sure everyone is on track, working with any team member individually in case things begin to slip.
- We will work from completing the highest priority to the lowest priority items. We have marked each task with a priority level in a separate requirements document, with P1 being the highest priority and P5 being the lowest priority. Tasks that are marked as P1 or P2 are mandatory, with P3 through P5 being considered “nice to have”. 
### Justification
 We have determined the mix of Agile and Waterfall development methods is more suitable for our project because of our relatively small size as well as extensive planning prior to the development. We have determined that having a need-based basis as well as a regular meeting time is most suitable for us because of the fast-paced development that we are trying to have and the limited timeframe.
 
Kelsie has been in charge of determining this, as she also has a lot of theoretical knowledge about project management, because she had taken a class on project management earlier. She is a very organized person, and uses Google Calendar to keep track of all the deadlines for different projects. Their experience and expertise justifies their prominent role in project management and leadership.

We will be working down the priority scale because of the limited technical expertise and limited timeline that restrains our project. We need to ensure features that are more essential for the proper function of our software are put on a higher priority than portions that perhaps are nice to have but do not contribute greatly to the main functionality of the software.

## Meetings 
- Set a time to meet on Mondays 4-6 outside of class time
- Meetings will be a need-basis. 
- Coding sprints to collaborate and get help from each other.
- Pranita will plan the agendas of each meeting and announce it prior to the meeting.
### Justification
We have determined Mondays from 4 p.m.to 6 p.m. is the best time for our regular meeting to be after filling out a when2meet form that takes into account everyone on the team's schedule. By having a time outside of class that we are confident everyone is available for, we will better ensure that we have ample time to collaborate. This is in addition to our work during class time every Monday and Wednesday from 8:30 a.m. to 10:30 a.m, which we expect one another to attend. 

We have determined that having a need-based basis as well as a regular meeting time is most suitable for us because of the fast-paced development that we are trying to have and the limited timeframe. In development phases of our project, we have discussed and decided that more regular team meetings will be important, as we all have limited experience developing a React.js web app. By having need-based meetings during this time especially, if we use a collaborative approach we can help each other with their parts. We have determined that a collaborative approach is best for our team because we all have different levels of understanding of React.js technology. Some of us are more familiar with the language whilst others have never learned about it before. If we use a collaborative approach we can help each other with their parts. This ensures both a timely delivery of the software and consistency within the software.

We have determined the mix of agile and waterfall development method is more suitable for our project because of our relative small size as well as extensive planning prior to the development. We have determined that having a need-based basis as well as a regular meeting time is most suitable for us because of the fast-paced development that we are trying to have and the limited timeframe.

We have determined having the PM and CEO to plan agendas prior to the meeting is the most efficient way because it helps steer us away from segues and make our time spent together more productive.

## Communication Tools
- Daily/instant messaging on Slack
- Zoom for virtual meetings
### Justification
We chose **Slack** as our primary communication channel because we held a discussion and found consensus that it would be the most convenient. Our primary class communication channel is also Slack, so being able to easily ask our professor and TA questions in the same app as team discussions are being held made Slack clearly the most efficient and convenient option for our team. Having it be used as a class-wide tool also meant that all team members had at least some experience using Slack prior to our team’s channel being created. 

We chose **Zoom** as our primary voice-call / meeting tool because it was the only relevant tool that we all had experience using. Because our class lectures are also held on Zoom, we all had knowledge on how the interface works and how to connect to meetings. There were no other tools that all of us had this same foundational knowledge of. In addition, Zoom has integrations with Slack that allow us to easily set up our weekly meetings with a message in chat allowing us to join with one click. 

## Component Owners in Architecture
| Owner              | Component                                                                                     | Justification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Whole Team         | NavBarView AccountDropdownView HomepageView                                                   | The NavBarView, AccountDropdown and HomepageView will be done as a team. Because of their nature as foundational components that make up our landing page, we feel that creating this base together will make expectations for code styling and processes clear to all team members. In addition, we all have limited experience working in React, so this will serve as a great opportunity for knowledge transfer between team members.                                                                                                                                                                                                                                                                                                                         |
| Eddy Huang         | ClaimedTasksView  ClaimedTaskCardView ClaimedTaskMoreCardView                                 | Eddy has limited experience in web development, but formatting a card view requires a bit more design skills and CSS programming and less react.js programming skills, which Eddy is comparatively better at. He also has experience with UI design, so that can be helpful. In addition, working on card view, a component that requires lots of collaboration with the team, means that Eddy can get more feedback from the team with his component. That could help improve the quality of his code.                                                                                                                                                                                                                                                           |
| Kelsie Johnson     | FindTasksView AvailableTasksView IncomingRequestsCardView MyRequestsView YourRequestsCardView | Kelsie will be assigned the card based views not assigned to Eddy. Since they are all similar views, it is best that one person takes them on as a group since they will become more familiar with their formatting and functions. Kelsie also has experience in creating card-based view displays from a previous class.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Pranita Mantravadi | AppController Firebase Realtime Database Firebase User Authentication AdditionalResourcesView | Pranita will be assigned to working on our database, as she designed our database schema and consequently has a strong basis of knowledge of how it must work. She will also own the AppController, as it will interact closely with the database.  She will take on the AdditionalResourcesView, as it is the simplest React component and to allow her to work primarily on backend functionality.                                                                                                                                                                                                                                                                                                                                                              |
| Jamie Walker       | UserLoginView CreateAccountView EditYourRequestsView CreateNewRequestView RequestCreatedView  | Jamie will be assigned the user login and user sign-up pages because in her experience with React in a previous class, she has experience creating user logins that send account data to a Firebase database (which mirrors the architecture of this process in our project). In this course, she also learned how to create forms that required inputted data to be in a certain form, which will be useful to know for these components, as we aim to keep data entered in a standardized format.  A similar rationale can be applied to why Jamie will own the  EditYourRequestsView, CreateNewRequestView and RequestCreatedView : they rely heavily on forms, validated data and connection to the Firebase database which she has relevant experience with. |

### Overall Justification
We have divided the components with careful consideration to each team member’s relative expertise, comfort level and interest in the component. This was done in a group discussion where we openly communicated why we desired to work on certain components, with our CEO overseeing and confirming our final decisions. In dividing the components up between different group members, we also were careful to establish a fair distribution of work to ensure all team members felt their workload was feasible and equitable. 

## Timeline

**Week 6:** Revise Requirements
- Prioritize the requirements from P1 through P5, with P1 and P2 being mandatory for the final product.
- Remove unnecessary requirements, and make any changes to other requirements affected by their removal.
- Deliverable: A finalized list of requirements clarifying what is mandatory for our product and what is “good-to-have”.

**Week 6:** Finish Lab 5
- Decide on the packages and builds that will be used.
- Deliverable: A package.json file listing the various packages and builds we will be using.

**Week 6:** Finish HW 5
- Assign ownership for each component
- Write written justifications
- Deliverable: A milestone timeline and full project plan complete with written justification. 

**Week 6:** Revamp the Architecture
- Prioritize components similarly 
- Re-design to have only one main App controller.
- Deliverable: A revised architecture planning document, with each team member being assigned ownership of different parts, detailed with priority levels matching the requirements document. 

**Week 7:** Finalize the Design
- Decide on UI library 
- Design on colors/style guide
- High-fidelity wireframe creation
- Deliverable: A set of high-fidelity wireframes and style guide to guide the front-end development of our web app.

**Week 7-9:** Code Sprints
- Development of all components (models, controllers, and views) in collaborative and individual coding sessions.
- Deliverable (end of Week 9): All components completed.

**Week 10:** Verification and Evaluate
- Test all of the components and the app as a whole, using a system of inter-team inspection (a deep code review with members of our team), and code review with students from other teams and check-ins with our professor. 
- Deliverable: A functional product that satisfies the needs of potential users (post-user-testing). Additionally, an evaluation of whether or not our project satisfies the requirements and a reflection of the development lifecycle.

### Justification
On 5/1, our CTO informed us that he will no longer be enrolled in this course. As such, we had to consider re-scoping our project to match the technical capabilities of our existing team members. For this reason, we included revisions of past deliverables (such as the Requirements and Architecture Documents). These revisions are necessary in order to continue with creating our project plan, so we added those milestones to the top of our timeline. After re-scoping and re-assigning the components, we are looking to add a little more detail to our wireframe screens. Our CDOs, Jamie and Eddy, will be providing more clarity on how our product should look. This will help us in actually building the screens. We then move on to three weeks of continuous coding and development to get the product up and running, beginning with a collaborative set-up so everyone is on the same page and is aware of how to move forward. Finally, after all the necessary requirements have been met, we will begin user-testing and evaluating our product. We are choosing to conduct user-based testing over writing testing code to adjust according to our group’s technical acumen, and while we are familiar with working with testing code, none of us have written it before.

## Requirement Verification
We divided up our requirements into six different categories, each with a different method of verification. The six categories are as follows: <em>Data Format, Purely Visual Elements, Updating the Database, Data Retrieval and Display, Navigational Objects, Text Fields</em>. References to the requirements that fall under each of these categories can also be seen below under <em>'Requirements'</em>.

**Data Format:** The data format category includes requirements that involve verifying the integrity and/or formatting of data in forms before they are sent to the database. This will be verified visually, as the user must be unable to successfully submit a form in which there is invalid data inputted.  Another layer of visual verification is an error message that will display on the interface to the user if any improperly formatted data is attempted to be submitted. The visual verification must also occur on the back-end: all user-inputted data in the database must be in a standardized format with no outliers. 

<em>Requirements:<em/> 1.d, 2.c (all), 2.d (all)

**Purely Visual Elements:** This category specifies those requirements that define where or how an element should appear. Essentially, it will be verified through visual verification, i.e., confirming if the element is rendered as specified. 

<em>Requirements:</em> 1.a, 1.b, 2.b, 2.e (all), 3.a, 3.a.i, 3.b (partial), 3.d, 3.e, 3.f, 4.a, 4.d.vi, 6.a, 6.d, 6.e (partial), 7.a, 7.c, 8.a, 8.b.i (partial), 8.c, 9.b, 9.c, 9.d, 9.e, 10.a, 11.a, 11.b, 11.c

**Updating the Database:** This category includes elements that, upon executing, will trigger a change in the database. It includes elements that will write to the database, elements that will delete from the database and elements that will modify the database. We will verify this by writing test code that will listen to Realtime Database events and return a console message detailing whether the database was successfully updated, and if so, with what data. If the database is not successfully updated, the test will produce a console message indicating failure. These will be manual tests that we will run on our own workstations. 

<em>Requirements:</em> 1.c (all), 2.f (all), 2.g (all), 4.d.vi.b, 4.d.vi.c, 6.l, 6.m, 8.d.i, 9.e.i, 10.b.iv (all), 10.b.v (all)

**Data Retrieval and Display:** This category specifies those elements that access the database to retrieve information and display it on the screen. There is no change being made to the data on the backend, but simply accessing the information, and displaying it for the user. It will be tested through visual verification. If the correct data is displayed on the screen, then we can confirm its functionality. 

<em>Requirements:</em> 3.a.iv, 3.b (partial), 3.c (all), 3.e.i,  3.c.i, 3.e.i, 4.b (all), 4.c (all), 4.d, 4.b (all), 4.c (all), 4.d.i, 4.d.ii, 4.d.iii, 4.d.iv, 4.d.v, 5.a, 5.b, 6.c., 6.d.i, 6.d.ii, 6.d.iv, 6.d.v, 6.e (partial), 6.f, 6.g, 6.m.i, 7.b (all), 7.d., 8.b.i (partial), 8.b.ii, 9.a  

**Navigational Objects**: This category contains any objects that will take the user to a different page once they are clicked. It will be verified by visually confirming that the correct page as specified in the requirements is loaded when the object is clicked.

<em>Requirements:</em> 1.e, 1.f, 2.a, 3.aii, 3.a.iii, 3.e.i.1, 3.e.ii, 3.g (all), 4.d.vi.a, 4.d.vii,  5.a.i, 5.b.i, 5.c, 6.g.i, 7b.d, 7b.e, 8.d, 8.e.i.1, 10.b.vi, 11.c.i-iv

**Text Fields:** This category includes elements that allow users to input information on the application. It will be verified through visual verification, by inputting text in realtime and having it be displayed for each of these elements.

<em>Requirements:</em> 9.e.i.2, 10.b.i, 10.b.ii, 10.b.iii (all)

## Requirement Verification
### Tests
We will be writing manual tests for requirements that edit the database (i.e. requirements falling under the **Updating the Database** category). These tests will rely on Firebase functions that allow us to handle Realtime Database events: onWrite(), onCreate(), onUpdate(), onDelete(). These functions will also allow us to specify the exact location (or path) of the database that we’d like to listen for events in. Thus, our tests will be able to listen to a user’s path, and on update or creation of new data in them, we can print a detailed message to the console detailing its success and the data that was added. If the database is successfully updated with the desired data, a success message must be shown. On a failed write to the database (i.e. if onUpdate() is not triggered), the console message will communicate that the update was unsuccessful. 

Given that we no longer have a CTO to guide us with writing testing code, we have decided to only write tests for database-related requirements. Firebase provides starter functions to make this process feasible for our team, which has no collective expertise in writing tests. For other requirements, we will pivot to analysis-based verification, as detailed in our listing of the requirements above.

### Reviews and Inspections
As a group, once an entire screen is built, we will verify each of the screen’s requirements as listed above. If any of us catch something that does not pass, we will detail notes to the author of the code and discuss how it can be fixed. We will go through this process on a screen by screen basis as we complete them.
- Code Review
  - Inter-team code review:
  We will begin by analyzing the code as a team, with each team member reviewing the      others’ codes. We will stick to a standardized format that will be specified in the components that we write together as a team. We will also review code for efficiency and any bugs. 

- Check-ins with Dastyini and Sukhman:
  - Given our limited experience with React, we will check in often with the Professor and the TA as we approach debugging or if we want to show any updates for feedback/comments.

- When conducting reviews or inspections, the aspects of the code we will inspect to verify that the requirements are being met will be separate broken parts based on requirements.

- For all of the requirements, verifications by the author will be integrated into the process after every build (every screen) and before every group code review (where the other team members conduct testing through the verifications listed above). Only after the requirements have all been verified will the code be committed. 

- These inspections will be conducted on a rolling-basis as team members finish their builds. The first tier of the inspection will involve only the author, but the second tier (group code reviews) will involve the whole team. As an optional third tier, we will involve the Professor or the TA if we feel it’s necessary.  

## A Disaster-Proof Plan
Our plan is already incorporating one unforeseen circumstance, wherein we no longer have a CTO. We have customized it to fit the team’s existing capabilities, while also pushing us to experiment with frontend development. In terms of other “disasters”, because we don’t have too many scheduled synchronized meetings and are planning to collaborate on a rolling-basis, our plan is flexible and will accomodate any delays due to illnesses, injuries, etc. When it comes to technical difficulties, either any limitations in our requirements or difficulties in debugging, our proposition to collaborate during code sprints and code reviews will account for that. We are there to help each other out, whether it’s to brainstorm alternatives or fixing bugs together. We are all aware of each  other’s technical expertise, and we will create a safe space to ask questions and find solutions as a team. 


















