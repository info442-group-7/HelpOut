import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import '../../App.css'
import { EditTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import firebase from 'firebase/app';
import 'firebase/database';

const deletetask = <span>Delete</span>;
const edit = <span>Edit</span>;

class MyRequestsCardView extends Component {

    constructor(props) {
        super(props);
        this.state = { clicked: true, 
            currentUser: null,
            count: 0
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);

    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {

            var currentUserId;
      
            if (user) {
                console.log('This is the user: ', user.uid)
                currentUserId = user.uid;
                this.setState({currentUser : currentUserId})
              // User is signed in.
            } else {
              // No user is signed in.
              console.log("user is not logged in!")
              currentUserId = null;
            }
        });
       
        this.requestsRef = firebase.database().ref('REQUEST');

        this.requestsRef.on('value', (snapshot) => {
            let value = snapshot.val();
            this.setState({requests: value});
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

    onClick() {
        this.setState({
            clicked: false
        });
    }

    render() {
        if (!this.state.requests) return null; // or return whatever display u want. maybe a message that says no suggestions ??

        let requestKeys = Object.keys(this.state.requests);

        let mappedKeys = requestKeys.map((key) => {
            let requestObj = this.state.requests[key];
            requestObj.id = key;
            return requestObj;
        });


        
        let userRequestItems = mappedKeys.map((requestObj) => {
            if(requestObj.REQUESTER_ID == this.state.currentUser) {
                console.log('match: ' + requestObj.REQUESTER_ID + ' ' + this.state.currentUser)
                return <div className="col"><UserRequestCard request={requestObj} /></div> 
            }
        }); //else return null?


        // let userRequestItems = mappedKeys.map((requestObj) => {
        //     // if(requestObj = )
        //     console.log(requestObj)
        //     return <div className="col"><UserRequestCard request={requestObj} /></div>
        // });

        return (
            <div className='flex-grid'>
                {userRequestItems}
            </div>
        );
    }
}

// A single task
class UserRequestCard extends Component {


    constructor(props) {
        super(props);
        this.state = { clicked: true };
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


    render () {

        
        
        
        const Results = () => (
            <Tooltip placement="bottom" title={deletetask}>
                <Button onClick={this.onClick} ><CloseCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} /></Button>
            </Tooltip>
        )
     
        let request = this.props.request;


        if (this.state.clicked) {
            return (
             
                <div style={{ marginRight: '50%' }}>
                <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column' }}>
                    <h5 className="cardTitle">{request.REQUEST_TITLE}</h5>
                    <hr className="cardLineBreak"></hr>
                    <div className="cardDesDiv">
                    <p className="cardDescription">{request.REQUEST_DESCRIPTION} </p>
                        </div>
                    <p className="cardRequester">Requester's name</p>
                    <p className="cardRequested">Accepted on {request.REQUEST_DATE}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                        <div> {this.state.succeed ? null : <Results />}</div>
                        <Tooltip placement="bottom" title={edit}>
                    <Button a rel="noopener noreferrer" href="/">
                        <EditTwoTone style={{ fontSize: '40px' }} /> >
                    </Button> 
                </Tooltip>
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


export default MyRequestsCardView;


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





