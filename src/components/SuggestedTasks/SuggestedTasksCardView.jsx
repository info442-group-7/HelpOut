import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { PlusCircleTwoTone } from '@ant-design/icons';
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
            currentUser: null
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            this.setState({currentUser: user.uid})
            console.log(this.state.currentUser)
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

        // map a random set of 3? and then when u click 3 more you can just call this again. 
        let requestItems = mappedKeys.map((requestObj) => {
            // if(requestObj = )
            return <div className="col"><SuggestedTask task={requestObj} /></div>
        
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
            requests: []
        };
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

    // on click, do something about REQUEST.REQUEST_STATUS 
    onClick() {
        console.log('clikced done!!');
        this.setState({
            clicked: false
        });
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
                    <Button>
                        <PlusCircleTwoTone style={{ fontSize: '40px' }} />
                    </Button>
                </Tooltip>
            </div>
        )

        let task = this.props.task;

        


        // need to do something about user id / requester id. get it and cross reference their info from REQUESTER and USER
        return (
            <div style={{ marginRight: '50%' }}>
            <Card className="cardStyle" style={{ width: '350px', height: "350px", boxShadow: "0 8px 6px -6px #aaaaaa", lineHeight: "24px", display: 'flex', flexDirection: 'column'}}>
                <h5 className="cardTitle">{task.REQUEST_TITLE}</h5>
                <hr className="cardLineBreak"></hr>
                <div className="cardDesDiv">
                    <p className="cardDescription">{task.REQUEST_DESCRIPTION} </p>
                </div>
                <p className="cardRequester">Requester's name</p>
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





