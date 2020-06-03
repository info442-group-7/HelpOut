import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card } from 'antd';
import '../../App.css'
import { InfoCircleTwoTone, EditTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import firebase from 'firebase/app';
import 'firebase/database';

const abandon = <span>Give up...</span>;
const complete = <span>Done!</span>;
const more = <span>More...</span>;

class ClaimedTasksCardView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            currentUser: 'kelsie', tasks: [], requests: [], requester: []
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    componentDidMount() {
        this.tasksRef = firebase.database().ref('CLAIMED_TASK');
        this.tasksRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ tasks: value });
        });

        this.requestsRef = firebase.database().ref('REQUEST');
        this.requestsRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ requests: value });
        });

        this.requesterRef = firebase.database().ref('REQUESTER');
        this.requesterRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ requester: value });
        });
    }

    componentWillUnmount() {
        this.tasksRef.off();
    }


    handleClick() {
        this.setState(previousState => {
            return {
                succeed: !previousState.succeed
            };
        });
    }

    // on click, do something about REQUEST.REQUEST_STATUS 
    onClick() {
        console.log('clikced done!!');
        this.setState({
            clicked: false
        });
    }

    render() {
        if (!this.state.tasks) return null; 

        let taskKeys = Object.keys(this.state.tasks);
        let mappedKeys = taskKeys.map((key) => {
            let taskObj = this.state.tasks[key];
            taskObj.id = key;
            return taskObj;
        });

        let requestKeys = Object.keys(this.state.requests);
        let mappedRequestKeys = requestKeys.map((key) => {
            let requestObj = this.state.requests[key];
            requestObj.id = key;
            return requestObj;
        });

        let requesterKeys = Object.keys(this.state.requester);
        let mappedRequesterKeys = requesterKeys.map((key) => {
            let requesterObj = this.state.requester[key];
            requesterObj.id = key;
            return requesterObj;
        });

        let taskItems = mappedKeys.map((taskObj) => {
            let requestValue = ''
            let requesterValue = ''
            if (this.state.currentUser == taskObj.USER_ID && taskObj.TASK_STATUS == 'incomplete') {
                console.log(taskObj.TASK_STATUS)

                mappedRequestKeys.map((requestObj) => {
                    if (requestObj.TASK_ID == taskObj.TASK_ID) {
                        requestValue= requestObj
                    }
                })

                mappedRequesterKeys.map((requesterObj) => {
                    if (requesterObj.REQUESTER_ID == taskObj.REQUESTER_ID) {
                        requesterValue= requesterObj
                    }
                })

                return <div className='col'> <ClaimedTaskView request={requestValue} task={taskObj} requester={requesterValue}/></div>
            }
        });
      

        return (
            <div className="flex-grid">
                { taskItems }
            </div>
        );

    }
}

class ClaimedTaskView extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: true, taskid: '', task: this.props.task };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
        this.abandonClick = this.abandonClick.bind(this)
    }
    handleClick() {
        this.setState(previousState => {
            return {
                succeed: !previousState.succeed
            };
        });
    }
    onClick() {
        this.setState({
            clicked: false,
        });

        this.tasksRef = firebase.database().ref('CLAIMED_TASK');
        firebase.database().ref('CLAIMED_TASK').child('/' + this.state.task.TASK_ID + '/')
        .update({TASK_STATUS: 'complete' });

        this.requestsRef = firebase.database().ref('REQUEST');
        firebase.database().ref('REQUEST').child('/' + this.state.task.REQUEST_ID + '/')
        .update({REQUEST_STATUS: 'complete' });        
    }

    abandonClick() {
        
        this.requestsRef = firebase.database().ref('REQUEST');
        firebase.database().ref('REQUEST').child('/' + this.state.task.REQUEST_ID + '/')
        .update({TASK_ID: '' });
        
        this.tasksRef = firebase.database().ref('CLAIMED_TASK');
        firebase.database().ref('CLAIMED_TASK').child('/' + this.state.task.TASK_ID + '/')
        .remove()

        

    }

    render() {

        function testUser () {
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                // User is signed in.
                console.log('signed in')
                console.log(user.uid)
              } else {
                // No user is signed in.
                console.log('not signed in')
              }
            });
            console.log("you've reached function testUseryay!")
          } 

        const Results = () => (
            <Tooltip placement="bottom" title={abandon}>
                <Button onClick={this.abandonClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
            </Tooltip>
        )
        const succeed = (
            <div>(253) 310-3409<br></br></div>
        )
        const notsucceed = (
            <div>
                <Tooltip placement="bottom" title={more}>
                    <Button>
                        <InfoCircleTwoTone style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
                <Tooltip placement="bottom" title={complete}>
                    <Button onClick={this.onClick}>
                        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
            </div>
        )
        let request = this.props.request;
        let task = this.props.task;
        let requester = this.props.requester;
        testUser()

        if (this.state.clicked) {
            return (
                <div style={{ marginRight: '50%' }}>

                    <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                        <h5 className="cardTitle"> { request.REQUEST_TITLE }</h5>
                        <hr className="cardLineBreak"></hr>
                        <div className="cardDesDiv">
                            <p className="cardDescription">{ request.REQUEST_DESCRIPTION } </p>
                        </div>
                        <p className="cardRequester">{ requester.REQUESTER_FNAME }  { requester.REQUESTER_LNAME }</p>
                        <p className="cardRequested">Accepted on {task.CLAIMED_TIME }</p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                            <div> {this.state.succeed ? null : <Results />}</div>
                            <div onClick={this.handleClick.bind(this)}> {this.state.succeed ? succeed : notsucceed} </div>
                        </div>
                    </Card>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default ClaimedTasksCardView;

//  <Grid container justify="center">
//<DoneButton size="small" onClick={this.onClick} >Done!</DoneButton>

//</Grid>

 ///   <MoreButton size="small"> More... </MoreButton>
 ///                <MyButton size="small" onClick={this.onClick} >Give up...</MyButton>



//<Container maxWidth="xs">
//    <Cards className={useStyles.root} variant="outlined">
//        <CardContent>
//
//
//        </CardContent>
//        <CardActions>
//            <Grid
//                container
//                direction="row"
//                justify="space-between"
//                alignItems="center"
//            >
//                <div onClick={this.handleClick.bind(this)}>
//                    {this.state.succeed ? succeed : notsucceed}
 //               </div>
//

  //          </Grid>

    //    </CardActions>

      //  {this.state.succeed ? null : <Results />}
  //  </Cards>
//</Container>





