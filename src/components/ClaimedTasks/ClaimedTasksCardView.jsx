import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card } from 'antd';
import '../../App.css'
import { InfoCircleTwoTone, EditTwoTone, CheckCircleTwoTone, ArrowLeftOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import firebase from 'firebase/app';
import 'firebase/database';


const abandon = <span>Give up...</span>;
const complete = <span>Done!</span>;
const more = <span>More...</span>;
const back = <span>Back</span>;

class ClaimedTasksCardView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            currentUser: '', tasks: [], requests: [], requester: []
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log('signed in')
                this.setState({ currentUser: user.uid })

            } else {
                // No user is signed in.
                console.log('not signed in')
            }

        }.bind(this))

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

    testUser() {
        }

        componentWillUnmount() {
            this.tasksRef.off();
        };


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
                            requestValue = requestObj
                        }
                    })

                    mappedRequesterKeys.map((requesterObj) => {
                        if (requesterObj.REQUESTER_ID == taskObj.REQUESTER_ID) {
                            requesterValue = requesterObj
                        }
                    })

                    return <div className='col'> <ClaimedTaskView request={requestValue} task={taskObj} requester={requesterValue} /></div>
                }
            });


            return (
                <div className="flex-grid">
                    {taskItems}
                </div>
            );

        }
    }

class ClaimedTaskView extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: true, taskid: '', task: this.props.task, succeed: null };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
        this.abandonClick = this.abandonClick.bind(this)
        this.moreClick = this.moreClick.bind(this)
        this.backClick = this.backClick.bind(this)

    }
    handleClick() {
        this.setState(previousState => {
            return {
                succeed: !previousState.succeed
            };
        });
    }
    moreClick() {
        console.log("succeed")
        this.setState({
                succeed: "true",
        }
        );
    }
    backClick() {
        console.log("succeed")
        this.setState({
                succeed: null,
        }
        );
    }
    onClick() {
        this.setState({
            clicked: false,
        });

        this.tasksRef = firebase.database().ref('CLAIMED_TASK');
        firebase.database().ref('CLAIMED_TASK').child('/' + this.props.request.TASK_ID + '/')
        .update({TASK_STATUS: 'complete' });

        //mark as claimed
        this.requestsRef = firebase.database().ref('REQUEST');
        firebase.database().ref('REQUEST').child('/' + this.props.request.REQUEST_ID + '/')
        .update({REQUEST_STATUS: 'claimed' });        
    }

    abandonClick() {

        this.requestsRef = firebase.database().ref('REQUEST');
        firebase.database().ref('REQUEST').child('/' + this.props.task.REQUEST_ID + '/')
        .update({TASK_ID: '', REQUEST_STATUS:'open' });
        
        this.tasksRef = firebase.database().ref('CLAIMED_TASK');
        firebase.database().ref('CLAIMED_TASK').child('/' + this.props.task.TASK_ID + '/')
            .remove()



    }

    render() {
        let request = this.props.request;
        let task = this.props.task;
        let requester = this.props.requester;


    

    const Results = () => (
        <Tooltip placement="bottom" title={abandon}>
            <Button onClick={this.abandonClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
        </Tooltip>
    )
    const succeed = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>Phone Number: { requester.REQUESTER_PHONE_NUMBER} <br /> Address:  { requester.REQUESTER_STREET_ADDRESS}<br></br></div>
    )
    const More = () => (
        <div>
            <Tooltip placement="bottom" title={more}>
                <Button onClick={this.moreClick}>
                    <InfoCircleTwoTone style={{ fontSize: '40px' }} />
                </Button>
            </Tooltip>
          
        </div>
    )
    const Complete = () => (
        <div>
            <Tooltip placement="bottom" title={complete}>
                <Button onClick={this.onClick}>
                    <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '40px' }} />
                </Button>
            </Tooltip>
        </div>
    )
    const MoreInfo = () => (
        <div style={{ display: 'flex', justifyContent: 'spaceBetween', flexDirection: 'row' }}>
            
            <Tooltip placement="bottom" title={back}>
                <Button onClick={this.backClick} style={{marginRight:"2%"}}>
                    <ArrowLeftOutlined twoToneColor="#52c41a" style={{ fontSize: '40px' }} />
                </Button>
            </Tooltip>
            <div style={{ display: 'flex', flexDirection: 'column' }}>Phone Number: { requester.REQUESTER_PHONE_NUMBER} <br /> Address:  { requester.REQUESTER_STREET_ADDRESS}<br></br></div>


        </div>
    )


    if(this.state.clicked) {
        return (
            <div style={{ marginRight: '50%' }}>

                <Card className="cardStyle" style={{ width: '350px', boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                    <h5 className="cardTitle"> {request.REQUEST_TITLE}</h5>
                    <hr className="cardLineBreak"></hr>
                    <div className="cardDesDiv">
                        <p className="cardDescription">{request.REQUEST_DESCRIPTION} </p>
                    </div>
                    <p className="cardRequester">{requester.REQUESTER_FNAME}  {requester.REQUESTER_LNAME}</p>
                    <p className="cardRequested">Accepted on {task.CLAIMED_TIME}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                        <div> {this.state.succeed ? null : <Results />}</div>
                        <div> {this.state.succeed ? null : <More />}</div>
                        <div> {this.state.succeed ? null : <Complete />}</div>
                        <div> {this.state.succeed ?  <MoreInfo />: null}</div>

                        
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




