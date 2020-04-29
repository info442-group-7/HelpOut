// NavBarView
// pre: none
// post: Render returns JSX representing the navbar
class NavBar extends React.Component {

    // returns the navbar based on whether or not a user is logged in
    render() {
        let userController = this.props.userController;
    };
}

// AccountDropdownView
// pre: The user is authenticated
// post: Render returns JSX representing the AccountDropdownView
class AccountDropdownView extends React.Component {

    // returns options to either log out or change personal information
    render() {
        let userController = this.props.userController;
    }
}

// UserLoginView
// pre: The user is not authenticated
// post: Render returns JSX representing the UserLoginView
class UserLogin extends React.Component {

    // returns actions to either log in to the system or sign up 
    render() {
        let userController = this.props.userController;
    }
}

// CreateAccountView
// pre: User is not authenticated
// post: Render returns JSX representing the CreateAccountView
class createAccount extends React.Component {

    // returns actions to create a new account in the system 
    render() {
        let userController = this.props.userController;
    }
}

// HomepageView
// pre: user must be logged in
// post: Render returns JSX representing the HomepageView
class Homepage extends React.Component {

    // returns information on the user’s activity and options for more actions
    render() {
        let userController = this.props.userController;
        let tasksController = this.props.tasksController;
    }
}

// ClaimedTasksView
// pre: The user has been authenticated
// post: Render returns JSX representing the ClaimedTasksView
class ClaimedTasksView extends React.Component {

    // returns a list of claimed tasks by the user
    render() {
        let tasksController = this.props.tasksController;
        let user = this.props.user;
    }
}

// ClaimedTaskCardView
// pre: none
// post: Render returns JSX representing a ClaimedTaskCardView
class ClaimedTasksCardView extends React.Component {

    // returns details of a given task
    render() {
        let tasksController = this.props.tasksController;
    }
}

// ClaimedTasksMoreCardView
// pre: none
// post: Render JSX representing a ClaimedTaskMoreCardView
class ClaimedTaskMoreCardView extends React.Component {

    // returns details of a given task and requester’s contact information
    render() {
        let task = this.props.task;
    }
}

// EditYourInterestsView
// pre: none
// post: Render returns JSX that includes a form for users to input their interests
class EditYourInterestsView extends React.Component {

    // returns a form for users to input their interests
    render() {
        let userController = this.props.userController;
        let requestsController = this.props.requestsController;
    }
}

// DropDownView
// pre: none
// post: Render returns JSX representing a drop down list for tags
class DropDownView extends React.Component {

    // returns a drop down menu for user to choose from a list of tags
    render() {
        let user = this.props.user;
        let tags = this.prop.tags;
    }
}

// SuggestedTasksView
// pre: The user has been authenticated
// post: Render returns JSX representing Screen 6: Suggested Tasks
class SuggestedTasksView extends React.Component {

    // returns tasks matching user criteria
    render() {
        let requestController = this.props.requestController;
    }
}

// TasksThatFitCriteriaView
// pre: none
// post: Render returns JSX representing the TasksThatFitCriteriaView
class TasksThatFitCriteriaView extends React.Component {

    // returns list of incoming request cards
    render() {
        let requests = this.props.requests;
        let claimRequest = this.props.claimRequest;
    }
}

// IncomingRequestCardView
// pre: none
// post: Render returns JSX representing the IncomingRequestCardView
class IncomingRequestCardView extends React.Component {

    // returns details of a task for a given card
    render() {
        let request = this.prop.request;
        let claimRequest = this.props.claimRequest;
    }
}

// TasksThatFitCriteriaView
// pre: none
// post: Render returns JSX representing the list of incoming request cards
class TasksThatFitCriteriaView extends React.Component {

    // returns a list of tasks that fits user's criteria
    render() {
        let requests = this.props.requests;
        let claimRequest = this.props.claimRequest;
    }
}


// IncomingRequestsCardView
// pre: none
// post: Render returns JSX representing a IncomingRequestCardView
class IncomingRequestsCardView extends React.Component {

    // returns the details of the task selected by the user
    render() {
        let request = this.prop.request;
        let claimRequest = this.props.claimRequest;
    }
}

// MyRequestsView
// pre: none
// post: Render returns JSX representing a MyRequestsView
class MyRequestsView extends React.Component {

    // returns a list of user's requests
    render() {
        let requestsController = this.props.requestsController;
    }
}

// YourRequestsCardView
// pre: none
// post: Render returns JSX representing a YourRequestsCardView 
class YourRequestsCardView extends React.Component {

    // returns a detailed view of the request card
    render() {
        let request = this.prop.request;
    }
}

// CreateNewRequestView
// pre: none
// post: Render returns JSX representing a CreateNewRequestView
class CreateNewRequestView extends React.Component {

    // returns a form for users to create a request
    render() {
        let requestController = this.prop.requestController;
    }
}

// RequestCreatedView
// pre: All input fields of form are valid upon submission 
// post: Render returns JSX representing a RequestedCreatedView
class RequestedCreatedView extends React.Component {

    // renders the pop-up message to user
    render() {
    }
}

// pre: none
// post: Render returns JSX representing the AdditionalResourcesView
class AdditionalResourcesView extends React.Component {

    // returns links that navigate to external websites 
    render() {
    }
}

// pre: none
// post: Render returns JSX representing the EditYourRequestsView
class EditYourRequestsView extends React.Component {

    // returns a pre-populated request form for the user to make changes to
    render() {
        let requestController = this.props.requestController;
    }
}

