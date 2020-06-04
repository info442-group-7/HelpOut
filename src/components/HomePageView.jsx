import React, { Component } from 'react';
import { Button } from 'antd';
import '../App.css'
import firebase from 'firebase/app';
import 'firebase/database';


class HomePageView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            currentUser: null,
            users: [],
            tasks: []
        };
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {

            var currentUserId;

            if (user) {
                console.log('This is the user: ', user.uid)
                currentUserId = user.uid;
                this.setState({ currentUser: currentUserId })
                // User is signed in.
            } else {
                // No user is signed in.
                console.log("user is not logged in!")
                currentUserId = null;
            }
        })
        this.userRef = firebase.database().ref('USER');
        this.userRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ users: value });
        });

        this.taskRef = firebase.database().ref('CLAIMED_TASK');
        this.taskRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ tasks: value });
        });
    };

    componentWillUnmount() {
        this.userRef.off();
    }


    render() {


        let userKeys = Object.keys(this.state.users);
        let mappedKeys = userKeys.map((key) => {
            let userObj = this.state.users[key];
            userObj.id = key;
            return userObj;
        });

        let taskKeys = Object.keys(this.state.tasks);
        let mappedtaskKeys = taskKeys.map((key) => {
            let taskObj = this.state.tasks[key];
            taskObj.id = key;
            return taskObj;
        });

        let uObj = ''
        let userItems = mappedKeys.map((userObj) => {
            if (this.state.currentUser == userObj.USER_ID) {
                uObj = userObj;
            }
        });

        let tObj = []
        let taskItems = mappedtaskKeys.map((taskObj) => {
            if (taskObj.TASK_STATUS == 'complete')
            tObj.push(taskObj);
        });

        let utObj = []
        let utaskItems = mappedtaskKeys.map((taskObj) => {
            if (taskObj.USER_ID == this.state.currentUser & taskObj.TASK_STATUS == 'complete')
            utObj.push(taskObj);
        });

        return (
            <div>
                <div><HomePage user={uObj} task={tObj} usertask={utObj}/></div>
            </div>
        );
    }
}

class HomePage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let userObj = this.props.user;
        let taskObj = this.props.task
        let usertaskObj = this.props.usertask;
        console.log(usertaskObj.length)



        return (
            <div className="homepageBody">
                <div className="greeting">
                    <h1 className="homePageHeader">Hello, {userObj.USER_FNAME}!</h1>
                    <div id="homepage-descrip">
                        <p>Our community has completed <b>{taskObj.length} task(s) </b>so far to help the people in need.</p>
                        <p>You have helped <b>{usertaskObj.length} people </b>so far. Would you like to make it <b>{usertaskObj.length + 1} </b>today?</p>
                    </div>
                </div>
                <div className='options'>
                    <div className='needHelp'>
                        <h1 className='homePageSubH'>I want to help out...</h1>
                        <div className="homePageButtons" style={{ display: 'flex' }}>
                            <Button className="bar-button" type="primary" style={{
                                fontSize: '3vmin',
                                marginTop: '1vmin',
                                paddingBottom: '6vmin',
                                paddingTop: '2vmin',
                                width: '110%',
                                textAlign: 'center',
                                borderRadius: '5px',
                                fontWeight: 'bolder'
                            }} href="ClaimedTasks" >Claimed tasks </Button>

                            <Button className="bar-button" type="primary" style={{
                                fontSize: '3vmin',
                                marginTop: '1vmin',
                                paddingBottom: '6vmin',
                                paddingTop: '2vmin',
                                width: '110%',
                                textAlign: 'center',
                                borderRadius: '5px',
                                fontWeight: 'bolder'
                            }} href="SuggestedTasks">Find more tasks</Button>
                        </div>
                    </div>
                    <div className='helpOthers'>
                        <h1 className='homePageSubH'>I need some help...</h1>
                        <div className="homePageRequestButtons">
                            <div className="homePageButtons" style={{ display: 'flex' }}>
                                <Button className="bar-button" type="primary" style={{
                                    fontSize: '3vmin',
                                    marginTop: '1vmin',
                                    paddingBottom: '6vmin',
                                    paddingTop: '2vmin',
                                    width: '110%',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    fontWeight: 'bolder'
                                }} href="MyRequests">My requests </Button>
                                <Button className="bar-button" type="primary" style={{
                                    fontSize: '3vmin',
                                    marginTop: '1vmin',
                                    paddingBottom: '6vmin',
                                    paddingTop: '1vmin',
                                    width: '110%',
                                    textAlign: 'center',
                                    borderRadius: '5px',
                                    fontWeight: 'bolder'
                                }}href="CreateRequest">Create new request</Button>
                            </div>
                            <Button className="bar-button" type="primary" style={{
                                marginLeft: '3vmin',
                                fontSize: '3vmin',
                                borderColor: 'gray',
                                backgroundColor: 'gray',
                                marginTop: '1vmin',
                                paddingBottom: '6vmin',
                                paddingTop: '1vmin',
                                paddingLeft: '2.5vmin',
                                paddingRight: '2.5vmin',
                                textAlign: 'center'
                            }}href="AdditionalResources">Additional Resources </Button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default HomePageView;
