import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { PlusCircleTwoTone, VerticalRightOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import '../../App.css'
import { Card } from 'antd';
import firebase from 'firebase/app';
import 'firebase/database'; 
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';



const DoneButton = styled(Button)({
    background: 'linear-gradient(45deg, #1760fb 30%, #45a5df 90%)',
    color: 'white',
    padding: '.5vmin 3vmin',
    marginTop: '1vmin',
    size: '5vmin',
    fontSize: '1.4vmin'
});

const accept = <span>Claim Task</span>;

class SuggestedTasksCardView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            clicked: true,
            requests: [],
            requester: [],
            currentUserID: '',
            userZip: ''

        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }
    

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {

            var id;
      
            if (user) {
                console.log('This is the user: ', user.uid)
                id = user.uid;
                this.setState({currentUserID: id}); //get user id
      
            } else {
              // No user is signed in.
              console.log("user is not logged in!")
              this.setState({currentUserID: ''});
            }
        });
      

        this.requestsRef = firebase.database().ref('REQUEST');
        this.requestsRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({requests: value});
        });

        this.requesterRef = firebase.database().ref('REQUESTER');
        this.requesterRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({ requester: value });
        });
    }

    componentWillUnmount() {
        this.requestsRef.off();
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
        if (!this.state.requests) return null; // or return whatever display u want. maybe a message that says no suggestions ??

        let requestKeys = Object.keys(this.state.requests);
        // recursively produce list of chirp objcts to render
        let mappedKeys = requestKeys.map((key) => {
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

        let requestItems = mappedKeys.map((requestObj) => {
            if(requestObj.REQUEST_ZIP_CODE == this.props.userZip && requestObj.TASK_ID == '' && requestObj.REQUESTER_ID != this.state.currentUserID) {
                
                let userId = requestObj.REQUESTER_ID;
                var userFullName;

                firebase.database().ref("USER").child(userId).once('value', function(snapshot){
                    let value = snapshot.val();
                    userFullName = value.USER_FNAME + ' ' + value.USER_LNAME;
                    
                });
                console.log(this.state.currentUserID);

                return <div className="col"><SuggestedTask userID= {this.state.currentUserID} name={userFullName} task={requestObj} /></div>
            } else {
                return; //show no requests if none are in?
            }
        });

    

        return (
            <div className='flex-grid'>
                {requestItems}
            </div>
        );
    }

}

// A single task
class SuggestedTask extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            clicked: true,
            requests: [],

        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    //claim task 
    handleClick() {
        console.log('clicky in handleclick')
        this.setState(previousState => {
           return {
                succeed: !previousState.succeed
            };
        });
    }

    // on click, do something about REQUEST.REQUEST_STATUS 
    onClick() {
        console.log('clicked claim: claiming user id is: ' + this.props.userID);
        this.setState({
            clicked: false
        });

        //make new task
        this.tasksRef = firebase.database().ref('CLAIMED_TASK');

        let taskPushRef = this.tasksRef.push()
        let key = taskPushRef.key;

        
        taskPushRef.set({
            CLAIMED_TIME: new Date().toLocaleString(),
            REQUESTER_ID: this.props.task.REQUESTER_ID,
            REQUEST_ID: this.props.task.REQUEST_ID,
            TASK_ID: key,
            TASK_STATUS: "incomplete",
            USER_ID: this.props.userID
        })

        firebase.database().ref('CLAIMED_TASK').child(key)
        .update({TASK_STATUS: 'incomplete', TASK_ID: key });

        //mark request as claimed, set task id
        this.requestsRef = firebase.database().ref('REQUEST');
        firebase.database().ref('REQUEST').child('/' + this.props.task.REQUEST_ID + '/')
        .update({REQUEST_STATUS: 'claimed', TASK_ID: key, USER_ID: this.props.userID }); 
    
     }


    render () {

        //connect these to db values, like status
        const Results = () => (
            <Grid container justify="center">
                <DoneButton size="small" onClick={this.onClick} >Done!</DoneButton>
            </Grid>
        )

        const succeed = (
            <div className='claimedText'>Claimed!</div>
        )

        const notsucceed = (
            <div>
                <Tooltip placement="bottom" title={accept}>
                    <Button onClick={this.onClick}>
                        <PlusCircleTwoTone style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
            </div>
        )

        let task = this.props.task;



        // need to do something about user id / requester id. get it and cross reference their info from REQUESTER and USER
        return (
            <div style={{ marginRight: '50%' }}>
            <Card className="cardStyle" style={{ width: '350px', height: 'auto', margin: '30px', boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column'}}>
                <h5 className="cardTitle">{task.REQUEST_TITLE}</h5>
                <hr className="cardLineBreak"></hr>
                <div className="cardDesDiv">
                    <p className="cardDescription">{task.REQUEST_DESCRIPTION} </p>
                </div>
                <p className="cardRequester">{this.props.name} </p>
                <p className="cardRequested">Created on {task.REQUEST_DATE}</p>
                <div className="suggestedTaskButton">
                    <div onClick={this.handleClick.bind(this)}> {this.state.succeed ? succeed : notsucceed} </div>
                </div>
            </Card>
            </div>

        )
    }


}


export default SuggestedTasksCardView;




//<Container maxWidth="xs">
//    <Cards className={useStyles.root} variant="outlined">
//        <CardContent>
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





