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
            currentUser: 'kelsie', tasks: [], requests: []
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
        if (!this.state.tasks) return null; // or return whatever display u want. maybe a message that says no suggestions ??

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

        let taskItems = mappedKeys.map((taskObj) => { // for each taskObj
            let taskValue = '' // initalize a task object
            if (this.state.currentUser == taskObj.USER_ID) { // if the user claimed that task
                mappedRequestKeys.map((requestObj) => { // you iterate through for each request object
                    if (requestObj.REQUEST_ID == taskObj.TASK_ID) { // if the request objectid  matches the task object
                        console.log(requestObj)
                        taskValue= requestObj // asign the object to taskvalue
                    }
                })
                return <ClaimedTaskView task={taskValue} />
            } //go to next task
        });
      

        return (
            <div className="container">
                { taskItems }
            </div>
        );

    }
}

class ClaimedTaskView extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: true, };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
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
            clicked: false
        });
    }
    render() {
        const Results = () => (
            <Tooltip placement="bottom" title={abandon}>
                <Button onClick={this.onClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
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
        let task = this.props.task;

        if (this.state.clicked) {
            return (
                <div style={{ marginRight: '50%' }}>

                    <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                        <h5 className="cardTitle"> { task.REQUEST_TITLE }</h5>
                        <hr className="cardLineBreak"></hr>
                        <div className="cardDesDiv">
                            <p className="cardDescription">{ task.REQUEST_DESCRIPTION } </p>
                        </div>
                        <p className="cardRequester">Requester's name</p>
                        <p className="cardRequested">Accepted 10 days ago</p>
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




